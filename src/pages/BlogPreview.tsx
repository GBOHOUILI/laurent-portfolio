import React, { useEffect } from "react";
import { siteConfig } from "../data/siteData";

const BlogPreview: React.FC = () => {
  useEffect(() => {
    window.location.href = siteConfig.blog.url;
  }, []);
  return (
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
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B6560" }}>
          Redirection vers{" "}
          <a
            href={siteConfig.blog.url}
            style={{ color: "#1A1916", borderBottom: "1px solid #C4A882" }}
          >
            le blog
          </a>
          …
        </p>
      </div>
    </div>
  );
};

export default BlogPreview;
