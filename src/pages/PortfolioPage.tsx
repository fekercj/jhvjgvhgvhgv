import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Web App", "Mobile App", "Mr Card", "Mr Menu", "Enterprise"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web App",
    description: "A comprehensive online shopping platform with advanced inventory management, payment processing, and customer analytics.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    color: "from-blue-500 to-cyan-500",
    stats: { users: "50K+", growth: "+150%", rating: "4.9" },
  },
  {
    title: "Healthcare Management System",
    category: "Enterprise",
    description: "Secure patient management system with telemedicine, appointment scheduling, and electronic health records.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
    color: "from-purple-500 to-pink-500",
    stats: { users: "25K+", growth: "+200%", rating: "5.0" },
  },
  {
    title: "FinTech Analytics Dashboard",
    category: "Web App",
    description: "Real-time financial data visualization with predictive analytics and automated reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Python", "AWS"],
    color: "from-emerald-500 to-teal-500",
    stats: { users: "10K+", growth: "+180%", rating: "4.8" },
  },
  {
    title: "Smart Restaurant Ordering",
    category: "Mr Menu",
    description: "Revolutionary QR code ordering system with kitchen management and real-time order tracking for restaurants.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["Next.js", "Firebase", "QR Codes", "Stripe"],
    color: "from-orange-500 to-red-500",
    stats: { users: "15K+", growth: "+220%", rating: "4.9" },
  },
  {
    title: "Digital Networking Platform",
    category: "Mr Card",
    description: "NFC-enabled digital business card solution with contact management and networking analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["React", "NFC", "Node.js", "MongoDB"],
    color: "from-indigo-500 to-blue-500",
    stats: { users: "30K+", growth: "+175%", rating: "4.7" },
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile App",
    description: "Comprehensive fitness and wellness app with workout tracking, nutrition planning, and social features.",
    image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "HealthKit", "ML"],
    color: "from-pink-500 to-rose-500",
    stats: { users: "100K+", growth: "+300%", rating: "4.9" },
  },
  {
    title: "AI-Powered CRM",
    category: "Enterprise",
    description: "Intelligent customer relationship management with AI-driven insights, automation, and predictive analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL"],
    color: "from-yellow-500 to-orange-500",
    stats: { users: "20K+", growth: "+190%", rating: "5.0" },
  },
  {
    title: "Social Commerce Platform",
    category: "Mobile App",
    description: "Innovative social shopping app combining social media features with seamless in-app purchasing.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop",
    tags: ["Flutter", "Node.js", "AWS", "Stripe"],
    color: "from-violet-500 to-purple-500",
    stats: { users: "80K+", growth: "+250%", rating: "4.8" },
  },
  {
    title: "Supply Chain Management",
    category: "Enterprise",
    description: "End-to-end supply chain visibility with real-time tracking, inventory optimization, and logistics management.",
    image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de4a3?w=800&h=600&fit=crop",
    tags: ["Angular", "Java", "Oracle", "IoT"],
    color: "from-cyan-500 to-blue-500",
    stats: { users: "5K+", growth: "+160%", rating: "4.9" },
  },
];

const PortfolioPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Our <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful projects that demonstrate our expertise in delivering innovative, high-quality solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-background border-b">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Filter className="h-5 w-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-accent hover:bg-accent-hover" : ""}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover-lift bg-card h-full cursor-pointer">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    {/* Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b">
                      <div className="text-center">
                        <div className="text-sm font-bold text-accent">{project.stats.users}</div>
                        <div className="text-xs text-muted-foreground">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-accent">{project.stats.growth}</div>
                        <div className="text-xs text-muted-foreground">Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-accent">{project.stats.rating}</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Link */}
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>View Case Study</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's create something amazing together. Get in touch to discuss your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent hover:bg-accent-hover text-accent-foreground transition-all hover-lift"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-navy transition-all"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
