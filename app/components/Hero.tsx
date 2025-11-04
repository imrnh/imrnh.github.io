"use client";

import Link from "next/link";
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


        <div className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'var(--font-ibm)', fontSize: '17px', color: '#181818' }}>
            {/* <h3 style={{marginTop: '-20px', marginBottom: '10px', fontSize: '20px', fontWeight: '900', color: 'red', fontFamily: 'var(--font-mw)'}}>Why me?</h3> */}
            {/* <ul className="list-disc pl-5"> */}
                {/* <li> */}
                I have Practical and academic research experiense at distilling knowledge from foundation models to build <font color="orange"><i>smaller vision models</i></font>&nbsp;
                    that outperform foundation model with fraction of training infrastructure cost and fewer training data.  
                    {/* </li> */}
            {/* <li style={{marginTop: "8px" }}> */}
            &nbsp; Built vision and language pipeline for 2 AI startups with <font color="orange"><i>1000+ active users</i></font>, optimizing the system for minimal infernece bill.
            {/* </li> */}
                {/* <li style={{ marginTop: "8px" }}> */}
                    1 year of experiense as a freelance computer vision engineer. 
            {/* </li> */}
                {/* <li style={{ marginTop: "8px", marginBottom: '10px' }}> */}
                    Made (first-authored, academic research) a vision transformer interpretability method ( <font color="orange"><i>F2HF</i></font> ) &nbsp;that is currently the state-of-the-art, widely adopted by industry and accepted in IEEE conference. 
                    {/* </li> */}
            {/* </ul> */}
            With proven academic research and practical experience, I hold the ability to build and deploy ML based vision pipeline that are cost effective, and get the job done.

        </div>

       <Link href="/google">
            <button className="mt-9 px-9 py-4 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-800 transition-colors duration-300" style={{ cursor: 'pointer' }}>
                Contact Me
            </button></Link>

        <button className="mt-9 ml-5 px-9 py-4 bg-white-500 text-black font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300" style={{ cursor: 'pointer' }}>
            Download CV
        </button>

    </section>
);

export default Hero;
