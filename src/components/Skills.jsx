import { 
  Code2,
  FileCode,
  Braces,
  Database,
  Globe,
  Server,
  Cpu,
  Network,
  Layers,
} from "lucide-react";

export default function Skills(){
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


    return (
        <div>
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
        </div>
    )
}

