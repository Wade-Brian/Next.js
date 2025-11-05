import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I’m Brian Wade — a creative developer passionate about clean, functional design.</p>

        <section style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", marginTop: "40px" }}>
          <ProjectCard title="Portfolio Website" description="Built using Next.js and CSS Modules." image="/project1.jpg" link="#" />
          <ProjectCard title="E-Commerce App" description="Full-stack app with Node.js and MongoDB." image="/project2.jpg" link="#" />
          <ProjectCard title="Event System" description="Event management system for companies." image="/project3.jpg" link="#" />
        </section>
      </main>
      <Footer />
    </>
  );
}
