
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProductCategories from "../components/ProductCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import InstagramFeed from "../components/InstagramFeed";
import Testimonials from "../components/Testimonials";
import CustomOrderForm from "../components/CustomOrderForm";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <ProductCategories />
        
        <FeaturedProducts />
        
        {/* Call to Action Section */}
        <section className="py-16 bg-kraft-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Need Custom Packaging?
                </h2>
                <p className="text-gray-700 mb-6">
                  We specialize in creating custom packaging solutions for your business. 
                  Tell us what you need and we'll craft the perfect packaging for your products.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-festive-red">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Custom Sizes & Designs</h4>
                      <p className="text-gray-600">Tailored to your exact specifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-festive-red">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Bulk Orders Welcome</h4>
                      <p className="text-gray-600">Special pricing for larger quantities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-festive-red">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Fast Turnaround</h4>
                      <p className="text-gray-600">Quick production for urgent requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <CustomOrderForm />
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        <InstagramFeed />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
