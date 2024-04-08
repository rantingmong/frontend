import { Button } from "@/components/ui/button";
import ContentItem from "./content/item";

export default function HistoryContent() {
  return (
    <div className="flex flex-col gap-2 px-3">
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <Button variant="outline">Load More</Button>
    </div>
  );
}
