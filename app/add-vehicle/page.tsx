"use client";

import { useState } from "react";

export default function AddVehiclePage() {
  const [vehicleType, setVehicleType] = useState("osobni");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showStkHelper, setShowStkHelper] = useState(false);
  const [importNotice, setImportNotice] = useState("");

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [plateOrEvidence, setPlateOrEvidence] = useState("");
  const [vin, setVin] = useState("");
  const [fuel, setFuel] = useState("Benzín");

  const [stkValidUntil, setStkValidUntil] = useState("");
  const [firstRegistrationDate, setFirstRegistrationDate] = useState("");
  const [stkMode, setStkMode] = useState("first_4_years");

  const [insuranceFrom, setInsuranceFrom] = useState("");
  const [insurancePeriod, setInsurancePeriod] = useState("Ročně");
  const [insuranceTo, setInsuranceTo] = useState("");

  const [vignetteFrom, setVignetteFrom] = useState("");
  const [vignettePeriod, setVignettePeriod] = useState("1 rok");
  const [vignetteTo, setVignetteTo] = useState("");

  const [currentKm, setCurrentKm] = useState("");
  const [lastOilKm, setLastOilKm] = useState("");
  const [oilIntervalKm, setOilIntervalKm] = useState("15000");
  const [lastOilDate, setLastOilDate] = useState("");
  const [nextOilKm, setNextOilKm] = useState("");
  const [nextOilDate, setNextOilDate] = useState("");

  const [foreignVignettes, setForeignVignettes] = useState([
    {
      id: 1,
      country: "Rakousko",
      period: "10 dní",
      from: "",
      to: "",
    },
  ]);

  // ✅ OPRAVA: tvoje skutečné názvy souborů
  const vehicleImages: Record<string, string> = {
    osobni: "/vehicles/auto-sedan.jpg",
    suv: "/vehicles/suv-kodiaq.jpg",
    kombi: "/vehicles/Skoda-Fabia-Combi.jpg",
    pickup: "/vehicles/pickup-toyota.jpg",
    prives: "/vehicles/privesny-vozik.jpg",
    "dlouhy-prives": "/vehicles/dlouhy-prives.jpg",
    vzv: "/vehicles/vysokozdvizny-vozik.jpg",
    "obytny-prives": "/vehicles/obytny-prives.jpg",
    "obytne-auto": "/vehicles/obytne-auto.jpg",
  };

  const selectedVehicleImage =
    vehicleImages[vehicleType] || "/vehicles/auto-sedan.jpg";

  const isCar =
    vehicleType === "osobni" ||
    vehicleType === "suv" ||
    vehicleType === "kombi" ||
    vehicleType === "pickup";

  const isCamper = vehicleType === "obytne-auto";
  const isTrailer = vehicleType === "prives";
  const isLongTrailer = vehicleType === "dlouhy-prives";
  const isCaravan = vehicleType === "obytny-prives";
  const isForklift = vehicleType === "vzv";

  const hasStk = isCar || isCamper || isTrailer || isLongTrailer || isCaravan;

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const calculateValidToDate = (startDate: string, period: string) => {
    if (!startDate || period === "Vlastní") return "";

    const date = new Date(startDate);

    switch (period) {
      case "1 den":
        date.setDate(date.getDate() + 1);
        break;
      case "10 dní":
        date.setDate(date.getDate() + 10);
        break;
      case "30 dní":
        date.setDate(date.getDate() + 30);
        break;
      case "2 měsíce":
        date.setMonth(date.getMonth() + 2);
        break;
      case "1 rok":
      case "Ročně":
        date.setFullYear(date.getFullYear() + 1);
        break;
      case "Pololetně":
        date.setMonth(date.getMonth() + 6);
        break;
      case "Čtvrtletně":
        date.setMonth(date.getMonth() + 3);
        break;
      case "Měsíčně":
        date.setMonth(date.getMonth() + 1);
        break;
      default:
        return "";
    }

    date.setDate(date.getDate() - 1);
    return formatDate(date);
  };

  const calculateStkDate = () => {
    if (!firstRegistrationDate) return;

    const date = new Date(firstRegistrationDate);

    if (stkMode === "first_4_years") {
      date.setFullYear(date.getFullYear() + 4);
    }

    if (stkMode === "regular_2_years") {
      date.setFullYear(date.getFullYear() + 2);
    }

    date.setDate(date.getDate() - 1);
    setStkValidUntil(formatDate(date));
  };

  const loadDemoETechnicakData = () => {
    setVehicleType("kombi");
    setBrand("MAZDA");
    setModel("6");
    setYear("2016");
    setVin("JMZGJ697861329538");
    setFuel("Benzín");
    setFirstRegistrationDate("2016-08-01");
    setStkValidUntil("2026-07-19");
    setImportNotice("Demo data načtena z eTechničáku.");
  };

  return (
    <main className="page">
      <div className="shell">
        <div className="topbar">
          <a href="/" className="back">← Zpět</a>
          <h1>Nové vozidlo</h1>
        </div>

        <section className="panel highlight">
          <div>
            <h2>Rychlé založení vozidla</h2>
            {importNotice && <div className="import-notice">{importNotice}</div>}
          </div>

          <button className="secondary" onClick={loadDemoETechnicakData}>
            📄 Načíst z eTechničáku
          </button>
        </section>

        <section className="panel">
          <h2>Základní údaje</h2>

          <div className="grid">
            <label>
              Typ vozidla
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                <option value="osobni">Osobní</option>
                <option value="suv">SUV</option>
                <option value="kombi">Kombi</option>
                <option value="pickup">Pick-up</option>
                <option value="prives">Přívěs</option>
                <option value="dlouhy-prives">Dlouhý přívěs</option>
                <option value="vzv">VZV</option>
                <option value="obytny-prives">Karavan</option>
                <option value="obytne-auto">Obytné auto</option>
              </select>
            </label>

            {/* ✅ náhled obrázku */}
            <div className="vehicle-preview wide">
              <img src={selectedVehicleImage} alt="vozidlo" />
            </div>

            <label>Značka<input value={brand} onChange={(e) => setBrand(e.target.value)} /></label>
            <label>Model<input value={model} onChange={(e) => setModel(e.target.value)} /></label>
            <label>Rok<input value={year} onChange={(e) => setYear(e.target.value)} /></label>
            <label>SPZ<input value={plateOrEvidence} onChange={(e) => setPlateOrEvidence(e.target.value)} /></label>
            <label>VIN<input value={vin} onChange={(e) => setVin(e.target.value)} /></label>
          </div>
        </section>

      </div>

      <style jsx>{`
        .vehicle-preview {
          display: flex;
          justify-content: center;
          padding: 16px;
        }

        .vehicle-preview img {
          max-width: 260px;
          height: auto;
        }
      `}</style>
    </main>
  );
}
