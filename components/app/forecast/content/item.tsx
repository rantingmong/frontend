import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import { Forecast } from "@/lib/app/forecast/fetch";
import { format } from "date-fns";
import { default as Image } from "next/image";

export default function ContentItem({ forecast }: ContentItemProps) {
  return (
    <Card className="flex flex-col gap-2 p-3">
      <h4 className="text-xs font-semibold uppercase opacity-65">
        {format(forecast.dt, "MMM dd, yyyy")}
      </h4>
      <div className="flex flex-row items-center gap-2">
        <div className="relative size-8 rounded-full">
          <Image
            alt={forecast.weather.main ?? ""}
            src={`https://openweathermap.org/img/wn/${forecast.weather.icon ?? ""}@2x.png`}
            fill
          />
        </div>
        <span className="font-medium">{forecast.temperature.current}°C</span>
        <Separator className="h-8" orientation="vertical" />
        <Field orientation="horizontal" label="Feels Like">
          <span className="text-sm">{forecast.temperature.feelsLike}°C</span>
        </Field>
        <Separator className="h-8" orientation="vertical" />
        <Field orientation="horizontal" label="Humidity">
          <span className="text-sm">{forecast.temperature.humidity}%</span>
        </Field>
      </div>
      <span className="text-sm capitalize">{forecast.weather.description}</span>
    </Card>
  );
}

type ContentItemProps = {
  forecast: Forecast;
};
