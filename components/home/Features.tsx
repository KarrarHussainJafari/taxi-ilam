import { Shield, Clock, Award, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Vergunning & Verzekerd",
    description:
      "Volledig vergund en verzekerd voor uw gemoedsrust. Kies een taxi in Sint-Niklaas waarop u kunt vertrouwen.",
  },
  {
    icon: Clock,
    title: "24/7 Beschikbaarheid",
    description:
      "Dag en nacht beschikbaar voor uw gemak. Boek uw taxi wanneer u maar wilt, in Sint-Niklaas en omliggende steden.",
  },
  {
    icon: Award,
    title: "Ervaren Chauffeur",
    description:
      "Meer dan 10 jaar professionele rijervaring. Veilig, betrouwbaar en perfect voor taxi ritten in Sint-Niklaas.",
  },
  {
    icon: Star,
    title: "5-Sterren Service",
    description:
      "Altijd beoordeeld met 5 sterren door tevreden klanten. Voor topkwaliteit taxiservice in Sint-Niklaas.",
  },
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
