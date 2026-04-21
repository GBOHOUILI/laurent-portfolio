import React from "react";
import PageSEO from "../components/PageSEO";
import Footer from "../components/Footer";

const stats = [
  { value: "5+", label: "Années d'engagement" },
  { value: "25+", label: "Certifications" },
  { value: "100+", label: "Personnes formées" },
  { value: "3+", label: "Pays d'intervention" },
];

const journey = [
  {
    label: "Le déclic",
    text: "Tout a commencé par une prise de conscience simple mais brutale : les plus touchés par la crise climatique sont ceux qui y ont le moins contribué.",
  },
  {
    label: "La formation",
    text: "Juriste et Défenseur des Droits Humains (DDH), j'ai rapidement compris que les textes de loi ne suffisaient pas. La véritable bataille se joue sur le terrain, aux côtés des communautés affectées.",
  },
  {
    label: "L'action",
    text: "Membre du MJPEA, point focal CIWA d'Amnesty International Bénin, alumni YES Bootcamp, boursier junior au CIAS-SSR 2025 — chaque engagement renforce le suivant.",
  },
  {
    label: "La conviction",
    text: "L'écologie sans justice sociale n'est que du jardinage. Chaque action, chaque campagne, chaque parole est guidée par la recherche d'équité et de solidarité concrète.",
  },
];

const About: React.FC = () => (
  <>
    <PageSEO
      title="À propos"
      description="Laurent NASSARA — juriste, défenseur des droits humains et activiste environnement basé à Cotonou, Bénin."
      path="/about"
    />
    <div
      style={{ minHeight: "100vh", background: "#F7F4EF", paddingTop: "64px" }}
    >
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
            textTransform: "uppercase",
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
          Parcours
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "#1A1916",
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}
        >
          À propos
        </h1>
      </div>

      {/* Two column */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
        }}
        className="about-grid"
      >
        <div>
          <div
            style={{
              background: "#F0EDE6",
              aspectRatio: "4/5",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            <img
              src="/laurent1.jpg"
              alt="Laurent Nassara"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "#E2DDD4",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{ background: "#FDFCFA", padding: "1.25rem" }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "#1A1916",
                  }}
                >
                  {s.value}
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

        <div style={{ paddingTop: "1rem" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.375rem",
              fontWeight: 400,
              color: "#1A1916",
              lineHeight: 1.65,
              marginBottom: "2.5rem",
              fontStyle: "italic",
            }}
          >
            « La plus grande menace pour notre planète est la croyance que
            quelqu'un d'autre la sauvera. »
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#6B6560",
              lineHeight: 1.75,
              marginBottom: "2rem",
              fontWeight: 300,
            }}
          >
            Juriste et Défenseur des Droits Humains basé à Cotonou, Bénin, je
            travaille à l'intersection du droit, de l'environnement et de la
            justice sociale. Mon engagement s'inscrit dans une vision globale :
            construire un monde où les droits humains et la protection de la
            planète ne sont plus opposés, mais indissociables.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#6B6560",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Membre actif du Mouvement des Jeunes pour la Protection de
            l'Environnement et de l'Activisme (MJPEA), point focal CIWA
            d'Amnesty International Bénin, alumni du YES Bootcamp, j'agis sur le
            terrain en lien avec des partenaires locaux, régionaux et
            internationaux.
          </p>

          {/* Journey */}
          <div style={{ marginTop: "3rem" }}>
            {journey.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "1.5rem",
                  paddingBottom: "2rem",
                  marginBottom: "2rem",
                  borderBottom:
                    i < journey.length - 1 ? "1px solid #E2DDD4" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C4A882",
                    paddingTop: "3px",
                  }}
                >
                  {item.label}
                </span>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#6B6560",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}
      >
        <a
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "13px 28px",
            background: "#1A1916",
            color: "#F7F4EF",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          Prendre contact →
        </a>
      </div>

      <Footer />
    </div>
  </>
);

export default About;
