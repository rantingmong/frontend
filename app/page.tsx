import OverviewContent from "@/components/app/overview/content";
import { OverviewProvider } from "@/lib/app/overview";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 px-3">
      <OverviewProvider>
        <OverviewContent />
      </OverviewProvider>
    </div>
  );
}
