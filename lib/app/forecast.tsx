"use client";

import { AlertLoadError } from "@/components/ui/alert-load-error";
import { Card } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { Fragment, createContext, useContext } from "react";
import { default as useSWR } from "swr";
import { useCityCurrent } from "./city";
import { Forecast, fetchForecast } from "./forecast/fetch";

export function ForecastProvider({ children }: React.PropsWithChildren) {
  const city = useCityCurrent();
  const state = useSWR(
    ["forecast", city?.location ?? null],
    ([_, location]) => {
      if (!location) {
        return null;
      }

      return fetchForecast(location);
    },
  );

  return (
    <context.Provider value={{ overview: state.data ?? undefined }}>
      {state.isLoading ? (
        <Card className="mx-3 flex flex-row items-center p-3">
          <LoaderCircle className="mr-2 animate-spin" />
          <span className="font-semibold">Fetching Forecast</span>
        </Card>
      ) : (
        <Fragment>
          {state.error && (
            <AlertLoadError
              title="Weather Forecast"
              onTryAgain={state.mutate}
            />
          )}
          {children}
        </Fragment>
      )}
    </context.Provider>
  );
}

export function useWeatherForecast() {
  return useContext(context).overview?.slice(1, 6) ?? null;
}

const context = createContext<{ overview: Forecast[] | undefined }>(
  null as any,
);
