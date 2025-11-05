// app/page.js
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A cool website.",
    image: "https://www.sliderrevolution.com/wp-content/uploads/2021/09/Setech.jpg",
    tech: ["React", "Next.js"],
  },
  {
    id: 2,
    title: "Project Two", 
    description: "A mobile app concept.",
    image: "https://cdn.dribbble.com/userupload/16734509/file/original-5a0621b7a943fc636554615a823aa49d.png?resize=400x0",
    tech: ["React Native", "Firebase"],
  }
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ padding: '1rem 2rem', background: '#fff', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 'bold' }}>Brian's Portfolio</div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="#home" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
            <a href="#projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - USING YOUR EXACT FILENAME */}
      <section id="home" style={{ padding: '3rem 2rem', textAlign: 'center', background: '#f5f5f5' }}>
        <img
          src="/Images/IMG_20210730_071509.jpg"
          alt="Brian Okech Wade"
          width={140}
          height={140}
          style={{ 
            borderRadius: '50%', 
            marginBottom: '1.5rem',
            objectFit: 'cover',
            border: '4px solid white',
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
          }}
        />
        <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '2.5rem', color: '#1f2937' }}>Brian Okech Wade</h1>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '1.2rem', fontWeight: '500' }}>Full-Stack Developer</p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '3rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Projects</h2>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {projects.map((project) => (
            <div key={project.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
              <img src={project.image} alt={project.title} width={400} height={250} style={{ width: '100%', borderRadius: '4px' }} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tech.map((t) => <span key={t} style={{ background: '#f0f0f0', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '3rem 2rem', background: '#333', color: 'white', textAlign: 'center' }}>
        <h2>Contact Me</h2>
        <p>brian@example.com</p>
        <button style={{ padding: '0.75rem 1.5rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', marginTop: '1rem' }}>
          Send Message
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '1rem', textAlign: 'center', background: '#222', color: 'white' }}>
        <p>&copy; 2024 Brian Okech Wade</p>
      </footer>
    </div>
  );
}