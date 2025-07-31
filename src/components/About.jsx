export default function About() {
    return (
        <section id="about">
            <div className="flex flex-col items-center justify-center w-full h-screen font-cormorant text-gray-700">
                <div className="w-5/6 md:w-3/6 flex flex-col gap-y-8">
                    <h2 className="text-3xl italic px-4 py-2 border border-gray-400 rounded-xl w-fit">About</h2>
                    <p className="text-4xl">A web developer with four years of hands-on experience, consistently delivering innovative and user-centered solutions.</p>
                    <p className="text-4xl">Successfully collaborated with over 10 clients,<span className="text-gray-400">helping them elevate their business websites through tailored design solutions.</span></p>
                    <div className="flex items-center justify-between gap-x-5 p-5 bg-white border border-gray-400 font-montserrat font-medium rounded-xl">
                        <div className="flex flex-col">
                            <span className="text-blue-800 text-4xl italic">4+</span>
                            <span>Years Experience</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-blue-800 text-4xl italic">10+</span>
                            <span>Project Done</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-blue-800 text-4xl italic">5+</span>
                            <span>Happy Client</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}