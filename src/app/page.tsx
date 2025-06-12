"use client";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import HeroSection from "./components/pages/landing/hero";
import FeaturesSection from "./components/pages/landing/Features";
import ShowcaseSection from "./components/pages/landing/showcase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const FluentProviderClass = "fui-FluentProvider fui-FluentProvider«R7l7» ___jdtuxv0_17k0bs4 f19n0e5 fxugw4r f1o700av fk6fouc fkhj508 figsok6 f1i3iumi";
    const element = document.querySelector(`.${FluentProviderClass.split(' ')[0]}`);
    if (element instanceof HTMLElement) {
      element.style.background = "none";
      element.style.backgroundColor = "transparent";
    }
  }, []);

  return (
   
      <div className={`min-h-screen flex flex-col items-center justify-center relative ${inter.className}`}>
        <div className="fixed -z-10 inset-0 h-full w-full bg-[#131313]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#1a1a1a,transparent)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
      </div>
    
  );
}