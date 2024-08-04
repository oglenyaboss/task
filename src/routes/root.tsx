import React from "react";
import { PlaceholdersAndVanishInput } from "../components/placeholder";
import { ShootingStars } from "../components/stars";
import { StarsBackground } from "../components/starsbg";
import { CountryContext } from "../utils/CountryContext";
import { useNavigate } from "react-router-dom";
import { AuroraBackground } from "../components/liBg";

export default function Root() {
  const { countries, loading, placeholders, error } =
    React.useContext(CountryContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-slate-950">
        <p className="text-xl text-slate-200">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-slate-950">
        <p className="text-xl text-slate-200">
          Error fetching data. Please try again later
        </p>
      </div>
    );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const country = countries.find(
      (c) => c.name.common.toLowerCase() === searchTerm.toLowerCase()
    );

    if (country) {
      navigate(`/country/${country.name.common}`);
    }
  };
  return (
    <>
      <div className="h-screen w-screen justify-center flex items-center flex-col bg-slate-900">
        <h2 className="mb-5 sm:mb-20 text-xl text-center sm:text-5xl text-slate-100">
          Write country name
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="w-screen h-screen p-5">
        <AuroraBackground>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {countries
              .sort((a, b) => a.name.common.localeCompare(b.name.common)) // Сортировка по алфавиту
              .map((country) => (
                <li
                  key={country.cca3}
                  className="border p-4 rounded cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out"
                  onClick={() => {
                    navigate(`/country/${country.name.common}`);
                  }}
                >
                  <span className="text-xl">{country.flag}</span>{" "}
                  {country.name.common}
                </li>
              ))}
          </ul>
        </AuroraBackground>
      </div>
    </>
  );
}
