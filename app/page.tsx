import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";
import { Map } from "@/components/contact/Map";
import { Card } from "@/components/ui/card";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/contact-form";

export default function HomePage() {
  return (
    <div className="flex flex-col relative gap-4 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Features />
      <Testimonials />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <ContactForm />
            </Card>
            <ContactInfo />
          </div>

          <Card className="p-6 h-[600px]">
            <Map />
          </Card>
        </div>
      </div>
    </div>
  );
}
