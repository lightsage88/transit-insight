const BASE_URL = "https://developer.trimet.org/ws/v2";

const APP_ID = import.meta.env.VITE_TRIMET_APP_ID;

if (!APP_ID) {
  console.warn(
    "[Transit Insight] Missing VITE_TRIMET_APP_ID – using mock data until configured."
  );
}

export async function fetchVehiclesByRoutes(routes: string[]) {
  if (!APP_ID || routes.length === 0) {
    return [];
  }

  const params = new URLSearchParams({
    appID: APP_ID,
    routes: routes.join(","),
  });

  const url = `${BASE_URL}/vehicles?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Vehicle request failed: ${res.status}`);
  }

  const data = await res.json();
  // NOTE: shape based on TriMet docs; you’ll tune this once you inspect payload. :contentReference[oaicite:10]{index=10}
  return data.resultSet?.vehicle ?? [];
}
