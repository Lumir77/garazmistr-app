"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

type Vehicle = {
  id: string;
  created_at?: string;
  name?: string;
  plate?: string;
  image?: string;
  status?: string;
  vehicle_type?: string;
  brand?: string;
  model?: string;
  year?: number | string;
  vin?: string;
  fuel?: string;
  current_km?: number | null;
  stk_valid_until?: string | null;
  insurance_to?: string | null;
  vignette_to?: string | null;
  next_oil_km?: number | null;
  next_oil_date?: string | null;
  service_to?: string | null;
  inspection_to?: string | null;
  note?: string | null;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function VehicleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  const formatDateCz = (value?: string | null) => {
    if (!value) return "-";

    const parts = value.split("-");
    if (parts.length !== 3) return value;

    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  };

  const vehicleTypeLabels: Record<string, string> = {
    osobni: "Osobní auto",
    suv: "SUV",
    kombi: "Kombi",
    pickup: "Pick-up",
    prives: "Přívěsný vozík",
    "dlouhy-prives": "Dlouhý přívěs",
    vzv: "Vysokozdvižný vozík",
    "obytny-prives": "Obytný přívěs",
    "obytne-auto": "Obytné auto",
  };

  const isCar =
    vehicle?.vehicle_type === "osobni" ||
    vehicle?.vehicle_type === "suv" ||
    vehicle?.vehicle_type === "kombi" ||
    vehicle?.vehicle_type === "pickup";

  const isCamper = vehicle?.vehicle_type === "obytne-auto";

  const isTrailer =
    vehicle?.vehicle_type === "prives" ||
    vehicle?.vehicle_type === "dlouhy-prives" ||
    vehicle?.vehicle_type === "obytny-prives";

  const isForklift = vehicle?.vehicle_type === "vzv";

  const handleDeleteVehicle = async () => {
    if (!vehicle?.id) {
      alert("Chybí ID vozidla.");
      return;
    }

    const confirmed = window.confirm(
      `Opravdu chceš smazat vozidlo ${vehicle.name || ""}?`
    );

    if (!confirmed) return;

    setDeleting(true);

    const { error } = await supabase
      .from("vehicles")
      .delete()
      .eq("id", vehicle.id);

    if (error) {
      console.error("Chyba při mazání vozidla:", error);
      alert("Vozidlo se nepodařilo smazat.");
      setDeleting(false);
      return;
    }

    alert("Vozidlo bylo smazáno.");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchVehicle = async () => {
      const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        console.error("Chyba při načítání vozidla:", error);
        setLoading(false);
        return;
      }

      setVehicle(data);
      setLoading(false);
    };

    fetchVehicle();
  }, [params.id]);

  if (loading) {
    return (
      <main className="page">
        <div className="shell">
          <p>Načítám vozidlo...</p>
        </div>

        <style jsx>{`
          .page {
            min-height: 100vh;
            background: #f4f6fb;
            padding: 24px;
            color: #111827;
            font-family: Arial, sans-serif;
          }

          .shell {
            max-width: 980px;
            margin: 0 auto;
          }
        `}</style>
      </main>
    );
  }

  if (!vehicle) {
    return (
      <main className="page">
        <div className="shell">
          <a href="/" className="back">
            ← Zpět
          </a>
          <div className="panel">
            <h1>Vozidlo nenalezeno</h1>
            <p>Záznam v databázi nebyl nalezen.</p>
          </div>
        </div>

        <style jsx>{`
          .page {
            min-height: 100vh;
            background: #f4f6fb;
            padding: 24px;
            color: #111827;
            font-family: Arial, sans-serif;
          }

          .shell {
            max-width: 980px;
            margin: 0 auto;
          }

          .back {
            color: #2563eb;
            text-decoration: none;
            font-weight: 700;
          }

          .panel {
            margin-top: 20px;
            background: #fff;
            border: 1px solid #e5e7eb;
            border-radius: 22px;
            padding: 20px;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="shell">
        <div className="topbar">
          <a href="/" className="back">
            ← Zpět na přehled
          </a>
          <h1>{vehicle.name || "Detail vozidla"}</h1>
        </div>

        <section className="panel hero">
          <div className="image-box">
            <img
              src={vehicle.image || "/vehicles/auto-sedan.jpg"}
              alt={vehicle.name || "Vozidlo"}
            />
          </div>

          <div>
            <h2>{vehicle.name}</h2>
            <p className="plate">{vehicle.plate || "-"}</p>
            <div className={`status ${vehicle.status || "ok"}`}>
              {vehicle.status === "warning" ? "POZOR" : "OK"}
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Základní údaje</h2>

          <div className="grid">
            <div className="item">
              <span>Typ vozidla</span>
              <strong>
                {vehicleTypeLabels[vehicle.vehicle_type || ""] || "-"}
              </strong>
            </div>

            <div className="item">
              <span>Značka</span>
              <strong>{vehicle.brand || "-"}</strong>
            </div>

            <div className="item">
              <span>Model</span>
              <strong>{vehicle.model || "-"}</strong>
            </div>

            <div className="item">
              <span>Rok výroby</span>
              <strong>{vehicle.year || "-"}</strong>
            </div>

            <div className="item">
              <span>SPZ / evidence</span>
              <strong>{vehicle.plate || "-"}</strong>
            </div>

            <div className="item">
              <span>VIN</span>
              <strong>{vehicle.vin || "-"}</strong>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Provozní údaje</h2>

          <div className="grid">
            {(isCar || isCamper) && (
              <>
                <div className="item">
                  <span>Palivo / pohon</span>
                  <strong>{vehicle.fuel || "-"}</strong>
                </div>

                <div className="item">
                  <span>Aktuální kilometry</span>
                  <strong>
                    {vehicle.current_km ? `${vehicle.current_km} km` : "-"}
                  </strong>
                </div>
              </>
            )}

            {isTrailer && (
              <div className="item">
                <span>Typ přívěsu</span>
                <strong>
                  {vehicleTypeLabels[vehicle.vehicle_type || ""] || "-"}
                </strong>
              </div>
            )}

            {isForklift && (
              <div className="item">
                <span>Servis / revize</span>
                <strong>{formatDateCz(vehicle.service_to)}</strong>
              </div>
            )}
          </div>
        </section>

        <section className="panel">
          <h2>Důležité termíny</h2>

          <div className="grid">
            <div className="item">
              <span>STK platí do</span>
              <strong>{formatDateCz(vehicle.stk_valid_until)}</strong>
            </div>

            <div className="item">
              <span>Pojištění do</span>
              <strong>{formatDateCz(vehicle.insurance_to)}</strong>
            </div>

            {(isCar || isCamper) && (
              <>
                <div className="item">
                  <span>Dálniční známka do</span>
                  <strong>{formatDateCz(vehicle.vignette_to)}</strong>
                </div>

                <div className="item">
                  <span>Další výměna oleje při km</span>
                  <strong>
                    {vehicle.next_oil_km ? `${vehicle.next_oil_km} km` : "-"}
                  </strong>
                </div>

                <div className="item">
                  <span>Další výměna oleje nejpozději</span>
                  <strong>{formatDateCz(vehicle.next_oil_date)}</strong>
                </div>
              </>
            )}

            <div className="item">
              <span>Servis do</span>
              <strong>{formatDateCz(vehicle.service_to)}</strong>
            </div>

            <div className="item">
              <span>Revize / kontrola do</span>
              <strong>{formatDateCz(vehicle.inspection_to)}</strong>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Poznámka</h2>
          <p>{vehicle.note || "Bez poznámky."}</p>
        </section>

        <section className="panel actions-panel">
          <a
            href={`/vehicle/${vehicle.id}/edit`}
            className="secondary"
          >
            Upravit vozidlo
          </a>

          <button
            type="button"
            className="danger"
            onClick={handleDeleteVehicle}
            disabled={deleting}
          >
            {deleting ? "Mažu vozidlo..." : "Smazat vozidlo"}
          </button>
        </section>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f6fb;
          padding: 24px;
          color: #111827;
          font-family: Arial, sans-serif;
        }

        .shell {
          max-width: 980px;
          margin: 0 auto;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
        }

        .back {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        h1 {
          margin: 0;
          font-size: 32px;
        }

        h2 {
          margin: 0 0 16px;
          font-size: 22px;
        }

        p {
          margin: 0;
          color: #6b7280;
          line-height: 1.5;
        }

        .panel {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 22px;
          padding: 20px;
          margin-bottom: 16px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        }

        .hero {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 22px;
          align-items: center;
        }

        .image-box {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 160px;
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          padding: 16px;
        }

        .image-box img {
          width: 100%;
          max-width: 240px;
          max-height: 140px;
          object-fit: contain;
        }

        .plate {
          margin-bottom: 12px;
          font-weight: 700;
          color: #6b7280;
        }

        .status {
          display: inline-flex;
          font-size: 12px;
          font-weight: 800;
          color: #fff;
          padding: 6px 12px;
          border-radius: 999px;
        }

        .status.ok {
          background: #16a34a;
        }

        .status.warning {
          background: #ef4444;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .item {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 14px;
          background: #fbfcfe;
          display: grid;
          gap: 6px;
        }

        .item span {
          color: #6b7280;
          font-size: 13px;
        }

        .item strong {
          color: #111827;
          font-size: 15px;
        }

        .actions-panel {
          display: flex;
          gap: 12px;
        }

        .secondary,
        .danger {
          border-radius: 14px;
          padding: 12px 18px;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .secondary {
          border: 1px solid #d1d5db;
          background: #fff;
          color: #111827;
        }

        .danger {
          border: 1px solid #fecaca;
          background: #fff1f2;
          color: #b91c1c;
        }

        .danger:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 760px) {
          .page {
            padding: 14px;
          }

          .topbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .actions-panel {
            flex-direction: column;
          }

          .secondary,
          .danger {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
