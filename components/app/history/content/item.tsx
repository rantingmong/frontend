import { Card } from "@/components/ui/card";
import { History } from "@/lib/app/history/fetch";
import { format, parse } from "date-fns";

export default function ContentItem({ history }: { history: History }) {
  return (
    <Card className="flex flex-col gap-2 p-3">
      <span className="text-xs font-semibold uppercase opacity-65">
        {format(parse(history.date, "yyyy-MM-dd", Date()), "MMM dd, yyyy")}
      </span>
      <h4>
        {history.temperature.min}°C - {history.temperature.max}°C
      </h4>
    </Card>
  );
}
