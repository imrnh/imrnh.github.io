// "use client";

// import React from "react";
// import { Rss, Github, Twitter, BookOpen } from "lucide-react";

// // --- Reusable Card Component ---
// const Card = ({ title, description, imageUrl, href }) => {
//   return (
//     <a
//       href={href || "#"}
//       className="group block rounded-lg overflow-hidden bg-transparent hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200"
//     >
//       <div className="relative w-full h-40">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
//           onError={(e) => {
//             e.currentTarget.src =
//               "https://placehold.co/600x400/f0f0f0/999999?text=Image";
//             e.currentTarget.onerror = null;
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//       </div>

//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
//           {title}
//         </h3>
//         <p className="text-gray-600 text-sm mb-3">{description}</p>
//       </div>
//     </a>
//   );
// };

// // --- Navbar ---
// const Navbar = () => {
//   const navItems = [
//     { name: "01 home", href: "#" },
//     { name: "02 writing", href: "#posts" },
//     { name: "03 projects", href: "#projects" },
//     { name: "04 papers", href: "#papers" },
//   ];

//   return (
//     <nav className="flex items-center justify-between w-full py-8">
//       <div className="flex items-center gap-3">
//         <img
//           src="https://placehold.co/40x40/0a0a0a/ffffff?text=ME"
//           alt="Logo"
//           className="w-10 h-10 rounded-full border-2 border-gray-300"
//         />
//         <span className="font-medium text-lg text-gray-900">
//           Imran Hossen
//         </span>
//       </div>

//       <div className="hidden md:flex items-center gap-6">
//         {navItems.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             className="font-mono text-sm text-gray-500 hover:text-gray-900 transition-colors"
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>

//       <div className="flex items-center gap-2">
//         <a
//           href="#"
//           aria-label="Twitter"
//           className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
//         >
//           <Twitter size={18} />
//         </a>
//         <a
//           href="#"
//           aria-label="GitHub"
//           className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
//         >
//           <Github size={18} />
//         </a>
//         <a
//           href="#"
//           aria-label="RSS Feed"
//           className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
//         >
//           <Rss size={18} />
//         </a>
//       </div>
//     </nav>
//   );
// };

// // --- Hero Section ---
// const Hero = () => {
//   return (
//     <section className="py-24 md:py-32">
//       <p className="font-mono text-sm text-indigo-600 mb-2">
//         HELLO, I'm Imran Hossen
//       </p>
//       <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
//         I build streamlined{" "}
//         <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent underline underline-offset-[10px] decoration-2 decoration-indigo-400">
//           Computer Vision Pipelines
//         </span>{" "}
//         for{" "}
//         <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent underline underline-offset-[10px] decoration-2 decoration-indigo-400">
//           early-stage startups
//         </span>{" "}
//         to{" "}
//         <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent underline underline-offset-[10px] decoration-2 decoration-indigo-400">
//           cut compute costs
//         </span>{" "}
//         .
//       </h1>

//       <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
//         I build streamlined Computer Vision Pipelines for early-stage startups (series A/B) to cut compute costs primarily through:
//         (1) Knowledge distillation (building smaller model with the knowledge of larger one) and
//         (2) Optimized system architecture.

//         2 of my AI startups had 100+ active users combined and as a solopreneur, I was responsible for design to developement to marketing of these products. I also have ~1 years of experiense as a freelance computer vision engineer.


//         As a researcher, I study to improve modeling of data distribution with Normalizing flow and Latent Diffusion (primarily in video, audio and medical image). I have a keen interest in real-time speech to speech translation and real-time speech denoising. I've made and explainability method called F2HF for vision transformers.

//         My long term research goals are:
//         📍 Decode how the brain processes visual perception,
//         📍 Making artifical eyes having similar vision quality to human eye.
//         📍 Making thinking assistive tools (decode thoughts from brain data & deliver supporting knowledge).

//         That would require:
//         (a) Detailed understanding and modeling of brain's vision processing region
//         (b) Reading of invasive BCI devices.

//         Therefore, I study mathematical modeling of human vision, memory organization, memory recall and also currently researching a more modern approach to understand EEG data.{" "}
//         <a
//           href="#posts"
//           className="font-medium text-gray-800 hover:text-indigo-600 underline decoration-gray-400 hover:decoration-indigo-600 transition"
//         >
//           Blog
//         </a>
//         .
//       </p>
//     </section>
//   );
// };



// // --- Footer ---


// // --- Main App ---
// export default function App() {
//   return (
//     <div className="bg-white text-gray-900 min-h-screen font-sans">
//       <div className="max-w-6xl mx-auto px-6">
//         <Navbar />
//         <main>
//           <Hero />
//           <FeaturedPosts />
//           <ClientProjects />
//           <ResearchPapers />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// }



import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import ClientProjects from "./components/ClientProjects";
import ResearchPapers from "./components/ResearchPapers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientProjects />
      <FeaturedPosts />
      <ResearchPapers />
    </>
  );
}
