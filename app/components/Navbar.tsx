"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
    const navItems = [
        { name: "01 home", href: "/" },
        { name: "02 papers", href: "/#papers" },
        { name: "03 projects", href: "/#projects" },
        { name: "04 writing", href: "/#posts" },
        { name: "05 open-source", href: "/#opensource" },
    ];

    return (
        <nav className="flex items-center justify-between w-full py-8">
            {/* Logo / Name */}
            <div className="flex items-center gap-3">
                <img
                    src="https://avatars.githubusercontent.com/u/57320222?s=400&u=7692262b8cb410ba3364c8d32b08e01ae7770dff&v=4"
                    alt="Imran Hossen"
                    className="w-10 h-10 rounded-full border-0 border-gray-300"
                />
                <span className="font-medium text-lg text-gray-900">
                    Imran Hossen
                </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        scroll={false} // prevents full-page reload / jump
                        className="font-mono text-sm text-gray-500 hover:text-gray-900 transition-colors"
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
                    className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <Github size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/in/imrnh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <Linkedin size={18} />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
