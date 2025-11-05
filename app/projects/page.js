import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <h1>My Projects</h1>
        <ProjectCard title="Portfolio Website" description="Built with Next.js and CSS." image="/project1.jpg" />
        <ProjectCard title="React Dashboard" description="Data visualization app." image="/project2.jpg" />
      </main>
      <Footer />
    </>
  );
}
