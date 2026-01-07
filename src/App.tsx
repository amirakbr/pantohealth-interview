import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GermanyTrainStations from "./stations/germanyTrainStations";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GermanyTrainStations />
    </QueryClientProvider>
  );
};

export default App;
