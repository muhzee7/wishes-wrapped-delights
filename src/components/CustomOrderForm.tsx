
import { useState } from "react";
import { CalendarIcon, Download, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";

const CustomOrderForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Received!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-semibold mb-6">Request a Custom Quote</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Full Name" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name</Label>
            <Input id="businessName" placeholder="Your Business Name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Your Phone Number" required />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="productType">Product Type</Label>
          <select 
            id="productType" 
            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-festive-red focus:border-transparent"
            required
          >
            <option value="">Select a product type</option>
            <option value="cake-boxes">Cake Boxes</option>
            <option value="brownie-boxes">Brownie Boxes</option>
            <option value="cupcake-holders">Cupcake Holders</option>
            <option value="festive-boxes">Festive Boxes</option>
            <option value="ribbons">Ribbons & Accessories</option>
            <option value="custom">Custom Order</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="quantity">Estimated Quantity</Label>
          <Input id="quantity" type="number" placeholder="Quantity" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="deliveryDate">Required By Date</Label>
          <div className="relative">
            <Input 
              id="deliveryDate" 
              type="date" 
              className="w-full" 
            />
            <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="details">Order Details</Label>
          <Textarea 
            id="details" 
            placeholder="Describe your requirements, dimensions, colors, etc."
            rows={5}
            required
          />
        </div>
        
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button 
            type="button" 
            variant="outline" 
            className="w-full sm:w-auto flex items-center"
            asChild
          >
            <a href="/catalog.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download Catalog
            </a>
          </Button>
          
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-festive-red hover:bg-festive-red/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : 'Submit Inquiry'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomOrderForm;
