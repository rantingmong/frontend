"use server";

import { fromUnixTime } from "date-fns";
import { first } from "lodash";
import { CityLocation } from "../city/fetch";
import { WeatherCondition } from "../shape";

export async function fetchForecast(location: CityLocation) {
  const requestQuery = new URLSearchParams();
  requestQuery.set("lat", location.lat.toString());
  requestQuery.set("lon", location.lng.toString());
  requestQuery.set("units", "metric");
  requestQuery.set("appid", process.env.WEATHER_API_KEY ?? "");
  requestQuery.append("exclude", "minutely");
  requestQuery.append("exclude", "hourly");
  requestQuery.append("exclude", "current");
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

    return (content.daily as any[]).map((day) => {
      return {
        dt: fromUnixTime(day.dt),
        temperature: {
          current: day.temp.day,
          feelsLike: day.feels_like.day,
          humidity: day.humidity,
          pressure: day.pressure,
        },
        cloud: {
          density: day.clouds,
          wind: {
            direction: day.wind_deg,
            speed: day.wind_speed,
          },
        },
        weather: first(day.weather),
        sunrise: fromUnixTime(day.sunrise),
        sunset: fromUnixTime(day.sunset),
      } as Forecast;
    });
  });
}

export type Forecast = {
  dt: Date;
  temperature: {
    current: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
  };
  cloud: {
    density: number;
    wind: {
      direction: number;
      speed: number;
    };
  };
  weather: WeatherCondition;
  sunrise: Date;
  sunset: Date;
};
