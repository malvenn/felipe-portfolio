export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section-container page-width">
      <div className="section-heading"><p className="section-kicker">Learning in motion</p><h2 className="section-title"><span>04</span> Trainings & milestones</h2><p className="section-intro">Continuing to build a broader foundation across emerging technology, productivity, and digital safety.</p></div>

      <div className="certs-grid">
        {certifications.map((cert) => (
          <a key={cert.id} href={cert.link} target="_blank" rel="noreferrer" className="cert-card" aria-label={`${cert.title} certificate PDF`}>
            <div>
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3"></path><path d="m8 7 4-4 4 4"></path><path d="M20 21H4"></path></svg>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
            <div className="cert-footer">
               <span className="cert-date">{cert.date}</span>
               <span className="cert-link">View certificate <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}