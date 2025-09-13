"use client";
import { Button } from "@fluentui/react-components";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import LogoSvg from "@public/Logo.svg";

export default function Header() {
  return (
    <div className="bg-[#151515] py-2 w-11/12 border border-[#1a1a1a] rounded-lg flex items-center justify-between fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-4 md:px-8 lg:px-12">
      <div className="flex">
        <Image
          alt="Logo"
          width={52}
          height={52}
          src={LogoSvg.src}
          className="md:w-14 md:h-14"
        />
      </div>

      <div className="md:hidden">
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton>Menu </MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>
                <Link href="https://app.tgx.cat/" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://discord.gg/dFe6T9mJKP" target="_blank" rel="noopener noreferrer">
                  Discord
                </Link>
              </MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      <div className="hidden md:flex md:gap-2 lg:gap-2">
        <Link href="https://app.tgx.cat/" target="_blank" rel="noopener noreferrer">
          <Button appearance="primary">Download</Button>
        </Link>
        <Link href="https://discord.gg/dFe6T9mJKP" target="_blank" rel="noopener noreferrer">
          <Button appearance="">Discord</Button>
        </Link>
        <Button appearance="">FAQ</Button>
      </div>
    </div>
  );
}