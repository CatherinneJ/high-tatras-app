import React, { useEffect, useState } from 'react'
import { navLinks } from "../constants";

const Navbar = () => {
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                 {/* Logo/image */}
                <img 
                src="/images/logoTatry.png"
                className="rounded-full w-12 h-10 mb-3 rounded-sm self-start text-gold" 
                href="#hero"
                />
                <nav className="desktop">
                     {/* Navbar links */}
                    <ul className="nav">
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>

                </nav>
                 {/* button for contact */}
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>CONTACT US</span>
                    </div>
                </a>

            </div>

        </header>
    )
}
export default Navbar
