import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function ProjectCard({ project, reduceMotion }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      className="project-card"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="project-img-container">
        {project.image && !imageFailed ? (
          <img
            src={project.image}
            alt={`${project.title} application screenshot`}
            className="project-img"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-img-fallback" role="img" aria-label={`${project.title} screenshot unavailable`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="1" />
              <circle cx="8.5" cy="9" r="1.5" />
              <path d="m21 15-5-5L5 20" />
            </svg>
            <span>Image Unavailable</span>
          </div>
        )}
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