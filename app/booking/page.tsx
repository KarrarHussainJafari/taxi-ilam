"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { LocationInput } from "@/components/booking/LocationInput";
import { DateTimePicker } from "@/components/booking/DateTimePicker";
import { ContactButtons } from "@/components/booking/ContactButtons";
import { bookingSchema, type BookingFormData } from "@/lib/utils/validation";
import { toast } from "sonner";

export default function BookingPage() {
  const [formData, setFormData] = useState<Partial<BookingFormData>>({});
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormData, string>>
  >({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      bookingSchema.parse(formData);
      toast.success("Booking request submitted!");
      setFormData({});
      setErrors({});
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Please fill in all required fields");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Book Your Ride</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <LocationInput
            label="Pickup Location"
            value={formData.pickup || ""}
            onChange={(value) => setFormData({ ...formData, pickup: value })}
            placeholder="Enter pickup address"
            error={errors.pickup}
          />

          <LocationInput
            label="Drop-off Location"
            value={formData.dropoff || ""}
            onChange={(value) => setFormData({ ...formData, dropoff: value })}
            placeholder="Enter destination address"
            error={errors.dropoff}
          />

          <DateTimePicker
            date={formData.date}
            time={formData.time || ""}
            onDateChange={(date) => setFormData({ ...formData, date })}
            onTimeChange={(time) => setFormData({ ...formData, time })}
            dateError={errors.date}
            timeError={errors.time}
          />

          <ContactButtons />
        </form>
      </Card>
    </div>
  );
}
