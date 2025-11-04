"use client";

import React from "react";
import Card from "./Card";

const FeaturedPosts = () => {
    const posts = [
        {
            title: "Media Queries in Times of @container",
            description: "Exploring the new landscape of responsive design.",
            imageUrl: "https://placehold.co/600x400/1a2a3a/70c0f0?text=Post+1",
        },
        {
            title: "Container Queries in Web Components",
            description: "Encapsulating styles and logic effectively.",
            imageUrl: "https://placehold.co/600x400/1a3a2a/70f0c0?text=Post+2",
        },
        {
            title: "Space Jam: A New Legacy Website",
            description: "A deep dive into the tech stack of a modern promo site.",
            imageUrl: "https://placehold.co/600x400/3a1a2a/f070c0?text=Post+3",
        },
        {
            title: "The Return of the 90s Web",
            description: "Why brutalism and nostalgia are back in design.",
            imageUrl: "https://placehold.co/600x400/3a3a1a/f0f070?text=Post+4",
        },
    ];

    return (
        <section id="posts" className="py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <Card key={post.title} {...post} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedPosts;
