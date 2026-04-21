import React from "react";
import { siteConfig } from "../data/siteData";

const Footer: React.FC = () => {
  const navLinks = [
    { href: "/about", label: "À propos" },
    { href: "/actions", label: "Domaines" },
    { href: "/campaigns", label: "Campagnes" },
    { href: "/certificates", label: "Certifications" },
    { href: "/publications", label: "Publications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer style={{ background: "#1A1916", color: "#F7F4EF" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.75rem",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              {" "}
              laurentnassarah@gmail.com Laurent Nassara
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                color: "#6B6560",
                lineHeight: 1.7,
                maxWidth: "280px",
                marginBottom: "1.5rem",
              }}
            >
              {siteConfig.personal.slogan}
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 14px",
                    border: "1px solid #2E2B28",
                    color: "#9E9890",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  IG
                </a>
              )}
              {siteConfig.socialLinks.twitter && (
                <a
                  href={siteConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 14px",
                    border: "1px solid #2E2B28",
                    color: "#9E9890",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  X
                </a>
              )}
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 14px",
                    border: "1px solid #2E2B28",
                    color: "#9E9890",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  LI
                </a>
              )}
              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 14px",
                    border: "1px solid #2E2B28",
                    color: "#9E9890",
                    fontSize: "0.75rem",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  FB
                </a>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#4A4640",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map(({ href, label }) => (
                <li key={href} style={{ marginBottom: "0.625rem" }}>
                  <a
                    href={href}
                    style={{
                      color: "#6B6560",
                      fontSize: "0.875rem",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#4A4640",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <a
              href={`mailto:${siteConfig.personal.email}`}
              style={{
                color: "#C4A882",
                fontSize: "0.875rem",
                fontFamily: "'DM Sans', sans-serif",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              {siteConfig.personal.email}
            </a>
            <a
              href={siteConfig.blog.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#6B6560",
                fontSize: "0.875rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Blog WordPress ↗
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid #2E2B28",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "#4A4640",
            }}
          >
            © {new Date().getFullYear()} Laurent Nassara. Tous droits réservés.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "#4A4640",
            }}
          >
            Cotonou, Bénin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
