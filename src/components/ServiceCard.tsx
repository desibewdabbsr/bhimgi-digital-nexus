
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, link, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col h-full",
        className
      )}
    >
      <div className="text-bhimgi-accent mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-bhimgi-blue">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link
        to={link}
        className="text-bhimgi-lightBlue font-medium hover:text-bhimgi-blue hover:underline mt-auto inline-block"
      >
        Learn more
      </Link>
    </div>
  );
};

export default ServiceCard;
