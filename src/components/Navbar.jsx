import { useEffect } from "react";

export default function Navbar({ resumeLink, isOpen, onToggle, onOpen, onClose }) {
  const handleMouseEnter = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) onOpen();
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) onClose();
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <button className="menu-toggle border border-black bg-white text-black hover:bg-black hover:text-white" type="button" aria-expanded={isOpen} aria-controls="site-navigation" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} onClick={onToggle}>
        <span />
        <span />
      </button>
      <button className={`sidebar-overlay${isOpen ? " is-open" : ""}`} type="button" aria-label="Close navigation menu" tabIndex={isOpen ? 0 : -1} onClick={onClose} />
      <div className={`sidebar-hover-zone transition-[width] duration-300 ease-in-out ${isOpen ? "is-open w-64" : "w-16"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <aside id="site-navigation" className={`sidebar bg-white border-r border-black text-black transition-[width] duration-300 ease-in-out${isOpen ? " is-open w-64" : " w-16"}`}>
        <a href="#home" className="sidebar-brand" onClick={onClose} aria-label="Felipe L. Plado Jr., home"><span className="sidebar-brand-compact" aria-hidden="true">FP</span><span className="sidebar-brand-full">&lt;Felipe <span>/&gt;</span></span></a>

        <p className="sidebar-label">Navigate</p>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home" onClick={onClose} aria-label="Home"><span className="nav-icon" aria-hidden="true">H</span><span className="nav-label">Home</span></a>
          <a href="#about" onClick={onClose} aria-label="About and education"><span className="nav-icon" aria-hidden="true">A</span><span className="nav-label">About &amp; education</span></a>
          <a href="#skills" onClick={onClose} aria-label="Skills"><span className="nav-icon" aria-hidden="true">S</span><span className="nav-label">Skills</span></a>
          <a href="#experience" onClick={onClose} aria-label="Experience"><span className="nav-icon" aria-hidden="true">E</span><span className="nav-label">Experience</span></a>
          <a href="#projects" onClick={onClose} aria-label="Projects"><span className="nav-icon" aria-hidden="true">P</span><span className="nav-label">Projects</span></a>
          <a href="#certifications" onClick={onClose} aria-label="Training"><span className="nav-icon" aria-hidden="true">T</span><span className="nav-label">Training</span></a>
          <a href="#contact" onClick={onClose} aria-label="Contact"><span className="nav-icon" aria-hidden="true">C</span><span className="nav-label">Contact</span></a>
        </nav>

        <div className="sidebar-bottom">
          <a href={resumeLink} download className="nav-btn border border-black bg-white text-black hover:bg-black hover:text-white" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
            <span className="nav-label">Download résumé</span>
          </a>
          <p className="sidebar-location"><span aria-hidden="true" /><span className="nav-label">Available for opportunities</span></p>
          <span className="sidebar-copyright">© 2026 Felipe L. Plado Jr.</span>
        </div>
      </aside>
      </div>
    </>
  );
}