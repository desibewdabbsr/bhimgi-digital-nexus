
import React from "react";
import { Button } from "@/components/ui/button";

const Research = () => {
  const researchAreas = [
    {
      title: "Artificial Intelligence",
      description: "Exploring machine learning algorithms and AI applications for business process optimization and automation.",
      image: "https://images.unsplash.com/photo-1677442135096-ba5ba0304ee6?w=600&auto=format&fit=crop&q=60"
    },
    {
      title: "Blockchain Technology",
      description: "Investigating distributed ledger technologies for secure and transparent transaction systems.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format&fit=crop&q=60"
    },
    {
      title: "Cloud Computing",
      description: "Researching scalable cloud solutions and serverless architectures for modern applications.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=60"
    },
    {
      title: "Internet of Things",
      description: "Developing IoT frameworks and solutions for smart devices and connected environments.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Development</h1>
            <p className="text-xl text-gray-200">
              Pioneering innovation through cutting-edge technology research
            </p>
          </div>
        </div>
      </section>

      {/* R&D Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-bhimgi-blue mb-6">Innovation at Our Core</h2>
              <p className="text-gray-700 mb-4">
                At BHIMGI INFO SOLUTIONS, we believe that continuous innovation is essential for staying ahead in the rapidly evolving technology landscape. Our dedicated R&D team works tirelessly to explore emerging technologies and develop groundbreaking solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Through our research initiatives, we aim to solve complex business challenges, create intellectual property, and contribute to the advancement of technology in India and beyond.
              </p>
              <p className="text-gray-700">
                Our R&D efforts are focused on practical applications that can deliver tangible benefits to businesses across various industries.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=60" 
                alt="R&D Laboratory" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section bg-bhimgi-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Research Focus Areas</h2>
            <p className="section-subtitle mx-auto">
              Exploring cutting-edge technologies to develop innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-semibold text-bhimgi-blue mb-3">{area.title}</h3>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Innovation Process</h2>
            <p className="section-subtitle mx-auto">
              How we transform ideas into practical solutions
            </p>
          </div>

          <div className="relative">
            {/* Process timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bhimgi-blue/20"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 text-right">
                  <h3 className="text-xl font-semibold text-bhimgi-blue mb-2">Ideation & Exploration</h3>
                  <p className="text-gray-700">
                    We begin by identifying potential areas of innovation and exploring emerging technologies through research and proof-of-concepts.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 flex md:block justify-start mt-4 md:mt-0">
                  <div className="w-10 h-10 bg-bhimgi-blue rounded-full flex items-center justify-center text-white relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    1
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 text-right order-2 md:order-1">
                  <div className="w-10 h-10 bg-bhimgi-blue rounded-full flex items-center justify-center text-white relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <h3 className="text-xl font-semibold text-bhimgi-blue mb-2">Prototyping & Testing</h3>
                  <p className="text-gray-700">
                    We develop functional prototypes and conduct rigorous testing to validate concepts and refine our approaches.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 text-right">
                  <h3 className="text-xl font-semibold text-bhimgi-blue mb-2">Development & Optimization</h3>
                  <p className="text-gray-700">
                    Successful concepts move into full development, where we optimize for performance, scalability, and user experience.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 flex md:block justify-start mt-4 md:mt-0">
                  <div className="w-10 h-10 bg-bhimgi-blue rounded-full flex items-center justify-center text-white relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    3
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-12 text-right order-2 md:order-1">
                  <div className="w-10 h-10 bg-bhimgi-blue rounded-full flex items-center justify-center text-white relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <h3 className="text-xl font-semibold text-bhimgi-blue mb-2">Market Implementation</h3>
                  <p className="text-gray-700">
                    We integrate proven innovations into our products and services or develop entirely new offerings to meet market needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Gallery */}
      <section className="section bg-bhimgi-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Innovation Gallery</h2>
            <p className="section-subtitle mx-auto">
              Glimpses of our research initiatives and innovative projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60" 
                alt="Data Visualization Research" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-4">
                <h4 className="font-semibold text-bhimgi-blue">Advanced Data Visualization</h4>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581091224003-3e7c92b9efcb?w=600&auto=format&fit=crop&q=60" 
                alt="AI Research" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="font-semibold text-bhimgi-blue">AI Algorithms</h4>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1617791160588-241658c0f566?w=600&auto=format&fit=crop&q=60" 
                alt="Blockchain Research" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="font-semibold text-bhimgi-blue">Blockchain Security</h4>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md col-span-2 md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1599148401005-fe6d7497cb5e?w=600&auto=format&fit=crop&q=60" 
                alt="IoT Research" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="font-semibold text-bhimgi-blue">IoT Prototypes</h4>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md md:col-span-3">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=600&auto=format&fit=crop&q=60" 
                alt="Team Collaboration" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="font-semibold text-bhimgi-blue">R&D Team Collaboration</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-bhimgi-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Us in Innovation</h2>
            <p className="text-xl text-gray-300 mb-8">
              Collaborate with our R&D team to develop cutting-edge solutions for your business challenges
            </p>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <a href="/contact">Discuss R&D Collaboration</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
