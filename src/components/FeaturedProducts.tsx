
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Cake Box",
    description: "Elegant white cake box with window",
    price: "₹120 onwards",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1830&auto=format&fit=crop",
    category: "cake-boxes",
  },
  {
    id: 2,
    name: "Cupcake Gift Box",
    description: "Box for 6 cupcakes with insert",
    price: "₹150 onwards",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop",
    category: "cupcake-holders",
  },
  {
    id: 3,
    name: "Festive Gift Box",
    description: "Special holiday themed packaging",
    price: "₹200 onwards",
    image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=1828&auto=format&fit=crop",
    category: "festive-custom",
  },
  {
    id: 4,
    name: "Cookie Box",
    description: "Kraft paper box for cookies and treats",
    price: "₹80 onwards",
    image: "https://images.unsplash.com/photo-1586985290301-8db40143d525?q=80&w=2070&auto=format&fit=crop",
    category: "brownie-boxes",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">Bestselling Products</h2>
            <p className="text-gray-600">Our most popular packaging solutions</p>
          </div>
          <Link 
            to="/category/all"
            className="inline-flex items-center text-gray-800 hover:text-festive-red font-medium mt-4 md:mt-0"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-lg mb-1 group-hover:text-festive-red transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{product.price}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/custom-orders?product=${product.id}`}>
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Enquire
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
