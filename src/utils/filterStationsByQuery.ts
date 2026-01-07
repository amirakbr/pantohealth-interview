import type { IStation } from "../stations/interface";

export function filterStationsByQuery(
  searchQuery: string,
  stations?: IStation[]
) {
  return stations?.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.city.toLowerCase().includes(searchQuery.toLowerCase())
  );
}
