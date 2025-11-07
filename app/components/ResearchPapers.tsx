"use client";

import React from "react";
import { BookOpen } from "lucide-react";

const ResearchPapers = () => {
    const papers = [
        {
            title: "F2HF: Feed Forward Network as a Noisy Head Filter in Vision Transformer Explanation",
            authors: "Imran Hossen, Kazi Saeed Alam",
            journal: "ICCIT, 2026",
            href: "#",
        },
    ];

    return (
        <section id="papers" className="py-20">
            <center>
                <h2 className="text-4xl font-bold text-black mb-8" style={{ fontFamily: 'var(--font-mw)' }}>Research Papers</h2>
            </center>
            <br></br>
            <div className="space-y-6">
                {papers.map((paper) => (
                    <a
                        key={paper.title}
                        href={paper.href}
                        className="group block p-0 rounded-lg transition-colors"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-md font-medium text-black group-hover:text-indigo-600 transition-colors" style={{ fontFamily: 'var(--font-ibm)' }}>
                                    {paper.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{paper.authors}</p>
                                <p className="text-sm text-gray-500 mt-1">{paper.journal}</p>
                            </div>
                            <BookOpen className="w-5 h-5 text-gray-500 group-hover:text-indigo-600 transition-colors flex-shrink-0 ml-4" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ResearchPapers;
