import { filterStationsByQuery } from "../utils/filterStationsByQuery";

const stations = [
  {
    id: "1",
    name: "Berlin Hbf",
    city: "Berlin",
    lat: 0,
    lng: 0,
  },
  {
    id: "2",
    name: "Munich Hbf",
    city: "Munich",
    lat: 0,
    lng: 0,
  },
  {
    id: "3",
    name: "Munich Hbf 5",
    city: "Munich",
    lat: 0,
    lng: 0,
  },
];

test("filters stations by city name", () => {
  const berlinResult = filterStationsByQuery("berl", stations);
  const munichResult = filterStationsByQuery("muni", stations);

  expect(berlinResult).toHaveLength(1);
  expect(berlinResult?.[0].name).toBe("Berlin Hbf");

  expect(munichResult).toHaveLength(2);
  expect(munichResult?.[0].name).toBe("Munich Hbf");
});
