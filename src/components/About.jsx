export default function About() {
  return (
    <section id="about" className="section-container page-width about-section">
      <div className="section-heading"><p className="section-kicker">A bit about me</p><h2 className="section-title"><span>01</span> Building with curiosity</h2><p className="section-intro">A blend of technical thinking, practical problem-solving, and a genuine interest in making technology useful.</p></div>
      
      <div className="about-grid">
        <div className="about-text">
          <p>I’m an aspiring developer studying Information Technology at NEUST. I enjoy the visual side of building websites just as much as the systems and database logic that make them work.</p>
          <p>My goal is to keep learning, write cleaner code, and create software that solves real problems for the people using it.</p>
          <ul className="about-list">
            <li>
              <span className="text-teal">↗</span> 
              <span><strong>Willingness to Learn:</strong> Quick to pick up new frameworks, tools, and best practices.</span>
            </li>
            <li>
              <span className="text-teal">↗</span> 
              <span><strong>Functional & Clean:</strong> Focused on building apps that work properly, load fast, and are easy to navigate.</span>
            </li>
            <li>
              <span className="text-teal">↗</span> 
              <span><strong>Team Player & Problem Solver:</strong> Patient when debugging issues and open to feedback and collaboration.</span>
            </li>
          </ul>
        </div>
        
        <div className="edu-card">
          <p className="card-kicker">Currently studying</p>
          <div className="edu-icon">✳</div>
          <h3>Information Technology</h3>
          <p className="edu-course">Bachelor of Science in Information Technology (BSIT)</p>
          <p className="edu-school">Nueva Ecija University of Science and Technology (NEUST)</p>
          <div className="edu-card-footer"><span className="edu-batch">Class of 2027</span><span className="edu-location">Nueva Ecija, PH</span></div>
        </div>
      </div>
    </section>
  );
}