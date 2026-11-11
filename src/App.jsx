import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = useCallback(() => setSidebarOpen((open) => !open), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const resumeLink = "/Resume_PladoFelipe%20.pdf";

  const projectsData = [
    {
      id: 1,
      title: "TrackAdemia",
      subtitle: "Web-Based Thesis Tracking and Mentorship Platform",
      stack: ["Next.js", "Supabase", "TypeScript"],
      description: "A platform for organizing thesis milestones, research submissions, adviser feedback, and student mentorship in one place.",
      objective: "Make thesis progress easier to follow for students and advisers, from initial topic to final submission.",
      role: "Systems Analyst, QA, and Technical Documenter",
      impact: "Mapped core workflows, documented requirements, and tested thesis and revision flows as part of the academic project team.",
      image: "/trackademiass.png",
      visualLabel: "TrackAdemia project preview",
      repository: "https://github.com/felipeplado21-jpg",
      liveSite: "#contact",
    },
    {
      id: 2,
      title: "Inventory Management System",
      subtitle: "Academic Inventory Management Application",
      stack: ["Java", "MySQL"],
      description: "A desktop application concept for maintaining item records and supporting routine inventory tasks.",
      objective: "Keep inventory data structured and make item information easier to record, find, and maintain.",
      role: "Systems Analyst, QA, and Technical Documenter",
      impact: "Contributed to requirements analysis, test planning, and project documentation for the academic development team.",
      visualLabel: "Inventory Management System screenshot placeholder",
      repository: "https://github.com/felipeplado21-jpg",
      liveSite: "#contact",
    },
    {
      id: 3,
      title: "CameraMediaApp",
      subtitle: "Profile Management Interface",
      stack: ["Angular", "Ionic Framework", "Capacitor Camera API"],
      description: "A mobile profile interface that lets users manage profile details and capture a photo using the device camera.",
      objective: "Create a straightforward mobile experience for viewing and updating a user profile with camera support.",
      role: "Systems Analyst, QA, and Technical Documenter",
      impact: "Helped clarify interface behavior, verify profile and camera flows, and document the academic application.",
      visualLabel: "CameraMediaApp mobile screenshot placeholder",
      repository: "https://github.com/felipeplado21-jpg",
      liveSite: "#contact",
    }
  ];

  const certificationsData = [
    {
      id: 1,
      title: "ICT Skills Training on Google Workspace",
      issuer: "Productivity and collaboration tools",
      date: "Completed training",
    },
    {
      id: 2,
      title: "Digital Trust in the AI Era",
      issuer: "Deepfakes and cybersecurity awareness",
      date: "Completed training",
    },
    {
      id: 3,
      title: "Digital Forensics",
      issuer: "Digital evidence and forensic fundamentals",
      date: "Completed training",
    }
  ];

  return (
    <div className={`app-shell${sidebarOpen ? " sidebar-open" : ""}`}>
      <Navbar resumeLink={resumeLink} isOpen={sidebarOpen} onToggle={toggleSidebar} onClose={closeSidebar} />
      <main>
        <Hero resumeLink={resumeLink} />
        <About />
        <Skills />
        <Experience />
        <Projects projects={projectsData} />
        <Certifications certifications={certificationsData} />
        <Contact />
      </main>
    </div>
  );
}