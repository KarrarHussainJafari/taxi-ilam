import Image from "next/image";

const About = () => (
  <div className="container mx-auto p-8">
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 justify-center md:justify-start p-4">
      <Image
        src="/images/taxi-front.jpeg"
        alt="Trusted taxi driver in Sint-Niklaas - Ali Raza"
        className="rounded-full shadow-lg"
        width={160}
        height={160}
      />
      <div>
        <h2 className="text-2xl font-bold">
          Betrouwbare taxichauffeur in Sint-Niklaas - Ali Raza
        </h2>
        <p className="mt-4 text-gray-700">
          Met meer dan 10 jaar ervaring bieden wij veilige en comfortabele
          ritten in Sint-Niklaas, Beveren, Lokeren, en Temse.
        </p>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Klantbeoordelingen</h3>
      <ul className="mt-4 space-y-2">
        <li>
          ⭐️⭐️⭐️⭐️⭐️ "Ali is altijd op tijd. Beste taxi in Sint-Niklaas!" -
          Marie uit Temse
        </li>
        <li>⭐️⭐️⭐️⭐️⭐️ "De rit was soepel en professioneel." - Alex</li>
      </ul>
    </div>
  </div>
);
export default About;
