"use client";

import React from "react";
import Card from "./Card";

const ClientProjects = () => {
    const projects = [
        {
            title: "E-Commerce Platform for StudioX",
            description: "A bespoke Shopify Plus integration for a luxury brand.",
            imageUrl: "https://placehold.co/600x400/2a2a4a/9090f0?text=Project+1",
        },
        {
            title: "SaaS Dashboard for FinTech Co.",
            description: "Data visualization and user management dashboard.",
            imageUrl: "https://placehold.co/600x400/4a2a2a/f09090?text=Project+2",
        },
        {
            title: "Marketing Site for non-profit",
            description: "Accessible and fast website built with Astro and Sanity.",
            imageUrl: "https://placehold.co/600x400/2a4a2a/90f090?text=Project+3",
        },
    ];

    return (
        <section id="projects" className="py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Card key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ClientProjects;
