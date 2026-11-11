export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section-container page-width">
      <div className="section-heading"><p className="section-kicker">Achievements and certifications</p><h2 className="section-title"><span>05</span> Training and milestones</h2><p className="section-intro">Completed training that broadened my skills in productivity tools, digital trust, and forensic concepts.</p></div>

      <div className="certs-grid">
        {certifications.map((cert) => (
          <article key={cert.id} className="cert-card">
            <div>
              <div className="cert-icon">
                <span aria-hidden="true">✓</span>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
            <div className="cert-footer">
               <span className="cert-date">{cert.date}</span>
               <span className="cert-link">Training completed</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}