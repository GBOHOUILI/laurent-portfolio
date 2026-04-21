import React, { useState } from "react";
import PageSEO from "../components/PageSEO";
import Footer from "../components/Footer";
import { siteConfig } from "../data/siteData";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteConfig.personal.email}?subject=${encodeURIComponent(form.subject || "Contact depuis le portfolio")}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 0",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #E2DDD4",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1rem",
    color: "#1A1916",
    outline: "none",
  };

  return (
    <>
      <PageSEO
        title="Contact"
        description="Contactez Laurent NASSARA pour collaborer sur des projets liés aux droits humains, à l'environnement ou au militantisme."
        path="/contact"
      />
      <div
        style={{
          minHeight: "100vh",
          background: "#F7F4EF",
          paddingTop: "64px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 2rem 6rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6rem",
            }}
            className="contact-grid"
          >
            {/* Left */}
            <div>
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
                Collaborons
              </p>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: "#1A1916",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Travaillons ensemble
              </h1>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "#6B6560",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: "3rem",
                }}
              >
                Vous souhaitez collaborer sur un projet lié aux droits humains,
                à l'environnement, à la gouvernance internet ou à la santé
                reproductive ? Je suis disponible pour des partenariats,
                formations, prises de parole ou événements.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    borderTop: "1px solid #E2DDD4",
                    paddingTop: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#9E9890",
                      marginBottom: "0.375rem",
                    }}
                  >
                    Email
                  </div>
                  <a
                    href={`mailto:${siteConfig.personal.email}`}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1rem",
                      color: "#1A1916",
                    }}
                  >
                    {siteConfig.personal.email}
                  </a>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #E2DDD4",
                    paddingTop: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#9E9890",
                      marginBottom: "0.375rem",
                    }}
                  >
                    Localisation
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1rem",
                      color: "#1A1916",
                    }}
                  >
                    Cotonou, Bénin
                  </span>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #E2DDD4",
                    paddingTop: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#9E9890",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Réseaux
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      {
                        href: siteConfig.socialLinks.instagram,
                        label: "Instagram",
                      },
                      {
                        href: siteConfig.socialLinks.twitter,
                        label: "X (Twitter)",
                      },
                      {
                        href: siteConfig.socialLinks.linkedin,
                        label: "LinkedIn",
                      },
                      {
                        href: siteConfig.socialLinks.facebook,
                        label: "Facebook",
                      },
                    ]
                      .filter((s) => s.href)
                      .map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.8125rem",
                            color: "#6B6560",
                            borderBottom: "1px solid #C4A882",
                            paddingBottom: "1px",
                          }}
                        >
                          {s.label} ↗
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <div
                  style={{
                    padding: "3rem",
                    background: "#FDFCFA",
                    border: "1px solid #E2DDD4",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2rem",
                      color: "#1A1916",
                      marginBottom: "1rem",
                    }}
                  >
                    Message envoyé
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#6B6560",
                    }}
                  >
                    Merci, je vous répondrai dans les meilleurs délais.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  {[
                    {
                      key: "name",
                      label: "Nom complet",
                      type: "text",
                      required: true,
                    },
                    {
                      key: "email",
                      label: "Email",
                      type: "email",
                      required: true,
                    },
                    {
                      key: "subject",
                      label: "Sujet",
                      type: "text",
                      required: false,
                    },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.75rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#9E9890",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {field.label}
                        {field.required && " *"}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={(form as any)[field.key]}
                        onChange={(e) =>
                          setForm({ ...form, [field.key]: e.target.value })
                        }
                        style={inputStyle}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#9E9890",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      padding: "13px 32px",
                      background: "#1A1916",
                      color: "#F7F4EF",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      border: "1px solid #1A1916",
                      cursor: "pointer",
                      alignSelf: "flex-start",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Envoyer le message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
