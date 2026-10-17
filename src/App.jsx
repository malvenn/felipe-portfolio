import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() { 
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = useCallback(() => setSidebarOpen((open) => !open), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const resumeLink = "/Resume_PladoFelipe%20.pdf";

  const projectsData = [
    {
      id: 1,
      title: "TrackAdemia – Thesis and Research Tracker",
      stack: "Next.js • TypeScript • Supabase",
      description: "A web-based thesis management system that organizes research submissions, adviser revisions, and multi-stage approvals.",
      impact: "Conducted end-to-end testing across draft revision modules to protect data integrity, prevent lost document feedback, and ensure consistent platform reliability.",
      image: "/trackademiass.png",
      visualLabel: "TrackAdemia project preview",
    },
    {
      id: 2,
      title: "Barangay Management System",
      stack: "Python • MySQL",
      description: "A local community records system for resident tracking, incident logging, and automated certificate generation.",
      impact: "Designed relational database schemas in MySQL to keep resident records organized, running thorough testing and debugging to prevent duplicate or corrupted data.",
      image: "/brgy.jpg.png", 
      visualLabel: "Barangay Management System project preview",
    }
  ];

  const certificationsData = [
    {
      id: 1,
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy & DICT-ITU DTC Initiative",
      date: "August 30, 2026",
      link: "/cert1.pdf"
    },
    {
      id: 2,
      title: "Google Workspace ICT Skills Training",
      issuer: "DICT Region III / ILCDB",
      date: "August 11, 2026",
      link: "/cert2.pdf"
    },
    {
      id: 3,
      title: "Digital Forensics: Digital Artifacts and Cyber Evidence",
      issuer: "Training Program via Zoom",
      date: "August 30, 2026",
      link: "/cert3.pdf"
    }
  ];

  return (
    <div className={`app-shell${sidebarOpen ? " sidebar-open" : ""}`}>
      <Navbar resumeLink={resumeLink} isOpen={sidebarOpen} onToggle={toggleSidebar} onClose={closeSidebar} />
      <main>
        <Hero resumeLink={resumeLink} />
        <About />
        <Skills />
        <Projects projects={projectsData} />
        <Certifications certifications={certificationsData} />
        <Contact />
      </main>
    </div>
  );
}