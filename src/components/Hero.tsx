import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#F7F4EF",
        paddingTop: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(0deg, #1A1916 0px, #1A1916 1px, transparent 1px, transparent 60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "6rem 2rem",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          {/* Label */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#9E9890",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                background: "#C4A882",
              }}
            />
            Juriste · Défenseur des droits · Activiste
          </p>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#1A1916",
              marginBottom: "2rem",
            }}
          >
            La crise climatique révèle qui décide, qui subit, qui est protégé.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#6B6560",
              maxWidth: "560px",
              marginBottom: "3.5rem",
              fontWeight: 300,
            }}
          >
            Du local au global — juriste, défenseur des droits humains et
            activiste environnement basé à Cotonou, Bénin.
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                padding: "13px 28px",
                background: "#1A1916",
                color: "#F7F4EF",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                border: "1px solid #1A1916",
                cursor: "pointer",
              }}
            >
              Collaborer ensemble
            </a>
            <a
              href="/campaigns"
              style={{
                padding: "13px 28px",
                background: "transparent",
                color: "#1A1916",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                border: "1px solid #C4A882",
                cursor: "pointer",
              }}
            >
              Voir mes actions →
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "5rem",
              paddingTop: "3rem",
              borderTop: "1px solid #E2DDD4",
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "5+", label: "Ans d'engagement" },
              { n: "25+", label: "Certifications" },
              { n: "100+", label: "Personnes formées" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.5rem",
                    fontWeight: 500,
                    color: "#1A1916",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#9E9890",
                    marginTop: "4px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right image accent */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "64px",
          bottom: 0,
          width: "35%",
          backgroundImage: "url(/laurent2.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 1,
          pointerEvents: "none",
        }}
        className="hidden lg:block"
      />
    </section>
  );
};

export default Hero;
