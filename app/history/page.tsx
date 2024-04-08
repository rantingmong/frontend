"use client";

import HistoryContent from "@/components/app/history/content";
import { HistoryProvider } from "@/lib/app/history";

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-3 px-3 pb-3">
      <HistoryProvider>
        {(loadingMore) => <HistoryContent loadingMore={loadingMore} />}
      </HistoryProvider>
    </div>
  );
}
