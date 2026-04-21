import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ title, description, path = "" }) => {
  useEffect(() => {
    // Update title
    document.title = `${title} — Laurent NASSARA`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${title} — Laurent NASSARA`);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://laurent-portfolio.onrender.com${path}`,
      );

    // Update Twitter
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", `${title} — Laurent NASSARA`);

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://laurent-portfolio.onrender.com${path}`,
      );

    return () => {
      // Restore default on unmount
      document.title =
        "Laurent NASSARA | Juriste · Défenseur des Droits Humains · Activiste Environnement";
    };
  }, [title, description, path]);

  return null;
};

export default PageSEO;
