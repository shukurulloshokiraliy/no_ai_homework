import React from 'react';
import greas from '../assets/images/greas.svg';
import plant_piase from '../assets/images/plant_piase.svg';
import gardener from '../assets/images/gardener.svg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: '12.09.2021',
      title: 'How to plant spinach correctly in winter',
      excerpt: 'In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...',
      image: greas,
    },
    {
      id: 2,
      date: '12.09.2021',
      title: 'How to plant spinach correctly in winter',
      image: plant_piase,
    },
    {
      id: 3,
      date: '12.09.2021',
      title: 'How to plant spinach correctly in winter',
      image: plant_piase,
    },
    {
      id: 4,
      date: '12.09.2021',
      title: 'How to plant spinach correctly in winter',
      excerpt: 'In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...',
      image: gardener,
    }
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Our blog.
          </h2>
          <a 
            href="#blog" 
            className="text-green-600 hover:text-green-700 font-medium text-base transition-colors"
          >
            Go to our blog
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:row-span-2 bg-green-50 rounded-3xl p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-5">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{blogPosts[0].date}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-tight">
                {blogPosts[0].title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              
              <button className="px-8 py-3 bg-white text-green-600 hover:bg-gray-50 font-semibold text-base transition-colors rounded-lg">
                Read
              </button>
            </div>
            
            <div className="flex justify-end mt-8">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-72 h-auto object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="lg:col-span-1 bg-gray-100 rounded-3xl p-8 flex flex-col sm:flex-row lg:flex-row justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{blogPosts[3].date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight pr-4">
                  {blogPosts[3].title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed pr-4">
                  {blogPosts[3].excerpt}
                </p>
                
                <button className="px-6 py-2 bg-white text-green-600 hover:bg-gray-50 font-semibold text-base transition-colors rounded-lg">
                  Read
                </button>
              </div>
              
              <div className="flex items-end justify-end mt-6 sm:mt-0 lg:mt-0">
                <img 
                  src={blogPosts[3].image} 
                  alt={blogPosts[3].title}
                  className="w-48 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[blogPosts[1], blogPosts[2]].map((post) => (
              <div 
                key={post.id}
                className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-5 leading-tight">
                    {post.title}
                  </h3>
                  
                  <button className="px-6 py-2 bg-white text-green-600 hover:bg-gray-50 font-semibold text-base transition-colors rounded-lg">
                    Read
                  </button>
                </div>
                
                <div className="flex justify-center mt-8">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-40 h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;