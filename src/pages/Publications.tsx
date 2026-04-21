import React, { useState } from "react";
import { blogPosts } from "../data/siteData";
import PageSEO from "../components/PageSEO";
import Footer from "../components/Footer";

const allCategories = [
  "Tous",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

const Publications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeFilter);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <PageSEO
        title="Publications"
        description="Articles et réflexions de Laurent NASSARA sur la justice climatique, les droits humains, la santé reproductive et le militantisme numérique."
        path="/publications"
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
            Réflexions & Articles
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
            Publications
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#6B6560",
              maxWidth: "500px",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            {blogPosts.length} articles sur la justice climatique, les droits
            humains, la santé reproductive et l'activisme numérique.
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
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "7px 18px",
                  fontSize: "0.8125rem",
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: activeFilter === cat ? "#1A1916" : "#E2DDD4",
                  background: activeFilter === cat ? "#1A1916" : "transparent",
                  color: activeFilter === cat ? "#F7F4EF" : "#6B6560",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                background: "#FDFCFA",
                border: "1px solid #E2DDD4",
                overflow: "hidden",
                marginBottom: "10px",
                transition: "border-color 0.5s",
                textDecoration: "none",
              }}
              className="featured-post"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#C4A882")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#E2DDD4")
              }
            >
              <div
                style={{
                  background: "#F0EDE6",
                  overflow: "hidden",
                  minHeight: "320px",
                }}
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    minHeight: "320px",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div
                style={{
                  padding: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      color: "#C4A882",
                      textTransform: "uppercase",
                    }}
                  >
                    {featured.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.75rem",
                      color: "#9E9890",
                    }}
                  >
                    {featured.date}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "#1A1916",
                    lineHeight: 1.25,
                    marginBottom: "1rem",
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9375rem",
                    color: "#6B6560",
                    lineHeight: 1.7,
                  }}
                >
                  {featured.excerpt}
                </p>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#1A1916",
                    marginTop: "2rem",
                    borderBottom: "1px solid #C4A882",
                    alignSelf: "flex-start",
                  }}
                >
                  Lire l'article ↗
                </span>
              </div>
            </a>
          )}

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "10px",
              background: "#E2DDD4",
            }}
          >
            {rest.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "#FDFCFA",
                  overflow: "hidden",
                  transition: "background 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#F7F4EF")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#FDFCFA")
                }
              >
                <div
                  style={{
                    height: "180px",
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
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      marginBottom: "0.625rem",
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
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1875rem",
                      fontWeight: 500,
                      color: "#1A1916",
                      lineHeight: 1.35,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8375rem",
                      color: "#6B6560",
                      lineHeight: 1.6,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.75rem",
                      color: "#9E9890",
                      display: "block",
                      marginTop: "0.75rem",
                    }}
                  >
                    {post.date}
                  </span>
                </div>
              </a>
            ))}

            {/* CTA tile */}
            <div
              style={{
                background: "#1A1916",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "300px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.75rem",
                  fontWeight: 500,
                  color: "#F7F4EF",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                Plus d'articles sur mon blog
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "#6B6560",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Découvrez l'intégralité de mes publications sur WordPress.
              </p>
              <a
                href="https://laurentnassara.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "11px 24px",
                  border: "1px solid #C4A882",
                  color: "#C4A882",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  alignSelf: "flex-start",
                }}
              >
                Visiter le blog ↗
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Publications;
