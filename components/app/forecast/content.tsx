import ContentItem from "./content/item";

export default function ForecastContent() {
  return (
    <div className="flex flex-col gap-2 px-3">
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
    </div>
  );
}
