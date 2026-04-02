import { useState } from "react"; 
import {  
  Code,
  Code2,
  Mail, 
  Phone, 
  Copy,  
  MessageCircle,
} from "lucide-react";

export default function Contact() {
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

  return (
    <div>
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
    </div>
  )
}
