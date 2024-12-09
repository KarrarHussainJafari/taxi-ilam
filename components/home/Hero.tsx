import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 px-4 pb-12 mx-auto">
      <div className="flex-1 space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4 leading-tight">
          Betrouwbare Taxi Service in Sint-Niklaas | Taxi Ilam
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Met meer dan 10 jaar ervaring bieden wij veilige en comfortabele
          ritten in Sint-Niklaas, Beveren, Lokeren, en Temse.
        </p>
        <div className="flex gap-6">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <Link href="/boek-taxi">Boek Taxi</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-blue-600 text-blue-600 hover:bg-blue-100"
          >
            <Link href="/ritprijs-berekenen">Bereken Ritprijs</Link>
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-xs md:max-w-sm lg:max-w-md">
        <Image
          src="/images/taxi-ride.jpeg"
          alt="Trusted taxi driver in Sint-Niklaas - Ali Raza"
          width={600}
          height={500}
          className="rounded-lg shadow-lg object-cover shadow-black"
        />
      </div>
    </div>
  );
}
