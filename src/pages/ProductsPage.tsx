import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CreditCard, Menu, Smartphone, QrCode, BarChart3, Globe, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: CreditCard,
    name: "Mr Card Pro",
    category: "Digital Business Cards",
    description: "The future of networking is here. Create stunning digital business cards with NFC technology, track connections, and never run out of cards again.",
    price: "$29/month",
    features: [
      "Unlimited digital cards",
      "NFC & QR code sharing",
      "Real-time analytics",
      "Custom branding",
      "CRM integration",
      "Email signatures",
      "Contact management",
      "Team collaboration",
    ],
    gradient: "from-accent to-orange-400",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    popular: true,
  },
  {
    icon: Menu,
    name: "Mr Menu Suite",
    category: "Restaurant Technology",
    description: "Complete digital menu solution for modern restaurants. Enable contactless ordering, update menus instantly, and delight your customers.",
    price: "$99/month",
    features: [
      "Unlimited menu items",
      "QR code ordering",
      "Multi-language support",
      "Real-time updates",
      "Order analytics",
      "Kitchen display system",
      "Payment integration",
      "Customer feedback",
    ],
    gradient: "from-emerald-500 to-teal-400",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    popular: false,
  },
];

const features = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Optimized for smartphones and tablets, ensuring perfect experience on any device.",
  },
  {
    icon: QrCode,
    title: "QR & NFC Ready",
    description: "Cutting-edge technology for seamless contactless interactions.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track engagement, connections, and performance with detailed insights.",
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "Multi-language and multi-currency support for international businesses.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant loading and real-time updates for the best user experience.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Mr Card transformed our networking game. The analytics alone have helped us close 30% more deals.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Owner, The Garden Bistro",
    content: "Mr Menu has been a game-changer. Our customers love the digital menu, and we've reduced costs significantly.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "The best investment we've made. Professional, innovative, and incredibly easy to use.",
    rating: 5,
  },
];

const ProductsPage = () => {
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
              Our <span className="text-gradient bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Innovative SaaS solutions that empower businesses to work smarter, faster, and more efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <Card className="overflow-hidden border-2 hover:border-primary transition-all">
                    <div className={`grid lg:grid-cols-2 gap-0`}>
                      <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                        <div className="relative h-64 lg:h-full overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`} />
                        </div>
                      </div>

                      <div className={`p-8 lg:p-12 ${!isEven ? 'lg:order-1' : ''}`}>
                        {product.popular && (
                          <Badge className="mb-4 bg-accent text-accent-foreground">Most Popular</Badge>
                        )}
                        
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient} mb-4`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h2>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                          {product.category}
                        </p>
                        
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        <div className="text-4xl font-bold text-accent mb-6">
                          {product.price}
                          <span className="text-base text-muted-foreground font-normal"> per business</span>
                        </div>

                        <div className="mb-8">
                          <h3 className="font-semibold mb-4 text-foreground">Everything included:</h3>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className={`mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br ${product.gradient} flex-shrink-0`} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground flex-1">
                            Start Free Trial
                          </Button>
                          <Button size="lg" variant="outline" className="border-2 flex-1">
                            View Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed, built right in
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Loved by <span className="text-gradient">Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-primary transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
            Try It Free for 14 Days
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            No credit card required. Start your free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground px-10">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-navy">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
