"use client";

import React from "react";
import { BookOpen } from "lucide-react";

const ResearchPapers = () => {
    const papers = [
        {
            title: "The Impact of Perceived Web Performance on User Engagement",
            authors: "A. Name, B. Coauthor, C. Advisor",
            journal: "ACM Transactions on the Web (TWEB), 2023",
            href: "#",
        },
        {
            title: "A Novel Framework for State Management in Declarative UIs",
            authors: "A. Name, D. Researcher",
            journal: "IEEE Symposium on Visual Languages (VL/HCC), 2022",
            href: "#",
        },
        {
            title:
                "Generating Accessible Color Palettes via Evolutionary Algorithms",
            authors: "E. Designer, A. Name",
            journal: "Conference on Human Factors in Computing (CHI), 2021",
            href: "#",
        },
    ];

    return (
        <section id="papers" className="py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Papers</h2>
            <div className="space-y-6">
                {papers.map((paper) => (
                    <a
                        key={paper.title}
                        href={paper.href}
                        className="group block p-5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
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
