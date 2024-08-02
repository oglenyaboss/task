import React, { createContext, useState, useEffect } from "react";
import { fetchCountries } from "./functions";

const CountryContext = createContext({
  countries: [],
  loading: true,
  placeholders: [],
  error: false,
});

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placeholders, setPlaceholders] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
        setLoading(false);
        const countryNames = data.map((country) => country.name.common);
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
