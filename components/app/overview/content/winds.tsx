import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { ArrowUp, Wind } from "lucide-react";

export default function ContentWinds() {
  return (
    <Card className="p-3 flex flex-col gap-2">
      <h2 className="font-semibold text-lg">Clouds and Winds</h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3">
          <Field label="Density">50%</Field>
          <Field label="Visibility">10Km</Field>
        </div>
        <div className="flex flex-col gap-3">
          <Field icon={ArrowUp} label="Direction">
            200°
          </Field>
          <Field icon={Wind} label="Speed">
            15kph
          </Field>
        </div>
      </div>
    </Card>
  );
}
