import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="header">
          <div className="logo-container">
            <Image
              src="/logo.png"
              alt="Learn with Dorell Logo"
              width={120}
              height={120}
              className="logo"
              priority
            />
          </div>
        </div>

        <div className="content">
          <h1>
            Building things quietly <span className="accent">for years.</span>
          </h1>

          <p className="tagline">
            Now sharing the process — automations, tools, and lessons learned as
            I go.
          </p>

          <p className="philosophy">Not polished. Not perfect. Just honest.</p>

          <p className="cta">
            Follow along here
            <a
              href="https://twitter.com/learnwithdorell"
              target="_blank"
              rel="noopener noreferrer"
            >
              @learnwithdorell
            </a>
          </p>

          <div className="upcoming">
            <p>
              <span className="highlight">
                Mastering AI Automation with n8n
              </span>{" "}
              (launching May).
            </p>
          </div>

          <p className="closing">
            Let's build better, faster - together.
            <span className="emoji">🚀</span>
          </p>
        </div>
      </section>
    </main>
  );
}
