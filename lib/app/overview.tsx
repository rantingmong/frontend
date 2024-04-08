"use client";

import { AlertLoadError } from "@/components/ui/alert-load-error";
import { Card } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import { Fragment, createContext, useContext } from "react";
import { default as useSWR } from "swr";
import { useCityCurrent } from "./city";
import { Overview, fetchOverview } from "./overview/fetch";

export function OverviewProvider({ children }: React.PropsWithChildren) {
  const city = useCityCurrent();
  const state = useSWR(
    ["overview", city?.location ?? null],
    ([_, location]) => {
      if (!location) {
        return null;
      }

      return fetchOverview(location);
    },
  );

  return (
    <context.Provider value={{ overview: state.data ?? undefined }}>
      {state.isLoading ? (
        <Card className="flex flex-row items-center p-3">
          <LoaderCircle className="mr-2 animate-spin" />
          <span className="font-semibold">Fetching Overview</span>
        </Card>
      ) : (
        <Fragment>
          {state.error && (
            <AlertLoadError
              title="Weather Overview"
              onTryAgain={state.mutate}
            />
          )}
          {children}
        </Fragment>
      )}
    </context.Provider>
  );
}

export function useWeatherOverview() {
  return useContext(context).overview ?? null;
}

const context = createContext<{ overview: Overview | undefined }>(null as any);
