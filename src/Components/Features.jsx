import React from 'react';

const features = [
  { title: 'Fast Setup', description: 'Easily set up your store in minutes.' },
  { title: 'No Upfront Cost', description: 'Pay only when you sell.' },
  { title: 'Global Reach', description: 'Sell to customers worldwide.' },
];

const Features = () => {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
