import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

// Composant d'animation de fond
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let fishes = [];

    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Classe Particule
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(100, 181, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Classe Poisson
    // class Fish {
    //   constructor() {
    //     this.x = Math.random() * canvas.width;
    //     this.y = Math.random() * canvas.height;
    //     this.size = Math.random() * 20 + 15;
    //     this.speedX = Math.random() * 1.5 + 0.5;
    //     this.speedY = (Math.random() - 0.5) * 0.3;
    //     this.angle = 0;
    //     this.tailAngle = 0;
    //     this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
    //     this.direction = Math.random() > 0.5 ? 1 : -1;
    //     if (this.direction === -1) {
    //       this.x = canvas.width;
    //       this.speedX *= -1;
    //     }
    //   }

    //   update() {
    //     this.x += this.speedX;
    //     this.y += this.speedY;
    //     this.tailAngle += 0.15;

    //     // Ondulation légère
    //     this.y += Math.sin(this.angle) * 0.3;
    //     this.angle += 0.05;

    //     // Réapparaître de l'autre côté
    //     if (this.speedX > 0 && this.x > canvas.width + 50) {
    //       this.x = -50;
    //       this.y = Math.random() * canvas.height;
    //     }
    //     if (this.speedX < 0 && this.x < -50) {
    //       this.x = canvas.width + 50;
    //       this.y = Math.random() * canvas.height;
    //     }

    //     // Limites verticales
    //     if (this.y > canvas.height - 50) this.speedY = -Math.abs(this.speedY);
    //     if (this.y < 50) this.speedY = Math.abs(this.speedY);
    //   }

    //   draw() {
    //     ctx.save();
    //     ctx.translate(this.x, this.y);
        
    //     // Miroir si le poisson va vers la gauche
    //     if (this.speedX < 0) {
    //       ctx.scale(-1, 1);
    //     }

    //     // Corps du poisson
    //     ctx.fillStyle = this.color;
    //     ctx.beginPath();
    //     ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
    //     ctx.fill();

    //     // Queue
    //     const tailSwing = Math.sin(this.tailAngle) * 10;
    //     ctx.beginPath();
    //     ctx.moveTo(-this.size, 0);
    //     ctx.lineTo(-this.size - 15, -10 + tailSwing);
    //     ctx.lineTo(-this.size - 15, 10 + tailSwing);
    //     ctx.closePath();
    //     ctx.fill();

    //     // Oeil
    //     ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    //     ctx.beginPath();
    //     ctx.arc(this.size * 0.5, -this.size * 0.2, this.size * 0.15, 0, Math.PI * 2);
    //     ctx.fill();
        
    //     ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    //     ctx.beginPath();
    //     ctx.arc(this.size * 0.55, -this.size * 0.2, this.size * 0.08, 0, Math.PI * 2);
    //     ctx.fill();

    //     // Nageoires
    //     ctx.fillStyle = this.color;
    //     ctx.globalAlpha = 0.7;
    //     ctx.beginPath();
    //     ctx.ellipse(0, this.size * 0.5, this.size * 0.3, this.size * 0.5, Math.PI / 6, 0, Math.PI * 2);
    //     ctx.fill();

    //     ctx.restore();
    //   }
    // }

    // Initialiser les particules
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    // Initialiser les poissons
    // for (let i = 0; i < 6; i++) {
    //   fishes.push(new Fish());
    // }

    // Fonction d'animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessiner et mettre à jour les particules
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Dessiner et mettre à jour les poissons
      fishes.forEach(fish => {
        fish.update();
        fish.draw();
      });

      // Connecter les particules proches
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(100, 181, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

export const Hero = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const fullText = t.hero.description;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      
      {/* Canvas d'animation avec particules et poissons */}
      <AnimatedBackground />
      
      {/* Floating orbs for visual effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-lg text-muted-foreground">{t.hero.greeting}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Eldo-Moréo{' '}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              GBOHOUILI
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8"
          >
            {t.hero.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 min-h-[60px]"
          >
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              {t.hero.cta1}
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.hero.cta2}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="#" download>
                <Download className="mr-2 h-5 w-5" />
                {t.hero.downloadCV}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <a
              href="https://github.com/GBOHOUILI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:eldogbohouili@egmail.com"
              className="p-3 rounded-full glass hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </motion.div>
    </section>
  );
};