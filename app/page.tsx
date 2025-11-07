import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import ClientProjects from "./components/ClientProjects";
import ResearchPapers from "./components/ResearchPapers";

export default function HomePage() {
  return (
    <>
      <Hero />


      <ClientProjects />

      <ResearchPapers />

      {/* <FeaturedPosts /> */}
    </>
  );
}
