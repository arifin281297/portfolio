import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Project from "../components/Project";
import Contact from "../components/Contact";
import About from "../components/About";
import Home from "../components/Home";


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
                {["about", "skills", "experience","education", "projects", "contact"].map((item) => (
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
                {["about", "skills", "experience","education", "projects", "contact"].map((item) => (
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

        <Home/>

        <About/>

        <Skills/>

        <Experience/>

        <Education/>

        <Project/>

        <Contact/>

        <footer className="text-center text-gray-500 text-sm py-6">
            © 2026 Ahmad Zainul Arifin
        </footer>
    </div>

  );
}