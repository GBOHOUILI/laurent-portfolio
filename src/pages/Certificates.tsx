import React, { useState } from "react";
import PageSEO from "../components/PageSEO";
import { certificates } from "../data/siteData";

//Fonction pour détecter si l'URL est une page Google Drive
const isGoogleDrive = (url: string) => {
  return url.includes("drive.google.com");
};

// Fonction pour obtenir l'URL d'embedding Google Drive
const getEmbedUrl = (url: string) => {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
};

const categories = [
  "Tous",
  ...Array.from(new Set(certificates.map((c) => c.category))),
];

const S = {
  page: {
    minHeight: "100vh",
    background: "#F7F4EF",
    paddingTop: "64px",
  } as React.CSSProperties,
  header: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "5rem 2rem 3rem",
  } as React.CSSProperties,
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.7rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "#9E9890",
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  h1: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
    fontWeight: 500,
    letterSpacing: "-0.03em",
    color: "#1A1916",
    lineHeight: 1.1,
    marginBottom: "1.5rem",
  } as React.CSSProperties,
  sub: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1rem",
    color: "#6B6560",
    maxWidth: "520px",
    lineHeight: 1.7,
    fontWeight: 300,
  } as React.CSSProperties,
};

const Certificates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <>
      <PageSEO
        title="Certifications"
        description={`${certificates.length} certifications de Laurent NASSARA couvrant la gouvernance internet, l'environnement, les droits humains, la santé reproductive et la diplomatie.`}
        path="/certificates"
      />
      <div style={S.page}>
        {/* Header */}
        <div style={S.header}>
          <p style={S.label}>
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                background: "#C4A882",
              }}
            />
            Expertise & Formation
          </p>
          <h1 style={S.h1}>
            Certifications
            <br />
            &amp; Compétences
          </h1>
          <p style={S.sub}>
            {certificates.length} certifications couvrant la gouvernance
            internet, l'environnement, les droits humains, la santé
            reproductive, la paix et la diplomatie internationale.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #E2DDD4",
              flexWrap: "wrap",
            }}
          >
            {[
              { n: String(certificates.length), label: "Certifications" },
              { n: String(categories.length - 1), label: "Domaines" },
              { n: "3+", label: "Continents" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.25rem",
                    fontWeight: 500,
                    color: "#1A1916",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#9E9890",
                    marginTop: "2px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem 6rem",
          }}
        >
          {/* Filter bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "3rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "7px 18px",
                  fontSize: "0.8125rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: activeFilter === cat ? "#1A1916" : "#E2DDD4",
                  background: activeFilter === cat ? "#1A1916" : "transparent",
                  color: activeFilter === cat ? "#F7F4EF" : "#6B6560",
                  letterSpacing: "0.01em",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "8px",
              background: "#E2DDD4",
            }}
          >
            {filtered.map((cert) => (
              <div
                key={cert.id}
                style={{
                  background: "#FDFCFA",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#F7F4EF")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#FDFCFA")
                }
              >
                {cert.credentialUrl && (
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      overflow: "hidden",
                      background: "#F0EDE6",
                      marginBottom: "1px",
                    }}
                  >
                    <iframe
                      src={getEmbedUrl(cert.credentialUrl)}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid #C4A882",
                        transform: "scale(1.2)",
                        transformOrigin: "center",
                      }}
                    />
                  </div>
                )}

                {/* Category + year */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#C4A882",
                    }}
                  >
                    {cert.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.75rem",
                      color: "#9E9890",
                    }}
                  >
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1875rem",
                    fontWeight: 500,
                    color: "#1A1916",
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {cert.title}
                </h3>

                {cert.subtitle && (
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8125rem",
                      color: "#9E9890",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    {cert.subtitle}
                  </p>
                )}

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid #EDE9E2",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8125rem",
                      color: "#6B6560",
                    }}
                  >
                    {cert.issuer}
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "#1A1916",
                        letterSpacing: "0.05em",
                        borderBottom: "1px solid #C4A882",
                        paddingBottom: "1px",
                      }}
                    >
                      Voir ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
