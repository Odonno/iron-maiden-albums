export type Song = {
  name: string;
  duration: number;
  link: string;
};

export type Album = {
  name: string;
  slug: string;
  image: string;
  year: number;
  songs?: Song[];
};

export const albums: Album[] = [
  {
    name: "Iron Maiden",
    slug: "iron-maiden",
    image: "/albums/iron-maiden.jpg",
    year: 1980,
    songs: [
      {
        name: "Prowler",
        duration: 3 * 60 + 55,
        link: "",
      },
      {
        name: "Remember Tomorrow",
        duration: 5 * 60 + 27,
        link: "",
      },
      {
        name: "Running Free",
        duration: 3 * 60 + 16,
        link: "",
      },
      {
        name: "Phantom of the Opera",
        duration: 7 * 60 + 8,
        link: "",
      },
      {
        name: "Transylvania",
        duration: 4 * 60 + 16,
        link: "",
      },
      {
        name: "Strange World",
        duration: 5 * 60 + 32,
        link: "",
      },
      {
        name: "Charlotte the Harlot",
        duration: 4 * 60 + 12,
        link: "",
      },
      {
        name: "Iron Maiden",
        duration: 3 * 60 + 35,
        link: "https://www.youtube.com/watch?v=L3OHi_vw4jY",
      },
    ],
  },
  {
    name: "Killers",
    slug: "killers",
    image: "/albums/killers.jpg",
    year: 1981,
    songs: [
      {
        name: "The Ides of March",
        duration: 1 * 60 + 46,
        link: "",
      },
      {
        name: "Wrathchild",
        duration: 2 * 60 + 54,
        link: "",
      },
      {
        name: "Murders in the Rue Morgue",
        duration: 4 * 60 + 18,
        link: "",
      },
      {
        name: "Another Life",
        duration: 3 * 60 + 23,
        link: "",
      },
      {
        name: "Genghis Khan",
        duration: 3 * 60 + 6,
        link: "",
      },
      {
        name: "Innocent Exile",
        duration: 3 * 60 + 52,
        link: "",
      },
      {
        name: "Killers",
        duration: 5 * 60 + 1,
        link: "",
      },
      {
        name: "Prodigal Son",
        duration: 6 * 60 + 12,
        link: "",
      },
      {
        name: "Purgatory",
        duration: 3 * 60 + 20,
        link: "",
      },
      {
        name: "Drifter",
        duration: 4 * 60 + 49,
        link: "",
      },
    ],
  },
  {
    name: "The Number of the Beast",
    slug: "number-of-the-beast",
    image: "/albums/number-of-the-beast.jpg",
    year: 1982,
    songs: [
      {
        name: "Invaders",
        duration: 3 * 60 + 20,
        link: "",
      },
      {
        name: "Children of the Damned",
        duration: 4 * 60 + 34,
        link: "",
      },
      {
        name: "The Prisoner",
        duration: 5 * 60 + 34,
        link: "",
      },
      {
        name: "22 Acacia Avenue",
        duration: 6 * 60 + 34,
        link: "",
      },
      {
        name: "The Number of the Beast",
        duration: 4 * 60 + 25,
        link: "",
      },
      {
        name: "Run to the Hills",
        duration: 3 * 60 + 50,
        link: "",
      },
      {
        name: "Gangland",
        duration: 3 * 60 + 46,
        link: "",
      },
      {
        name: "Hallowed Be Thy Name",
        duration: 7 * 60 + 8,
        link: "",
      },
    ],
  },
  {
    name: "Powerslave",
    slug: "powerslave",
    image: "/albums/powerslave.jpg",
    year: 1984,
    songs: [
      {
        name: "Aces High",
        duration: 4 * 60 + 29,
        link: "",
      },
      {
        name: "2 Minutes to Midnight",
        duration: 5 * 60 + 59,
        link: "",
      },
      {
        name: "Losfer Words (Big 'Orra)",
        duration: 4 * 60 + 13,
        link: "",
      },
      {
        name: "Flash of the Blade",
        duration: 4 * 60 + 2,
        link: "",
      },
      {
        name: "The Duellists",
        duration: 6 * 60 + 7,
        link: "",
      },
      {
        name: "Back in the Village",
        duration: 5 * 60 + 3,
        link: "",
      },
      {
        name: "Powerslave",
        duration: 7 * 60 + 8,
        link: "",
      },
      {
        name: "Rime of the Ancient Mariner",
        duration: 13 * 60 + 34,
        link: "",
      },
    ],
  },
  {
    name: "Somewhere in Time",
    slug: "somewhere-in-time",
    image: "/albums/somewhere-in-time.jpg",
    year: 1986,
    songs: [
      {
        name: "Caught Somewhere in Time",
        duration: 7 * 60 + 26,
        link: "",
      },
      {
        name: "Wasted Years",
        duration: 5 * 60 + 7,
        link: "",
      },
      {
        name: "Sea of Madness",
        duration: 5 * 60 + 42,
        link: "",
      },
      {
        name: "Heaven Can Wait",
        duration: 7 * 60 + 23,
        link: "",
      },
      {
        name: "The Loneliness of the Long Distance Runner",
        duration: 6 * 60 + 32,
        link: "",
      },
      {
        name: "Stranger in a Strange Land",
        duration: 5 * 60 + 46,
        link: "",
      },
      {
        name: "Déjà-Vu",
        duration: 4 * 60 + 56,
        link: "",
      },
      {
        name: "Alexander the Great",
        duration: 8 * 60 + 38,
        link: "",
      },
    ],
  },
  {
    name: "Seventh Son of a Seventh Son",
    slug: "seventh-son-of-a-seventh-son",
    image: "/albums/seventh-son-of-a-seventh-son.jpg",
    year: 1988,
  },
  {
    name: "No Prayer for the Dying",
    slug: "no-prayer-for-the-dying",
    image: "/albums/no-prayer-for-the-dying.jpg",
    year: 1990,
  },
  {
    name: "Fear of the Dark",
    slug: "fear-fo-the-dark",
    image: "/albums/fear-fo-the-dark.jpg",
    year: 1992,
  },
  {
    name: "Virtual XI",
    slug: "virtual-XI",
    image: "/albums/virtual-XI.jpg",
    year: 1998,
  },
  {
    name: "Brave New World",
    slug: "brave-new-world",
    image: "/albums/brave-new-world.jpg",
    year: 2000,
  },
  {
    name: "Dance of Death",
    slug: "dance-of-death",
    image: "/albums/dance-of-death.jpg",
    year: 2003,
  },
  {
    name: "A Matter of Life and Death",
    slug: "a-matter-of-life-and-death",
    image: "/albums/a-matter-of-life-and-death.jpg",
    year: 2006,
  },
  {
    name: "The Final Frontier",
    slug: "the-final-frontier",
    image: "/albums/the-final-frontier.jpg",
    year: 2010,
  },
  {
    name: "The Book of Souls",
    slug: "the-book-of-souls",
    image: "/albums/the-book-of-souls.jpg",
    year: 2015,
  },
];
