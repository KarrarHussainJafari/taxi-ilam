import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+32 (466) 017-437",
    href: "tel:+32466017437",
  },
  {
    icon: Mail,
    title: "Email",
    content: "taxiilam177@gmail.com",
    href: "mailto:taxiilam177@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Antwerpse Steenweg 108, 9100 Sint-Niklaas",
    href: "https://maps.app.goo.gl/w155whVwcGniCDAb8",
  },
];

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {contactInfo.map((item, index) => (
        <Card key={index} className="p-4">
          <a
            href={item.href}
            className="flex flex-col items-center text-center"
          >
            <item.icon className="h-6 w-6 text-primary mb-2" />
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.content}</p>
          </a>
        </Card>
      ))}
    </div>
  );
}
