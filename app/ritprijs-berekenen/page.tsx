"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Rates = () => {
  const [distance, setDistance] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [waitMinutes, setWaitMinutes] = useState(0);
  const [isNightShift, setIsNightShift] = useState(false);
  const [fare, setFare] = useState(0);

  const handleCalculateFare = () => {
    const startPrice = 5;
    const waitPricePerHour = 30;
    const pricePerKm = 2.0;
    const pricePerMinute = 0.4;
    const nightSurcharge = 2.5;

    const waitPrice = (waitMinutes / 60) * waitPricePerHour;

    let calculatedFare =
      startPrice + distance * pricePerKm + minutes * pricePerMinute + waitPrice;

    if (isNightShift) {
      calculatedFare += nightSurcharge;
    }

    setFare(calculatedFare);
  };

  const handleReset = () => {
    setDistance(0);
    setMinutes(0);
    setWaitMinutes(0);
    setIsNightShift(false);
    setFare(0);
  };

  useEffect(() => {
    handleCalculateFare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distance, minutes, waitMinutes, isNightShift]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleCalculateFare();
    }
  };

  // Validate non-negative input for distance, minutes, and waitMinutes
  const handleChangeDistance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Number(e.target.value)); // Ensure no negative value
    setDistance(value);
  };

  const handleChangeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Number(e.target.value)); // Ensure no negative value
    setMinutes(value);
  };

  const handleChangeWaitMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Number(e.target.value)); // Ensure no negative value
    setWaitMinutes(value);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow">
      <h1 className="text-3xl font-bold text-center mb-8">
        PRIJSINFORMATIE EN BEREKENING
      </h1>
      <Card className="p-6 w-full">
        {/* Tariefelementen Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tariefelementen (in €)</h2>
          <ul>
            <li>Startprijs: €5</li>
            <li>Wachtprijs per uur: €30</li>
            <li>Prijs per kilometer: €2,00</li>
            <li>Prijs per minuut: €0,40</li>
            <li>Nachttoeslag (22u00-06u00): €2,50</li>
          </ul>
        </div>

        {/* Indicatieve Prijs Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Indicatieve prijs</h3>
          <p>
            Indicatieve prijs = prijs voor een rit van 10 km als die 15 minuten
            duurt, op basis van bovenstaande tariefelementen.{": "}
            <strong>€31,00</strong>
          </p>
          <ul className="mt-2 list-disc pl-6 text-sm text-gray-600">
            <li>Startprijs: €5</li>
            <li>Kilometers: 10 km × €2,00 = €20</li>
            <li>Tijd: 15 min × €0,40 = €6</li>
            <li>Totale prijs: €5 + €20 + €6 = €31</li>
          </ul>
        </div>

        {/* Fixed Price Rides Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Ritten tegen vaste prijs:
          </h3>
          <ul>
            <li>A) Sint-Niklaas naar Luchthaven Antwerpen = €65</li>
            <li>B) Sint-Niklaas naar Luchthaven Zaventem = €80</li>
            <li>C) Sint-Niklaas naar Luchthaven Charleroi = €130</li>
            <li>D) Sint-Niklaas naar Luchthaven Eindhoven = €160</li>
          </ul>
          <p className="mt-2">
            Deze tarieven gelden niet bij vooraf digitaal bestelde rit met
            prijsafspraak.
          </p>
        </div>

        {/* Price Calculation Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Bereken uw ritprijs</h3>
          <div
            className="flex flex-col gap-4 lg:w-1/2"
            onKeyDown={handleKeyDown}
          >
            {/* Distance Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="distance" className="font-medium">
                Aantal kilometers:
              </label>
              <input
                id="distance"
                type="number"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Aantal kilometers"
                value={distance}
                onChange={handleChangeDistance}
                onFocus={(e) => e.target.select()}
              />
            </div>

            {/* Minutes Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="minutes" className="font-medium">
                Aantal minuten:
              </label>
              <input
                id="minutes"
                type="number"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Aantal minuten"
                value={minutes}
                onChange={handleChangeMinutes}
                onFocus={(e) => e.target.select()}
              />
            </div>

            {/* Wait Minutes Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="waitMinutes" className="font-medium">
                Wachttijd in minuten:
              </label>
              <input
                id="waitMinutes"
                type="number"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Wachttijd in minuten"
                value={waitMinutes}
                onChange={handleChangeWaitMinutes}
                onFocus={(e) => e.target.select()}
              />
            </div>

            {/* Night Shift Checkbox */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isNightShift}
                onChange={() => setIsNightShift(!isNightShift)}
              />
              Nachttoeslag (22u00-06u00)
            </label>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1" onClick={handleCalculateFare}>
                Bereken Ritprijs
              </Button>
              <Button
                className="flex-1 bg-gray-200 text-black hover:bg-gray-300"
                onClick={handleReset}
                type="button"
              >
                Reset
              </Button>
            </div>
          </div>

          {/* Display Calculated Fare */}
          {(distance > 0 || minutes > 0 || waitMinutes > 0) && (
            <div className="mt-4">
              <h4 className="text-lg font-medium text-gray-700">
                Geschatte ritprijs: <strong>€{fare.toFixed(2)}</strong>
              </h4>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Rates;
