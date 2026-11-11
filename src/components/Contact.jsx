import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(`Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`);
    setSubmitted(true);
    window.location.href = `mailto:felipeplado2@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="contact-section page-width">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="section-kicker">06 · Contact</p>
          <h2 className="contact-title">Let’s start a<br /><span>conversation.</span></h2>
          <p className="contact-desc">I’m open to internship opportunities, collaborations, and conversations about practical software ideas.</p>
          <a href="mailto:felipeplado2@gmail.com" className="contact-email">felipeplado2@gmail.com <span aria-hidden="true">↗</span></a>
          <a href="tel:+639913878919" className="contact-phone">+63 991 387 8919</a>
          <div className="social-links"><a href="https://github.com/felipeplado21-jpg" target="_blank" rel="noreferrer" aria-label="Felipe Plado on GitHub">GitHub <span aria-hidden="true">↗</span></a></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" placeholder="jane@example.com" autoComplete="email" required />
          <label htmlFor="contact-message">A little about your idea</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Tell me what you're thinking..." required />
          <button className="btn-solid form-submit border border-black bg-white text-black hover:bg-black hover:text-white" type="submit">{submitted ? "Opening your email app…" : "Send a message ↗"}</button>
          <p className="form-note" aria-live="polite">{submitted ? "Your email app should open with this message ready to send." : "Submitting opens your email app; your message is not stored on this website."}</p>
        </form>
      </div>
      <footer className="footer"><a className="footer-brand" href="#home">FP<span>.</span></a><p>Designed & built with care by Felipe Plado</p><p>© 2026 Felipe L. Plado Jr.</p></footer>
    </section>
  );
}