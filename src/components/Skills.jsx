export default function Skills() {
  const frontend = ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Angular"];
  const backend = ["PHP", "Python", "Supabase", "MySQL"];
  const tools = ["VS Code", "GitHub", "XAMPP", "Postman", "Canva", "Ionic"];

  return (
    <section id="skills" className="section-container page-width">
      <div className="section-heading"><p className="section-kicker">Tools of the trade</p><h2 className="section-title"><span>02</span> Skills & toolkit</h2><p className="section-intro">The technologies I use to turn ideas into working products — and the tools that keep the process moving.</p></div>

      <div className="skills-grid">
        {[
          { title: "Frontend Engineering", icon: "🎨", skills: frontend },
          { title: "Backend & Database", icon: "⚙️", skills: backend },
          { title: "Tools & Platforms", icon: "🛠️", skills: tools }
        ].map((category, idx) => (
          <div 
            key={category.title}
            className="skill-card"
          >
            <div className="skill-card-top"><span className="skill-icon">{category.icon}</span><span className="skill-index">0{idx + 1}</span></div>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}