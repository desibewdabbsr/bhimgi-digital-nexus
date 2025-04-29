
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex flex-col h-full transition-all hover:shadow-xl">
      <div className="h-48 p-4 bg-gray-50 flex items-center justify-center relative group">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-contain transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-bhimgi-blue">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-bhimgi-blue font-semibold">₹{price.toLocaleString()}</span>
          <Button size="sm" className="gap-2">
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
