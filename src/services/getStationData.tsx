import { useQuery } from "@tanstack/react-query";
import type { IGetStationData, IStation } from "./interface";

const useGetStationData = () => {
  return useQuery({
    queryFn: () => {
      return fetch(
        "https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw"
      )
        .then((response) => response?.json())
        .then((data): IGetStationData => {
          const stationLists = data;
          const uniqueCities: IStation[] = [
            ...new Set<IStation>(data.map((s: IStation) => s)),
          ];
          return {
            stationLists,
            uniqueCities,
          };
        });
    },
    queryKey: ["stationData", "list"],
  });
};

export default useGetStationData;
