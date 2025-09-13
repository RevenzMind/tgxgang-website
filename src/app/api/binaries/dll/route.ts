import prisma from '../../../../utils/db';
import { formatJSONResponse } from '../../../../utils/response';

export async function GET() {
  try {
    // Intentamos obtener binaries con su apidll relacionada
    const binary = await prisma.binaries.findFirst({
      include: { apidll: { select: { xeno: true, velocity: true } } }
    });

    if (binary?.apidll) {
      return formatJSONResponse({ xeno: binary.apidll.xeno, velocity: binary.apidll.velocity });
    }

    // Fallback: tomar primer apidll directo si no hay relación
    const dll = await prisma.apidll.findFirst({ select: { xeno: true, velocity: true } });
    return formatJSONResponse({ xeno: dll?.xeno ?? null, velocity: dll?.velocity ?? null });
  } catch (error: unknown) {
    return formatJSONResponse({ error: 'Error fetching data', details: (error as Error).message }, 500);
  }
}
