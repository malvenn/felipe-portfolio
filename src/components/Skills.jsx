export default function Skills() {
  const categories = [
    { title: "Frontend & UI", icon: "01", skills: ["Next.js", "React", "Angular", "TypeScript", "Tailwind CSS", "Figma"] },
    { title: "Backend & data", icon: "02", skills: ["Node.js", "PHP", "Supabase", "PostgreSQL", "MySQL"] },
    { title: "Mobile development", icon: "03", skills: ["Ionic Framework", "Capacitor"] },
  ];

  return (
    <section id="skills" className="section-container page-width">
      <div className="section-heading"><p className="section-kicker">Skills and expertise</p><h2 className="section-title"><span>02</span> Tools I’m learning and using</h2><p className="section-intro">A practical toolkit built through coursework and academic projects. Experience varies by technology; I’m continuing to develop each skill through hands-on work.</p></div>

      <div className="skills-grid">
        {categories.map((category) => (
          <article key={category.title} className="skill-card">
            <div className="skill-card-top"><span className="skill-icon" aria-hidden="true">◫</span><span className="skill-index">{category.icon}</span></div>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}