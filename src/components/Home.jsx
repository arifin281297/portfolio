import ariImg from '../assets/ari.png';

export default function Home () {  
  return (
    <div>
        <section className="text-center py-20 px-4" data-aos="fade-up">
            <div className="flex justify-center mb-6">
            <div className="relative group">
                <img src={ariImg} alt="profile" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white/10 shadow-xl"/>
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
            </div>
            </div>

            <h2 className="text-3xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hi, I'm Ahmad Zainul Arifin
            </h2>
            <p className="text-gray-400 text-sm md:text-lg mb-6">Full Stack Developer & IT Support</p>
            <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-7 py-3 rounded-xl 
                bg-gradient-to-r from-blue-500 to-purple-500 
                text-white font-semibold
                shadow-lg shadow-blue-500/30
                hover:shadow-purple-500/40
                hover:scale-105
                active:scale-95
                transition-all duration-300
                overflow-hidden group"
                >
                {/* glow effect */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                {/* animated shine */}
                <span className="absolute -left-10 top-0 w-8 h-full bg-white/20 skew-x-12 group-hover:translate-x-[250%] transition duration-700"></span>

                <span className="relative z-10">
                    Contact Me
                </span>
            </a>
        </section>
    </div>
  )
}

