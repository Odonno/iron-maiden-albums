import Head from "next/head";

const albums = [
  {
    name: "Iron Maiden",
    image: "/albums/iron-maiden.jpg",
    year: 1980,
    songs: [
      {
        name: "Prowler",
        duration: 3 * 60 + 55,
      },
      {
        name: "Remember Tomorrow",
        duration: 5 * 60 + 27,
      },
      {
        name: "Running Free",
        duration: 3 * 60 + 16,
      },
      {
        name: "Phantom of the Opera",
        duration: 7 * 60 + 8,
      },
      {
        name: "Transylvania",
        duration: 4 * 60 + 16,
      },
      {
        name: "Strange World",
        duration: 5 * 60 + 32,
      },
      {
        name: "Charlotte the Harlot",
        duration: 4 * 60 + 12,
      },
      {
        name: "Iron Maiden",
        duration: 3 * 60 + 35,
      },
    ],
  },
  {
    name: "Killers",
    image: "/albums/killers.jpg",
    year: 1981,
    songs: [
      {
        name: "The Ides of March",
        duration: 1 * 60 + 46,
      },
      {
        name: "Wrathchild",
        duration: 2 * 60 + 54,
      },
      {
        name: "Murders in the Rue Morgue",
        duration: 4 * 60 + 18,
      },
      {
        name: "Another Life",
        duration: 3 * 60 + 23,
      },
      {
        name: "Genghis Khan",
        duration: 3 * 60 + 6,
      },
      {
        name: "Innocent Exile",
        duration: 3 * 60 + 52,
      },
      {
        name: "Killers",
        duration: 5 * 60 + 1,
      },
      {
        name: "Prodigal Son",
        duration: 6 * 60 + 12,
      },
      {
        name: "Purgatory",
        duration: 3 * 60 + 20,
      },
      {
        name: "Drifter",
        duration: 4 * 60 + 49,
      },
    ],
  },
  {
    name: "The Number of the Beast",
    image: "/albums/number-of-the-beast.jpg",
    year: 1982,
  },
  {
    name: "Powerslave",
    image: "/albums/powerslave.jpg",
    year: 1984,
  },
  {
    name: "Live After Death",
    image: "/albums/live-after-death.jpg",
    year: 1985,
  },
  {
    name: "Somewhere in Time",
    image: "/albums/somewhere-in-time.jpg",
    year: 1986,
  },
  {
    name: "Seventh Son of a Seventh Son",
    image: "/albums/seventh-son-of-a-seventh-son.jpg",
    year: 1988,
  },
  {
    name: "No Prayer for the Dying",
    image: "/albums/no-prayer-for-the-dying.jpg",
    year: 1990,
  },
  {
    name: "Fear of the Dark",
    image: "/albums/fear-fo-the-dark.jpg",
    year: 1992,
  },
  {
    name: "Virtual XI",
    image: "/albums/virtual-XI.jpg",
    year: 1998,
  },
  {
    name: "Brave New World",
    image: "/albums/brave-new-world.jpg",
    year: 2000,
  },
  {
    name: "Dance of Death",
    image: "/albums/dance-of-death.jpg",
    year: 2003,
  },
  {
    name: "A Matter of Life and Death",
    image: "/albums/a-matter-of-life-and-death.jpg",
    year: 2006,
  },
  {
    name: "The Final Frontier",
    image: "/albums/the-final-frontier.jpg",
    year: 2010,
  },
  {
    name: "The Book of Souls",
    image: "/albums/the-book-of-souls.jpg",
    year: 2015,
  },
];

const HomePage = () => {
  return (
    <div className="min-w-screen min-h-screen p-6 bg-gray-600 grid gap-6 grid-cols-5">
      <Head>
        <title>Iron Maiden Albums</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {albums.map((album) => {
        return (
          <div
            key={album.name}
            className="h-80 bg-cover bg-no-repeat bg-center rounded shadow-lg flex"
            style={{ backgroundImage: `url(${album.image})` }}
          ></div>
        );
      })}
    </div>
  );
};

export default HomePage;
