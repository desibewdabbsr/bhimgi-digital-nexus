
import React from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team for any inquiries or support
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-bhimgi-blue mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you're interested in our services, products, or have questions about how we can help your business, 
                we'd love to hear from you. Fill out the form, and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-bhimgi-gray p-3 rounded-full text-bhimgi-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-bhimgi-blue">Our Location</h3>
                    <p className="text-gray-700">Bhadrak, Odisha, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-bhimgi-gray p-3 rounded-full text-bhimgi-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-bhimgi-blue">Email</h3>
                    <a href="mailto:support@bhimgiinfosolutions.work.gb" className="text-gray-700 hover:text-bhimgi-accent">
                      support@bhimgiinfosolutions.work.gb
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-bhimgi-gray p-3 rounded-full text-bhimgi-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-bhimgi-blue">Phone</h3>
                    <p className="text-gray-700">Contact form preferred</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-bhimgi-blue mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold text-bhimgi-blue mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-bhimgi-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find quick answers to common questions about our services and products
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-bhimgi-blue mb-2">What services does BHIMGI INFO SOLUTIONS offer?</h3>
              <p className="text-gray-700">
                We offer a comprehensive range of IT services including software development, web and mobile applications, 
                IT consulting, e-commerce solutions, and technical support. We also provide electronic products and custom 
                enterprise solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-bhimgi-blue mb-2">Do you provide services to international clients?</h3>
              <p className="text-gray-700">
                Yes, we serve both domestic and international clients. Our team is equipped to work across different time zones 
                and can communicate effectively in English to ensure smooth project delivery regardless of location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-bhimgi-blue mb-2">What is your refund policy?</h3>
              <p className="text-gray-700">
                We have a comprehensive refund policy for our products and services. For detailed information, please visit 
                our <a href="/refund-policy" className="text-bhimgi-accent hover:underline">Refund Policy</a> page.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-bhimgi-blue mb-2">How can I get a quote for my project?</h3>
              <p className="text-gray-700">
                You can request a quote by filling out our contact form with details about your project requirements. 
                Our team will review your needs and get back to you with a customized proposal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
