import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code2, CreditCard, Menu, Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    name: "Mr Tech",
    tagline: "Enterprise Software Solutions",
    description: "Transform your business with custom software that scales. From startups to enterprises, we build robust applications tailored to your unique needs.",
    features: [
      "Custom Software Development",
      "Web & Mobile Applications",
      "Cloud Solutions & DevOps",
      "API Integration & Development",
      "Legacy System Modernization",
      "Technical Consulting",
    ],
    color: "primary",
    gradient: "from-primary to-primary-light",
    benefits: [
      "Scalable architecture designed for growth",
      "Agile development with rapid iterations",
      "Full-stack expertise across technologies",
      "24/7 support and maintenance",
    ],
  },
  {
    icon: CreditCard,
    name: "Mr Card",
    tagline: "Digital Business Cards",
    description: "Say goodbye to paper business cards. Mr Card revolutionizes networking with smart, eco-friendly digital solutions that make lasting impressions.",
    features: [
      "Smart Digital Business Cards",
      "NFC & QR Code Technology",
      "Real-time Contact Sharing",
      "Analytics & Insights",
      "Custom Branding & Design",
      "CRM Integration",
    ],
    color: "accent",
    gradient: "from-accent to-orange-400",
    benefits: [
      "Instant contact sharing with one tap",
      "Track engagement and connections",
      "Update your details anytime",
      "Eco-friendly and cost-effective",
    ],
  },
  {
    icon: Menu,
    name: "Mr Menu",
    tagline: "Smart Restaurant Technology",
    description: "Elevate the dining experience with intelligent digital menus. Perfect for restaurants, cafes, and hospitality businesses looking to modernize.",
    features: [
      "Interactive Digital Menus",
      "QR Code Ordering System",
      "Menu Management Dashboard",
      "Multi-language Support",
      "Real-time Updates",
      "Order Analytics",
    ],
    color: "emerald-500",
    gradient: "from-emerald-500 to-teal-400",
    benefits: [
      "Reduce printing costs and waste",
      "Update menus instantly",
      "Enhance customer experience",
      "Increase order efficiency",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We dive deep into understanding your business, goals, and challenges." },
  { step: "02", title: "Strategy", description: "Create a comprehensive roadmap and technical architecture." },
  { step: "03", title: "Design", description: "Craft beautiful, user-centric interfaces that delight users." },
  { step: "04", title: "Development", description: "Build with best practices, clean code, and agile methodology." },
  { step: "05", title: "Testing", description: "Rigorous QA to ensure flawless functionality and performance." },
  { step: "06", title: "Launch & Support", description: "Deploy with confidence and provide ongoing maintenance." },
];

const ServicesPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-primary-dark to-navy">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
              <Sparkles className="h-4 w-4 text-primary-light" />
              <span className="text-sm font-medium text-primary-light">Three Brands, One Commitment</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-3">{service.name}</h2>
                  <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                    {service.tagline}
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Key Benefits:</h3>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground group">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className={isEven ? '' : 'lg:order-1'}>
                  <Card className="p-8 border-2 hover:border-primary transition-all hover-lift">
                    <h3 className="text-xl font-bold mb-6">What We Offer:</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br ${service.gradient} flex-shrink-0`} />
                          <span className="text-foreground font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-primary transition-all hover-lift relative overflow-hidden group">
                  <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-accent font-bold text-2xl mb-3">{step.step}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy via-primary-dark to-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent hover:bg-accent-hover text-accent-foreground transition-all hover-lift"
            >
              Get a Free Consultation
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-navy transition-all"
            >
              See Our Work
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
