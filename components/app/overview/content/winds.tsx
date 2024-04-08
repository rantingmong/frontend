"use client";

import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { useWeatherOverview } from "@/lib/app/overview";
import { formatNumber } from "@/lib/utils";
import { ArrowUp, Wind } from "lucide-react";

export default function ContentWinds() {
  const overview = useWeatherOverview();

  return (
    <Card className="flex flex-col gap-2 p-3">
      <h2 className="text-lg font-semibold">Clouds and Winds</h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3">
          <Field label="Cover">{overview?.cloud.density ?? "--"}%</Field>
          <Field label="Visibility">
            {overview ? formatNumber(overview.cloud.visibility) : "--"} m
          </Field>
        </div>
        <div className="flex flex-col gap-3 ">
          <Field
            icon={ArrowUp}
            iconStyles={{
              transform: `rotateZ(${overview?.cloud.wind.direction ?? 0}deg)`,
            }}
            label="Direction"
          >
            {overview?.cloud.wind.direction ?? "--"}°
          </Field>
          <Field icon={Wind} label="Speed">
            {overview?.cloud.wind.speed ?? "--"} m/sec
          </Field>
        </div>
      </div>
    </Card>
  );
}
