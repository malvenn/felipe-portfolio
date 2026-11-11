export default function About() {
  return (
    <section id="about" className="section-container page-width about-section">
      <div className="section-heading"><p className="section-kicker">About me</p><h2 className="section-title"><span>01</span> Building with purpose</h2><p className="section-intro">A blend of technical thinking, practical problem-solving, and a genuine interest in making technology useful.</p></div>
      
      <div className="about-grid">
        <div className="about-text">
          <p>I’m a 4th-year Bachelor of Science in Information Technology student at Nueva Ecija University of Science and Technology (NEUST), Atate Campus. My academic work has introduced me to the complete software development process—from understanding user needs and documenting requirements to testing and refining an application.</p>
          <p>I’m especially interested in scalable web and mobile development, accessible interfaces, and dependable data systems. My professional goal is to grow into a well-rounded developer and systems analyst who can collaborate across disciplines and deliver software that solves practical problems.</p>
          <ul className="about-list">
            <li>
              <span className="text-teal" aria-hidden="true">↗</span>
              <span><strong>Curious by default:</strong> I keep learning new tools and strengthen my fundamentals as I build.</span>
            </li>
            <li>
              <span className="text-teal" aria-hidden="true">↗</span>
              <span><strong>Analytical approach:</strong> I value clear requirements, useful documentation, and careful testing.</span>
            </li>
            <li>
              <span className="text-teal" aria-hidden="true">↗</span>
              <span><strong>Collaborative mindset:</strong> Open to feedback and focused on building practical, understandable solutions.</span>
            </li>
          </ul>
        </div>
        
        <div className="edu-card">
          <p className="card-kicker">Educational background</p>
          <div className="edu-icon">✳</div>
          <h3>Information Technology</h3>
          <p className="edu-course">Bachelor of Science in Information Technology · 4th year</p>
          <p className="edu-school">Nueva Ecija University of Science and Technology (NEUST), Atate Campus</p>
          <div className="edu-card-footer"><span className="edu-batch">BSIT</span><span className="edu-location">Nueva Ecija, Philippines</span></div>
        </div>
      </div>
    </section>
  );
}