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
} from "lucide-react";
import profile from "./assets/Berenger.jpg";
import "./App.css";

const skills = {
  "Programming Languages": ["Java", "Python", "JavaScript"],
  "Frontend Development": ["React", "HTML", "CSS", "Vite"],
  "Backend Development": ["Node.js", "Express.js", "PHP"],
  "Database Systems": ["MongoDB", "SQL", "Supabase"],
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
      "Delivered consistent and high-quality cocktails in a fast-paced, high-volume service environment where speed and accuracy were critical.",
      "Managed multiple orders simultaneously while maintaining attention to detail and consistency in preparation.",
      "Developed strong process discipline, time management, and the ability to perform under pressure without compromising quality.",
      "Handled customer interactions directly, ensuring a reliable and positive experience even during peak hours.",
    ],
  },
  {
    title: "Retail Associate Part Time",
    company: "Uniqlo",
    period: "Jun 2022 - Jul 2022",
    points: [
      "Handled customer service, floor operations, and stock management in a high-traffic retail environment.",
      "Maintained efficiency and organisation during peak periods while ensuring service standards and operational processes were followed.",
      "Developed adaptability and problem-solving skills when dealing with customer requests and operational challenges.",
      "Demonstrated reliability, discipline, and consistency in daily responsibilities within a structured retail environment.",
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
    text: "Designed and deployed an enterprise-grade network setup using the Ubiquiti ecosystem, including managed switches, access points, routing, and integrated security camera systems. Gained hands-on experience in real-world network setup, device provisioning, troubleshooting connectivity issues, and maintaining infrastructure stability.",
  },
  {
    title: "Hardware & Systems Engineering",
    text: "Built multiple custom high-performance PCs from scratch, handling component selection, compatibility checks, assembly, BIOS configuration, and performance validation. Developed strong practical understanding of hardware diagnostics, optimisation, and stable system tuning.",
  },
];

const whatIBring = [
  "Strong ability to learn new technologies quickly and apply them in practical, real-world situations.",
  "Ownership mindset when building and delivering systems, with a focus on completing work properly and responsibly.",
  "Able to translate business requirements into structured technical solutions that are practical and maintainable.",
  "Comfortable working independently while also contributing effectively in team-based environments.",
  "Focused on building systems that are not only functional, but also reliable, usable, and scalable in practice.",
];

const project = {
  name: "Final Year Project — Full-Stack Article Publishing Platform",
  link: "https://father-yacht.vercel.app/",
  summary:
    "Led a 6-person team to design and build a full-stack article publishing platform from scratch using the MERN stack, with a strong focus on usability, performance, and system reliability. The platform was designed to support content creation, moderation, and management workflows while providing a secure and structured user experience.",
  bullets: [
    "Designed and implemented backend architecture using MongoDB, including structured APIs, secure request handling, and data organisation.",
    "Built authentication and authorization systems using JWT and role-based access control to manage different levels of user permissions.",
    "Designed role-based access control to allow registered users to access additional features based on their permissions, improving both system security and user experience.",
    "Developed responsive frontend interfaces with structured navigation, search functionality, dashboards, and administrative tools.",
    "Integrated AI-powered features using Gemini API, including summarisation, translation, content moderation, and fact-checking.",
    "Worked closely with team members to manage Git workflows, resolve merge conflicts, and maintain code consistency across the project.",
    "Handled deployment using Vercel and Render, ensuring the platform was stable, accessible, and production-ready.",
    "Improved overall system reliability through validation, testing, and structured debugging processes.",
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
            className="hero-left"
          >
            <span className="pill">Business Information Systems Graduate</span>
            <h2 className="hero-title">
              I build practical web systems that turn real business needs into
              clean, reliable solutions.
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
              <img src={profile} alt="Berenger Ngan" />
            </div>

            <p className="small-label">Core strengths</p>

            <div className="stack-list">
              {[
                "Full-stack web development",
                "Backend architecture and authentication",
                "Team leadership and coordination",
                "Fast learning and practical problem solving",
              ].map((item) => (
                <div key={item} className="soft-card">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="section-grid">
          <section id="about" className="section-block wide-card">
            <SectionTitle icon={<Sparkles size={20} />} title="About Me" />
            <div className="card">
              <p>
                I’m a Business Information Systems graduate with hands-on
                experience building full-stack web applications from concept to
                deployment.
              </p>
              <p>
                During my Final Year Project, I led a team of six and took
                ownership across backend architecture, frontend development,
                authentication, and deployment. Working under tight timelines, I
                learned how to structure development workflows, manage team
                responsibilities, and turn complex requirements into working
                systems.
              </p>
              <p>
                Beyond just building features, I focus on understanding how a
                system will actually be used in practice. I enjoy translating
                business requirements into technical solutions that are reliable,
                scalable, and practical in real-world operations.
              </p>
              <p>
                I am comfortable learning new tools quickly, adapting to
                unfamiliar technologies, and taking responsibility to ensure work
                is delivered properly. I value consistency, ownership, and
                building things that are useful, not just functional.
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
            <div className="card intro-card">
              <p>
                I have experience working across both frontend and backend
                systems, with exposure to building full-stack applications,
                managing databases, and integrating APIs into practical
                workflows.
              </p>
            </div>

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
            <SectionTitle
              icon={<Sparkles size={20} />}
              title="What I Bring"
            />
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