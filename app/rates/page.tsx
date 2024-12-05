"use client";
import { useState } from "react";

const Rates = () => {
  const [distance, setDistance] = useState(0);
  const [hour, setHour] = useState(0);
  const [isNightShift, setIsNightShift] = useState(false);
  const [fare, setFare] = useState(0);

  const handleCalculateFare = () => {
    const startPrice = 2.5;
    const waitPrice = 30;
    const pricePerKm = 2.6;
    const pricePerHour = 55;
    const nightSurcharge = 2.9;

    let calculatedFare = startPrice + distance * pricePerKm;
    if (isNightShift) {
      calculatedFare += nightSurcharge;
    }
    calculatedFare += waitPrice * (hour / 60);

    setFare(calculatedFare);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">PRIJSINFORMATIE EN BEREKENING</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tariefelementen (in €)</h2>
        <ul>
          <li>Startprijs: €2,50</li>
          <li>Wachtprijs per uur: €30</li>
          <li>Prijs per kilometer: €2,60</li>
          <li>Prijs per uur: €55</li>
          <li>Nachttoeslag (22u00-06u00): €2,90</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Indicatieve prijs</h3>
        <p>
          Indicatieve prijs = prijs voor een rit van 10 km als die 15 minuten
          duurt, op basis van bovenstaande tariefelementen.
        </p>
        <p>
          <strong>€28,50</strong>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Ritten tegen vaste prijs:
        </h3>
        <ul>
          <li>Sint-Niklaas naar Luchthaven Antwerpen = €67</li>
          <li>Sint-Niklaas naar Luchthaven Zaventem = €85</li>
          <li>Sint-Niklaas naar Luchthaven Charleroi = €150</li>
          <li>Sint-Niklaas naar Luchthaven Eindhoven = €175</li>
        </ul>
        <p>
          Deze tarieven gelden niet bij vooraf digitaal bestelde rit met
          prijsafspraak.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Bereken uw ritprijs</h3>
        <div className="flex flex-col gap-4">
          <label htmlFor="distance" className="font-medium">
            Aantal kilometers:
          </label>
          <input
            id="distance"
            type="number"
            className="p-2 border border-gray-300"
            placeholder="Aantal kilometers"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />

          <label htmlFor="wait-time" className="font-medium">
            Aantal minuten wachten:
          </label>
          <input
            id="wait-time"
            type="number"
            className="p-2 border border-gray-300"
            placeholder="Aantal minuten wachten"
            value={hour}
            onChange={(e) => setHour(Number(e.target.value))}
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isNightShift}
              onChange={() => setIsNightShift(!isNightShift)}
            />
            Nachttoeslag (22u00-06u00)
          </label>

          <button
            className="bg-blue-500 text-white p-2 mt-2"
            onClick={handleCalculateFare}
          >
            Bereken Ritprijs
          </button>
        </div>

        {fare > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Geschatte ritprijs:</h4>
            <p>
              <strong>€{fare.toFixed(2)}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rates;
