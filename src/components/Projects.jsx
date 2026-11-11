import { motion, useReducedMotion } from "framer-motion";

function ProjectCard({ project, reduceMotion }) {
  return (
    <motion.article
      className="project-card border border-black bg-white text-black"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="project-img-container">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover block border border-black project-img"
          />
        ) : null}
        <span className="visual-label">PROJECT 0{project.id}</span>
      </div>
      <div className="project-info">
        <div className="project-stack">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-desc">{project.description}</p>
        <dl className="project-details">
          <div><dt>Objective</dt><dd>{project.objective}</dd></div>
          <div><dt>My role</dt><dd>{project.role}</dd></div>
          <div><dt>Contribution</dt><dd>{project.impact}</dd></div>
        </dl>
        <div className="project-links">
          <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.title} repository links on Felipe's GitHub profile`}>GitHub profile <span aria-hidden="true">↗</span></a>
          <a href={project.liveSite} aria-label={`Ask about a live demo of ${project.title}`}>Live demo <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-container page-width">
      <div className="section-heading"><p className="section-kicker">Projects and portfolio</p><h2 className="section-title"><span>04</span> Selected academic work</h2><p className="section-intro">Three projects that reflect my experience analyzing requirements, testing user flows, and documenting software.</p></div>

      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.id} project={project} reduceMotion={reduceMotion} />)}
      </div>
    </section>
  );
}