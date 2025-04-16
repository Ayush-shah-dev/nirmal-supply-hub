
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Product, WHATSAPP_NUMBER } from "@/lib/data";
import { MessageSquare } from "lucide-react";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const handleContactClick = () => {
    const message = encodeURIComponent(product.whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-medical-gray">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Fallback to medical category specific image if the product image fails to load
            target.src = `https://source.unsplash.com/random/300x200/?medical,${product.name.toLowerCase().replace(/[&\s]/g, '')}`;
          }}
        />
      </div>
      <CardContent className="flex-grow pt-6">
        <CardTitle className="text-xl font-semibold text-medical-blue">{product.name}</CardTitle>
        <CardDescription className="mt-2 text-gray-600">{product.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-medical-teal hover:bg-medical-blue transition-colors" 
          onClick={handleContactClick}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Contact for Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
