"use server";

import { CityLocation } from "../city/fetch";

export async function fetchHistory(date: string, location: CityLocation) {
  const requestQuery = new URLSearchParams();
  requestQuery.set("lat", location.lat.toString());
  requestQuery.set("lon", location.lng.toString());
  requestQuery.set("units", "metric");
  requestQuery.set("appid", process.env.WEATHER_API_KEY ?? "");
  requestQuery.set("date", date);

  const requestUrl =
    process.env.WEATHER_API_URL?.concat(
      "data/3.0/onecall/day_summary",
      "?",
      requestQuery.toString(),
    ) ?? "";

  return fetch(requestUrl).then(async (response) => {
    const content = await response.json();

    if (response.status !== 200) {
      throw new Error("Request failed", { cause: content });
    }

    return {
      date: content.date,
      temperature: {
        min: content.temperature.min,
        max: content.temperature.max,
        pressure: content.pressure.afternoon,
        humidity: content.humidity.afternoon,
      },
      cloud: {
        density: content.cloud_cover.afternoon,
        wind: {
          direction: content.wind.max.direction,
          speed: content.wind.max.speed,
        },
      },
    } as History;
  });
}

export type History = {
  date: string;
  temperature: {
    min: number;
    max: number;
    pressure: number;
    humidity: number;
  };
  cloud: {
    density: number;
    wind: {
      direction: number;
      speed: number;
    };
  };
};
