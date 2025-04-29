
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex flex-col h-full">
      <div className="h-48 p-4 bg-gray-50 flex items-center justify-center">
        <img 
          src={image} 
          alt={name} 
          className="h-full object-contain"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-bhimgi-blue">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-bhimgi-blue font-semibold">₹{price.toLocaleString()}</span>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
