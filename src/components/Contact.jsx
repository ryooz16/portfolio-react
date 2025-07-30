export default function Contact() {
    return (
        <section id="contact" className="my-52">
            <div className="flex justify-center items-center w-full h-96 px-5">
                <div className="bg-white flex flex-col justify-center items-center w-full py-10 gap-y-5 rounded-xl">
                    <p className="text-4xl text-center w-3/5 text-gray-700 font-cormorant border border-gray-400 rounded-xl px-5 py-3">Ready to get started? Let's discuss your project and make it a reality!</p>
                    <div className="flex items-center justify-evenly w-full">
                        <img src="./src/assets/images/profile-picture.svg" alt="image" className="w-[110px] aspect-square rotate-[.25rad] border-2 border-white shadow-xl rounded-xl" />
                        <a href="mailto:helorio@gmail.com" className="px-5 py-3 bg-blue-800 rounded-lg text-white shadow-xl hover:opacity-80 transition duration-150">Talk with me</a>
                        <img src="./src/assets/images/profile-picture.svg" alt="image" className="w-[110px] aspect-square rotate-[-.25rad] border-2 border-white shadow-xl rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}