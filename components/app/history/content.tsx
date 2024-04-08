"use client";

import { Button } from "@/components/ui/button";
import { useWeatherHistory } from "@/lib/app/history";
import { Fragment } from "react";
import ContentItem from "./content/item";

export default function HistoryContent({ loadingMore }: HistoryContentProps) {
  const { history, paginate } = useWeatherHistory();

  return (
    <Fragment>
      {history?.map((item) => <ContentItem key={item.date} history={item} />)}
      <Button
        disabled={loadingMore}
        variant="outline"
        onClick={!loadingMore ? paginate : undefined}
      >
        {loadingMore ? "Loading..." : "Load More"}
      </Button>
    </Fragment>
  );
}

type HistoryContentProps = {
  loadingMore: boolean;
};
