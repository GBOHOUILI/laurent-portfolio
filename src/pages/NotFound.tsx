import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "#F7F4EF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "64px",
    }}
  >
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "8rem",
          fontWeight: 300,
          color: "#E2DDD4",
          lineHeight: 1,
        }}
      >
        404
      </div>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2rem",
          fontWeight: 500,
          color: "#1A1916",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Page introuvable
      </h1>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1rem",
          color: "#6B6560",
          marginBottom: "2.5rem",
        }}
      >
        Cette page n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          padding: "13px 28px",
          background: "#1A1916",
          color: "#F7F4EF",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        Retour à l'accueil →
      </Link>
    </div>
  </div>
);

export default NotFound;
