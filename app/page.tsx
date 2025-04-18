import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-split">
          <div className="hero-image">
            <Image
              src="/13.jpg"
              alt="Dorell James"
              width={800}
              height={1200}
              className="portrait"
              priority
            />
            <div className="gradient-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="brand">
              <div className="logo-container">
                <Image
                  src="/logo.png"
                  alt="Learn with Dorell Logo"
                  width={48}
                  height={48}
                  className="logo"
                  priority
                />
                <h3 className="brand-name">Learn with Dorell</h3>
              </div>
            </div>

            <div className="content">
              <h1 className="headline">
                Building things <span className="accent">quietly</span> for
                years.
              </h1>

              <p className="tagline">
                Now sharing the process — automations, tools, and lessons
                learned along the way.
              </p>

              <p className="philosophy">
                Not polished. Not perfect.{" "}
                <span className="emphasis">Just honest.</span>
              </p>

              <div className="connect-section">
                <p className="connect-label">
                  Follow along my journey here ⬇️{" "}
                </p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/learnwithdorell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    <span className="social-name">Facebook</span>
                  </a>
                  <span className="separator">•</span>
                  <a
                    href="https://twitter.com/learnwithdorell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link twitter"
                  >
                    <span className="social-name">Twitter</span>
                  </a>
                  <span className="separator">•</span>
                  <a
                    href="https://github.com/dorelljames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link github"
                  >
                    <span className="social-name">GitHub</span>
                  </a>
                </div>
              </div>

              <div className="featured-card">
                <div className="card-content">
                  <div className="card-badge">Coming Soon</div>
                  <h4 className="card-title">
                    Mastering AI Automation with n8n
                  </h4>
                  <p className="card-description">
                    A practical guide to building powerful automation workflows
                  </p>
                  <p className="card-date">Launching May 2025 🚀</p>
                </div>
              </div>

              <p className="closing">
                Let's build better, faster —{" "}
                <span className="together">together</span>
                <span className="emoji">🚀</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
