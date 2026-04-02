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

            <div className="max-w-4xl mx-auto">

                <div className="group glass p-6 rounded-2xl border border-white/10 
                    hover:scale-[1.02] hover:border-blue-500/40 
                    transition duration-300 shadow-lg hover:shadow-blue-500/20">

                    {/* HEADER */}
                    <div className="flex items-center gap-4 mb-4">

                        <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition">
                            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                                <path d="M22 10L12 4 2 10l10 6 10-6z"/>
                                <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
                            </svg>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg">
                                Universitas Pamulang
                            </h4>
                            <p className="text-blue-400 text-sm">
                                Bachelor of Computer Science
                            </p>
                        </div>

                    </div>

                    {/* BODY */}
                    <div className="text-gray-400 text-sm space-y-1">
                        <p>Lulus: 2025</p>
                        <p>IPK: 3.23</p>
                    </div>

                    {/* FOOTER LINE */}
                    <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>

                </div>

            </div>
        </section>
    </div>
  )
}

