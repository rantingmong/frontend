"use client";

import { AlertLoadError } from "@/components/ui/alert-load-error";
import { Card } from "@/components/ui/card";
import { format, sub } from "date-fns";
import { LoaderCircle } from "lucide-react";
import React, { Fragment, createContext, useCallback, useContext } from "react";
import { default as useSWRInfinite } from "swr/infinite";
import { useCityCurrent } from "./city";
import { CityLocation } from "./city/fetch";
import { History, fetchHistory } from "./history/fetch";

type HistoryProviderProps = {
  children(loadingMore: boolean): React.ReactNode;
};

export function HistoryProvider({ children }: HistoryProviderProps) {
  const city = useCityCurrent();
  const state = useSWRInfinite(infiniteKey(city?.location ?? null), fetcher, {
    initialSize: 5,
  });

  const paginate = useCallback(() => {
    state.setSize((current) => current + 5);
  }, [state]);

  return (
    <context.Provider value={{ history: state.data ?? null, paginate }}>
      {state.isLoading ? (
        <Card className="mx-3 flex flex-row items-center p-3">
          <LoaderCircle className="mr-2 animate-spin" />
          <span className="font-semibold">Fetching History</span>
        </Card>
      ) : (
        <Fragment>
          {state.error && (
            <AlertLoadError title="Weather History" onTryAgain={state.mutate} />
          )}
          {children(state.isValidating)}
        </Fragment>
      )}
    </context.Provider>
  );
}

export function useWeatherHistory() {
  return useContext(context);
}

const context = createContext<{ history: History[] | null; paginate(): void }>(
  null as any,
);

function infiniteKey(location: CityLocation | null) {
  return function (index: number) {
    if (!location) {
      return null;
    }

    return [
      "history",
      format(sub(Date(), { days: index }), "yyyy-MM-dd"),
      location,
    ] as [string, string, CityLocation];
  };
}

async function fetcher([_, value, location]: [string, string, CityLocation]) {
  return fetchHistory(value, location);
}
