import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <div className="flex flex-col relative gap-4 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}
