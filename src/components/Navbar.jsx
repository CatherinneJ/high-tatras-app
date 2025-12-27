import React, { useEffect, useState } from 'react'
import { navLinks } from "../constants/index.js";

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
                <img 
                src="/images/logo.png"
                className="logo" 
                href="#hero"
                />
                <nav className="desktop">
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
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact us</span>

                    </div>

                </a>

            </div>

        </header>
    )
}
export default Navbar
