import Image from "next/image";

interface Video {
    url: string;
    thumbnail: string;
    title: string;
    duration?: string;
}

interface VideoCardProps {
    video: Video;
    delay?: number;
}

export default function VideoCard({ video, delay = 0 }: VideoCardProps) {
    const handleClick = () => {
        window.open(video.url, '_blank');
    };

    return (
        <div 
            className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-[#1a1a1a]/50 backdrop-blur-sm"
            onClick={handleClick}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-300" />
                
                {video.duration && (
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-white text-xs font-semibold">
                        {video.duration}
                    </div>
                )}
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <svg className="w-6 h-6 text-white ml-1 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-4 space-y-2">
                <h3 className="text-white text-start font-semibold text-sm md:text-base line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                    {video.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span>Showcase oficial</span>
                </div>
            </div>
            
            <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-purple-500/30 rounded-2xl transition-all duration-300"></div>
        </div>
    );
}