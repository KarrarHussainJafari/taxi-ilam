import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The most reliable taxi service I've ever used. Always on time and very professional."
  },
  {
    name: "Michael Chen",
    text: "Excellent service! The driver was very courteous and the car was immaculately clean."
  },
  {
    name: "Emma Davis",
    text: "I feel safe and comfortable every time. Highly recommended for everyone."
  }
];

export function Testimonials() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <p className="font-semibold">{testimonial.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}