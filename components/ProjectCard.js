// components/UI/ProjectCard.js
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
      />
      <h3 style={{ margin: '1rem 0 0.5rem 0' }}>{project.title}</h3>
      <p style={{ margin: '0 0 1rem 0' }}>{project.description}</p>
    </div>
  );
}

