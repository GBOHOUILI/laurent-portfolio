import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget; // TypeScript sait que c’est HTMLFormElement
  if (!form) return; // sécurité au cas où

  emailjs.sendForm(
    "service_24wuyah",
    "template_htmmpug",
    e.currentTarget,
    "jZcpIjOQTZZ_llC1E"
  ).then(() => {
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    form.reset(); 
;
  }).catch((err) => {
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
          <p className="text-xl text-muted-foreground">
            {t.contact.subtitle}
          </p>
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
                    <p className="text-sm text-muted-foreground">{t.contact.location}</p>
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
                    <p className="text-sm text-muted-foreground">eldomoreogbohouili@gmail.com</p>
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
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-xl p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
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
