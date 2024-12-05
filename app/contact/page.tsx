import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { Map } from '@/components/contact/Map';

export default function ContactPage() {
  return (
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
  );
}