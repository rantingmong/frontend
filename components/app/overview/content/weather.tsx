import { Card } from "@/components/ui/card";

export default function ContentWeather() {
  return (
    <Card className="p-3 flex flex-col gap-2">
      <h2 className="font-semibold text-lg">Weather</h2>
      <div className="flex flex-row gap-2 items-center">
        <div className="size-6 rounded-full bg-muted" />
        <h3 className="font-medium">Condition</h3>
      </div>
    </Card>
  );
}
