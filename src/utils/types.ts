export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: [key: string];
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: [key: string];
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: [key: string];
  flag: string;
  maps: [key: string];
  population: number;
  fifa: string;
  car: [key: string];
  timezones: string[];
  continents: string[];
  flags: [key: string];
  coatOfArms: [key: string];
  startOfWeek: string;
}

export interface CountryContextState {
  countries: Country[];
  loading: boolean;
  placeholders: never[];
  error: boolean;
}
