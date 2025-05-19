
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Seetha Bakery",
    role: "Partner Bakery",
    comment: "Box of Wishes has been our packaging partner for over 2 years. Their cake boxes are beautiful and sturdy, and our customers love them!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sweet Delights",
    role: "Home Baker",
    comment: "The packaging from Box of Wishes elevates my homemade cakes and cookies to a professional level. I get compliments on the boxes as much as my baking!",
    rating: 5,
  },
  {
    id: 3,
    name: "Celebration Events",
    role: "Event Planner",
    comment: "We use their festive boxes for all our corporate gifting. The custom options are endless and the quality is exceptional.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Client Love</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our packaging.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-kraft-light/30 rounded-xl p-8 md:p-12">
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 italic mb-8">
              "{testimonials[currentIndex].comment}"
            </p>
            
            <div>
              <p className="font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-300 hover:bg-kraft-light/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-festive-red' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-300 hover:bg-kraft-light/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
