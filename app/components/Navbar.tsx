"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
    const navItems = [
        { name: "01 home", href: "/" },
        { name: "02 projects", href: "/#projects" },
        { name: "03 research", href: "/#papers" },
        { name: "04 blog", href: "/blogs" },
        { name: "05 open-source", href: "/#opensource" },
    ];

    return (
        <nav className="flex items-center justify-between w-full py-8">
            {/* Logo / Name */}
            <div className="flex items-center gap-3">
                <img
                    src="https://avatars.githubusercontent.com/u/57320222?s=400&u=8ef7930dfe204b945953f92e032622c61974898f&v=4"
                    alt="Imran Hossen"
                    className="w-10 h-10 rounded-full border-0 border-gray-300"
                />
                <span className="font-medium text-lg text-gray-900" style={{ fontFamily: 'var(--font-inter)'}}>
                    Imran Hossen
                </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        scroll={false} // prevents full-page reload / jump
                        className="font-mono text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-2">
                <a
                    href="https://github.com/imrnh"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 text-black hover:text-gray-900 transition-colors"
                >
                    <Github size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/in/imrnh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 text-blue-900 hover:text-gray-900 transition-colors"
                >
                    <Linkedin size={18} />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
