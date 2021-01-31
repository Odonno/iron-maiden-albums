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
        link: "https://www.youtube.com/watch?v=80Hyz4pOXtE",
      },
      {
        name: "Phantom of the Opera",
        duration: 7 * 60 + 8,
        link: "https://www.youtube.com/watch?v=p2ct4xXak24",
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
        link: "https://www.youtube.com/watch?v=rGJnjSATu50",
      },
      {
        name: "Wrathchild",
        duration: 2 * 60 + 54,
        link: "https://www.youtube.com/watch?v=u-3Ka8x4zvE",
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
        link: "https://www.youtube.com/watch?v=w1Fw71X4uiM",
      },
      {
        name: "Prodigal Son",
        duration: 6 * 60 + 12,
        link: "https://www.youtube.com/watch?v=rbP7Yh8vnmg",
      },
      {
        name: "Purgatory",
        duration: 3 * 60 + 20,
        link: "",
      },
      {
        name: "Drifter",
        duration: 4 * 60 + 49,
        link: "https://www.youtube.com/watch?v=qkVJ0GrKBN8",
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
        link: "https://www.youtube.com/watch?v=wsuj2uhGBvY",
      },
      {
        name: "The Prisoner",
        duration: 5 * 60 + 34,
        link: "https://www.youtube.com/watch?v=MLYdFSaE4tk",
      },
      {
        name: "22 Acacia Avenue",
        duration: 6 * 60 + 34,
        link: "",
      },
      {
        name: "The Number of the Beast",
        duration: 4 * 60 + 25,
        link: "https://www.youtube.com/watch?v=WxnN05vOuSM",
      },
      {
        name: "Run to the Hills",
        duration: 3 * 60 + 50,
        link: "https://www.youtube.com/watch?v=86URGgqONvA",
      },
      {
        name: "Gangland",
        duration: 3 * 60 + 46,
        link: "",
      },
      {
        name: "Hallowed Be Thy Name",
        duration: 7 * 60 + 8,
        link: "https://www.youtube.com/watch?v=J51LPlP-s9o",
      },
    ],
  },
  {
    name: "Piece of Mind",
    slug: "piece-of-mind",
    image: "/albums/piece-of-mind.jpg",
    year: 1983,
    songs: [
      {
        name: "Where Eagles Dare",
        duration: 6 * 60 + 8,
        link: "",
      },
      {
        name: "Revelations",
        duration: 6 * 60 + 51,
        link: "",
      },
      {
        name: "Flight of Icarus",
        duration: 3 * 60 + 49,
        link: "https://www.youtube.com/watch?v=p4w2BZXL6Ss",
      },
      {
        name: "Die With Your Boots On",
        duration: 5 * 60 + 22,
        link: "",
      },
      {
        name: "The Trooper",
        duration: 4 * 60 + 10,
        link: "https://www.youtube.com/watch?v=X4bgXH3sJ2Q",
      },
      {
        name: "Still Life",
        duration: 4 * 60 + 37,
        link: "",
      },
      {
        name: "Quest for Fire",
        duration: 3 * 60 + 40,
        link: "",
      },
      {
        name: "Sun and Steel",
        duration: 3 * 60 + 25,
        link: "",
      },
      {
        name: "To Tame a Land",
        duration: 7 * 60 + 26,
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
        link: "https://www.youtube.com/watch?v=Xg9aQvjMS60",
      },
      {
        name: "2 Minutes to Midnight",
        duration: 5 * 60 + 59,
        link: "https://www.youtube.com/watch?v=9qbRHY1l0vc",
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
        link: "https://www.youtube.com/watch?v=Mw-o_cSdqmI",
      },
      {
        name: "Rime of the Ancient Mariner",
        duration: 13 * 60 + 34,
        link: "https://www.youtube.com/watch?v=OSDZj_jh5cE",
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
        link: "https://www.youtube.com/watch?v=PzUI3-lJmEA",
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
        link: "https://www.youtube.com/watch?v=6BH9HvZx3nI",
      },
    ],
  },
  {
    name: "Seventh Son of a Seventh Son",
    slug: "seventh-son-of-a-seventh-son",
    image: "/albums/seventh-son-of-a-seventh-son.jpg",
    year: 1988,
    songs: [
      {
        name: "Moonchild",
        duration: 5 * 60 + 40,
        link: "https://www.youtube.com/watch?v=kvh-aU7KCFY",
      },
      {
        name: "Infinite Dreams",
        duration: 6 * 60 + 8,
        link: "",
      },
      {
        name: "Can I Play with Madness",
        duration: 3 * 60 + 49,
        link: "https://www.youtube.com/watch?v=Kvqr366Op3k",
      },
      {
        name: "The Evil that Men Do",
        duration: 4 * 60 + 34,
        link: "https://www.youtube.com/watch?v=M6JpxDebokM",
      },
      {
        name: "Seventh Son of a Seventh Son",
        duration: 9 * 60 + 53,
        link: "https://www.youtube.com/watch?v=PptHWHfnCnY",
      },
      {
        name: "The Prophecy",
        duration: 5 * 60 + 5,
        link: "",
      },
      {
        name: "The Clairvoyant",
        duration: 4 * 60 + 27,
        link: "",
      },
      {
        name: "Only the Good Die Young",
        duration: 4 * 60 + 42,
        link: "",
      },
    ],
  },
  {
    name: "No Prayer for the Dying",
    slug: "no-prayer-for-the-dying",
    image: "/albums/no-prayer-for-the-dying.jpg",
    year: 1990,
    songs: [
      {
        name: "Tailgunner",
        duration: 4 * 60 + 13,
        link: "",
      },
      {
        name: "Holy Smoke",
        duration: 3 * 60 + 47,
        link: "",
      },
      {
        name: "No Prayer for the Dying",
        duration: 4 * 60 + 22,
        link: "https://www.youtube.com/watch?v=QonEs-Teci4",
      },
      {
        name: "Public Enema Number One",
        duration: 4 * 60 + 3,
        link: "",
      },
      {
        name: "Fates Warning",
        duration: 4 * 60 + 9,
        link: "",
      },
      {
        name: "The Assassin",
        duration: 4 * 60 + 16,
        link: "",
      },
      {
        name: "Run Silent Run Deep",
        duration: 4 * 60 + 34,
        link: "",
      },
      {
        name: "Hooks in You",
        duration: 4 * 60 + 6,
        link: "",
      },
      {
        name: "Bring Your Daughter... to the Slaughter",
        duration: 4 * 60 + 42,
        link: "https://www.youtube.com/watch?v=m0J7XnbUN5o",
      },
      {
        name: "Mother Russia",
        duration: 5 * 60 + 30,
        link: "",
      },
    ],
  },
  {
    name: "Fear of the Dark",
    slug: "fear-fo-the-dark",
    image: "/albums/fear-fo-the-dark.jpg",
    year: 1992,
    songs: [
      {
        name: "Be Quick or Be Dead",
        duration: 3 * 60 + 24,
        link: "https://www.youtube.com/watch?v=CTt1vk9nM9c",
      },
      {
        name: "From Here to Eternity",
        duration: 3 * 60 + 38,
        link: "https://www.youtube.com/watch?v=MhUUTvgjUFQ",
      },
      {
        name: "Afraid to Shoot Strangers",
        duration: 6 * 60 + 56,
        link: "https://www.youtube.com/watch?v=wfcLesynJrc",
      },
      {
        name: "Fear Is the Key",
        duration: 5 * 60 + 35,
        link: "",
      },
      {
        name: "Childhood's End",
        duration: 4 * 60 + 40,
        link: "https://www.youtube.com/watch?v=EuHAE5TvW0E",
      },
      {
        name: "Wasting Love",
        duration: 5 * 60 + 50,
        link: "",
      },
      {
        name: "The Fugitive",
        duration: 4 * 60 + 54,
        link: "",
      },
      {
        name: "Chains of Misery",
        duration: 3 * 60 + 37,
        link: "https://www.youtube.com/watch?v=xmi8p8KncCE",
      },
      {
        name: "The Apparition",
        duration: 3 * 60 + 54,
        link: "",
      },
      {
        name: "Judas Be My Guide",
        duration: 3 * 60 + 8,
        link: "https://www.youtube.com/watch?v=dnm2rA0KYOA",
      },
      {
        name: "Weekend Warrior",
        duration: 5 * 60 + 39,
        link: "",
      },
      {
        name: "Fear of the Dark",
        duration: 7 * 60 + 18,
        link: "https://www.youtube.com/watch?v=bePCRKGUwAY",
      },
    ],
  },
  {
    name: "Virtual XI",
    slug: "virtual-XI",
    image: "/albums/virtual-XI.jpg",
    year: 1998,
    songs: [
      {
        name: "Futureal",
        duration: 3 * 60 + 0,
        link: "",
      },
      {
        name: "The Angel and the Gambler",
        duration: 9 * 60 + 51,
        link: "",
      },
      {
        name: "Lightning Strikes Twice",
        duration: 4 * 60 + 49,
        link: "",
      },
      {
        name: "The Clansman",
        duration: 9 * 60 + 6,
        link: "https://www.youtube.com/watch?v=UwLtyvGdNbc",
      },
      {
        name: "When Two Worlds Collide",
        duration: 6 * 60 + 13,
        link: "",
      },
      {
        name: "The Educated Fool",
        duration: 6 * 60 + 46,
        link: "",
      },
      {
        name: "Don't Look to the Eyes of a Stranger",
        duration: 8 * 60 + 11,
        link: "https://www.youtube.com/watch?v=pFHD28p-yDw",
      },
      {
        name: "Como Estais Amigos",
        duration: 5 * 60 + 26,
        link: "",
      },
    ],
  },
  {
    name: "Brave New World",
    slug: "brave-new-world",
    image: "/albums/brave-new-world.jpg",
    year: 2000,
    songs: [
      {
        name: "The Wicker Man",
        duration: 4 * 60 + 35,
        link: "",
      },
      {
        name: "Ghost of the Navigator",
        duration: 6 * 60 + 50,
        link: "https://www.youtube.com/watch?v=q4ZKbYXDZtk",
      },
      {
        name: "Brave New World",
        duration: 6 * 60 + 18,
        link: "https://www.youtube.com/watch?v=X5P_muGUJR4",
      },
      {
        name: "Blood Brothers",
        duration: 7 * 60 + 14,
        link: "",
      },
      {
        name: "The Mercenary",
        duration: 4 * 60 + 42,
        link: "",
      },
      {
        name: "Dream of Mirrors",
        duration: 9 * 60 + 21,
        link: "",
      },
      {
        name: "The Fallen Angel",
        duration: 4 * 60 + 0,
        link: "",
      },
      {
        name: "The Nomad",
        duration: 9 * 60 + 6,
        link: "",
      },
      {
        name: "Out of the Silent Planet",
        duration: 6 * 60 + 25,
        link: "https://www.youtube.com/watch?v=dg-AZTTDVj4",
      },
      {
        name: "The Thin Line Between Love & Hate",
        duration: 8 * 60 + 26,
        link: "https://www.youtube.com/watch?v=QRxyCLPGDA0",
      },
    ],
  },
  {
    name: "Dance of Death",
    slug: "dance-of-death",
    image: "/albums/dance-of-death.jpg",
    year: 2003,
    songs: [
      {
        name: "Wildest Dreams",
        duration: 3 * 60 + 52,
        link: "",
      },
      {
        name: "Rainmaker",
        duration: 3 * 60 + 48,
        link: "",
      },
      {
        name: "No More Lies",
        duration: 7 * 60 + 22,
        link: "https://www.youtube.com/watch?v=Pp6nqnRJ3hg",
      },
      {
        name: "Montségur",
        duration: 5 * 60 + 50,
        link: "",
      },
      {
        name: "Dance of Death",
        duration: 8 * 60 + 36,
        link: "https://www.youtube.com/watch?v=3659fTXvFts",
      },
      {
        name: "Gates of Tomorrow",
        duration: 5 * 60 + 12,
        link: "",
      },
      {
        name: "New Frontier",
        duration: 5 * 60 + 4,
        link: "",
      },
      {
        name: "Paschendale",
        duration: 8 * 60 + 28,
        link: "https://www.youtube.com/watch?v=Mx3UPfzGeN4",
      },
      {
        name: "Face in the Sand",
        duration: 6 * 60 + 32,
        link: "",
      },
      {
        name: "Age of Innocence",
        duration: 6 * 60 + 10,
        link: "",
      },
      {
        name: "Journeyman",
        duration: 7 * 60 + 3,
        link: "",
      },
    ],
  },
  {
    name: "A Matter of Life and Death",
    slug: "a-matter-of-life-and-death",
    image: "/albums/a-matter-of-life-and-death.jpg",
    year: 2006,
    songs: [
      {
        name: "Different World",
        duration: 4 * 60 + 17,
        link: "",
      },
      {
        name: "These Colours Don't Run",
        duration: 6 * 60 + 52,
        link: "",
      },
      {
        name: "Brighter Than a Thousand Suns",
        duration: 8 * 60 + 44,
        link: "https://www.youtube.com/watch?v=G5nb4r6gf2I",
      },
      {
        name: "The Pilgrim",
        duration: 5 * 60 + 7,
        link: "",
      },
      {
        name: "The Longest Day",
        duration: 7 * 60 + 46,
        link: "https://www.youtube.com/watch?v=ZruY6BUovFo",
      },
      {
        name: "Out of the Shadows",
        duration: 5 * 60 + 36,
        link: "",
      },
      {
        name: "The Reincarnation of Benjamin Breeg",
        duration: 7 * 60 + 22,
        link: "",
      },
      {
        name: "For the Greater Good of God",
        duration: 9 * 60 + 22,
        link: "https://www.youtube.com/watch?v=p3Uy1YhBsvs",
      },
      {
        name: "Lord of Light",
        duration: 7 * 60 + 23,
        link: "",
      },
      {
        name: "The Legacy",
        duration: 9 * 60 + 25,
        link: "",
      },
    ],
  },
  {
    name: "The Final Frontier",
    slug: "the-final-frontier",
    image: "/albums/the-final-frontier.jpg",
    year: 2010,
    songs: [
      {
        name: "Satellite 15... The Final Frontier",
        duration: 8 * 60 + 40,
        link: "https://www.youtube.com/watch?v=jiOgT_uopI8",
      },
      {
        name: "El Dorado",
        duration: 6 * 60 + 49,
        link: "",
      },
      {
        name: "Mother of Mercy",
        duration: 5 * 60 + 20,
        link: "",
      },
      {
        name: "Coming Home",
        duration: 5 * 60 + 52,
        link: "https://www.youtube.com/watch?v=4uec4-GnKj4",
      },
      {
        name: "The Alchemist",
        duration: 4 * 60 + 29,
        link: "",
      },
      {
        name: "Isle Of Avalon",
        duration: 9 * 60 + 6,
        link: "",
      },
      {
        name: "Starblind",
        duration: 7 * 60 + 48,
        link: "",
      },
      {
        name: "The Talisman",
        duration: 9 * 60 + 3,
        link: "",
      },
      {
        name: "The Man Who Would Be King",
        duration: 8 * 60 + 28,
        link: "",
      },
      {
        name: "When the Wild Wind Blows",
        duration: 11 * 60 + 0,
        link: "https://www.youtube.com/watch?v=WmPTxrJ-kHI",
      },
    ],
  },
  {
    name: "The Book of Souls",
    slug: "the-book-of-souls",
    image: "/albums/the-book-of-souls.jpg",
    year: 2015,
    songs: [
      {
        name: "If Eternity Should Fail",
        duration: 8 * 60 + 28,
        link: "https://www.youtube.com/watch?v=tFQCDciIibU",
      },
      {
        name: "Speed of Light",
        duration: 5 * 60 + 1,
        link: "https://www.youtube.com/watch?v=-F7A24f6gNc",
      },
      {
        name: "The Great Unknown",
        duration: 5 * 60 + 37,
        link: "",
      },
      {
        name: "The Red and the Black",
        duration: 13 * 60 + 33,
        link: "https://www.youtube.com/watch?v=uoynC3XpXF8",
      },
      {
        name: "When the River Runs Deep",
        duration: 5 * 60 + 52,
        link: "",
      },
      {
        name: "The Book of Souls",
        duration: 10 * 60 + 27,
        link: "https://www.youtube.com/watch?v=FQ0qz5iU6ho",
      },
      {
        name: "Death or Glory",
        duration: 5 * 60 + 13,
        link: "",
      },
      {
        name: "Shadows of the Valley",
        duration: 7 * 60 + 32,
        link: "",
      },
      {
        name: "Tears of a Clown",
        duration: 4 * 60 + 59,
        link: "https://www.youtube.com/watch?v=KUCp3CsLo5k",
      },
      {
        name: "The Man of Sorrows",
        duration: 6 * 60 + 28,
        link: "",
      },
      {
        name: "Empire of the Clouds",
        duration: 18 * 60 + 1,
        link: "https://www.youtube.com/watch?v=YbAhn7iKLPc",
      },
    ],
  },
];
