interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    color?: string;
}

export default function FeatureCard({ icon, title, description, color = "green" }: FeatureCardProps) {
    return (
        <div className="mt-8 flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center w-80 h-45 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-lg">
                <div className={`w-8 h-8 bg-${color}-500/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 hover:rotate-12`}>
                    <span className="text-lg">{icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 transition-colors duration-300">{title}</h3>
                <p className="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-300">{description}</p>
            </div>
        </div>
    );
}