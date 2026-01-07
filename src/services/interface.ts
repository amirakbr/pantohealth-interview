export interface IStation {
  id: string;
  name: string;
  city: string;
  lat: number;
  lng: number;
}

export interface IGetStationData {
  stationLists: IStation[];
  uniqueCities: IStation[];
}
