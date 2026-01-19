import React from "react";
import { AppLayout } from "./components/layout/AppLayout";
import { MetricsBar } from "./components/metrics/MetricsBar";
import { TransitMap } from "./components/map/TransitMap";
import { RouteFilterPanel } from "./components/filters/RouteFilterPanel";

const App: React.FC = () => {
  return (
    <AppLayout
      headerContent={<h1>Transit Insight Dashboard</h1>}
      sidebarContent={<RouteFilterPanel />}
      mainContent={
        <>
          <MetricsBar />
          <TransitMap />
        </>
      }
    />
  );
};

export default App;
