import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function Footer() {
    return (
        <div className="flex flex-col gap-y-5 font-montserrat px-5 py-15">
            <div className="flex items-center justify-between">
                <a href="/" className="logo text-2xl font-bold">Rio.</a>
                <a href="mailto:hallorio@gmail.com" className="underline text-gray-700 font-semibold">hellorio@gmail.com</a>
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex item-center gap-x-5 left-5 bottom-5 font-semibold text-gray-500">
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">X</a></li>
                    <li><a href="">Facebook</a></li>
                </ul>
                <button onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    history.replaceState(null, '', '/');
                }} 
                className='font-semibold text-gray-500 cursor-pointer'>Back to Top <FontAwesomeIcon icon="fa-solid fa-arrow-up" className='text-gray-500' /></button>
            </div>
        </div>
    )
}