"use client";

import Link from "next/link";
import React from "react";

const Hero = () => (
    
    <section
        className="py-10 md:pt-32 md:pb-20"
        style={{ width: '100%', height: 'calc(100vh - 60px - 100px)' }} 
    >
        {/* assuming 100px is the navbar size */}


        <br></br>
<br></br>
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
            to cut{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent underline underline-offset-[10px] decoration-2 decoration-red-500">
                 compute costs
            </span>
            .
        </h1>

        <br></br>

        <div className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'var(--font-ibm)', fontSize: '15px', color: '#181818' }}>
            {/* <h3 style={{marginTop: '-20px', marginBottom: '10px', fontSize: '20px', fontWeight: '900', color: 'red', fontFamily: 'var(--font-mw)'}}>Why me?</h3> */}
            {/* <ul className="list-disc pl-5"> */}
                {/* <li> */}
            I have practical and academic research experiense at 
            <span style={{ color: '#0674f1ff', background: '#f0efef', fontSize: '13px', fontFamily: 'var(--font-cascadia-mono)', marginLeft: '5px', marginRight: '5px', fontWeight: '400', padding: '1px 6px 1px 6px', letterSpacing: '1px' }}>
                distilling knowledge from foundation models
            </span>

            to build  smaller vision models that outperform foundation model with fraction of training 
            infrastructure cost and fewer training data.
            &nbsp; Built and deployed vision pipeline for 2 AI startups with 
            
                1000+ active users, saving
          

            <span style={{ color: '#f106caff', background: '#f0efef', fontSize: '13px', fontFamily: 'var(--font-cascadia-mono)', marginLeft: '5px', marginRight: '5px', fontWeight: '400', padding: '1px 6px 1px 6px', letterSpacing: '1px' }}>
                $10K+ inference cost.
            </span>
            
         
                    I also have 1 year of experiense as a freelance computer vision engineer. 
            Made (first-authored, academic research) a <span style={{ color: '#a353ffff', background: '#f0efef', fontSize: '13px', fontFamily: 'var(--font-cascadia-mono)', marginLeft: '5px', marginRight: '5px', fontWeight: '400', padding: '1px 6px 1px 6px', letterSpacing: '1px' }}>
              vision transformer interpretability method named F2HF,
            </span> that is currently the state-of-the-art, widely adopted by industry and accepted in IEEE conference. 
            With proven academic research and practical experience, I hold the ability to build and deploy ML based vision pipeline that are cost effective, and get the job done.
        </div>

<div style={{width: '1px', height: '40px'}}></div>
<center>
            <a href="mailto:mail@imranhossen.org">
                <button
                    className="mt-9 px-7 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-800 transition-colors duration-300"
                    style={{ cursor: 'pointer', fontFamily: 'var(--font-ibm)' }}
                >
                    Email Me
                </button>
            </a>

            <a href="https://www.linkedin.com/in/imrnh/" target="_blank" rel="noopener noreferrer">
                <button
                    className="mt-9 ml-8 px-1 py-2 text-blue-700 font-semibold rounded-full transition-colors duration-300 hover:text-blue-800"
                    style={{ cursor: 'pointer', fontFamily: 'var(--font-ibm)' }}
                >
                    <span
                        style={{
                            textDecoration: 'underline',
                            textUnderlineOffset: '5px',
                            textDecorationThickness: '1px', // ensures underline stays visible
                        }}
                    >
                        Contact via Linkedin
                    </span>
                </button>
            </a>


</center>

{/* 
        <button className="mt-9 ml-8 px-7 py-3 hover:text-gray-700 text-black font-semibold rounded-full  transition-colors duration-300" style={{ cursor: 'pointer' }}>
            Download CV
        </button> */}

        <br></br>
        <br></br>
        <br></br>

    </section>
);

export default Hero;
