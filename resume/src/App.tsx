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
  User2,
} from "lucide-react";
import "./App.css";

const skills = {
  programming: ["Java", "Python", "JavaScript"],
  frontend: ["React", "HTML", "CSS", "Vite"],
  backend: ["Node.js", "Express.js", "PHP"],
  database: ["MongoDB", "SQL", "Supabase"],
  tools: ["Git", "GitHub", "Postman", "REST APIs", "JWT", "Gemini API"],
};

const experiences = [
  {
    title: "Bartender Part Time",
    company: "Straightups Barworks",
    period: "2025 - Present",
    points: [
      "Prepared and executed top classic cocktails to professional standards.",
      "Maintained speed, consistency, and quality during high-volume service.",
      "Delivered reliable customer experience in a fast-paced nightlife environment.",
    ],
  },
  {
    title: "Retail Associate Part Time",
    company: "Uniqlo",
    period: "Jun 2022 - Jul 2022",
    points: [
      "Handled customer-facing issue resolution, floor operations, and stock workflows.",
      "Supported daily sales performance through efficient replenishment and service excellence.",
      "Demonstrated discipline, adaptability, and reliability during peak-hour operations.",
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
    title: "N Level and O Level",
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
    text: "Designed and deployed an enterprise-grade network setup using Ubiquiti gear, managed switches, access points, VLAN-ready routing, and centralized camera systems.",
  },
  {
    title: "Hardware & Systems Engineering",
    text: "Built custom high-performance PCs from scratch, including component selection, assembly, BIOS setup, troubleshooting, and performance validation.",
  },
];

const project = {
  name: "Final Year Project — Full-Stack Article Publishing Platform",
  link: "https://father-yacht.vercel.app/",
  summary:
    "Led a 6-person team to design and build a full-stack article publishing platform using MERN stack, secure authentication, admin workflows, and AI-powered content features.",
  bullets: [
    "Built backend architecture with MongoDB, JWT authentication, and role-based access control.",
    "Developed responsive frontend flows including search, navigation, dashboards, and admin tools.",
    "Integrated Gemini API features such as summarisation, translation, content moderation, and fact-checking.",
    "Managed Git collaboration and production deployment with Vercel and Render.",
  ],
};

function App() {
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
          >
            <span className="pill">Business Information Systems Graduate</span>
            <h2 className="hero-title">
              I build practical web products that turn business needs into clean
              technical solutions.
            </h2>
            <p className="hero-text">
              Fresh graduate based in Singapore with hands-on full-stack
              experience, leadership in team delivery, and a strong focus on
              building reliable systems that are useful in the real world.
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
                <Phone size={16} /> +65 98594842
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="avatar-box">
              <User2 size={42} />
            </div>
            <p className="small-label">Core strengths</p>

            <div className="stack-list">
              {[
                "Full-stack web development",
                "Backend architecture and auth",
                "Team leadership and coordination",
                "Fast learning and problem solving",
              ].map((item) => (
                <div key={item} className="soft-card">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="about" className="section-block">
          <SectionTitle icon={<User2 size={20} />} title="About" />
          <div className="card">
            <p>
              I am a Business Information Systems graduate with hands-on
              experience delivering a full-stack web application from concept to
              deployment. I led a 6-person final year project team and worked
              across backend architecture, frontend features, authentication,
              and deployment under tight deadlines. I enjoy turning requirements
              into systems that are useful, reliable, and easy to use.
            </p>
          </div>
        </section>

        <section id="project" className="section-block">
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

        <div className="two-col">
          <div>
            <section id="experience" className="section-block">
              <SectionTitle
                icon={<Briefcase size={20} />}
                title="Experience"
              />
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
          </div>

          <div>
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

            <section className="section-block">
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
          </div>
        </div>

        <section id="contact" className="contact-section">
          <p className="contact-label">Contact</p>
          <h2>
            Let’s connect for opportunities in software, technology, and
            business-focused roles.
          </h2>

          <div className="contact-links">
            <a href="mailto:berengerngan@gmail.com">berengerngan@gmail.com</a>
            <a href="tel:+6598594842">+65 98594842</a>
            <span>Singapore</span>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
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