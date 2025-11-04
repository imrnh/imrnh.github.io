"use client";

import React from "react";

const Card = ({
    title,
    description,
    imageUrl,
    href,
}: {
    title: string;
    description: string;
    imageUrl: string;
    href?: string;
}) => (
    <a
        href={href || "#"}
        className="group block rounded-lg overflow-hidden bg-transparent hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200"
    >
        <div className="relative w-full h-40">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                onError={(e) => {
                    e.currentTarget.src =
                        "https://placehold.co/600x400/f0f0f0/999999?text=Image";
                    e.currentTarget.onerror = null;
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{description}</p>
        </div>
    </a>
);

export default Card;
