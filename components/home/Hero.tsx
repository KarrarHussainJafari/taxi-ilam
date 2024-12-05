import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 px-4 pb-12 mx-auto">
      <div className="flex-1 space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4 leading-tight">
          Professionele en Betrouwbare Taxi Service
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Met meer dan 10 jaar ervaring bieden wij veilige en comfortabele
          ritten door de stad. Uw veiligheid en tevredenheid zijn onze hoogste
          prioriteiten.
        </p>
        <div className="flex gap-6">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <Link href="/booking">Boek Nu</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-blue-600 text-blue-600 hover:bg-blue-100"
          >
            <Link href="/rates">Bereken Ritprijs</Link>
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-xs md:max-w-sm lg:max-w-md">
        <Image
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
          alt="Professional Taxi Service"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
