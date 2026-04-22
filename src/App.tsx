import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Wrench,
  Code2,
  Sparkles,
  X,
} from "lucide-react";
import profile from "./assets/me.jpg";
import "./App.css";

const skills: Record<string, string[]> = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "PHP",
  ],
  "Frontend Development": ["React", "HTML", "CSS", "Vite"],
  "Backend Development": ["Node.js", "Express.js", "PHP"],
  "Database Systems": ["MongoDB", "PostgreSQL", "SQL", "Supabase"],
  "Tools & Technologies": [
    "Git",
    "GitHub",
    "Postman",
    "REST APIs",
    "JWT",
    "Gemini API",
  ],
};

const experiences = [
  {
    title: "Bartender Part Time",
    company: "Straightups Barworks",
    period: "2025 - Present",
    points: [
      "Delivered high-quality cocktails quickly in a fast-paced bar environment while maintaining consistency.",
      "Managed multiple orders while staying accurate and detail-oriented.",
      "Built discipline, time management, and composure under pressure while handling customer interactions during peak hours.",
    ],
  },
  {
    title: "Retail Associate Part Time",
    company: "Uniqlo",
    period: "Jun 2022 - Jul 2022",
    points: [
      "Supported customer service, floor operations, and stock handling in a busy retail environment.",
      "Worked efficiently during peak periods while maintaining service standards and operational flow.",
      "Demonstrated reliability, adaptability, and consistency in handling customer needs and daily responsibilities.",
    ],
  },
];

const education = [
  {
    school: "University of Wollongong",
    title: "Bachelor of Business Information System",
    period: "2023 - 2025",
  },
  {
    school: "Singapore Institute of Management",
    title: "Diploma in Information Technology",
    period: "2022",
  },
  {
    school: "Singapore Institute of Management",
    title: "Foundation Studies in Information Technology",
    period: "2021",
  },
  {
    school: "Yuying Secondary School",
    title: "GCSE N Level and O Level",
    period: "2016 - 2020",
  },
];

const awards = [
  "Certificate of Appreciation — SIM Student Ambassador (2025)",
  "Logistics Lead, Student Ambassador Appreciation Night (2025)",
  "Event Achiever Bronze — SIM Student Ambassador (2025)",
];

const sideProjects = [
  {
    title: "Infrastructure & Networking Projects",
    text: "Designed and deployed an enterprise-grade network setup using the Ubiquiti ecosystem, including managed switches, access points, routing, and integrated security camera systems. Gained hands-on experience in real-world network setup, device provisioning, troubleshooting connectivity issues, and maintaining infrastructure stability.",
  },
  {
    title: "Hardware & Systems Engineering",
    text: "Built multiple custom high-performance PCs from scratch, handling component selection, compatibility checks, assembly, BIOS configuration, and performance validation. Developed strong practical understanding of hardware diagnostics, optimisation, and stable system tuning.",
  },
];

const whatIBring = [
  "Quick to learn and apply new technologies to build practical, real-world solutions.",
  "Take ownership in delivering reliable, maintainable, and scalable systems.",
  "Work effectively both independently and in teams, with strong accountability and high standards.",
];

const project = {
  name: "Final Year Project — Full-Stack Article Publishing Platform",
  link: "https://father-yacht.vercel.app/",
  summary:
    "Built a full-stack article publishing platform designed to support content creation, moderation, and management workflows in a secure and structured way.",
  bullets: [
    "Developed an article publishing platform that allows registered users to create and publish articles, enabling them to share content and ideas with a wider audience.",
    "Built authentication and role-based access control so registered users can access additional features based on their permissions.",
    "Designed and implemented backend architecture using MongoDB, including structured APIs, secure request handling, and organised data flow.",
    "Developed responsive frontend interfaces with structured navigation, search functionality, dashboards, and administrative tools.",
    "Integrated AI-powered features using Gemini API, including summarisation, translation, content moderation, and fact-checking.",
    "Worked closely with team members to manage Git workflows, resolve merge conflicts, and maintain code consistency across the project.",
    "Handled deployment using Vercel and Render, ensuring the platform was stable, accessible, and production-ready.",
    "Improved overall system reliability through validation, testing, and structured debugging processes.",
  ],
};

