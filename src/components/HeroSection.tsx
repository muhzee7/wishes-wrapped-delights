
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-kraft-light py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-6">
              Premium Packaging <br />
              <span className="text-festive-red">Made With Love</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Beautiful, eco-friendly packaging solutions for bakeries, cafes, and special occasions. Handcrafted with attention to every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-festive-red hover:bg-festive-red/90 text-white px-8 py-6 rounded-full text-lg"
                asChild
              >
                <Link to="/custom-orders">Get Custom Quote</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-400 hover:bg-kraft-light/50 px-8 py-6 rounded-full text-lg flex items-center"
                asChild
              >
                <Link to="/gallery">
                  Browse Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1830&auto=format&fit=crop" 
                  alt="Elegant cake box" 
                  className="w-full h-60 object-cover" 
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md transform translate-y-8 hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?q=80&w=1830&auto=format&fit=crop" 
                  alt="Gift packaging" 
                  className="w-full h-60 object-cover" 
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pastel-pink rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pastel-mint rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
