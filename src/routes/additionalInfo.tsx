// src/CountryDetail.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CountryContext } from "../utils/CountryContext";
import { StickyScroll } from "../components/stickyScroll";

const CountryDetail = () => {
  const { name } = useParams();
  const { countries } = useContext(CountryContext);

  const country = countries.find((country) => country.name.common === name);

  if (!country) {
    return <div>Country not found</div>;
  }

  const content = [
    {
      title: `Common facts about ${country.name.common}`,
      description: `Official name: ${country.name.official}
    Region: ${country.region}
    Subregion: ${country.subregion}
    Capital: ${country.capital}
    `,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <p className="text-9xl">{country.flag}</p>
        </div>
      ),
    },
    {
      title: `Population`,
      description: `Population: ${country.population}
    Languages: ${Object.values(country.languages)}
    `,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <p className="text-9xl">👫🏻</p>
        </div>
      ),
    },
    {
      title: `Other facts`,
      description: `Independent: ${country.independent ? "yes" : "no"}
    UN member: ${country.unMember ? "yes" : "no"}
    Status: ${country.status}
    Timezones: ${country.timezones}
    Start Of Week: ${country.startOfWeek}
    `,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <p className="text-9xl">👀</p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
      <StickyScroll content={content} />
    </div>
  );
};

export default CountryDetail;

/*
{
  "name": {
    "common": "Afghanistan",
    "official": "Islamic Republic of Afghanistan",
    "nativeName": {
      "prs": {
        "official": "جمهوری اسلامی افغانستان",
        "common": "افغانستان"
      },
      "pus": {
        "official": "د افغانستان اسلامي جمهوریت",
        "common": "افغانستان"
      },
      "tuk": {
        "official": "Owganystan Yslam Respublikasy",
        "common": "Owganystan"
      }
    }
  },
  "tld": [
    ".af"
  ],
  "cca2": "AF",
  "ccn3": "004",
  "cca3": "AFG",
  "cioc": "AFG",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true,
  "currencies": {
    "AFN": {
      "name": "Afghan afghani",
      "symbol": "؋"
    }
  },
  "idd": {
    "root": "+9",
    "suffixes": [
      "3"
    ]
  },
  "capital": [
    "Kabul"
  ],
  "altSpellings": [
    "AF",
    "Afġānistān"
  ],
  "region": "Asia",
  "subregion": "Southern Asia",
  "languages": {
    "prs": "Dari",
    "pus": "Pashto",
    "tuk": "Turkmen"
  },
  "flag": "🇦🇫",
  "maps": {
    "googleMaps": "https://goo.gl/maps/BXBGw7yUUFknCfva9",
    "openStreetMaps": "https://www.openstreetmap.org/relation/303427"
  },
  "population": 40218234,
  "fifa": "AFG",
  "car": {
    "signs": [
      "AFG"
    ],
    "side": "right"
  },
  "timezones": [
    "UTC+04:30"
  ],
  "continents": [
    "Asia"
  ],
  "flags": {
    "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    "alt": "The flag of the Islamic Emirate of Afghanistan has a white field with Arabic inscriptions — the Shahada — in black across its center."
  },
  "coatOfArms": {
    "png": "https://mainfacts.com/media/images/coats_of_arms/af.png",
    "svg": "https://mainfacts.com/media/images/coats_of_arms/af.svg"
  },
  "startOfWeek": "monday",
  "capitalInfo": {
    "latlng": [
      34.52,
      69.18
    ]
  }
}*/
