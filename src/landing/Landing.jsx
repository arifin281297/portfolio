import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ariImg from './../assets/ari.png'


export default function Landing() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const cursor = document.getElementById("cursor");

        const moveCursor = (e) => {
            if (cursor) {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            }
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");

            let current = "about";

            sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll(); // biar langsung aktif saat load

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

  return (
   
    <div className="text-white font-sans">

        
        <div className="cursor-glow" id="cursor"></div>

        <div className="bg-blur">
            <div className="blob bg-purple-500 top-[-100px] left-[-100px]"></div>
            <div className="blob bg-blue-500 bottom-[-100px] right-[-100px]"></div>
            <div className="blob bg-pink-500 top-[40%] left-[40%]"></div>
        </div>

        <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">

            {/* Logo */}
            <h1 className="text-lg md:text-xl font-bold">MyPortfolio</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-sm">
                {["about", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                    <a
                    href={`#${item}`}
                    className={`transition ${
                        activeSection === item ? "text-blue-400 font-bold" : "text-white"
                    }`}
                    >
                    {item.toUpperCase()}
                    </a>
                </li>
                ))}
            </ul>

            {/* Animated Hamburger */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "rotate-45 top-5" : "top-3"
                }`}
                />
                <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "top-5"
                }`}
                />
                <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? "-rotate-45 top-5" : "top-7"
                }`}
                />
            </button>
        </nav>

        {/* BACKDROP BLUR */}
        <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        />

        {/* MOBILE SLIDE MENU */}
        <div
        className={`fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        >
            {/* CLOSE BUTTON */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white text-3xl"
            >
                <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>

            <ul className="flex flex-col items-center justify-center h-screen gap-8 text-lg">
                {["about", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                    <a
                    href={`#${item}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);

                        document.getElementById(item)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }}
                    className={`transition ${
                        activeSection === item ? "text-blue-400" : "text-white"
                    }`}
                    >
                    {item.toUpperCase()}
                    </a>
                </li>
                ))}
            </ul>
        </div>

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
            <p className="text-gray-400 text-sm md:text-lg mb-6">Full Stack Developer</p>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-blue-500/80 hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/30">
            Hire Me
            </a>
        </section>

        <section id="about" className="py-12 px-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="glass text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">About Me</h3>
            <p className="text-gray-400 text-sm md:text-base">
                Full Stack Developer dengan pengalaman 3 tahun di IT Support, Web Dev, dan Networking.
            </p>
            </div>
        </section>

        <section id="skills" className="py-12 px-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="glass">HTML</div>
            <div className="glass">CSS</div>
            <div className="glass">JavaScript</div>
            <div className="glass">JQuery</div>
            <div className="glass">React.JS</div>
            <div className="glass">Next.JS</div>
            <div className="glass">Node.JS</div>
            <div className="glass">PHP</div>
            <div className="glass">CodeIgniter</div>
            <div className="glass">Laravel</div>
            <div className="glass">Golang</div>
            <div className="glass">MySQL</div>
            <div className="glass">PostgreSQL</div>
            <div className="glass">Networking</div>
            </div>
        </section>

        <section
            id="projects"
            className="py-12 px-4"
            data-aos="fade-up"
            data-aos-delay="300"
            >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Projects
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">

                {/* Project 1 */}
                <div className="card">
                    <a
                    href="https://assyukroniyah.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    >
                        <h4 className="font-bold">
                            Web SMPI Assyukroniyah
                        </h4>
                        <p className="text-gray-400 text-sm">
                            System Management Of School
                        </p>
                    </a>
                </div>

                {/* Project 2 */}
                <div className="card">
                    <a
                    href="https://dipara.co.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    >
                        <h4 className="font-bold">
                            
                            Web Dipara
                            
                        </h4>
                        <p className="text-gray-400 text-sm">
                            Consulting And Coaching
                        </p>
                    </a>
                </div>

            </div>
        </section>

        <section id="contact" className="py-12 px-4 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="glass max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">arifin281297@gmail.com</p>
            <p className="text-gray-400 text-sm mb-4">081388189796</p>
            <a href="mailto:arifin281297@gmail.com" className="px-5 py-2 bg-blue-500 rounded-lg">Email Me</a>
            </div>
        </section>

        <footer className="text-center text-gray-500 text-sm py-6">
            © 2026 Zainul Arifin
        </footer>
    </div>

  );
}