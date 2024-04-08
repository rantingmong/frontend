"use client";

import { useWeatherForecast } from "@/lib/app/forecast";
import ContentItem from "./content/item";

export default function ForecastContent() {
  const forecast = useWeatherForecast();

  return (
    forecast?.map((day) => (
      <ContentItem forecast={day} key={day.dt.getTime()} />
    )) ?? null
  );
}
