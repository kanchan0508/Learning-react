import React from 'react';

const testimonials = [
  { name: 'John Doe', feedback: 'Amazing platform!' },
  { name: 'Jane Smith', feedback: 'I love the ease of use.' },
  { name: 'Sam Wilson', feedback: 'Highly recommend it!' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
              <h4 className="font-bold text-lg">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
