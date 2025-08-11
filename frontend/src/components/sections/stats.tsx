import { Circle } from "lucide-react";

const Stats = () => {
    const stats = [
        { 
            content: "Image", 
            bgColor: "bg-[#4EC6C1]", 
            textColor: "text-white",
            type: "image" 
        },
        { 
            content: "Image", 
            bgColor: "bg-[#DBAD00]", 
            textColor: "text-white",
            type: "image" 
        },
        { 
            content: "Image", 
            bgColor: "bg-[#4EC6C1]", 
            textColor: "text-white",
            type: "image" 
        },
        { 
            content: "200+", 
            bgColor: "bg-[#F5F5F5]", 
            textColor: "text-black",
            type: "stat",
            subtitle: "Lawyers"
        },
    ];

    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className={`${stat.bgColor} p-6 rounded-2xl text-center min-h-[180px] flex flex-col justify-center items-center relative`}>
                            {stat.type === "stat" ? (
                                <div className="space-y-2 w-full">
                                    <div className={`text-4xl font-bold ${stat.textColor} font-body`}>
                                        {stat.content}
                                    </div>
                                    <div className={`text-xs font-medium ${stat.textColor} opacity-70 font-body`}>
                                        {stat.subtitle}
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                        <button className="bg-[#009E98] hover:bg-[#007B77] text-white px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1">
                                            Consult
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className={`text-sm font-medium ${stat.textColor} font-body`}>
                                    {stat.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
