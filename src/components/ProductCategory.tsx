
import { ProductCategory as ProductCategoryType } from "@/lib/data";
import ProductItem from "./ProductItem";

interface ProductCategoryProps {
  category: ProductCategoryType;
}

const ProductCategory = ({ category }: ProductCategoryProps) => {
  return (
    <section id={category.id} className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center mb-10 gap-6">
          <div className="h-48 w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden bg-medical-gray flex-shrink-0">
            <img
              src={category.image}
              alt={category.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // Fallback to category specific image if the image fails to load
                target.src = `https://source.unsplash.com/random/400x400/?medical,${category.title.toLowerCase().replace(/[&\s]/g, '')}`;
              }}
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-medical-blue mb-3">{category.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl">{category.description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {category.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
