import React from "react";
import { AppLayout } from "./components/layout/AppLayout";
import { MetricsBar } from "./components/metrics/MetricsBar";
import { TransitMap } from "./components/map/TransitMap";
import { RouteFilterPanel } from "./components/filters/RouteFilterPanel";
import { routes } from "./shared/constants";

const App: React.FC = () => {
  const [selectedRoutes, setSelectedRoutes] = React.useState<string[]>(
    routes.map(r => r.id)
  );

  return (
    <AppLayout
      headerContent={<h1>Transit Insight Dashboard</h1>}
      sidebarContent={
        <RouteFilterPanel
          selectedRoutes={selectedRoutes}
          onSelectionChange={setSelectedRoutes}
        />
      }
      mainContent={
        <>
          <MetricsBar />
          <TransitMap selectedRoutes={selectedRoutes} />
        </>
      }
    />
  );
};

export default App;
