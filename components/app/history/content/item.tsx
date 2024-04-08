import { Card } from "@/components/ui/card";

export default function ContentItem() {
  return (
    <Card className="p-3 flex flex-col gap-2">
      <span className="font-semibold text-xs opacity-65 uppercase">Date</span>
      <h4>--°C - --°C</h4>
    </Card>
  );
}
