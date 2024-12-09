"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { LocationInput } from "@/components/booking/LocationInput";
import { DateTimePicker } from "@/components/booking/DateTimePicker";
import { bookingSchema, type BookingFormData } from "@/lib/utils/validation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import { formatDate } from "@/lib/utils/date";

const taxiDriverNumber = "+32466017437";

export default function BookingPage() {
  const [formData, setFormData] = useState<Partial<BookingFormData>>({});

  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormData, string>>
  >({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate the form data
      bookingSchema.parse(formData);

      // Prepare the WhatsApp message
      const message = `Hallo, ik wil graag een rit boeken:
- **Ophaallocatie**: ${formData.pickup || "Niet opgegeven"}
- **Afleverlocatie**: ${formData.dropoff || "Niet opgegeven"}
- **Datum**: ${formatDate(formData.date) || "Niet opgegeven"}
- **Tijd**: ${formData.time || "Niet opgegeven"}`;

      // Encode the message for WhatsApp URL
      const whatsappURL = `https://wa.me/${taxiDriverNumber}?text=${encodeURIComponent(
        message
      )}`;

      // Open the WhatsApp chat in a new tab
      window.open(whatsappURL, "_blank");

      // Success toast
      toast.success("Boekingsverzoek ingediend!");
      setFormData({});
      setErrors({});
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Vul alle verplichte velden in");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow">
      <h1 className="text-3xl font-bold text-center mb-8">Reserveer uw rit</h1>
      <Card className="p-6 w-full flex flex-col gap-4">
        <form className="space-y-6">
          <LocationInput
            label="Ophaallocatie"
            value={formData.pickup || ""}
            onChange={(value) => setFormData({ ...formData, pickup: value })}
            placeholder="Voer het ophaaladres in"
            error={errors.pickup}
          />

          <LocationInput
            label="Afleverlocatie"
            value={formData.dropoff || ""}
            onChange={(value) => setFormData({ ...formData, dropoff: value })}
            placeholder="Voer het bestemmingsadres in"
            error={errors.dropoff}
          />

          <DateTimePicker
            date={formData.date}
            time={formData.time || ""}
            onDateChange={(date) => {
              setFormData({ ...formData, date });
            }}
            onTimeChange={(time) => setFormData({ ...formData, time })}
            dateError={errors.date}
            timeError={errors.time}
          />

          <Button
            className="flex-1 bg-[#25D366] text-white cursor-pointer"
            variant="outline"
            asChild
            onClick={handleSubmit}
          >
            <div className="flex gap-1">
              <MessageSquare className="mr-2 h-4 w-4" />
              Verstuur via WhatsApp
            </div>
          </Button>
        </form>

        <div className="flex w-full justify-center">
          <p className="text-sm text-gray-500"> ---------- OF ----------</p>
        </div>
        <Button className="flex-1" asChild>
          <a href={`tel:${taxiDriverNumber}`}>
            <Phone className="mr-2 h-4 w-4" />
            Bel om te boeken
          </a>
        </Button>
      </Card>
    </div>
  );
}
