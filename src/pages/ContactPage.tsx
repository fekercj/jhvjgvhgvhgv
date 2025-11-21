import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: MessageSquare,
    title: "Quick Response",
    description: "We typically respond to inquiries within 24 hours on business days.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book a consultation at a time that works best for you.",
  },
  {
    icon: CheckCircle2,
    title: "No Obligation",
    description: "Free consultation with no strings attached. Let's explore possibilities.",
  },
];

const ContactPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-primary-dark to-navy">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a question or ready to start your project? We're here to help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center border-2 hover:border-primary transition-all hover-lift h-full">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* Map Section (Optional) */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-2">
              <div className="h-96 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <p className="text-xl font-semibold text-foreground">San Francisco, CA</p>
                  <p className="text-muted-foreground">Proudly serving clients worldwide</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
