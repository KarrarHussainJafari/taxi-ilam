"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormData } from "@/lib/utils/validation";
import { toast } from "sonner";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const taxiDriverNumber = "+32466017437";

  const onSubmit = (data: ContactFormData) => {
    const message = `Hello, a new request has been received:
- Name: ${data.name}
- Email: ${data.email}
- Contact Number: ${data.contactNumber}
- Message: ${data.message}`;

    // Encode the message for WhatsApp URL
    const whatsappURL = `https://wa.me/${taxiDriverNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappURL, "_blank");

    toast.success("Message prepared for WhatsApp!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input id="contactNumber" {...register("contactNumber")} />
        {errors.contactNumber && (
          <p className="text-sm text-red-500">{errors.contactNumber.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
