export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-container page-width">
      <div className="section-heading"><p className="section-kicker">Selected work</p><h2 className="section-title"><span>03</span> Projects with purpose</h2><p className="section-intro">A few things I’ve been building, testing, and learning from along the way.</p></div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.image && (
               <div className="project-img-container">
                 <img src={project.image} alt={project.title} className="project-img" onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement.classList.add("has-image-fallback"); }} />
                 <span className="project-img-fallback" aria-hidden="true">{project.visualLabel}</span>
               </div>
            )}
            <div className="project-info">
              <div className="project-stack">{project.stack.split(" • ").map((technology) => <span key={technology}>{technology}</span>)}</div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-impact"><strong>Engineering impact</strong><p>{project.impact}</p></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}