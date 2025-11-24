import { Github, Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Eldo-Moréo GBOHOUILI – All rights reserved
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/GBOHOUILI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:eldomoreogbohouili@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/gbohouili-eldo-moreo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
