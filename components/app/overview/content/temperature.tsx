import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Droplet, Gauge, Sunrise, Sunset } from "lucide-react";

export default function ContentTemperature() {
  return (
    <Card className="p-3 flex flex-col">
      <h2 className="font-semibold text-lg">Temperature</h2>
      <span className="text-2xl font-bold">30°C</span>
      <span className="text-sm opacity-65">Feels like 35°C</span>
      <div className="flex flex-row gap-3 mt-3">
        <Field icon={Gauge} label="Pressure">
          100mPa
        </Field>
        <Field icon={Droplet} label="Humidity">
          70%
        </Field>
      </div>
      <div className="flex flex-row gap-3 mt-3">
        <Field icon={Sunrise} label="Sunrise">
          6:30AM
        </Field>
        <Field icon={Sunset} label="Sunset">
          6:30PM
        </Field>
      </div>
    </Card>
  );
}
