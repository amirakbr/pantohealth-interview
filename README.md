## Testing

The project includes unit and component tests focusing on core business
logic and user interactions.

### Covered scenarios
- Filtering stations by city name (case-insensitive)
- Selecting a station from the list triggers interaction logic

Map rendering and Leaflet internals are intentionally excluded from tests,
as they rely on third-party libraries and are better suited for
end-to-end testing.

### Running tests
```bash
npm run test


Project Overview

This project is a small frontend application built with React and Leaflet that visualizes train stations across Germany on an interactive map.

The application fetches station data from a public API, displays the stations both as map markers and in a list view, and allows users to filter stations by city. Selecting a station from the list interacts with the map by focusing or zooming to the corresponding location.

The focus of this project is on clean frontend architecture, state management, and user interaction, rather than complex UI styling or backend logic.