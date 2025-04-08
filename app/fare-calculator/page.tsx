"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LocationInput } from "@/components/booking/LocationInput";
import { calculateDistance, estimateDuration } from "@/lib/utils/fare";

interface FareResult {
  distance: number;
  fare: number;
  duration: number;
}

const calculateFareBasedOnRules = (
  distance: number,
  duration: number,
  shift: "day" | "night"
): number => {
  const START_PRICE = 5;
  const PRICE_PER_KM = 2.0;
  const PRICE_PER_MINUTE = 0.4;
  const NIGHT_SURCHARGE = 2.5;

  let totalFare =
    START_PRICE + distance * PRICE_PER_KM + duration * PRICE_PER_MINUTE;
  if (shift === "night") {
    totalFare += NIGHT_SURCHARGE;
  }

  return parseFloat(totalFare.toFixed(2));
};

const FareCalculator = ({
  onFareCalculated,
}: {
  onFareCalculated?: (fare: number, distance: number, duration: number) => void;
}) => {
  const [kilometers, setKilometers] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [shift, setShift] = useState<"day" | "night">("day");
  const [fare, setFare] = useState<number | null>(null);

  const handleCalculate = () => {
    const calculatedFare = calculateFareBasedOnRules(
      kilometers,
      minutes,
      shift
    );
    setFare(calculatedFare);

    if (onFareCalculated) {
      onFareCalculated(calculatedFare, kilometers, minutes);
    }
  };

  return (
    <div className="space-y-4">
      <select
        className="input"
        value={shift}
        onChange={(e) => setShift(e.target.value as "day" | "night")}
      >
        <option value="day">Day (06:00 - 22:00)</option>
        <option value="night">Night (22:00 - 06:00)</option>
      </select>
      <input
        type="number"
        className="input"
        placeholder="Enter Distance (km)"
        onChange={(e) => setKilometers(Number(e.target.value))}
      />
      <input
        type="number"
        className="input"
        placeholder="Enter Duration (minutes)"
        onChange={(e) => setMinutes(Number(e.target.value))}
      />
      <Button onClick={handleCalculate}>Calculate Fare</Button>
      {fare !== null && (
        <p className="text-lg font-medium">Estimated Fare: €{fare}</p>
      )}
    </div>
  );
};

export default function FareCalculatorPage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [result, setResult] = useState<FareResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const distance = calculateDistance(
      { lat: 51.5074, lng: -0.1278 },
      { lat: 51.5225, lng: -0.1539 }
    );

    const duration = estimateDuration(distance); // in minutes
    const fare = calculateFareBasedOnRules(distance, duration, "day");

    setResult({ distance, fare, duration });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Fare Calculator</h1>
      <Card className="p-6">
        {/* Optional location-based version */}
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

        <FareCalculator
          onFareCalculated={(fare, distance, duration) =>
            setResult({ fare, distance, duration })
          }
        />

        {result && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Fare:</span>
              <span className="font-semibold">€{result.fare.toFixed(2)}</span>
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
