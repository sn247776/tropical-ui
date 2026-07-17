"use client";

import { Polygon } from "react-leaflet";

interface Props {
  polygon: GeoJSON.Polygon;
}

export default function PlotPolygon({ polygon }: Props) {
  const positions = polygon.coordinates[0].map(
    ([lng, lat]) => [lat, lng] as [number, number]
  );

  return (
    <Polygon
      positions={positions}
      pathOptions={{
        color: "#22c55e",
        fillColor: "#22c55e",
        fillOpacity: 0.35,
        weight: 3,
      }}
    />
  );
}