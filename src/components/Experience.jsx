const experiences = [
  {
    role: "Systems Analyst",
    focus: "Requirements and workflow analysis",
    description: "Helped translate project needs into clear system requirements, user flows, and practical feature definitions for academic software projects.",
  },
  {
    role: "Quality Assurance",
    focus: "Functional testing and issue reporting",
    description: "Reviewed key application workflows, checked expected behavior, and communicated issues so the team could improve reliability and usability.",
  },
  {
    role: "Technical Documenter",
    focus: "Project and system documentation",
    description: "Prepared and maintained project documentation to support shared understanding of system scope, requirements, and implementation.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container page-width">
      <div className="section-heading">
        <p className="section-kicker">Work and academic experience</p>
        <h2 className="section-title"><span>03</span> Roles across the process</h2>
        <p className="section-intro">In academic software development teams, I have contributed to analysis, quality assurance, and documentation.</p>
      </div>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={experience.role}>
            <span className="experience-index" aria-hidden="true">0{index + 1}</span>
            <div>
              <p className="experience-focus">{experience.focus}</p>
              <h3>{experience.role}</h3>
              <p>{experience.description}</p>
            </div>
            <span className="experience-type">Academic projects</span>
          </article>
        ))}
      </div>
    </section>
  );
}