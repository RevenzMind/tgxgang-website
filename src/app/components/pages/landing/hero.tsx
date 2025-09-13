import { Button } from "@fluentui/react-components";
import Image from "next/image";
import { ArrowDownloadRegular } from "@fluentui/react-icons";
import { Inter } from "next/font/google";
import ExecPreview from "@public/Executor.png";
import { MouseEvent } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HeroSection() {
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const element = e.currentTarget.querySelector('div');
        if (element) {
            requestAnimationFrame(() => {
                element.style.transform = `perspective(1000px) rotateX(${y * 10}deg) rotateY(${-x * 10}deg) translateZ(10px)`;
            });
        }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        const element = e.currentTarget.querySelector('div');
        if (element) {
            requestAnimationFrame(() => {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        }
    };

    return (
        <div className="flex h-screen pb-30 flex-col md:flex-row items-center justify-center gap-6 w-11/12 max-w-6xl mt-20">
            <div 
                className="w-full md:w-1/2 flex justify-center"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="transition-transform duration-200 ease-out [filter:drop-shadow(0_20px_30px_rgba(0,0,0,0.5))]">
                    <Image
                        src={ExecPreview}
                        quality={100}
                        alt="TGX Executor Preview"
                        width={450}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0">
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${inter.className}`} style={{ textShadow: '0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(255,255,255,0.4)' }}>
                    Descubre el potencial del exploiting con TGX
                </h1>
                
                <div className="mt-6 flex justify-center w-full lg:justify-start">
                    <div className="flex gap-3">
                        <Button
                            icon={<ArrowDownloadRegular fontSize={21}/>}
                            iconPosition="before"
                            appearance="primary"
                            size="large"
                            as="a"
                            href="https://app.tgx.cat/"
                            target="_blank"
                        >
                            Descargar TGX
                        </Button>
                        <Button
                            size="large"
                            appearance="secondary"
                            as="a"
                            href="https://discord.gg/dFe6T9mJKP"
                            target="_blank"
                        >
                            FAQ
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}