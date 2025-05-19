
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-kraft-light/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-6xl md:text-8xl font-bold text-festive-red">404</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <Button asChild className="bg-festive-red hover:bg-festive-red/90">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
