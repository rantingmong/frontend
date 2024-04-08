"use client";

import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { useWeatherOverview } from "@/lib/app/overview";
import { formatNumber } from "@/lib/utils";
import { format } from "date-fns";
import { Droplet, Gauge, Sunrise, Sunset } from "lucide-react";

export default function ContentTemperature() {
  const overview = useWeatherOverview();

  return (
    <Card className="flex flex-col p-3">
      <h2 className="text-lg font-semibold">Temperature</h2>
      <span className="text-2xl font-bold">
        {overview?.temperature.current ?? "--"} °C
      </span>
      <span className="text-sm opacity-65">
        Feels like {overview?.temperature.feelsLike ?? "--"} °C
      </span>
      <div className="mt-3 flex flex-row gap-3">
        <Field icon={Gauge} label="Pressure">
          {overview ? formatNumber(overview.temperature.pressure) : "--"} mPa
        </Field>
        <Field icon={Droplet} label="Humidity">
          {overview?.temperature.humidity ?? "--"}%
        </Field>
      </div>
      <div className="mt-3 flex flex-row gap-3">
        <Field icon={Sunrise} label="Sunrise">
          {overview ? format(overview.sunrise, "hh:mm aa") : "--"}
        </Field>
        <Field icon={Sunset} label="Sunset">
          {overview ? format(overview.sunset, "hh:mm aa") : "--"}
        </Field>
      </div>
    </Card>
  );
}
