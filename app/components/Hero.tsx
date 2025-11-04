"use client";

import React from "react";

const Hero = () => (
    <section className="py-24 md:py-32">
        <p className="font-mono text-lg text-red-500 mb-4">
            Hello, I'm Imran Hossen
        </p>
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug" >
            I build streamlined{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent underline underline-offset-[10px] decoration-2 decoration-red-500">
                Computer Vision Pipelines
            </span>{" "}
            for{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent underline underline-offset-[10px] decoration-2 decoration-red-500">
                early-stage startups
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent underline underline-offset-[10px] decoration-2 decoration-red-500">
                cut compute costs
            </span>
            .
        </h1>

        <br></br>


        <p className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'var(--font-ibm)', fontSize: '17px', color: '#181818' }}>
            Foundation vision models are made to adapt to a diverse set of tasks and are expensive for fine-tuning and inference. I've practical experiense and academic research experiense at distilling knowledge from foundation models to build smaller vision models
            that outperform foundation model with fraction of training infrastructure cost and fewer training data. 
            <div style={{ width: '1px', height: '15px' }}></div>2 of my AI startups had 1000+ active users combined and as a solopreneur, I was responsible for design to developement to marketing of these products and optimizing the system to pay minimal cloud bill. 
            I also have 1 year of experiense as a freelance computer vision engineer, building efficient data intensive systems for production. 
            <div style={{ width: '1px', height: '15px' }}></div>I've developed (first-authored, academic research) a vision transformer interpretability method called <font color="orange"><b><i>F2HF</i></b></font> &nbsp;that is currently the state-of-the-art, widely adopted by industry and accepted in IEEE conference.
            <div style={{ width: '1px', height: '15px' }}></div>Combining these practical exprience with my academic research experiense, I hold the ability to build and deploy ML based vision pipeline that are cost effective, and get the job done.
        </p>

        <button className="mt-9 px-9 py-4 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-800 transition-colors duration-300" style={{cursor: 'pointer'}}>
            Contact Me
        </button>

        <button className="mt-9 ml-5 px-9 py-4 bg-white-500 text-black font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300" style={{ cursor: 'pointer' }}>
            Download CV
        </button>

    </section>
);

export default Hero;
