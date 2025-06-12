import { Inter } from "next/font/google";
import VideoCard from "./videoCard";

const inter = Inter({ subsets: ["latin"] });


export default function ShowcaseSection() {
  const showcaseVideos = [
    {
      title: "Roblox Executor PC🚀( TGX V6)",
      thumbnail: "https://i.ytimg.com/vi/eoKdC-1oKGU/sddefault.jpg",
      url: "https://www.youtube.com/watch?v=eoKdC-1oKGU&t=28s&pp=ygUKVEdYIHJvYmxveA%3D%3D",
      duration: "3:05"
    },
    {
      title: "¡Nueva Actualización de TGX! 🔥 Ahora con 99% UNC", 
      thumbnail: "https://i.ytimg.com/vi/ebmoVsoJt68/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=ebmoVsoJt68&pp=ygUKVEdYIHJvYmxveA%3D%3D",
      duration: "2:37"
    },
    {
      title: "Roblox Executor PC🚀( TGX V6) SIN KEY +SCRIPT ARSENAL",
      thumbnail: "https://i.ytimg.com/vi/uufHbsrDk8s/maxresdefault.jpg", 
      url: "https://www.youtube.com/watch?v=uufHbsrDk8s&t=10s&pp=ygULVEdYIGV4cGxvaXQ%3D",
      duration: "2:55"
    }
  ];

  return (
    <div className="mt-32 text-center w-full max-w-7xl px-4">
      <div className="flex flex-col items-center gap-8 mb-16">
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white to-transparent"/>
        <div className="space-y-4">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white ${inter.className}`}>
            Nuestros Showcases
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ve TGX en acción con estos increíbles showcases de nuestra comunidad y descubre todo su potencial.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {showcaseVideos.map((video, index) => (
          <VideoCard 
            key={index}
            video={video}
            delay={index * 150}
          />
        ))}
      </div>
    </div>
  );
}