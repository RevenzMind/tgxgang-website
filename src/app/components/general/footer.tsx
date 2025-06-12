"use client";
import { Button } from "@fluentui/react-components";
import Image from "next/image";
import LogoSvg from "@public/Logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-40 w-full">
      <div className="w-10/12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto" />
      <div className="bg-[#151515] py-6 w-11/12 border border-[#1a1a1a] rounded-lg flex flex-col md:flex-row items-center justify-between mx-auto mt-10 mb-10 px-4 md:px-8 lg:px-12 gap-4">
        <div className="flex items-center gap-3">
          <Image alt="Logo" width={40} height={40} src={LogoSvg.src} />
          <span className="text-white/70 text-sm">
            © 2024 TGX. Todos los derechos reservados.
          </span>
        </div>

        <div className="flex gap-3">
          <Button appearance="secondary" target="_blank">
            <Link
              href="https://discord.tgxgang.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </Button>
          <Button appearance="secondary">FAQ</Button>
        </div>
      </div>
    </div>
  );
}
