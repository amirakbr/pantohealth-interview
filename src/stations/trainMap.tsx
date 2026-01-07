import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { ITrainMapProps } from "./interface";


export default function TrainMap({
  stations,
  selectedStation,
  onStationSelect,
}: ITrainMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<Map<string, L.Marker>>(new Map());

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    // show Germany by default
    map.current = L.map(mapContainer.current).setView(
      [51.165691, 10.451526],
      6
    );
    L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map?.current)

  }, []);

  useEffect(() => {
    if (!map.current) return;
    markers.current.forEach((marker) => marker.remove());
    markers.current.clear();
    stations?.forEach((station) => {
      const marker = L.marker([station.lat, station.lng], {
        title: station.name,
      });

      marker.bindPopup(`<strong>${station.name}</strong><br>${station.city}`);

      marker.on("click", () => {
        onStationSelect(station);
      });

      marker.addTo(map.current!);
      markers.current.set(station.id, marker);
    });
  }, [stations, onStationSelect]);

  // // Highlight selected station
  useEffect(() => {
    if (!selectedStation || !map.current) return;

    const marker = markers.current.get(selectedStation.id);
    if (marker) {
      map.current.setView([selectedStation.lat, selectedStation.lng], 10);
      marker.openPopup();
    }
  }, [selectedStation]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-lg"
      style={{ minHeight: "400px" }}
    />
  );
}
