import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
const testimonials = [
  {
    name: "Sarah Johnson",
    text: "De meest betrouwbare taxiservice die ik ooit heb gebruikt. Altijd op tijd en zeer professioneel.",
  },
  {
    name: "Michael Chen",
    text: "Uitstekende service! De chauffeur was zeer beleefd en de auto was perfect schoon.",
  },
  {
    name: "Emma Davis",
    text: "Ik voel me altijd veilig en comfortabel. Absoluut een aanrader voor iedereen.",
  },
];

export function Testimonials() {
  return (
    <div className="text-center pb-6">
      <h2 className="text-3xl font-bold mb-8">Wat Onze Klanten Zeggen</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-current"
                />
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
