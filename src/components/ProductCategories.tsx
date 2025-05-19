
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'cake-boxes',
    name: 'Cake Boxes',
    description: 'Elegant boxes for cakes of all sizes',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1830&auto=format&fit=crop',
    color: 'bg-pastel-pink',
  },
  {
    id: 'brownie-boxes',
    name: 'Brownie Boxes',
    description: 'Perfect packaging for brownies and cookies',
    image: 'https://images.unsplash.com/photo-1586985290301-8db40143d525?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-pastel-yellow',
  },
  {
    id: 'cupcake-holders',
    name: 'Cupcake Holders',
    description: 'Carry your cupcakes in style',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop',
    color: 'bg-pastel-mint',
  },
  {
    id: 'festive-custom',
    name: 'Festive & Custom',
    description: 'Special packaging for festive occasions',
    image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=1828&auto=format&fit=crop',
    color: 'bg-pastel-blue',
  },
  {
    id: 'ribbons',
    name: 'Ribbons & Accessories',
    description: 'Add the perfect finishing touch',
    image: 'https://images.unsplash.com/photo-1545071504-0693eede5f7b?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-kraft-light',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful range of packaging solutions crafted with care and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              className="group relative block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className={`${category.color} p-5 relative`}>
                <h3 className="text-xl font-medium">{category.name}</h3>
                <p className="text-gray-600 mt-1">{category.description}</p>
                <div className="flex items-center justify-end mt-3 text-gray-800 font-medium">
                  <span>Explore</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
