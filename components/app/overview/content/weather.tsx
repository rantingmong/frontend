"use client";

import { Card } from "@/components/ui/card";
import { useWeatherOverview } from "@/lib/app/overview";
import Image from "next/image";

export default function ContentWeather() {
  const overview = useWeatherOverview();

  return (
    <Card className="flex flex-col gap-2 p-3">
      <h2 className="text-lg font-semibold">Weather</h2>
      <div className="flex flex-row items-center gap-2">
        <div className="relative size-12 rounded-full">
          {overview && (
            <Image
              alt={overview.weather.main ?? ""}
              src={`https://openweathermap.org/img/wn/${overview.weather.icon ?? ""}@2x.png`}
              fill
            />
          )}
        </div>
        <h3 className="font-medium capitalize">
          {overview?.weather.description ?? "--"}
        </h3>
      </div>
    </Card>
  );
}
