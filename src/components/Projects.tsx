import { motion } from "framer-motion";
import { Github, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-strong rounded-xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* HEADER */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>

                  {/* Affichage de la company si elle existe */}
                  {project.company && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.company}
                    </p>
                  )}
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2">
                  {project.confidential && (
                    <Badge
                      variant="outline"
                      className="flex items-center border p-3 gap-1 text-xl text-red-400"
                    >
                      <Lock className="h-5 w-5" />
                      {t.projects.confidential}
                    </Badge>
                  )}

                  {project.status === "development" && (
                    <Badge variant="outline" className="text-xs">
                      {t.projects.inProgress}
                    </Badge>
                  )}
                </div>
              </div>

              {/* DESCRIPTION (toujours visible même si confidentiel) */}
              <p className="text-muted-foreground mb-4 min-h-[80px]">
                {project.description[language]}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* BUTTONS */}
              {!project.confidential && project.github && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t.projects.viewCode}
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
