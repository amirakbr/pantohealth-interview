import { useState, useEffect } from "react";
import StationsList from "./stationList";
import useGetStationData from "../services/getStationData";
import Card from "../_sharedComponents/card/card";
import Error from "../_sharedComponents/error";
import TrainMap from "./trainMap";
import type { IStation } from "./interface";

const GermanyTrainStations = () => {
  const { data, isFetching, isError, error, refetch } = useGetStationData();
  const { stationLists, uniqueCities } = data || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStation, setSelectedStation] = useState<IStation | null>(null);
  const [filteredStations, setFilteredStations] = useState<
    IStation[] | undefined
  >([]);

  if (isError) {
    return (
      <Card containerClassName="h-dvh w-dvw">
        <Error retryCallBack={refetch} label={error?.message} />
      </Card>
    );
  }

  useEffect(() => {
    let filtered = stationLists;

    if (selectedCity) {
      filtered = filtered?.filter((s) => s.city === selectedCity);
    }

    if (searchQuery) {
      filtered = filtered?.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredStations(filtered);
  }, [stationLists, selectedCity, searchQuery]);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            German Train Stations
          </h1>
          <p className="text-muted-foreground">
            Explore {stationLists?.length} train stations across Germany
          </p>
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search stations by name or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card border border-border text-foreground rounded-md px-3 py-2 font-medium w-full"
            />
          </div>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="bg-card border border-border text-foreground rounded-md px-3 py-2 font-medium"
          >
            <option value="">All Cities ({stationLists?.length})</option>
            {uniqueCities?.map(({ city, name }) => (
              <option key={city} value={city}>
                {name} ({stationLists?.filter((s) => s.city === city).length}{" "}
                station)
              </option>
            ))}
          </select>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 grid-rows-[35rem]">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card
              containerClassName="overflow-hidden min-h-96 rounded-xl h-full"
              isLoading={isFetching}
            >
              <TrainMap
                stations={filteredStations}
                selectedStation={selectedStation}
                onStationSelect={setSelectedStation}
              />
            </Card>
          </div>

          <Card
            containerClassName="h-full flex flex-col"
            isLoading={isFetching}
          >
            <>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Stations ({filteredStations?.length})
              </h2>
              <StationsList
                stations={filteredStations}
                selectedStation={selectedStation}
                onStationSelect={setSelectedStation}
              />
            </>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default GermanyTrainStations;
