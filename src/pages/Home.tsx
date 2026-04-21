import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { blogPosts, certificates, campaigns } from "../data/siteData";

const Home: React.FC = () => {
  const recentPosts = blogPosts.slice(0, 3);
  const totalCerts = certificates.length;

  return (
    <div style={{ background: "#F7F4EF" }}>
      <Hero />

      {/* Brief intro strip */}
      <section
        style={{
          borderTop: "1px solid #E2DDD4",
          borderBottom: "1px solid #E2DDD4",
          background: "#FDFCFA",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              href: "/about",
              label: "À propos",
              desc: "Parcours & engagements",
            },
            { href: "/actions", label: "Domaines", desc: "3 axes d'action" },
            {
              href: "/campaigns",
              label: "Campagnes",
              desc: "Actions sur le terrain",
            },
            {
              href: "/certificates",
              label: "Certifications",
              desc: `${totalCerts} certifications`,
            },
            {
              href: "/publications",
              label: "Publications",
              desc: `${blogPosts.length} articles`,
            },
            {
              href: "/contact",
              label: "Contact",
              desc: "Collaborons ensemble",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                padding: "1.25rem 0",
                borderTop: "2px solid transparent",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderTopColor = "#C4A882")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderTopColor = "transparent")
              }
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "#1A1916",
                  marginBottom: "4px",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8125rem",
                  color: "#9E9890",
                }}
              >
                {item.desc}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Actions */}
      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              fontWeight: 500,
              color: "#1A1916",
              letterSpacing: "-0.02em",
            }}
          >
            Campagnes récentes
          </h2>
          <a
            href="/campaigns"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              color: "#6B6560",
              borderBottom: "1px solid #C4A882",
            }}
          >
            Toutes les campagnes →
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "#E2DDD4",
          }}
        >
          {campaigns.map((c) => (
            <div key={c.id} style={{ background: "#FDFCFA", padding: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "#9E9890",
                    textTransform: "uppercase",
                    paddingTop: "3px",
                  }}
                >
                  {c.year}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "#1A1916",
                      lineHeight: 1.3,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "#6B6560",
                      lineHeight: 1.6,
                    }}
                  >
                    {c.description}
                  </p>
                  {c.impact && (
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "#C4A882",
                        marginTop: "0.75rem",
                      }}
                    >
                      {c.impact}
                    </p>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginTop: "1rem",
                }}
              >
                {c.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      color: "#9E9890",
                      border: "1px solid #E2DDD4",
                      padding: "3px 10px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section style={{ borderTop: "1px solid #E2DDD4", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.5rem",
                fontWeight: 500,
                color: "#1A1916",
                letterSpacing: "-0.02em",
              }}
            >
              Dernières réflexions
            </h2>
            <a
              href="/publications"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                color: "#6B6560",
                borderBottom: "1px solid #C4A882",
              }}
            >
              Tous les articles →
            </a>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {recentPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "#FDFCFA",
                  border: "1px solid #E2DDD4",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#C4A882")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#E2DDD4")
                }
              >
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    background: "#F0EDE6",
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s",
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600";
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "#C4A882",
                        textTransform: "uppercase",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        color: "#9E9890",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "#1A1916",
                      lineHeight: 1.35,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "#6B6560",
                      lineHeight: 1.65,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
