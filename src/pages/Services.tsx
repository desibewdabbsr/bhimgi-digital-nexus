
import React from "react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Monitor, Code, Database, MessageCircle, Shield, Settings } from "lucide-react";

const Services = () => {
  const servicesList = [
    {
      title: "Software Development",
      description: "Custom software solutions designed to address your specific business challenges and improve operational efficiency.",
      icon: <Code size={36} />,
      link: "/services#software-development"
    },
    {
      title: "Web Application Development",
      description: "Responsive, feature-rich web applications that deliver exceptional user experiences across all devices.",
      icon: <Monitor size={36} />,
      link: "/services#web-development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and extend your digital presence.",
      icon: <Monitor size={36} />,
      link: "/services#mobile-development"
    },
    {
      title: "IT Consulting",
      description: "Strategic guidance on technology adoption, digital transformation, and IT infrastructure optimization.",
      icon: <MessageCircle size={36} />,
      link: "/services#it-consulting"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your business data and systems from evolving threats.",
      icon: <Shield size={36} />,
      link: "/services#cybersecurity"
    },
    {
      title: "Data Management",
      description: "Database design, migration, and management services to help you harness the power of your data.",
      icon: <Database size={36} />,
      link: "/services#data-management"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle mx-auto">
              Explore our wide range of IT services and solutions designed to help your business thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section bg-bhimgi-gray" id="process">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Service Process</h2>
            <p className="section-subtitle mx-auto">
              How we work with you to deliver exceptional solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="w-12 h-12 flex items-center justify-center bg-bhimgi-blue text-white rounded-full mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-bhimgi-blue mb-3">Discover</h3>
              <p className="text-gray-700">
                We begin by understanding your business needs, challenges, and objectives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-bhimgi-blue text-white rounded-full mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-bhimgi-blue mb-3">Plan</h3>
              <p className="text-gray-700">
                We create a detailed roadmap and strategy tailored to your specific requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-bhimgi-blue text-white rounded-full mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-bhimgi-blue mb-3">Execute</h3>
              <p className="text-gray-700">
                Our expert team develops and implements the solution with precision and care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-bhimgi-blue text-white rounded-full mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-bhimgi-blue mb-3">Support</h3>
              <p className="text-gray-700">
                We provide ongoing maintenance and support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="section" id="software-development">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bhimgi-blue mb-6">Software Development</h2>
              <p className="text-gray-700 mb-4">
                Our software development services focus on creating custom solutions that address your unique business challenges and opportunities. We combine technical expertise with industry knowledge to deliver software that drives real business value.
              </p>
              <p className="text-gray-700 mb-6">
                From requirements analysis and architecture design to development, testing, and deployment, our comprehensive approach ensures high-quality, reliable software solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-bhimgi-accent/20 p-2 rounded-full mr-4">
                    <Settings className="text-bhimgi-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Enterprise Software Solutions</h4>
                    <p className="text-gray-600 text-sm">Scalable and robust applications for complex business operations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-bhimgi-accent/20 p-2 rounded-full mr-4">
                    <Settings className="text-bhimgi-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Legacy System Modernization</h4>
                    <p className="text-gray-600 text-sm">Updating and improving existing systems for enhanced performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-bhimgi-accent/20 p-2 rounded-full mr-4">
                    <Settings className="text-bhimgi-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Integration Services</h4>
                    <p className="text-gray-600 text-sm">Connecting different applications and systems for seamless operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60" 
                alt="Software Development" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-bhimgi-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with our services
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
            <p className="text-lg italic mb-6">
              "BHIMGI INFO Solutions delivered an exceptional software solution that has significantly improved our operational efficiency. Their team was professional, responsive, and truly understood our business needs."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60" 
                alt="Client" 
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold">Anita Desai</h4>
                <p className="text-sm text-gray-300">CEO, TechVantage Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bhimgi-blue mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today to discuss how our services can address your specific needs
            </p>
            <Button asChild>
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
