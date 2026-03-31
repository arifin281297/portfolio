import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ariImg from './../assets/ari.png';
import { 
  Briefcase, 
  Code,
  Code2,
  FileCode,
  Braces,
  Database,
  Globe,
  Server,
  Cpu,
  Network,
  Layers, 
  Mail, 
  Phone, 
  Copy,  
  MessageCircle,
} from "lucide-react";


export default function Landing() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [copied, setCopied] = useState(false);

    const email = "arifin281297@gmail.com";
    const phone = "081388189796";

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.log("Copy failed", err);
        }
    };

    const skills = [
    { name: "HTML", icon: Globe, color: "orange" },
    { name: "CSS", icon: Layers, color: "blue" },
    { name: "JavaScript", icon: Braces, color: "yellow" },
    { name: "JQuery", icon: Code2, color: "blue" },
    { name: "React.JS", icon: Cpu, color: "cyan" },
    { name: "Next.JS", icon: Server, color: "black" },
    { name: "Node.JS", icon: Server, color: "green" },
    { name: "PHP", icon: FileCode, color: "purple" },
    { name: "CodeIgniter", icon: Code2, color: "red" },
    { name: "Laravel", icon: Layers, color: "red" },
    { name: "Golang", icon: Cpu, color: "sky" },
    { name: "MySQL", icon: Database, color: "blue" },
    { name: "PostgreSQL", icon: Database, color: "indigo" },
    { name: "Networking", icon: Network, color: "gray" },
    ];

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
                {["about", "skills", "experience", "projects", "contact"].map((item) => (
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
                    Hire Me
                </span>
            </a>
        </section>

        <section id="about" className="py-12 px-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="glass text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">About Me</h3>
            <p className="text-gray-400 text-sm md:text-base">
                Saya adalah seorang profesional di bidang IT dengan pengalaman dalam pengembangan dan pemeliharaan sistem. Memiliki kemampuan dalam troubleshooting, networking, serta pengembangan aplikasi web. Saya terbiasa bekerja secara tim maupun individu dengan fokus pada hasil yang optimal dan efisien. Saat ini saya terus mengembangkan kemampuan di bidang full stack development.
            </p>
            </div>
        </section>

        <section
            id="skills"
            className="py-14 px-4"
            data-aos="fade-up"
            data-aos-delay="200"
            >
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto">

                {skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                    <div
                    key={i}
                    className="group glass p-4 rounded-xl border border-white/10 hover:scale-105 hover:border-blue-400/40 transition duration-300 shadow-md hover:shadow-blue-500/20 flex flex-col items-center gap-2"
                    >
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/10 transition">
                            <Icon className="text-blue-400 group-hover:scale-110 transition" size={22} />
                        </div>

                        <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                            {skill.name}
                        </span>
                    </div>
                );
                })}

            </div>
        </section>

        <section id="experience" className="py-12 px-4" data-aos="fade-up" data-aos-delay="250">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Experience
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* Experience 1 */}
                <div className="glass p-5 rounded-xl border border-white/10 hover:scale-[1.03] hover:border-blue-500/40 transition duration-300 shadow-lg hover:shadow-blue-500/20">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                            <Briefcase size={20} className="text-blue-400" />
                        </div>
                        <h4 className="font-bold text-lg">PT RDN Artha Grafika</h4>
                    </div>

                    <p className="text-blue-400 text-sm mb-2">
                        Full Stack Developer & IT Support
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Mengembangkan aplikasi web System Management Perusahaan dan menangani troubleshooting jaringan serta support user internal.
                    </p>

                    <span className="text-xs text-gray-500 mt-3 block">
                        2023 - Sekarang
                    </span>
                </div>

                {/* Experience 2 */}
                <div className="glass p-5 rounded-xl border border-white/10 hover:scale-[1.03] hover:border-purple-500/40 transition duration-300 shadow-lg hover:shadow-purple-500/20">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                            <Code size={20} className="text-purple-400" />
                        </div>
                        <h4 className="font-bold text-lg">PT Dipara Prima Sentosa</h4>
                    </div>

                    <p className="text-blue-400 text-sm mb-2">
                        Freelance Full Stack Developer
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Membangun website company profile menggunakan PHP, Bootstrap, jQuery, dan MySQL untuk berbagai client termasuk PT Dipara Prima Sentosa.
                    </p>

                    <span className="text-xs text-gray-500 mt-3 block">
                        2025 - 2026
                    </span>
                </div>

                {/* Experience 3 */}
                <div className="glass p-5 rounded-xl border border-white/10 hover:scale-[1.03] hover:border-pink-500/40 transition duration-300 shadow-lg hover:shadow-pink-500/20">
                    <div className="flex items-center gap-3 mb-3">
                        {/* <div className="p-2 rounded-lg bg-pink-500/20">
                            <Settings size={20} className="text-pink-400" />
                        </div> */}
                        <div className="p-2 rounded-lg bg-blue-500/20">
                            <Briefcase size={20} className="text-blue-200" />
                        </div>
                        <h4 className="font-bold text-lg">PT SoftOrb Technology Indonesia</h4>
                    </div>

                    <p className="text-blue-400 text-sm mb-2">
                        IT Support / Maintenance
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Maintenance sistem, troubleshooting jaringan, dan support operasional user internal perusahaan.
                    </p>

                    <span className="text-xs text-gray-500 mt-3 block">
                        2018 - 2023
                    </span>
                </div>

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
                <a
                href="https://assyukroniyah.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="card block p-4 hover:scale-105 transition duration-300 cursor-pointer"
                >
                <h4 className="font-bold text-blue-400 hover:underline">
                    Web SMPI Assyukroniyah
                </h4>
                <p className="text-gray-400 text-sm">
                    System Management Of School
                </p>
                </a>

                {/* Project 2 */}
                <a
                href="https://dipara.co.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="card block p-4 hover:scale-105 transition duration-300 cursor-pointer"
                >
                <h4 className="font-bold text-blue-400 hover:underline">
                    Web Dipara
                </h4>
                <p className="text-gray-400 text-sm">
                    Consulting And Coaching
                </p>
                </a>

            </div>
        </section>

        <section
            id="contact"
            className="py-16 px-4 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
            >
            <div className="glass max-w-xl mx-auto p-8 rounded-2xl border border-white/10">

                <h3 className="text-3xl font-bold mb-3">Contact Me</h3>
                <p className="text-gray-400 text-sm mb-6">
                Feel free to reach out for collaboration or project inquiry
                </p>

                {/* CONTACT INFO */}
                <div className="space-y-3 mb-6 text-sm text-gray-300">

                <div className="flex items-center justify-center gap-2">
                    <Mail size={16} className="text-blue-400" />
                    {email}
                    <button
                    onClick={copyEmail}
                    className="ml-2 text-xs px-2 py-1 bg-white/10 rounded hover:bg-white/20 transition"
                    >
                    <Copy size={14} />
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <Phone size={16} className="text-green-400" />
                    {phone}
                </div>

                </div>

                {copied && (
                <p className="text-green-400 text-xs mb-3">
                    Email copied to clipboard ✅
                </p>
                )}

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">

                <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-center gap-2 px-5 py-2 hover:bg-red-600 rounded-lg transition"
                >
                    <Mail size={16} /> Email
                </a>

                <a
                    href={`https://wa.me/6281388189796`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-5 py-2 hover:bg-green-600 rounded-lg transition"
                >
                    <MessageCircle size={16} /> WhatsApp
                </a>

                <a
                    href={`https://github.com/arifin281297`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-5 py-2 hover:bg-slate-800 rounded-lg transition"
                >
                    <Code size={16} /> Github
                </a>

                <a
                    href={`https://id.linkedin.com/in/ahmad-zainul-arifin-511166378?trk=people-guest_people_search-card`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-5 py-2 hover:bg-sky-700 rounded-lg transition"
                >
                    <Code2 size={16} /> Linkedin
                </a>

                </div>

            </div>
        </section>

        <footer className="text-center text-gray-500 text-sm py-6">
            © 2026 Ahmad Zainul Arifin
        </footer>
    </div>

  );
}