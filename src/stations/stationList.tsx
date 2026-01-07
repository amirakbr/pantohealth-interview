import type { IStationsListProps } from "./interface";

export default function StationsList({
  stations,
  selectedStation,
  onStationSelect,
}: IStationsListProps) {
  return (
    <div className="flex-1 overflow-y-auto space-y-2 pr-2">
      {stations?.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          No stations found
        </p>
      ) : (
        stations?.map((station) => (
          <button
            key={station.id}
            onClick={() => {
              onStationSelect(station);
            }}
            className={`w-full text-left p-3 !rounded-2xl border-2 transition-all ${
              selectedStation?.id === station.id
                ? "bg-primary border-primary text-primary-foreground"
                : "bg-secondary border-border hover:border-primary"
            }`}
          >
            <p className="font-semibold text-sm">{station.name}</p>
            <p className="text-xs opacity-75">{station.city}</p>
          </button>
        ))
      )}
    </div>
  );
}
