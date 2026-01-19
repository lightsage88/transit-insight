import React from "react";

interface AppLayoutProps {
  headerContent: React.ReactNode;
  sidebarContent: React.ReactNode;
  mainContent: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  headerContent,
  sidebarContent,
  mainContent,
}) => {
  return (
    <div className="app-root">
      <header className="app-header">
        {headerContent}
      </header>
      <div className="app-body">
        <aside className="app-sidebar">
          {sidebarContent}
        </aside>
        <main className="app-main">
          {mainContent}
        </main>
      </div>
    </div>
  );
};
