const Banner = () => {
    return (
        <section className="py-0 bg-background">
            <div className="w-full bg-[#008882] py-4 overflow-hidden">
                <div className="animate-scroll whitespace-nowrap">
                    <div className="inline-flex items-center gap-8 text-white">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-2xl font-bold font-body tracking-wide">
                                SELECT FROM 100+ LAWYERS
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-2xl font-bold font-body tracking-wide">
                                TRUSTED BY 100+ USERS
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-2xl font-bold font-body tracking-wide">
                                POWERED BY AI
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-2xl font-bold font-body tracking-wide">
                                MADE FOR INDIANS
                            </span>
                        </div>
                        {/* Duplicate content for seamless loop */}
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-2xl font-bold font-body tracking-wide">
                                SELECT FROM 100+ LAWYERS
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-2xl font-bold font-body tracking-wide">
                                TRUSTED BY 100+ USERS
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-2xl font-bold font-body tracking-wide">
                                POWERED BY AI
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-2xl font-bold font-body tracking-wide">
                                MADE FOR INDIANS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
