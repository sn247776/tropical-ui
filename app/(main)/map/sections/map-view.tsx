"use client";

import { Dispatch, SetStateAction, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { PlotData } from "../page";

// ---------------- FIX LEAFLET ICON ----------------

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// --------------------------------------------------

interface Props {
  plotData: PlotData | null;
  setPlotData: Dispatch<SetStateAction<PlotData | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

// Koh Phangan Center
const CENTER: [number, number] = [9.7315, 100.0136];

// Restrict map to Koh Phangan only
const BOUNDS = L.latLngBounds(
  [9.61, 99.94], // South West
  [9.83, 100.16] // North East
);

interface ClickMarkerProps {
  setMarker: Dispatch<SetStateAction<[number, number] | null>>;
  setPlotData: Dispatch<SetStateAction<PlotData | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

function ClickMarker({
  setMarker,
  setPlotData,
  setLoading,
}: ClickMarkerProps) {
  useMapEvents({
    async click(e) {
      const latitude = e.latlng.lat;
      const longitude = e.latlng.lng;

      setMarker([latitude, longitude]);
      setLoading(true);

      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/zoning/check",
          {
            latitude,
            longitude,
          }
        );

        setPlotData({
          latitude,
          longitude,

          zone: data.zone,
          distanceToSea: data.distanceToSea,
          elevation: data.elevation,
          slope: data.slope,

          allowedUse: data.allowedUse,
          maxHeight: data.maxHeight,
          plotCoverage: data.plotCoverage,
          minimumPlotSize: data.minimumPlotSize,
          maxFootprint: data.maxFootprint,
          setback: data.setback,
        });
      } catch (err) {
        console.log(err);

        // Temporary mock data
        setPlotData({
          latitude,
          longitude,

          zone: "Residential Zone",

          distanceToSea: 3680,

          elevation: 122,

          slope: 11,

          allowedUse: [
            "Villa",
            "House",
            "Small Resort",
          ],

          maxHeight: "12 m",

          plotCoverage: "50%",

          minimumPlotSize: "400 sqm",

          maxFootprint: "90 sqm",

          setback: "2 m",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return null;
}

export default function MapView({
  plotData,
  setPlotData,
  loading,
  setLoading,
}: Props) {
  const [marker, setMarker] = useState<[number, number] | null>(null);

  return (
    <MapContainer
      center={CENTER}
      zoom={13}
      minZoom={12}
      maxZoom={18}
      maxBounds={BOUNDS}
      maxBoundsViscosity={1}
      scrollWheelZoom={true}
      dragging={true}
      zoomControl={true}
      doubleClickZoom={false}
      worldCopyJump={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution=""
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <ClickMarker
        setMarker={setMarker}
        setPlotData={setPlotData}
        setLoading={setLoading}
      />

      {marker && <Marker position={marker} />}
    </MapContainer>
  );
}