
import React from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const itProducts = [
    {
      id: "mouse-1",
      name: "Ergonomic Wireless Mouse",
      description: "Comfortable ergonomic design with silent clicking and high precision tracking. Compatible with Windows and Mac.",
      price: 1200,
      image: "https://placehold.co/400x300?text=Wireless+Mouse",
    },
    {
      id: "mouse-2",
      name: "Gaming Mouse with RGB",
      description: "High-performance gaming mouse with customizable RGB lighting, adjustable DPI, and programmable buttons.",
      price: 2500,
      image: "https://placehold.co/400x300?text=Gaming+Mouse",
    },
    {
      id: "keyboard-1",
      name: "Mechanical Keyboard",
      description: "Premium mechanical keyboard with Cherry MX switches, dedicated media controls, and customizable backlighting.",
      price: 5000,
      image: "https://placehold.co/400x300?text=Mechanical+Keyboard",
    },
    {
      id: "keyboard-2",
      name: "Wireless Keyboard and Mouse Combo",
      description: "Business-ready wireless keyboard and mouse set with long battery life and spill-resistant design.",
      price: 2800,
      image: "https://placehold.co/400x300?text=Keyboard+Mouse+Combo",
    },
    {
      id: "headset-1",
      name: "Professional Headset",
      description: "Noise-cancelling headset with crystal clear microphone, perfect for business calls and online meetings.",
      price: 3500,
      image: "https://placehold.co/400x300?text=Professional+Headset",
    },
    {
      id: "webcam-1",
      name: "HD Webcam",
      description: "Full HD 1080p webcam with auto focus, light correction and built-in microphone for clear video calls.",
      price: 2200,
      image: "https://placehold.co/400x300?text=HD+Webcam",
    },
  ];

  const softwareProducts = [
    {
      id: "software-1",
      name: "Antivirus Premium",
      description: "Complete protection against viruses, malware, ransomware, and online threats with real-time scanning.",
      price: 999,
      image: "https://placehold.co/400x300?text=Antivirus+Software",
    },
    {
      id: "software-2",
      name: "Office Productivity Suite",
      description: "Comprehensive suite of office applications including word processing, spreadsheets, presentations, and more.",
      price: 7500,
      image: "https://placehold.co/400x300?text=Office+Suite",
    },
    {
      id: "software-3",
      name: "Accounting Software",
      description: "Complete accounting solution for small and medium businesses with invoicing, inventory, and tax management.",
      price: 12000,
      image: "https://placehold.co/400x300?text=Accounting+Software",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Products & Solutions</h1>
            <p className="text-xl text-gray-200">
              Quality hardware and software products for your business and personal needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Hardware Products Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Hardware Products</h2>
            <p className="section-subtitle mx-auto">
              High-quality computer peripherals and accessories for better productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {itProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Software Products Section */}
      <section className="section bg-bhimgi-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Software Solutions</h2>
            <p className="section-subtitle mx-auto">
              Reliable software products to enhance your digital workspace
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Enterprise Solutions Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Enterprise Solutions</h2>
            <p className="section-subtitle mx-auto">
              Customized enterprise-grade solutions for your business needs
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-bhimgi-blue mb-4">Custom Enterprise Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Beyond our standard product offerings, we specialize in creating tailored enterprise solutions 
                  that address your specific business challenges.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team works closely with you to understand your requirements and develop customized 
                  hardware and software solutions that align with your business objectives.
                </p>
                <Button asChild>
                  <a href="/contact">Request Enterprise Solution</a>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://placehold.co/600x400?text=Enterprise+Solutions" 
                  alt="Enterprise IT Solutions"
                  className="rounded-lg shadow-sm" 
                />
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-bhimgi-gray p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-bhimgi-blue">Network Infrastructure</h4>
                <p className="text-gray-700 text-sm">Complete networking solutions including hardware, configuration, and maintenance.</p>
              </div>
              <div className="bg-bhimgi-gray p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-bhimgi-blue">Data Storage Solutions</h4>
                <p className="text-gray-700 text-sm">Secure and scalable storage solutions for enterprise data management.</p>
              </div>
              <div className="bg-bhimgi-gray p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-bhimgi-blue">Security Systems</h4>
                <p className="text-gray-700 text-sm">Comprehensive security solutions including hardware and software components.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bulk Order CTA Section */}
      <section className="py-16 bg-bhimgi-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Bulk Orders for Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us for special pricing on bulk orders and customized product bundles
            </p>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <a href="/contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
