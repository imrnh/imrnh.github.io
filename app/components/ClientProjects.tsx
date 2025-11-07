"use client";

import React from "react";
import Card from "./Card";
import './css/card.css';

const ClientProjects = () => {
    const projects = [
        {
            title: "Tennis Player analysis software",
            description: "From a tennis match, extract each serve type (flat / kick / slice), ball impact & bounce location, serve success (let/in/out) and few more serve parameters.",
            imageUrl: "https://raw.githubusercontent.com/imrnh/tennis_player_analysis/refs/heads/main/bin/presentation/project_demonstration.gif",
            href: 'https://github.com/imrnh/tennis_player_analysis'
        },
        {
            title: "Vilt - Virtual Try on App",
            description: "A virtual try-on application with backend and the serverless models.",
            imageUrl: "https://raw.githubusercontent.com/imrnh/vilt/refs/heads/main/bin/presentation/1.png",
            href: 'https://github.com/imrnh/vilt.git'
        },
        // {
        //     title: "Feature based Style Transfer App",
        //     description: "Style transfer between 2 images with Feature extraction - Not using Neural Network.",
        //     imageUrl: "https://raw.githubusercontent.com/imrnh/classical_style_transfer/main/images/output/generated_output.png",
        //     href: '/pj/st'
        // },
    ];

    return (
        <section id="projects" className="py-10">
            <center>
                <h2 className="text-4xl font-bold text-gray-900 mb-20" style={{ fontFamily: 'var(--font-mw)' }}>Client Projects</h2>
            </center>

            <div id="project_card" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ClientProjects;