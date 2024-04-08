import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";

export default function ContentItem() {
  return (
    <Card className="p-3 flex flex-col gap-2">
      <h4 className="uppercase text-xs font-semibold opacity-65">Date goes here</h4>
      <div className="flex flex-row gap-2 items-center">
        <div className="size-8 rounded-full bg-muted relative"></div>
        <span className="font-medium">35°C</span>
        <Separator className="h-8" orientation="vertical" />
        <Field orientation="horizontal" label="Humidity">
          <span className="text-sm">35%</span>
        </Field>
      </div>
      <span>Weather Condition</span>
    </Card>
  );
}
