import { createContext, useState, useEffect } from "react";
import { fetchCountries } from "./functions";
import { Country, CountryContextState } from "./types";

const CountryContext = createContext<CountryContextState>({
  countries: [],
  loading: true,
  placeholders: [],
  error: false,
});

import { ReactNode } from "react";

const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [placeholders, setPlaceholders] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
        setLoading(false);
        const countryNames = data.map(
          (country: Country) => country.name.common
        );
        setPlaceholders(countryNames);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        setError(true);
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{ countries, loading, placeholders, error }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext, CountryProvider };
