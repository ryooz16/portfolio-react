import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Hero() {
    return (
        <section id="hero">
            <div className="relative flex flex-col justify-center items-center w-full h-screen font-montserrat">
                <div className="w-3/6 flex flex-col gap-y-10">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-x-3">
                            <h1 className="text-7xl font-cormorant">Hi, I'm Rio </h1>
                            <img src="/assets/images/profile-picture.svg" alt="image" className="w-[90px] aspect-square rotate-[.25rad] border-2 border-white shadow-xl rounded-xl" />
                        </div>
                        <h1 className="text-7xl font-cormorant"> Permana <span className="text-blue-800">a Web Developer</span></h1>
                    </div>
                    <p className="text-gray-700 font-medium">A web developer with ten years of hands-on experience, consistently delivering innovative and user-centered solutions</p>
                    <div className="flex items-center gap-x-5 font-medium">
                        <a href="mailto:helorio@gmail.com" className="px-5 py-3 bg-blue-800 rounded-lg text-white shadow-xl hover:opacity-80 transition duration-150">Talk with me</a>
                        <a href="" className="px-5 py-3 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-150">Download my cv</a>
                    </div>
                </div>
                <ul className="absolute flex item-center gap-x-5 left-5 bottom-5 font-semibold text-gray-500">
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">X</a></li>
                    <li><a href="">Facebook</a></li>
                </ul>
                <a href="#about" className='absolute right-5 bottom-5 font-semibold text-gray-500'>Discover <FontAwesomeIcon icon="fa-solid fa-arrow-down" className='text-gray-500' /></a>
            </div>
        </section>
    )
}