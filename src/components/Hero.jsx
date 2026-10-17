export default function Hero() {
  return (
    <section className="hero-section page-width" id="home">
      <div className="hero-copy">
        <div className="availability-pill">
          <span className="pulse-dot" />
          Available for full-stack development roles
        </div>

        <p className="hero-eyebrow">Hello, I'm Felipe L. Plado Jr.</p>
        <h1 className="hero-heading">
          Curious by nature.<br />
          <span>Builder by choice.</span>
        </h1>

        <p className="hero-desc">
          4th Year BSIT Student at NEUST. I build clear, useful digital products with thoughtful interfaces and dependable systems underneath.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-solid">Explore selected work <span aria-hidden="true">↗</span></a>
          <a href="#contact" className="btn-glass">Start a conversation</a>
        </div>
        <div className="hero-meta"><span>Based in Nueva Ecija, Philippines</span><span className="meta-divider" /><span>NEUST · Class of 2027</span></div>
      </div>

      <div className="hero-visual" role="img" aria-label="Abstract network diagram representing connected frontend and backend systems">
        <div className="visual-glow" aria-hidden="true" />
        <div className="network-art" aria-hidden="true">
          <svg className="network-lines" viewBox="0 0 520 520" fill="none">
            <path d="M101 153 220 102l113 70 82-12M101 153l39 151 80-202m0 0 34 205 79-135m0 0 23 169 59-187M140 304l114 3 101 39 82-186m-197 147-7 83 122-44 82-186" />
            <path className="line-highlight" d="m220 102 113 70-79 135 101 39" />
          </svg>
          <span className="network-node node-a"><i /></span>
          <span className="network-node node-b"><i /></span>
          <span className="network-node node-c"><i /></span>
          <span className="network-node node-d"><i /></span>
          <span className="network-node node-e"><i /></span>
          <span className="network-node node-f"><i /></span>
          <span className="network-node node-g"><i /></span>
          <span className="network-node node-h"><i /></span>
          <span className="network-node node-i"><i /></span>
          <span className="network-node node-j"><i /></span>
          <span className="network-node node-core"><i /></span>
          <span className="visual-label label-api">API / DATA</span>
          <span className="visual-label label-ui">INTERFACE</span>
          <span className="visual-label label-systems">SYSTEMS · 01</span>
          <span className="visual-coordinate">NEUST<br />PH / 2026</span>
        </div>
        <div className="hero-note"><span className="note-marker" /> FRONTEND <span className="note-plus">+</span> BACKEND</div>
      </div>
    </section>
  );
}