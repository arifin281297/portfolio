export default function Education () {
  return (
    <div>
      <section 
            id="education" 
            className="py-14 px-4" 
            data-aos="fade-up" 
            data-aos-delay="280"
        >
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                Education
            </h3>

            <div className="relative max-w-4xl mx-auto">

                {/* LINE */}
                <div className="absolute right-4 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-white/10"></div>

                {/* ITEM 1 */}
                <div className="mb-10 flex flex-col md:flex-row md:justify-between items-start md:items-center relative">

                    {/* DOT */}
                    <div className="absolute right-4 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 top-6"></div>

                    {/* CARD */}
                    <div className="mr-10 md:mr-0 w-full md:w-5/12 group glass p-6 rounded-2xl border border-white/10 
                        hover:scale-[1.02] hover:border-blue-500/40 
                        transition duration-300 shadow-lg hover:shadow-blue-500/20">

                        <div className="flex items-start gap-4 mb-4">

                            <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition shrink-0">
                                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                                    <path d="M22 10L12 4 2 10l10 6 10-6"/>
                                    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <h4 className="font-bold text-lg break-words">
                                    Universitas Pamulang
                                </h4>
                                <p className="text-blue-400 text-sm break-words">
                                    Bachelor of Computer Science
                                </p>
                            </div>

                        </div>

                        <div className="text-gray-400 text-sm space-y-1">
                            <p>Since: 2018 - 2025</p>
                            <p>IPK: 3.23</p>
                        </div>

                        <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 
                            group-hover:w-full transition-all duration-500"></div>

                    </div>
                </div>

                {/* ITEM 2 */}
                <div className="mb-10 flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center relative">

                    <div className="absolute right-4 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 top-6"></div>

                    <div className="mr-10 md:mr-0 w-full md:w-5/12 group glass p-6 rounded-2xl border border-white/10 
                        hover:scale-[1.02] hover:border-blue-500/40 
                        transition duration-300 shadow-lg hover:shadow-blue-500/20">

                        <div className="flex items-start gap-4 mb-4">

                            <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition shrink-0">
                                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                                    <path d="M22 10L12 4 2 10l10 6 10-6"/>
                                    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <h4 className="font-bold text-lg break-words">
                                    SMK Satria
                                </h4>
                                <p className="text-blue-400 text-sm">
                                    Administrasi Perkantoran
                                </p>
                            </div>

                        </div>

                        <div className="text-gray-400 text-sm space-y-1">
                            <p>Since: 2014 - 2016</p>
                        </div>

                        <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-red-500 to-yellow-500 
                            group-hover:w-full transition-all duration-500"></div>

                    </div>
                </div>

                {/* ITEM 3 */}
                <div className="mb-10 flex flex-col md:flex-row md:justify-between items-start md:items-center relative">

                    <div className="absolute right-4 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50 top-6"></div>

                    <div className="mr-10 md:mr-0 w-full md:w-5/12 group glass p-6 rounded-2xl border border-white/10 
                        hover:scale-[1.02] hover:border-blue-500/40 
                        transition duration-300 shadow-lg hover:shadow-blue-500/20">

                        <div className="flex items-start gap-4 mb-4">

                            <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition shrink-0">
                                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                                    <path d="M22 10L12 4 2 10l10 6 10-6"/>
                                    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <h4 className="font-bold text-lg break-words">
                                    MTS Al-Falah
                                </h4>
                                <p className="text-blue-400 text-sm">-</p>
                            </div>

                        </div>

                        <div className="text-gray-400 text-sm space-y-1">
                            <p>Since: 2010 - 2013</p>
                        </div>

                        <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-indigo-500 
                            group-hover:w-full transition-all duration-500"></div>

                    </div>
                </div>

                {/* ITEM 4 */}
                <div className="mb-10 flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center relative">

                    <div className="absolute right-4 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50 top-6"></div>

                    <div className="mr-10 md:mr-0 w-full md:w-5/12 group glass p-6 rounded-2xl border border-white/10 
                        hover:scale-[1.02] hover:border-blue-500/40 
                        transition duration-300 shadow-lg hover:shadow-blue-500/20">

                        <div className="flex items-start gap-4 mb-4">

                            <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition shrink-0">
                                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                                    <path d="M22 10L12 4 2 10l10 6 10-6"/>
                                    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <h4 className="font-bold text-lg break-words">
                                    SDI Al-Falah
                                </h4>
                                <p className="text-blue-400 text-sm">-</p>
                            </div>

                        </div>

                        <div className="text-gray-400 text-sm space-y-1">
                            <p>Since: 2004 - 2009</p>
                        </div>

                        <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-stone-400 
                            group-hover:w-full transition-all duration-500"></div>

                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

