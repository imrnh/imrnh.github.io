"use client";

import React from "react";

const Footer = () => (
    <footer className="text-center text-gray-500" style={{height: '50px'}}>
        <p className="font-mono text-sm">
            &copy; {new Date().getFullYear()} Imran Hossen. All rights reserved.
        </p>
        {/* <p className="text-xs mt-2">
            Built with{" "}
            <a href="https://nextjs.org" className="hover:text-gray-900">
                Next.js
            </a>{" "}
            &{" "}
            <a href="https://tailwindcss.com" className="hover:text-gray-900">
                Tailwind CSS
            </a>
            .
        </p> */}
    </footer>
);

export default Footer;
