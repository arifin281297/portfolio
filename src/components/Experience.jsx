export default function Experience() {
  return (
    <div>
      <section 
            id="experience" 
            className="py-16 px-4" 
            data-aos="fade-up"
        >
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Experience
            </h3>

            <div className="relative max-w-4xl mx-auto">

                {/* LINE */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-white/10"></div>

                {/* ITEM 1 */}
                <div className="mb-10 flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
                    
                    {/* DOT */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>

                    {/* CARD */}
                    <div className="ml-10 md:ml-0 md:w-5/12 glass p-5 rounded-xl border border-white/10 
                        hover:scale-105 transition shadow-lg hover:shadow-blue-500/20">
                        
                        <h4 className="font-bold">PT RDN Artha Grafika</h4>
                        <p className="text-blue-400 text-sm">Full Stack Developer & IT Support</p>
                        <p className="text-gray-400 text-sm">
                            Mengembangkan aplikasi web System Management Perusahaan dan menangani troubleshooting jaringan serta support user internal.
                        </p>
                        <span className="text-xs text-gray-500">2023 - Sekarang</span>
                    </div>
                </div>

                {/* ITEM 2 */}
                <div className="mb-10 flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center w-full">
                    
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

                    <div className="ml-10 md:ml-0 md:w-5/12 glass p-5 rounded-xl border border-white/10 
                        hover:scale-105 transition shadow-lg hover:shadow-purple-500/20">
                        
                        <h4 className="font-bold">PT Dipara Prima Sentosa</h4>
                        <p className="text-blue-400 text-sm">Freelance Full Stack Developer</p>
                        <p className="text-gray-400 text-sm">
                            Membangun website company profile menggunakan PHP, Bootstrap, jQuery, dan MySQL untuk berbagai client termasuk PT Dipara Prima Sentosa.
                        </p>
                        <span className="text-xs text-gray-500">2025 - 2026</span>
                    </div>
                </div>

                {/* ITEM 3 */}
                <div className="mb-10 flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
                    
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>

                    <div className="ml-10 md:ml-0 md:w-5/12 glass p-5 rounded-xl border border-white/10 
                        hover:scale-105 transition shadow-lg hover:shadow-green-500/20">
                        
                        <h4 className="font-bold">PT SoftOrb Technology Indonesia</h4>
                        <p className="text-blue-400 text-sm">IT Support / Maintenance Support</p>
                        <p className="text-gray-400 text-sm">
                            Maintenance sistem, troubleshooting jaringan, dan support operasional user internal perusahaan.
                        </p>
                        <span className="text-xs text-gray-500">2018 - 2023</span>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

