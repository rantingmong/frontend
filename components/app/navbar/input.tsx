"use client";

import { useCitySearch } from "@/lib/app/city";
import { compact } from "lodash";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function NavbarInput() {
  const [showList, setShowList] = useState(false);
  const { fetching, result, doQuery } = useCitySearch();

  return (
    <div className="group relative h-12 grow" data-opened={showList}>
      <div className="absolute -inset-x-2 -top-2 hidden h-[300px] flex-col rounded-xl border bg-background pt-16 group-data-[opened=true]:flex">
        {fetching ? (
          <div className="flex flex-row items-center px-2 opacity-65">
            <LoaderCircle className="mr-2 animate-spin" size={12} /> Fetching
            results
          </div>
        ) : (
          result.map((city) => (
            <div
              className="flex flex-row px-2 py-2 hover:bg-muted"
              key={[city.location.lat, city.location.lng].join("-")}
            >
              {compact([city.label, city.state, city.country]).join(" - ")}
            </div>
          ))
        )}
      </div>
      <input
        className="absolute inset-0 z-20 min-w-0 rounded-full bg-muted px-5 outline-none"
        placeholder="Search for Cities"
        onBlur={setShowList.bind(null, false)}
        onFocus={setShowList.bind(null, true)}
        onInput={(event) => doQuery(event.currentTarget.value)}
      />
    </div>
  );
}
