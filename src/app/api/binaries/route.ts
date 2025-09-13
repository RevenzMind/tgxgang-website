import prisma from '../../../utils/db';
import { formatJSONResponse } from '../../../utils/response';

export async function GET() {
  try {
    const binaries = await prisma.binaries.findMany();

    if (!binaries || binaries.length === 0) {
      return formatJSONResponse({});
    }

    return formatJSONResponse(binaries[0]);
  } catch (error: unknown) {
    return formatJSONResponse({ error: "Error fetching data", details: (error as Error).message }, 500);
  }
}
