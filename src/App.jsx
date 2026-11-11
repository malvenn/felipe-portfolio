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
  const openSidebar = useCallback(() => setSidebarOpen(true), []);
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
      imageAlt: "TrackAdemia application screenshot",
      repository: "https://github.com/felipeplado21-jpg",
      liveSite: "#contact",
    },
    {
      id: 2,
      title: "Barangay System",
      subtitle: "Barangay Health Workers Management System",
      stack: ["Python", "MySQL"],
      description: "A community-focused system concept for organizing barangay and health-worker records through a centralized interface.",
      objective: "Support organized access to barangay information and health-worker records.",
      role: "Systems Analyst, QA, and Technical Documenter",
      impact: "Contributed to requirements analysis, testing, and documentation for the academic system project.",
      image: "/brgy.jpg.png",
      imageAlt: "Barangay System",
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
    <div className={`app-shell min-h-screen w-full bg-cream text-espresso${sidebarOpen ? " sidebar-open" : ""}`}>
      <Navbar resumeLink={resumeLink} isOpen={sidebarOpen} onToggle={toggleSidebar} onOpen={openSidebar} onClose={closeSidebar} />
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