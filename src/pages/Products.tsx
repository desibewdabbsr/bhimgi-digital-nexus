
import React from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const itProducts = [
    {
      id: "mouse-1",
      name: "Ergonomic Wireless Mouse",
      description: "Comfortable ergonomic design with silent clicking and high precision tracking. Compatible with Windows and Mac.",
      price: 1200,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "mouse-2",
      name: "Gaming Mouse with RGB",
      description: "High-performance gaming mouse with customizable RGB lighting, adjustable DPI, and programmable buttons.",
      price: 2500,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "keyboard-1",
      name: "Mechanical Keyboard",
      description: "Premium mechanical keyboard with Cherry MX switches, dedicated media controls, and customizable backlighting.",
      price: 5000,
      image: "https://images.unsplash.com/photo-1561112078-7d24e041952a?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "keyboard-2",
      name: "Wireless Keyboard and Mouse Combo",
      description: "Business-ready wireless keyboard and mouse set with long battery life and spill-resistant design.",
      price: 2800,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "headset-1",
      name: "Professional Headset",
      description: "Noise-cancelling headset with crystal clear microphone, perfect for business calls and online meetings.",
      price: 3500,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "webcam-1",
      name: "HD Webcam",
      description: "Full HD 1080p webcam with auto focus, light correction and built-in microphone for clear video calls.",
      price: 2200,
      image: "https://images.unsplash.com/photo-1623949556303-b0d17c371ca0?w=600&auto=format&fit=crop&q=60",
    },
  ];

  const softwareProducts = [
    {
      id: "software-1",
      name: "Antivirus Premium",
      description: "Complete protection against viruses, malware, ransomware, and online threats with real-time scanning.",
      price: 999,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "software-2",
      name: "Office Productivity Suite",
      description: "Comprehensive suite of office applications including word processing, spreadsheets, presentations, and more.",
      price: 7500,
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: "software-3",
      name: "Accounting Software",
      description: "Complete accounting solution for small and medium businesses with invoicing, inventory, and tax management.",
      price: 12000,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60",
    },
  ];

  // Gallery items for the product showcase
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1563770660941-10f9f7e73f84?w=600&auto=format&fit=crop&q=60",
      alt: "Modern office workspace with computers"
    },
    {
      src: "https://images.unsplash.com/photo-1591808216268-eb69a945b069?w=600&auto=format&fit=crop&q=60",
      alt: "Server room with network equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1581092921461-39b9d08ed9eb?w=600&auto=format&fit=crop&q=60",
      alt: "Computer hardware components"
    },
    {
      src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&auto=format&fit=crop&q=60",
      alt: "Electronic circuit board close-up"
    }
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
      
      {/* Product Gallery Showcase */}
      <section className="py-12 bg-bhimgi-gray">
        <div className="container-custom">
          <h2 className="section-title text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`overflow-hidden rounded-lg shadow-md ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Categories Section with Tabs */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Our Product Catalog</h2>
            <p className="section-subtitle mx-auto">
              Browse our selection of high-quality hardware and software products
            </p>
          </div>
          
          <Tabs defaultValue="hardware" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="hardware">Hardware Products</TabsTrigger>
              <TabsTrigger value="software">Software Solutions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hardware">
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
            </TabsContent>
            
            <TabsContent value="software">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Enterprise Solutions Section */}
      <section className="section bg-bhimgi-gray">
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60" 
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
