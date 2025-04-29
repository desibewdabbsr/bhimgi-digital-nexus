
import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BHIMGI INFO</h1>
            <p className="text-xl text-gray-200">
              Your trusted partner in IT and technology solutions since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bhimgi-blue mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in Bhadrak, Odisha, BHIMGI INFO SOLUTIONS PRIVATE LIMITED has grown from a small IT services provider to a comprehensive technology solutions company with a vision to transform businesses through technology.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have established ourselves as a reliable partner for businesses seeking innovative software solutions, quality IT products, and expert consulting services.
              </p>
              <p className="text-gray-700">
                Our journey has been defined by constant innovation, customer-centricity, and ethical business practices that have helped us build long-lasting relationships with our clients across India.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60" 
                alt="BHIMGI Team Meeting" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section bg-bhimgi-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-bhimgi-blue mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver innovative and high-quality IT solutions that empower businesses to achieve their goals efficiently and effectively. We strive to be a catalyst for technological advancement and digital transformation for our clients.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-bhimgi-blue mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a globally recognized leader in IT solutions, known for our innovation, quality, and customer-centric approach. We aim to expand our presence across India and internationally, while maintaining our core values of excellence and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-bhimgi-blue mb-3">Innovation</h3>
              <p className="text-gray-700">
                We constantly explore new technologies and methodologies to bring cutting-edge solutions to our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-bhimgi-blue mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in every project we undertake, ensuring the highest quality standards in our deliverables.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-bhimgi-blue mb-3">Integrity</h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and ethical standards that earn our clients' trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-bhimgi-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle mx-auto">
              The talented professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60" 
                alt="CEO" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-bhimgi-blue mb-1">Rahul Sharma</h3>
                <p className="text-bhimgi-accent mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of experience in the IT industry, Rahul leads our company with vision and strategic insight.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60" 
                alt="CTO" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-bhimgi-blue mb-1">Priya Patel</h3>
                <p className="text-bhimgi-accent mb-3">Chief Technical Officer</p>
                <p className="text-gray-600 text-sm">
                  Priya oversees our technical operations and R&D initiatives, bringing innovation to our solutions.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60" 
                alt="COO" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-bhimgi-blue mb-1">Vikram Singh</h3>
                <p className="text-bhimgi-accent mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  Vikram ensures smooth operations and delivery excellence across all our projects and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-bhimgi-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Learn more about how our solutions can transform your business
            </p>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
