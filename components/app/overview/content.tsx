import { Fragment } from "react";
import ContentTemperature from "./content/temperature";
import ContentWeather from "./content/weather";
import ContentWinds from "./content/winds";

export default function OverviewContent() {
  return (
    <Fragment>
      <ContentTemperature />
      <div className="grid grid-cols-2 gap-3">
        <ContentWeather />
        <ContentWinds />
      </div>
    </Fragment>
  );
}
