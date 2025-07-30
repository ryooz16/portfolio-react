import ProjectSection from "./ProjectSection"

export default function Project() {
    return (
        <section id="projects">
            <div className="flex flex-col justify-center font-cormorant px-5 gap-y-8 text-gray-700">
                <h2 className="text-3xl italic px-4 py-2 border border-gray-400 rounded-xl w-fit">Projects</h2>
                <p className="text-4xl">Shows a project that I have made previously</p>

                <ProjectSection />
            </div>
        </section>
    )
}