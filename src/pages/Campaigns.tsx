import React, { useState } from "react";
import PageSEO from "../components/PageSEO";
import Footer from "../components/Footer";
import { campaigns } from "../data/siteData";

const allTags = [
  "Tous",
  ...Array.from(new Set(campaigns.flatMap((c) => c.tags))),
];

const Campaigns: React.FC = () => {
  const [activeTag, setActiveTag] = useState("Tous");

  const filtered =
    activeTag === "Tous"
      ? campaigns
      : campaigns.filter((c) => c.tags.includes(activeTag));

  return (
    <>
      <PageSEO
        title="Campagnes"
        description="Les campagnes et actions militantes de Laurent NASSARA au Bénin et à l'international."
        path="/campaigns"
      />
      <div
        style={{
          minHeight: "100vh",
          background: "#F7F4EF",
          paddingTop: "64px",
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 2rem 3rem",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#9E9890",
              marginBottom: "1.5rem",
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
            Terrain & Plaidoyer
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "#1A1916",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Campagnes
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#6B6560",
              maxWidth: "520px",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Actions concrètes sur le terrain, plaidoyer institutionnel et
            mobilisation communautaire au Bénin et à l'international.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem 6rem",
          }}
        >
          {/* Filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "3rem",
            }}
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  padding: "7px 18px",
                  fontSize: "0.8125rem",
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: activeTag === tag ? "#1A1916" : "#E2DDD4",
                  background: activeTag === tag ? "#1A1916" : "transparent",
                  color: activeTag === tag ? "#F7F4EF" : "#6B6560",
                  transition: "all 0.2s",
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Campaign list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "1px",
              background: "#E2DDD4",
            }}
          >
            {filtered.map((c, i) => (
              <div
                key={c.id}
                style={{
                  background: "#FDFCFA",
                  padding: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "2rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#F7F4EF")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#FDFCFA")
                }
              >
                {/* Year */}
                <div style={{ paddingTop: "4px" }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      color: "#C4A882",
                    }}
                  >
                    {c.year}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      color: "#9E9890",
                      marginTop: "2px",
                    }}
                  >
                    #{String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.625rem",
                      fontWeight: 500,
                      color: "#1A1916",
                      lineHeight: 1.3,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {c.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9375rem",
                      color: "#6B6560",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                      fontWeight: 300,
                    }}
                  >
                    {c.description}
                  </p>
                  {c.impact && (
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8125rem",
                        color: "#C4A882",
                        marginBottom: "1rem",
                      }}
                    >
                      Impact : {c.impact}
                    </p>
                  )}
                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.7rem",
                          letterSpacing: "0.08em",
                          color: "#9E9890",
                          border: "1px solid #E2DDD4",
                          padding: "3px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <div
            style={{
              marginTop: "5rem",
              paddingTop: "4rem",
              borderTop: "1px solid #E2DDD4",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 500,
                color: "#1A1916",
                marginBottom: "3rem",
                letterSpacing: "-0.02em",
              }}
            >
              Méthode de travail
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1px",
                background: "#E2DDD4",
              }}
            >
              {[
                {
                  n: "01",
                  label: "Diagnostic",
                  text: "Analyse approfondie des enjeux et des parties prenantes",
                },
                {
                  n: "02",
                  label: "Coalition",
                  text: "Mobilisation des acteurs concernés et construction d'alliances",
                },
                {
                  n: "03",
                  label: "Action",
                  text: "Mise en œuvre de stratégies adaptées, éthiques et non-violentes",
                },
                {
                  n: "04",
                  label: "Évaluation",
                  text: "Mesure d'impact et apprentissages pour renforcer l'action future",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  style={{ background: "#FDFCFA", padding: "2rem" }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      color: "#E2DDD4",
                      marginBottom: "1rem",
                    }}
                  >
                    {step.n}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "#1A1916",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "#6B6560",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Campaigns;
