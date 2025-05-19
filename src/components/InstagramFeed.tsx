
import { Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// In a real implementation, you would fetch these from Instagram API
const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1830&auto=format&fit=crop',
    link: 'https://www.instagram.com/p/example1/',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop',
    link: 'https://www.instagram.com/p/example2/',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1607083207685-aaf05f2c908c?q=80&w=1830&auto=format&fit=crop',
    link: 'https://www.instagram.com/p/example3/',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1586985290301-8db40143d525?q=80&w=2070&auto=format&fit=crop',
    link: 'https://www.instagram.com/p/example4/',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=1828&auto=format&fit=crop',
    link: 'https://www.instagram.com/p/example5/',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1545071504-0693eede5f7b?q=80&w=2070&auto=format&fit=crop',
    link: 'https://www.instagram.com/p/example6/',
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-kraft-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Follow Our Journey</h2>
          <a 
            href="https://www.instagram.com/box_of_wishes/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 hover:text-festive-red transition-colors"
          >
            <Instagram className="h-5 w-5 mr-2" />
            <span className="font-medium">@box_of_wishes</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative aspect-square overflow-hidden rounded-md"
            >
              <img
                src={post.imageUrl}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-gray-800 hover:text-festive-red font-medium"
          >
            View Our Full Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
