import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header({ scrollToSection }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="font-montserrat fixed w-4/6 top-0 z-50 bg-[#f5f5f5]">
            <nav className="flex items-center p-5 text-lg font-semibold">
                <div className="flex items-center justify-between gap-x-20 w-full">
                    <a href="/" className="logo text-2xl font-bold">Rio.</a>

                    {/* Dekstop navigate */}
                    <div className="hidden md:flex items-center justify-between gap-x-10 text-gray-700">
                        <ul className="flex items-center gap-x-5 text-gray-700">
                            <li className="list-none">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/project">Projects</Link>
                            </li>
                        </ul>
                        <a href="mailto:hallorio@gmail.com" className="underline text-gray-700">hellorio@gmail.com</a>
                    </div>

                    {/* Mobile Navigate */}
                </div>
            </nav>
        </header>
    )
}

