import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

const navClass = ({ isActive }) => `nav-link px-3 ${isActive ? "active" : ""}`;

function ArchitectureDiagram() {
  return (
    <section
      className="architecture-section container pb-5"
      aria-labelledby="architecture-title"
    >
      <div className="section-heading">
        <span className="eyebrow">Reference architecture</span>
        <h2 id="architecture-title">
          From customer intent to reliable execution
        </h2>
        <p>
          Codex agents collaborate through a governed runtime, with the context
          and controls enterprise teams need.
        </p>
      </div>
      <div className="architecture-card">
        <svg
          className="architecture-lines"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="9"
              markerHeight="9"
              refX="7"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" />
            </marker>
          </defs>
          <path d="M500 105 V142" markerEnd="url(#arrow)" />
          <path d="M500 225 V258 H190 V286" markerEnd="url(#arrow)" />
          <path d="M500 225 V286" markerEnd="url(#arrow)" />
          <path d="M500 225 V258 H810 V286" markerEnd="url(#arrow)" />
          <path d="M190 365 V405 H500" markerEnd="url(#arrow)" />
          <path d="M500 365 V405" markerEnd="url(#arrow)" />
          <path d="M810 365 V405 H500" markerEnd="url(#arrow)" />
        </svg>
        <div className="diagram-node customer-node">
          <span className="node-icon">↗</span>
          <strong>Customer systems</strong>
          <small>Apps, data &amp; users</small>
        </div>
        <div className="diagram-node supervisor-node">
          <span className="node-icon">◎</span>
          <strong>Supervisor agent</strong>
          <small>Plans, delegates &amp; verifies</small>
        </div>
        <div className="agent-row">
          <div className="diagram-node agent-node">
            <span className="node-icon">⌘</span>
            <strong>Research agent</strong>
            <small>Grounded insights</small>
          </div>
          <div className="diagram-node agent-node">
            <span className="node-icon">&lt;/&gt;</span>
            <strong>Build agent</strong>
            <small>Code &amp; workflows</small>
          </div>
          <div className="diagram-node agent-node">
            <span className="node-icon">✓</span>
            <strong>QA agent</strong>
            <small>Tests &amp; evaluation</small>
          </div>
        </div>
        <div className="diagram-node platform-node">
          <span className="node-icon">▣</span>
          <strong>Secure agent platform</strong>
          <small>APIs · RAG · tools · observability · human approval</small>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="status-pill">
            <span /> Built for real-world AI operations
          </span>
          <h1>AI agents that move your work forward.</h1>
          <p>
            We design, deploy, and govern Codex-powered solutions that turn
            complex business processes into dependable outcomes.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a className="btn btn-primary btn-lg" href="#architecture">
              Explore the architecture <span>→</span>
            </a>
            <NavLink className="btn btn-outline-light btn-lg" to="/features">
              View capabilities
            </NavLink>
          </div>
        </div>
      </section>
      <div id="architecture">
        <ArchitectureDiagram />
      </div>
      <section className="trust-strip">
        <div className="container">
          <span>Designed for teams that need</span>
          <div>
            <b>CONTROL</b>
            <b>CLARITY</b>
            <b>VELOCITY</b>
            <b>TRUST</b>
          </div>
        </div>
      </section>
    </>
  );
}

function Features() {
  const features = [
    [
      "01",
      "Orchestrated teams",
      "A supervisor agent breaks work into the right tasks and routes them to specialist agents.",
    ],
    [
      "02",
      "Connected context",
      "Bring your data, APIs, and knowledge bases into every agent decision with permission-aware retrieval.",
    ],
    [
      "03",
      "Built-in governance",
      "Trace every action, define approval gates, and evaluate quality before results reach your customers.",
    ],
  ];
  return (
    <main className="inner-page container py-5">
      <span className="eyebrow">Capabilities</span>
      <h1>Engineered for dependable intelligence.</h1>
      <p className="page-intro">
        Move beyond one-off prompts with a complete agent system designed for
        scale, safety, and measurable business value.
      </p>
      <div className="row g-4 mt-2">
        {features.map(([num, title, text]) => (
          <div className="col-md-4" key={num}>
            <article className="feature-card">
              <span>{num}</span>
              <h2>{title}</h2>
              <p>{text}</p>
              <a href="mailto:hello@nexusagents.ai">Talk to our team →</a>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="inner-page container py-5">
      <span className="eyebrow">About Nexus</span>
      <h1>Human ambition, amplified by agents.</h1>
      <div className="row mt-4 g-5 align-items-center">
        <div className="col-lg-7">
          <p className="lead">
            Nexus Agent Systems partners with technical teams to build useful,
            trustworthy AI products.
          </p>
          <p>
            We believe the best AI does more than generate answers. It
            understands context, uses tools responsibly, and gives people a
            clear view of how work gets done. Our solutions combine Codex
            agents, domain expertise, and sturdy software engineering.
          </p>
          <p>
            From the first prototype to production operations, we help teams
            turn AI potential into a lasting capability.
          </p>
        </div>
        <div className="col-lg-5">
          <aside className="principles">
            <span>Our operating principle</span>
            <blockquote>
              “Autonomy earns trust through transparency.”
            </blockquote>
            <p>
              Every agent system should be observable, controllable, and built
              around the people it serves.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Navigation() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-md navbar-dark container">
        <NavLink className="navbar-brand" to="/">
          <span className="brand-mark">N</span>
          <span>
            NEXUS<span className="brand-light">/AI</span>
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#siteNav"
          aria-controls="siteNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="siteNav">
          <div className="navbar-nav ms-auto align-items-md-center">
            <NavLink end className={navClass} to="/">
              Home
            </NavLink>
            <NavLink className={navClass} to="/features">
              Features
            </NavLink>
            <NavLink className={navClass} to="/about">
              About
            </NavLink>
            <a
              className="nav-contact ms-md-3"
              href="mailto:hello@nexusagents.ai"
            >
              Let's talk <span>↗</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-md-flex justify-content-between align-items-center">
        <div>
          <div className="footer-brand">NEXUS/AI</div>
          <small>Codex-powered agent systems for practical work.</small>
        </div>
        <div className="footer-links">
          <NavLink to="/about">About</NavLink>
          <a href="mailto:hello@nexusagents.ai">Contact us</a>
        </div>
        <small>© 2026 Nexus Agent Systems</small>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
