import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

export function ContactButtons() {
  return (
    <div className="flex space-x-4">
      <Button className="flex-1" asChild>
        <a href="tel:+32466017437">
          <Phone className="mr-2 h-4 w-4" />
          Call to Book
        </a>
      </Button>
      <Button
        className="flex-1 bg-[#25D366] text-white"
        variant="outline"
        asChild
      >
        <a href="https://wa.me/+32466017437">
          <MessageSquare className="mr-2 h-4 w-4" />
          WhatsApp
        </a>
      </Button>
    </div>
  );
}
