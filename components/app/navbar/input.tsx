"use client";

import { Button } from "@/components/ui/button";
import { useCityCurrent, useCitySearch } from "@/lib/app/city";
import { City } from "@/lib/app/city/fetch";
import { compact } from "lodash";
import { LoaderCircle } from "lucide-react";
import { useCallback, useState } from "react";

export default function NavbarInput() {
  const [showList, setShowList] = useState(false);
  const { fetching, result, doQuery, selectCity } = useCitySearch();
  const currentCity = useCityCurrent();

  const onSelectCity = useCallback(
    function (city: City) {
      selectCity(city);
      setShowList(false);
    },
    [selectCity],
  );

  return (
    <div className="group relative h-12 grow" data-opened={showList}>
      <div className="absolute -inset-x-2 -top-2 hidden min-h-[150px] flex-col rounded-xl border bg-background pt-16 group-data-[opened=true]:flex">
        {fetching ? (
          <div className="flex flex-row items-center px-2 opacity-65">
            <LoaderCircle className="mr-2 animate-spin" size={12} /> Fetching
            results
          </div>
        ) : (
          result.map((city) => (
            <button
              className="flex flex-row px-2 py-2 outline-none hover:bg-muted"
              key={[city.location.lat, city.location.lng].join("-")}
              type="button"
              onClick={onSelectCity.bind(null, city)}
            >
              {compact([city.label, city.state, city.country]).join(" - ")}
            </button>
          ))
        )}
        <div className="grow" />
        <Button
          className="mb-2 self-start"
          variant="link"
          size="sm"
          onClick={setShowList.bind(null, false)}
        >
          Cancel
        </Button>
      </div>
      {currentCity && !showList ? (
        <div className="absolute inset-0 flex flex-row items-center justify-between rounded-full bg-muted px-5 text-sm">
          {compact([currentCity.label, currentCity.state]).join(" - ")}
          <button
            className="hover:underline"
            onClick={setShowList.bind(null, true)}
          >
            Choose Another
          </button>
        </div>
      ) : (
        <input
          className="absolute inset-0 z-20 min-w-0 rounded-full bg-muted px-5 outline-none"
          placeholder="Search for Cities"
          onInput={(event) => doQuery(event.currentTarget.value)}
          onFocus={setShowList.bind(null, true)}
        />
      )}
    </div>
  );
}
