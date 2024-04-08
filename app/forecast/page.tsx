import ForecastContent from "@/components/app/forecast/content";
import { ForecastProvider } from "@/lib/app/forecast";

export default function ForecastPage() {
  return (
    <div className="flex flex-col gap-3 px-3 pb-3">
      <ForecastProvider>
        <ForecastContent />
      </ForecastProvider>
    </div>
  );
}
