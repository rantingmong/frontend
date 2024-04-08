import ContentTemperature from "./content/temperature";
import ContentWeather from "./content/weather";
import ContentWinds from "./content/winds";

export default function OverviewContent() {
  return (
    <div className="flex flex-col gap-3 px-3">
      <ContentTemperature />
      <div className="grid grid-cols-2 gap-3">
        <ContentWeather />
        <ContentWinds />
      </div>
    </div>
  );
}
