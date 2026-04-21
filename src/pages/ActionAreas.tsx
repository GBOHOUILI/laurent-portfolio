import React from "react";
import PageSEO from "../components/PageSEO";
import Footer from "../components/Footer";
import { actionAreas } from "../data/siteData";

const ActionAreas: React.FC = () => (
  <>
    <PageSEO
      title="Domaines d'action"
      description="Les trois axes d'engagement de Laurent NASSARA : Droits Humains & Climat, Justice Climatique & Écosystèmes, Numérique Responsable."
      path="/actions"
    />
    <div
      style={{ minHeight: "100vh", background: "#F7F4EF", paddingTop: "64px" }}
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
          Engagement
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
          Domaines d'action
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
          Trois axes d'engagement complémentaires, ancrés dans une vision
          globale de la justice sociale et environnementale.
        </p>
      </div>

      {/* Areas */}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 6rem" }}
      >
        {actionAreas.map((area, i) => (
          <div
            key={area.id}
            style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 2fr" : "2fr 1fr",
              gap: "0",
              background: "#FDFCFA",
              border: "1px solid #E2DDD4",
              marginBottom: "1px",
              overflow: "hidden",
            }}
            className="action-row"
          >
            {/* Number / icon panel */}
            <div
              style={{
                order: i % 2 === 0 ? 0 : 1,
                background: "#F0EDE6",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "3rem",
                minHeight: "320px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem",
                  fontWeight: 300,
                  color: "#1A1916",
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <img
                src={area.image}
                alt={area.title}
                style={{
                  width: "700px",
                  height: "auto",
                  objectFit: "contain",
                  marginTop: "1rem",
                  transform: "scale(2)",
                }}
              />
            </div>

            {/* Content panel */}
            <div style={{ order: i % 2 === 0 ? 1 : 0, padding: "3rem" }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 500,
                  color: "#1A1916",
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                {area.title}
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#6B6560",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  fontWeight: 300,
                }}
              >
                {area.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "0",
                }}
              >
                {area.examples.map((ex, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1rem",
                      padding: "0.75rem 0",
                      borderTop: "1px solid #EDE9E2",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.7rem",
                        color: "#C4A882",
                        flexShrink: 0,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "#6B6560",
                        lineHeight: 1.5,
                      }}
                    >
                      {ex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid #E2DDD4",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/campaigns"
            style={{
              padding: "13px 28px",
              background: "#1A1916",
              color: "#F7F4EF",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            Voir les campagnes →
          </a>
          <a
            href="/contact"
            style={{
              padding: "13px 28px",
              border: "1px solid #C4A882",
              color: "#1A1916",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
            }}
          >
            Collaborer
          </a>
        </div>
      </div>

      <Footer />
    </div>
  </>
);

export default ActionAreas;
