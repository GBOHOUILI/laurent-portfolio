import { motion } from 'framer-motion';
import { Code, Brain, BarChart3, Workflow } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t.services.web,
      description: t.services.webDesc,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: t.services.ai,
      description: t.services.aiDesc,
      color: 'from-primary to-primary-glow'
    },
    {
      icon: BarChart3,
      title: t.services.data,
      description: t.services.dataDesc,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Workflow,
      title: t.services.automation,
      description: t.services.automationDesc,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-strong rounded-xl p-6 text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
