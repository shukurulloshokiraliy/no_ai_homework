import React from 'react';
import Female_Gardener from '../assets/images/Female_Gardener.svg';

const Seedra = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Seedra helps to grow fast and efficiant
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.
            </p>
            
            <p className="text-gray-600 leading-relaxed italic">
              Your easy growing experience is our guarantee
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Spinach common culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border-8 border-green-300 opacity-30"></div>
            </div>
            
            <div className="absolute top-10 right-20 w-16 h-16 opacity-60">
              <svg viewBox="0 0 100 100" className="text-green-400 fill-current">
                <path d="M50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 C90,30 70,10 50,10 Z M50,20 C40,25 35,35 35,45 L50,50 L65,45 C65,35 60,25 50,20 Z"/>
              </svg>
            </div>

            <div className="absolute top-32 left-10 w-12 h-12 opacity-60">
              <svg viewBox="0 0 100 100" className="text-green-500 fill-current">
                <path d="M50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 C90,30 70,10 50,10 Z M50,20 C40,25 35,35 35,45 L50,50 L65,45 C65,35 60,25 50,20 Z"/>
              </svg>
            </div>

            <div className="absolute bottom-20 left-16 w-10 h-10 opacity-60">
              <svg viewBox="0 0 100 100" className="text-green-300 fill-current">
                <path d="M50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 C90,30 70,10 50,10 Z M50,20 C40,25 35,35 35,45 L50,50 L65,45 C65,35 60,25 50,20 Z"/>
              </svg>
            </div>

            <div className="absolute bottom-10 right-24 w-14 h-14 opacity-60">
              <svg viewBox="0 0 100 100" className="text-green-400 fill-current">
                <path d="M50,10 C30,10 10,30 10,50 C10,70 30,90 50,90 C70,90 90,70 90,50 C90,30 70,10 50,10 Z M50,20 C40,25 35,35 35,45 L50,50 L65,45 C65,35 60,25 50,20 Z"/>
              </svg>
            </div>

            <div className="relative z-10 w-96 h-96 rounded-full overflow-hidden border-8 border-green-200 shadow-2xl">
              <img 
                src={Female_Gardener} 
                alt="Female Gardener"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seedra;