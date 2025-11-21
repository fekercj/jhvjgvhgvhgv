import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { Target, Lightbulb, Users, Award, TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships through transparent collaboration.",
  },
  {
    icon: Shield,
    title: "Quality & Security",
    description: "We maintain the highest standards of code quality, security, and performance in every project.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We're committed to learning, adapting, and staying ahead of industry trends.",
  },
];

const milestones = [
  { year: "2014", event: "Company Founded", description: "Mr Tech was born with a vision to revolutionize software development" },
  { year: "2016", event: "100+ Projects Delivered", description: "Reached our first major milestone serving startups and enterprises" },
  { year: "2019", event: "Mr Card Launched", description: "Introduced our innovative digital business card solution" },
  { year: "2021", event: "Mr Menu Released", description: "Transformed the restaurant industry with smart digital menus" },
  { year: "2023", event: "500+ Happy Clients", description: "Celebrating partnerships with businesses worldwide" },
  { year: "2025", event: "Leading Innovation", description: "Pioneering AI-powered solutions and expanding globally" },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team Members" },
  { value: "10+", label: "Years of Excellence" },
];

const About = () => {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Mr Tech</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're not just building software—we're crafting digital experiences that transform businesses and empower innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-accent" />
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Mr Tech, we believe technology should be accessible, innovative, and transformative. Our mission is to empower businesses of all sizes with custom software solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our specialized brands—Mr Tech, Mr Card, and Mr Menu—we deliver comprehensive technology solutions that address real-world challenges with creativity and technical excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center border-2 hover:border-primary transition-all hover-lift">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-2 hover:border-primary transition-all hover-lift">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-accent mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A decade of innovation, growth, and success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-8 relative"
              >
                {/* Timeline Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-[47px] top-16 w-0.5 h-full bg-border" />
                )}

                {/* Year Badge */}
                <div className="flex-shrink-0 w-24 pt-1">
                  <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-sm">
                    {milestone.year}
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 p-6 border-2 hover:border-primary transition-all">
                  <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

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
          <Award className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's turn your vision into reality. Join hundreds of satisfied clients who trust Mr Tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent hover:bg-accent-hover text-accent-foreground transition-all hover-lift"
            >
              Get Started Today
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-navy transition-all"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
