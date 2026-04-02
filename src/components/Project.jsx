export default function Project() {
  return (
    <div>
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
    </div>
  )
}
