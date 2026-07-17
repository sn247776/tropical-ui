"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  MapPin,
  Mountain,
  Ruler,
  Trees,
  Home,
  CheckCircle2,
} from "lucide-react";

const MapView = dynamic(() => import("./sections/map-view"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-green-600" />
    </div>
  ),
});

export interface PlotData {
  latitude: number;
  longitude: number;

  zone?: string;

  distanceToSea?: number;

  elevation?: number;

  slope?: number;

  allowedUse?: string[];

  maxHeight?: string;

  plotCoverage?: string;

  minimumPlotSize?: string;

  maxFootprint?: string;

  setback?: string;
}

export default function Page() {
  const [plotData, setPlotData] = useState<PlotData | null>(null);

  const [loading, setLoading] = useState(false);

  const [coordinate, setCoordinate] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-[1500px]">
        {/* ================= TOP BAR ================= */}

        <div className="mb-6 flex gap-4">
          <input
            value={coordinate}
            onChange={(e) => setCoordinate(e.target.value)}
            placeholder="9.745264,100.036274"
            className="h-12 flex-1 rounded-lg border bg-white px-4 outline-none focus:border-green-600"
          />

          <button className="rounded-lg bg-green-600 px-8 font-semibold text-white transition hover:bg-green-700">
            Check Rules
          </button>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="grid grid-cols-[650px_1fr] gap-8">
          {/* ================= LEFT ================= */}

          <section>
            <div className="overflow-hidden rounded-xl border bg-white shadow">
              <div className="h-[470px]">
                <MapView
                  plotData={plotData}
                  setPlotData={setPlotData}
                  loading={loading}
                  setLoading={setLoading}
                />
              </div>
            </div>

            {/* Plot Details */}

            <div className="mt-5 rounded-xl border bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                Plot Details
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center gap-3">
                  <input type="checkbox" />

                  Beachfront
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />

                  Sea View
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />

                  Hillside
                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />

                  Dirt Road
                </label>
              </div>
            </div>
          </section>

          {/* ================= RIGHT ================= */}

          <section className="space-y-5">
            {/* Zone */}

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded bg-green-500" />

                <div>
                  <p className="text-xs uppercase text-gray-500">
                    Detected Zone
                  </p>

                  <h2 className="text-2xl font-bold text-green-700">
                    {plotData?.zone || "No Plot Selected"}
                  </h2>
                </div>
              </div>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4">
              <StatCard
                title="Distance To Sea"
                value={
                  plotData?.distanceToSea
                    ? `${plotData.distanceToSea} m`
                    : "-"
                }
                icon={<MapPin size={18} />}
              />

              <StatCard
                title="Elevation"
                value={
                  plotData?.elevation ? `${plotData.elevation} m` : "-"
                }
                icon={<Mountain size={18} />}
              />

              <StatCard
                title="Slope"
                value={plotData?.slope ? `${plotData.slope}°` : "-"}
                icon={<Ruler size={18} />}
              />
            </div>

            {/* Building Rules */}

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">
                What You Can Build
              </h2>

              <div className="space-y-5">
                <Rule
                  title="Allowed Use"
                  value={
                    plotData?.allowedUse?.join(", ") || "-"
                  }
                />

                <Rule
                  title="Maximum Height"
                  value={plotData?.maxHeight || "-"}
                />

                <Rule
                  title="Plot Coverage"
                  value={plotData?.plotCoverage || "-"}
                />

                <Rule
                  title="Minimum Plot Size"
                  value={plotData?.minimumPlotSize || "-"}
                />

                <Rule
                  title="Maximum Footprint"
                  value={plotData?.maxFootprint || "-"}
                />

                <Rule
                  title="Setback"
                  value={plotData?.setback || "-"}
                />
              </div>
            </div>

            {/* Notes */}

            <div className="rounded-xl border bg-amber-50 p-6">
              <div className="flex items-center gap-3">
                <Trees className="text-amber-600" />

                <h3 className="font-bold">
                  Before You Build
                </h3>
              </div>

              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 text-green-600"
                  />

                  Verify land title before purchasing.
                </li>

                <li className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 text-green-600"
                  />

                  Building permits may be required.
                </li>

                <li className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 text-green-600"
                  />

                  Environmental restrictions may apply.
                </li>
              </ul>
            </div>

            {/* Coordinates */}

            {plotData && (
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Home />

                  <h3 className="text-lg font-semibold">
                    Coordinates
                  </h3>
                </div>

                <div className="space-y-3">
                  <p>
                    <strong>Latitude:</strong>{" "}
                    {plotData.latitude.toFixed(6)}
                  </p>

                  <p>
                    <strong>Longitude:</strong>{" "}
                    {plotData.longitude.toFixed(6)}
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

interface StatProps {
  title: string;

  value: string;

  icon: React.ReactNode;
}

function StatCard({ title, value, icon }: StatProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-green-600">
        {icon}
      </div>

      <p className="text-xs uppercase tracking-wide text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}

interface RuleProps {
  title: string;

  value: string;
}

function Rule({ title, value }: RuleProps) {
  return (
    <div className="flex items-start justify-between border-b pb-4 last:border-none">
      <span className="text-gray-500">{title}</span>

      <span className="max-w-[60%] text-right font-semibold">
        {value}
      </span>
    </div>
  );
}