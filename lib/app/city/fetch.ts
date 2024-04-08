"use server";

export async function fetchCities(query: string) {
  const queryString = new URLSearchParams();
  queryString.set("q", query);
  queryString.set("limit", "10");
  queryString.set("appid", process.env.WEATHER_API_KEY ?? "");

  const requestUrl =
    process.env.WEATHER_API_URL?.concat(
      "geo/1.0/direct",
      "?",
      queryString.toString(),
    ) ?? "";

  return fetch(requestUrl).then(async (response) => {
    const content = await response.json();

    if (response.status !== 200) {
      throw new Error("Request failed", { cause: content });
    }

    return (content as any[]).map((city) => {
      return {
        location: {
          lat: city.lat,
          lng: city.lon,
        },
        label: city.name,
        state: city.state,
        country: city.country,
      } as City;
    });
  });
}

export type City = {
  location: {
    lat: number;
    lng: number;
  };
  label: string;
  state: string;
  country: string;
};
