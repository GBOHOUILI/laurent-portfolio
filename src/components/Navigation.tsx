import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "À propos", path: "/about" },
    { label: "Domaines", path: "/actions" },
    { label: "Campagnes", path: "/campaigns" },
    { label: "Certifications", path: "/certificates" },
    { label: "Publications", path: "/publications" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled
          ? "rgba(247,244,239,0.95)"
          : "rgba(247,244,239,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #E2DDD4" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#1A1916",
                letterSpacing: "-0.03em",
              }}
            >
              Laurent Nassara
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            className="hidden md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                style={{
                  padding: "6px 14px",
                  fontSize: "0.8125rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: isActive(item.path) ? 500 : 400,
                  color: isActive(item.path) ? "#1A1916" : "#6B6560",
                  borderBottom: isActive(item.path)
                    ? "1px solid #C4A882"
                    : "1px solid transparent",
                  letterSpacing: "0.01em",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://laurentnassara.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "0.5rem",
                padding: "7px 18px",
                fontSize: "0.8125rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                color: "#1A1916",
                border: "1px solid #1A1916",
                letterSpacing: "0.02em",
              }}
            >
              Blog ↗
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1A1916",
            }}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            style={{ borderTop: "1px solid #E2DDD4", paddingBottom: "1rem" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 4px",
                  fontSize: "0.9375rem",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  color: isActive(item.path) ? "#1A1916" : "#6B6560",
                  borderBottom: "1px solid #EDE9E2",
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://laurentnassara.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 4px",
                fontSize: "0.9375rem",
                color: "#6B6560",
              }}
            >
              Blog ↗
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