function App() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h1 className="top-name">Berenger Ngan</h1>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container main-content">
        <section className="hero">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-left"
          >
            <span className="pill">Business Information Systems Graduate</span>

            <h2 className="hero-title">
              I design and build web applications that solve real-world problems
              in a clean and reliable way.
            </h2>

            <p className="hero-text">
              I focus on creating applications that are not only technically
              sound, but also usable, scalable, and meaningful in real-world
              operations.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-dark">
                Get in touch
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light"
              >
                View final year project <ExternalLink size={16} />
              </a>
            </div>

            <div className="contact-row">
              <span>
                <MapPin size={16} /> Singapore
              </span>
              <span>
                <Mail size={16} /> berengerngan@gmail.com
              </span>
              <span>
                <Phone size={16} /> +65 9859 4842
              </span>
              <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="YOUR_GITHUB_URL" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              type="button"
              className="avatar-box avatar-button"
              onClick={() => setIsImageOpen(true)}
              aria-label="Open profile image"
            >
              <img src={profile} alt="Berenger Ngan" />
            </button>
          </motion.div>
        </section>

        <div className="section-grid">
          <section id="about" className="section-block wide-card">
            <SectionTitle icon={<Sparkles size={20} />} title="About Me" />
            <div className="card">
              <p>
                I’m a Business Information Systems graduate with hands-on
                experience building full-stack web applications from idea to
                deployment.
              </p>
              <p>
                During my final year project, I worked closely with a team to
                design and build a complete system, covering both backend and
                frontend development. This experience helped me understand how
                to structure projects, manage workflows, and turn requirements
                into working features.
              </p>
              <p>
                I enjoy building systems that are not just functional, but
                actually useful in real-world situations. I focus on writing
                clean code, keeping things simple, and ensuring the final
                product is reliable.
              </p>
              <p>
                I’m always interested in expanding my abilities, and I’m open
                to roles across both business and IT.
              </p>
              <p>
                I’m motivated to continuously improve and contribute through
                practical, hands-on work.
              </p>
            </div>
          </section>

          <section id="project" className="section-block wide-card">
            <SectionTitle icon={<Code2 size={20} />} title="Featured Project" />

            <div className="card">
              <div className="card-head">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                >
                  Live demo <ExternalLink size={16} />
                </a>
              </div>

              <div className="grid-list">
                {project.bullets.map((item) => (
                  <div key={item} className="soft-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="section-block">
            <SectionTitle icon={<Wrench size={20} />} title="Technical Skills" />
            <div className="cards-gap">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="card">
                  <p className="group-title">{group}</p>
                  <div className="badge-wrap">
                    {items.map((item) => (
                      <span key={item} className="badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section-block">
            <SectionTitle
              icon={<GraduationCap size={20} />}
              title="Education"
            />
            <div className="cards-gap">
              {education.map((item) => (
                <div key={item.title} className="card">
                  <div className="card-head">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="muted">{item.school}</p>
                    </div>
                    <span className="muted">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="section-block">
            <SectionTitle icon={<Briefcase size={20} />} title="Experience" />
            <div className="cards-gap">
              {experiences.map((item) => (
                <div key={item.title} className="card">
                  <div className="card-head">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="muted">{item.company}</p>
                    </div>
                    <span className="outline-pill">{item.period}</span>
                  </div>

                  <div className="grid-list">
                    {item.points.map((point) => (
                      <div key={point} className="soft-card">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section-block">
            <SectionTitle icon={<Award size={20} />} title="Awards & Leadership" />
            <div className="card">
              <div className="grid-list">
                {awards.map((item) => (
                  <div key={item} className="soft-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-block wide-card">
            <SectionTitle
              icon={<Wrench size={20} />}
              title="Technical Side Projects"
            />
            <div className="cards-gap">
              {sideProjects.map((item) => (
                <div key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-block wide-card">
            <SectionTitle icon={<Sparkles size={20} />} title="What I Bring" />
            <div className="card">
              <div className="grid-list">
                {whatIBring.map((item) => (
                  <div key={item} className="soft-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section id="contact" className="contact-section">
          <p className="contact-label">Contact</p>
          <h2>
            Let’s connect for opportunities in software, technology, and
            business-focused roles.
          </h2>

          <div className="contact-links">
            <a href="mailto:berengerngan@gmail.com">berengerngan@gmail.com</a>
            <a href="tel:+6598594842">+65 9859 4842</a>
            <span>Singapore</span>
            <a href="https://www.linkedin.com/in/berenger-ngan-019522277/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/BerengerIsBear" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      {isImageOpen && (
        <div className="image-modal" onClick={() => setIsImageOpen(false)}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setIsImageOpen(false)}
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
            <img src={profile} alt="Berenger Ngan preview" />
          </div>
        </div>
      )}
    </div>
  );
}

function SectionTitle({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="section-title">
      <div className="section-icon">{icon}</div>
      <h2>{title}</h2>
    </div>
  );
}

export default App;