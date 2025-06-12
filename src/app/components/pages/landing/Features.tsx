import { Inter } from "next/font/google";

import FeatureCard from "./FeatureCard";

const inter = Inter({ subsets: ["latin"] });

export default function FeaturesSection() {
  return (
    <div className="mt-40 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-10/12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"/>
        <h2 className={`text-2xl md:text-3xl font-semibold text-white/90 ${inter.className}`}>
          ¿Por qué TGX?
        </h2>
      </div>
      <div className="flex gap-6 flex-wrap justify-center mt-10">
        <FeatureCard 
          icon="💰"
          title="100% Gratis"
          description="Disfruta de scripting premium sin costo."
          color="green"
        />
        <FeatureCard 
          icon="⚙️"
          title="Instalación Fácil"
          description="Comienza en minutos con nuestro proceso de instalación sencillo."
          color="blue"
        />
        <FeatureCard 
          icon="🔄"
          title="Actualizaciones Frecuentes"
          description="Actualizamos constantemente TGX para asegurar que se mantenga actualizado y completamente funcional."
          color="purple"
        />
      </div>
    </div>
  );
}