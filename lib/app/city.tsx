import { isEmpty } from "lodash";
import { useCallback, useRef, useState } from "react";
import { create } from "zustand";
import { City, fetchCities } from "./city/fetch";

export function useCityCurrent() {
  return cityStore((s) => s.current);
}

export function useCitySearch() {
  const debounceScope = useRef<any | null>(null);

  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState<City[]>([]);

  return {
    doQuery: useCallback(function (value: string) {
      if (isEmpty(value)) {
        setResult([]);
        return;
      }

      setFetching(true);

      if (debounceScope.current) {
        clearTimeout(debounceScope.current);
      }

      debounceScope.current = setTimeout(function () {
        fetchCities(value)
          .then(setResult.bind(null))
          .catch(() => setResult([]))
          .finally(() => setFetching(false));
      }, 1000);
    }, []),
    selectCity: useCallback(function (city: City) {
      cityStore.setState({ current: city });
    }, []),
    result,
    fetching,
  };
}

const cityStore = create<CityStore>((set) => ({
  current: null,
}));

type CityStore = {
  current: City | null;
};
