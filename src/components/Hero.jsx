export default function Hero({ resumeLink }) {
  return (
    <section className="hero-section page-width" id="home">
      <div className="hero-copy">
        <p className="hero-eyebrow">Hello, I’m</p>
        <h1 className="hero-heading">Felipe L. Plado Jr.</h1>
        <p className="hero-role">Full-Stack Developer &amp; Systems Analyst</p>

        <p className="hero-desc">
          I’m a 4th-year BSIT student who enjoys turning real needs into clear digital experiences. I’m interested in thoughtful web and mobile applications, reliable data, and the systems that support them.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-solid border border-sage bg-sage text-white hover:bg-olive">View My Projects <span aria-hidden="true">↗</span></a>
          <a href={resumeLink} download className="btn-glass border border-sage bg-surface text-sage hover:bg-sage-tint">Download My Resume <span aria-hidden="true">↓</span></a>
          <a href="#contact" className="btn-glass border border-sage bg-surface text-sage hover:bg-sage-tint">Contact Me</a>
        </div>
        <div className="hero-meta"><span>Nueva Ecija, Philippines</span><span className="meta-divider" /><span>NEUST · BSIT</span></div>
      </div>

      <div className="hero-visual">
        <div className="portrait-frame">
          <span className="portrait-index" aria-hidden="true">PROFILE / 01</span>
          <img src="/profile.png.png" alt="Portrait of Felipe L. Plado Jr." className="profile-photo" />
          <p className="portrait-caption">Building useful things, one iteration at a time.</p>
        </div>
      </div>
    </section>
  );
}