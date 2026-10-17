import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="contact-section page-width">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="section-kicker">05 · What's next?</p>
          <h2 className="contact-title">Have a good idea?<br /><span>Let’s make it real.</span></h2>
          <p className="contact-desc">I’m currently looking for IT internship opportunities and interesting projects. If you have something in mind, I’d love to hear about it.</p>
          <a href="mailto:felipeplado21@gmail.com" className="contact-email">felipeplado21@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="social-links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" placeholder="jane@example.com" autoComplete="email" required />
          <label htmlFor="contact-message">A little about your idea</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Tell me what you're thinking..." required />
          <button className="btn-solid form-submit" type="submit">{submitted ? "Message noted ✓" : "Send a message ↗"}</button>
          <p className="form-note" aria-live="polite">{submitted ? "Thanks for reaching out! This demo form doesn't send data yet—email me directly to get in touch." : "Demo form · No details are stored or sent."}</p>
        </form>
      </div>
      <footer className="footer"><a className="footer-brand" href="#home">FP<span>.</span></a><p>Designed & built with care by Felipe Plado</p><p>© 2026 Felipe L. Plado Jr.</p></footer>
    </section>
  );
}