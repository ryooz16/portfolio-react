import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header({ scrollToSection }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Tambahkan efek scroll lock saat menu terbuka (opsional)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300)
    }

    return (
        <header className={`font-montserrat fixed top-0 left-0 w-full z-50 bg-[#f5f5f5]`}>
        <div className={`w-full md:w-4/6 mx-auto border-l-2 border-r-2 border-[#eaeaea] ${isScrolled && !isOpen ? "shadow" : ""}`}>
            <nav className="flex items-center justify-between px-5 py-4 text-lg font-semibold md:px-10">
            <a href="/" className="text-2xl font-bold text-gray-800 [transform:translateZ(0)]">Rio.</a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center justify-between gap-x-10 text-gray-700">
                <ul className="flex items-center gap-x-5 text-gray-700">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Projects</Link></li>
                </ul>
                <a href="mailto:hallorio@gmail.com" className="underline text-gray-700">hellorio@gmail.com</a>
            </div>

            {/* Mobile menu icon */}
            <div className="md:hidden [transform:translateZ(0)]">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                {isOpen ? <X size={28} onClick={closeMenu} /> : <Menu size={28} />}
                </button>
            </div>
            </nav>
        </div>

        {/* Mobile dropdown menu */}
        {(isOpen || isClosing) && (
            <div className={`md:hidden absolute top-full left-0 w-full z-40 bg-[#f5f5f5] shadow-md ${isClosing ? 'animate-slide-top' : 'animate-slide-down'}`}>
            <div className="w-full md:w-4/6 mx-auto">
                <ul className="flex flex-col items-start p-5 space-y-5 text-gray-800 text-lg">
                <li><Link to="/about" onClick={closeMenu} className="font-medium">About</Link></li>
                <li><Link to="/project" onClick={closeMenu} className="font-medium">Projects</Link></li>
                <li><a href="mailto:hallorio@gmail.com" onClick={closeMenu} className="underline font-medium">hellorio@gmail.com</a></li>
                </ul>
            </div>
            </div>
        )}
        </header>

    );
}
