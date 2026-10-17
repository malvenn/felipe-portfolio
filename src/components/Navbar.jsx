import { useEffect, useState } from "react";

export default function Navbar({ resumeLink, isOpen, onToggle, onClose }) {
  const [pictureOpen, setPictureOpen] = useState(false);

  useEffect(() => {
    if (!isOpen && !pictureOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
        setPictureOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose, pictureOpen]);

  return (
    <>
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="site-navigation" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} onClick={onToggle}>
        <span />
        <span />
      </button>
      <button className={`sidebar-overlay${isOpen ? " is-open" : ""}`} type="button" aria-label="Close navigation menu" tabIndex={isOpen ? 0 : -1} onClick={onClose} />
      <aside id="site-navigation" className={`sidebar${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen} inert={!isOpen}>
        <div className="sidebar-brand">
          <button className="sidebar-brand-avatar-button" type="button" onClick={() => setPictureOpen(true)} aria-label="View a larger portrait of Felipe Plado">
            <img src="/profile.png.png" alt="" className="sidebar-brand-avatar" />
          </button>
          <a href="#home" className="sidebar-brand-name" onClick={onClose} aria-label="Felipe Plado, home">&lt;Felipe <span>/&gt;</span></a>
        </div>

        <p className="sidebar-label">Navigate</p>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home" onClick={onClose}><span>00</span> Intro</a>
          <a href="#about" onClick={onClose}><span>01</span> About</a>
          <a href="#skills" onClick={onClose}><span>02</span> Skills</a>
          <a href="#projects" onClick={onClose}><span>03</span> Work</a>
          <a href="#certifications" onClick={onClose}><span>04</span> Milestones</a>
          <a href="#contact" onClick={onClose}><span>05</span> Contact</a>
        </nav>

        <div className="sidebar-bottom">
          <a href={resumeLink} download className="nav-btn" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
            Download résumé
          </a>
          <p className="sidebar-location"><span /> Available for opportunities</p>
          <span className="sidebar-copyright">© 2026 Felipe L. Plado Jr.</span>
        </div>
      </aside>
      {pictureOpen && (
        <div className="portrait-lightbox" role="presentation">
          <button className="portrait-lightbox-backdrop" type="button" aria-label="Close portrait preview" onClick={() => setPictureOpen(false)} />
          <div className="portrait-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Felipe Plado portrait">
            <button className="portrait-lightbox-close" type="button" onClick={() => setPictureOpen(false)} aria-label="Close portrait preview">×</button>
            <img src="/profile.png.png" alt="Felipe L. Plado Jr." />
          </div>
          <span className="portrait-lightbox-name">Felipe L. Plado Jr.</span>
        </div>
      )}
    </>
  );
}