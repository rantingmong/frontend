"use server";

import { fromUnixTime } from "date-fns";
import { first } from "lodash";
import { CityLocation } from "../city/fetch";
import { WeatherCondition } from "../shape";

export async function fetchOverview(location: CityLocation) {
  const requestQuery = new URLSearchParams();
  requestQuery.set("lat", location.lat.toString());
  requestQuery.set("lon", location.lng.toString());
  requestQuery.set("units", "metric");
  requestQuery.set("appid", process.env.WEATHER_API_KEY ?? "");
  requestQuery.append("exclude", "minutely");
  requestQuery.append("exclude", "hourly");
  requestQuery.append("exclude", "daily");
  requestQuery.append("exclude", "alerts");

  const requestUrl =
    process.env.WEATHER_API_URL?.concat(
      "data/3.0/onecall",
      "?",
      requestQuery.toString(),
    ) ?? "";

  return fetch(requestUrl).then(async (response) => {
    const content = await response.json();

    if (response.status !== 200) {
      throw new Error("Request failed", { cause: content });
    }

    return {
      temperature: {
        current: content.current.temp,
        feelsLike: content.current.feels_like,
        humidity: content.current.humidity,
        pressure: content.current.pressure,
      },
      cloud: {
        density: content.current.clouds,
        visibility: content.current.visibility,
        wind: {
          direction: content.current.wind_deg,
          speed: content.current.wind_speed,
        },
      },
      weather: first(content.current.weather),
      sunrise: fromUnixTime(content.current.sunrise),
      sunset: fromUnixTime(content.current.sunset),
    } as Overview;
  });
}

export type Overview = {
  temperature: {
    current: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
  };
  cloud: {
    density: number;
    visibility: number;
    wind: {
      direction: number;
      speed: number;
    };
  };
  weather: WeatherCondition;
  sunrise: Date;
  sunset: Date;
};
