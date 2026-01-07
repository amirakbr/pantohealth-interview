export interface IStation {
  id: string;
  name: string;
  city: string;
  lat: number;
  lng: number;
}

export interface ITrainMapProps {
  stations?: IStation[];
  selectedStation?: IStation | null;
  onStationSelect: (station: IStation) => void;
}

export interface IStationsListProps {
  stations?: IStation[];
  selectedStation?: IStation | null;
  onStationSelect: (station: IStation | null) => void;
}