import { Shield, Clock, Award, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind"
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Available round the clock for your convenience"
  },
  {
    icon: Award,
    title: "Experienced Driver",
    description: "Over 10 years of professional driving experience"
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Consistently rated 5 stars by our customers"
  }
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="p-6">
          <feature.icon className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}