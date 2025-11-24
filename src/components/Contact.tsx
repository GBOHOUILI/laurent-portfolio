import { motion } from "framer-motion";
import { MapPin, Mail, Github, Send, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form) return; // sécurité au cas où

    emailjs
      .sendForm(
        "service_24wuyah",
        "template_htmmpug",
        e.currentTarget,
        "jZcpIjOQTZZ_llC1E",
      )
      .then(() => {
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
        form.reset();
      })
      .catch((err) => {
        toast({
          title: "Erreur !",
          description: "Le message n'a pas pu être envoyé.",
        });
        console.error(err);
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.contact.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Eldo-Moréo GBOHOUILI</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {t.contact.location}
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:eldomoreogbohouili@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      eldomoreogbohouili@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/GBOHOUILI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@GBOHOUILI</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/2290163776505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.84 11.84 0 0012 0 11.85 11.85 0 000 11.84 11.62 11.62 0 001.67 17L0 24l6.25-1.64a11.9 11.9 0 005.75 1.48h.01A11.85 11.85 0 0024 11.84a11.76 11.76 0 00-3.48-8.36zM12 21.4a9.57 9.57 0 01-4.88-1.34l-.35-.21-3.71.97 1-3.61-.23-.37a9.52 9.52 0 01-1.45-5.08A9.64 9.64 0 0112 2.2a9.6 9.6 0 019.58 9.65A9.61 9.61 0 0112 21.4zm5.26-7.19c-.29-.15-1.71-.84-1.97-.94s-.46-.15-.66.15-.76.94-.93 1.13-.34.22-.63.07a7.81 7.81 0 01-2.3-1.41 8.59 8.59 0 01-1.59-1.98c-.17-.29 0-.45.13-.6.14-.15.29-.37.43-.56s.19-.3.29-.5a.54.54 0 00-.02-.53c-.07-.15-.66-1.6-.91-2.19s-.48-.5-.66-.51h-.56a1.08 1.08 0 00-.78.37 3.27 3.27 0 00-1.03 2.42 5.66 5.66 0 001.23 3.01 12.86 12.86 0 004.81 4.2 16.49 16.49 0 001.62.6 3.9 3.9 0 001.79.11 2.93 2.93 0 001.92-1.36 2.37 2.37 0 00.17-1.36c-.07-.12-.26-.19-.55-.34z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      +229 01 63 77 65 05
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/merveil.moreo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Facebook className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Facebook</p>
                    <p className="text-sm text-muted-foreground">
                      Merveil Moréo
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/gbohouili-eldo-moreo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      GBOHOUILI Eldo-Moréo
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-xl p-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.name}
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="glass"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="glass"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t.contact.message}
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={t.contact.message}
                  className="glass"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                {t.contact.send}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
