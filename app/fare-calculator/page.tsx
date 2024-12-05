"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LocationInput } from "@/components/booking/LocationInput";
import {
  calculateDistance,
  calculateFare,
  estimateDuration,
} from "@/lib/utils/fare";

interface FareResult {
  distance: number;
  fare: number;
  duration: number;
}
const FareCalculator = () => {
  const [kilometers, setKilometers] = useState(0);
  const [shift, setShift] = useState("day");

  const calculateFare = () => {
    const rate = shift === "day" ? 2.5 : 3.0;
    return (kilometers * rate).toFixed(2);
  };

  return (
    <div className="container mx-auto mt-16 p-8">
      <h2 className="text-2xl font-bold mb-6">Fare Calculator</h2>
      <div className="space-y-4">
        <select
          className="input"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
        >
          <option value="day">Day (06:00 - 22:00)</option>
          <option value="night">Night (22:00 - 06:00)</option>
        </select>
        <input
          type="number"
          className="input"
          placeholder="Enter Kilometers"
          onChange={(e) => setKilometers(Number(e.target.value))}
        />
        <p className="text-lg">Estimated Fare: €{calculateFare()}</p>
      </div>
    </div>
  );
};

export default function FareCalculatorPage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [result, setResult] = useState<FareResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate calculation with dummy coordinates
    const distance = calculateDistance(
      { lat: 51.5074, lng: -0.1278 }, // London coordinates
      { lat: 51.5225, lng: -0.1539 } // Example destination
    );

    const fare = calculateFare(distance);
    const duration = estimateDuration(distance);

    setResult({ distance, fare, duration });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Fare Calculator</h1>
      <Card className="p-6">
        {/* <form onSubmit={handleCalculate} className="space-y-6">
          <LocationInput
            label="Pickup Location"
            value={pickup}
            onChange={setPickup}
            placeholder="Enter pickup address"
          />

          <LocationInput
            label="Drop-off Location"
            value={dropoff}
            onChange={setDropoff}
            placeholder="Enter destination address"
          />

          <Button type="submit" className="w-full">
            Calculate Fare
          </Button>
        </form> */}
        <FareCalculator />
        {result && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Fare:</span>
              <span className="font-semibold">${result.fare.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Distance:</span>
              <span>{result.distance.toFixed(1)} km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span>~{result.duration} mins</span>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
