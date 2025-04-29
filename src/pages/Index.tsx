
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Computer, Smartphone, ShoppingBag, Code, LineChart, HeadphonesIcon } from "lucide-react";

const Index = () => {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="section bg-bhimgi-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              We provide end-to-end IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Software Development"
              description="Custom software solutions designed to meet your specific business requirements and challenges."
              icon={<Code className="h-10 w-10" />}
              link="/services#software-development"
            />
            
            <ServiceCard
              title="Web Applications"
              description="Modern, responsive web applications with intuitive user experiences and powerful functionality."
              icon={<Computer className="h-10 w-10" />}
              link="/services#web-applications"
            />
            
            <ServiceCard
              title="Mobile Apps"
              description="Cross-platform mobile applications that deliver seamless experiences across iOS and Android devices."
              icon={<Smartphone className="h-10 w-10" />}
              link="/services#mobile-apps"
            />
            
            <ServiceCard
              title="E-commerce Solutions"
              description="Complete e-commerce solutions with secure payment gateways, inventory management, and customer analytics."
              icon={<ShoppingBag className="h-10 w-10" />}
              link="/services#e-commerce"
            />
            
            <ServiceCard
              title="IT Consulting"
              description="Strategic IT consulting to help you leverage technology for competitive advantage and business growth."
              icon={<LineChart className="h-10 w-10" />}
              link="/services#consulting"
            />
            
            <ServiceCard
              title="Support & Maintenance"
              description="Reliable technical support and maintenance services to ensure your systems run smoothly and efficiently."
              icon={<HeadphonesIcon className="h-10 w-10" />}
              link="/services#support"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About BHIMGI INFO SOLUTIONS</h2>
              <p className="text-gray-600 mb-6">
                BHIMGI INFO SOLUTIONS PRIVATE LIMITED is a leading technology company based in Bhadrak, Odisha, 
                specializing in software development, IT services, consulting, and electronic products.
              </p>
              <p className="text-gray-600 mb-6">
                We're committed to delivering innovative solutions that help businesses transform their 
                operations, improve efficiency, and achieve their strategic goals.
              </p>
              <p className="text-gray-600 mb-8">
                With a focus on R&D and collaboration, we're constantly pushing the boundaries of what's 
                possible in technology to deliver exceptional value to our clients.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="bg-bhimgi-lightGray rounded-lg p-8 border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <h3 className="text-4xl font-bold text-bhimgi-accent mb-2">10+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-4xl font-bold text-bhimgi-accent mb-2">100+</h3>
                  <p className="text-gray-600">Satisfied Clients</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-4xl font-bold text-bhimgi-accent mb-2">250+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="text-4xl font-bold text-bhimgi-accent mb-2">20+</h3>
                  <p className="text-gray-600">IT Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-bhimgi-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="BHIMGI INFO SOLUTIONS delivered a custom software solution that transformed our business operations. Their team was professional, responsive, and delivered exactly what we needed."
              name="Rahul Sharma"
              position="CTO"
              company="TechInnovate Ltd."
            />
            
            <TestimonialCard
              quote="The mobile app developed by BHIMGI has helped us reach new customers and streamline our ordering process. We've seen a 40% increase in online sales since implementation."
              name="Priya Patel"
              position="Marketing Director"
              company="FoodExpress"
            />
            
            <TestimonialCard
              quote="Their IT consulting services provided valuable insights that helped us make strategic technology decisions. The ROI has been exceptional, and we continue to work with them on new projects."
              name="Amit Singh"
              position="CEO"
              company="GlobalRetail Solutions"
            />
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-bhimgi-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with Technology?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how our IT solutions can help you achieve your business goals
            </p>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
