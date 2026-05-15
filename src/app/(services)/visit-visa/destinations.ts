export type Destination = {
  name: string;
  slug: string;
  type: string;
  region: string;
  popular?: boolean;
};

export const destinations: Destination[] = [
  // Popular Asia
  {
    name: "China",
    slug: "/visit-visa/china",
    type: "Tourist & Visit Visas",
    region: "Asia",
    popular: true,
  },
  {
    name: "South Korea",
    slug: "/visit-visa/south-korea",
    type: "Tourist & Visit Visas",
    region: "Asia",
    popular: true,
  },
  {
    name: "Japan",
    slug: "/visit-visa/japan",
    type: "Tourist & Visit Visas",
    region: "Asia",
    popular: true,
  },
  {
    name: "Thailand",
    slug: "/visit-visa/thailand",
    type: "Tourist & Visit Visas",
    region: "Asia",
  },
  {
    name: "Malaysia",
    slug: "/visit-visa/malaysia",
    type: "Tourist & Visit Visas",
    region: "Asia",
  },
  {
    name: "Singapore",
    slug: "/visit-visa/singapore",
    type: "Tourist & Visit Visas",
    region: "Asia",
  },
  {
    name: "India",
    slug: "/visit-visa/india",
    type: "Tourist & Visit Visas",
    region: "Asia",
  },
  {
    name: "Indonesia",
    slug: "/visit-visa/indonesia",
    type: "Tourist & Visit Visas",
    region: "Asia",
  },
  {
    name: "Vietnam",
    slug: "/visit-visa/vietnam",
    type: "Tourist & Visit Visas",
    region: "Asia",
  },
  {
    name: "Philippines",
    slug: "/visit-visa/philippines",
    type: "Tourist & Visit Visas",
    region: "Asia",
  },

  // Schengen / Europe
  {
    name: "Europe",
    slug: "/visit-visa/europe",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
    popular: true,
  },
  {
    name: "France",
    slug: "/visit-visa/france",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
    popular: true,
  },
  {
    name: "Germany",
    slug: "/visit-visa/germany",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
    popular: true,
  },
  {
    name: "Italy",
    slug: "/visit-visa/italy",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
    popular: true,
  },
  {
    name: "Spain",
    slug: "/visit-visa/spain",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Greece",
    slug: "/visit-visa/greece",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
    popular: true,
  },
  {
    name: "Portugal",
    slug: "/visit-visa/portugal",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Netherlands",
    slug: "/visit-visa/netherlands",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Switzerland",
    slug: "/visit-visa/switzerland",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Austria",
    slug: "/visit-visa/austria",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Belgium",
    slug: "/visit-visa/belgium",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Sweden",
    slug: "/visit-visa/sweden",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Norway",
    slug: "/visit-visa/norway",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Denmark",
    slug: "/visit-visa/denmark",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Finland",
    slug: "/visit-visa/finland",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Czech Republic",
    slug: "/visit-visa/czech-republic",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Poland",
    slug: "/visit-visa/poland",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Hungary",
    slug: "/visit-visa/hungary",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Croatia",
    slug: "/visit-visa/croatia",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },
  {
    name: "Malta",
    slug: "/visit-visa/malta",
    type: "Schengen Tourist & Visit Visas",
    region: "Schengen Europe",
  },

  // Non-Schengen Europe
  {
    name: "UK",
    slug: "/visit-visa/uk",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
    popular: true,
  },
  {
    name: "Ireland",
    slug: "/visit-visa/ireland",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Turkey",
    slug: "/visit-visa/turkey",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
    popular: true,
  },
  {
    name: "Cyprus",
    slug: "/visit-visa/cyprus",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Bulgaria",
    slug: "/visit-visa/bulgaria",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Romania",
    slug: "/visit-visa/romania",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Georgia",
    slug: "/visit-visa/georgia",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Azerbaijan",
    slug: "/visit-visa/azerbaijan",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Armenia",
    slug: "/visit-visa/armenia",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Serbia",
    slug: "/visit-visa/serbia",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Bosnia and Herzegovina",
    slug: "/visit-visa/bosnia-and-herzegovina",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Albania",
    slug: "/visit-visa/albania",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "Montenegro",
    slug: "/visit-visa/montenegro",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },
  {
    name: "North Macedonia",
    slug: "/visit-visa/north-macedonia",
    type: "Tourist & Visit Visas",
    region: "Non-Schengen Europe",
  },

  // North America
  {
    name: "USA",
    slug: "/visit-visa/usa",
    type: "Tourist & Visit Visas",
    region: "North America",
    popular: true,
  },
  {
    name: "Canada",
    slug: "/visit-visa/canada",
    type: "Tourist & Visit Visas",
    region: "North America",
    popular: true,
  },

  // Oceania
  {
    name: "Australia",
    slug: "/visit-visa/australia",
    type: "Tourist & Visit Visas",
    region: "Oceania",
    popular: true,
  },
  {
    name: "New Zealand",
    slug: "/visit-visa/new-zealand",
    type: "Tourist & Visit Visas",
    region: "Oceania",
  },

  // GCC / Middle East
  {
    name: "UAE",
    slug: "/visit-visa/uae",
    type: "Tourist & Visit Visas",
    region: "GCC & Middle East",
  },
  {
    name: "Saudi Arabia",
    slug: "/visit-visa/saudi-arabia",
    type: "Tourist & Visit Visas",
    region: "GCC & Middle East",
  },
  {
    name: "Oman",
    slug: "/visit-visa/oman",
    type: "Tourist & Visit Visas",
    region: "GCC & Middle East",
  },
  {
    name: "Bahrain",
    slug: "/visit-visa/bahrain",
    type: "Tourist & Visit Visas",
    region: "GCC & Middle East",
  },
  {
    name: "Kuwait",
    slug: "/visit-visa/kuwait",
    type: "Tourist & Visit Visas",
    region: "GCC & Middle East",
  },
  {
    name: "Jordan",
    slug: "/visit-visa/jordan",
    type: "Tourist & Visit Visas",
    region: "GCC & Middle East",
  },
  {
    name: "Egypt",
    slug: "/visit-visa/egypt",
    type: "Tourist & Visit Visas",
    region: "GCC & Middle East",
  },

  // Africa
  {
    name: "South Africa",
    slug: "/visit-visa/south-africa",
    type: "Tourist & Visit Visas",
    region: "Africa",
  },
  {
    name: "Morocco",
    slug: "/visit-visa/morocco",
    type: "Tourist & Visit Visas",
    region: "Africa",
  },
];

export const destinationRegions = [
  "All",
  "Asia",
  "Schengen Europe",
  "Non-Schengen Europe",
  "North America",
  "Oceania",
  "GCC & Middle East",
  "Africa",
];