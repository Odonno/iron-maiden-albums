import braveNewWorld from "../public/albums/brave-new-world.jpg";
import senjutsu from "../public/albums/senjutsu.jpg";
import aMatterOfLifeAndDeath from "../public/albums/a-matter-of-life-and-death.jpg";
import danceOfDeath from "../public/albums/dance-of-death.jpg";
import fearOfTheDark from "../public/albums/fear-of-the-dark.jpg";
import ironMaiden from "../public/albums/iron-maiden.jpg";
import killers from "../public/albums/killers.jpg";
import noPrayerForTheDying from "../public/albums/no-prayer-for-the-dying.jpg";
import numberOfTheBeast from "../public/albums/number-of-the-beast.jpg";
import pieceOfMind from "../public/albums/piece-of-mind.jpg";
import powerslave from "../public/albums/powerslave.jpg";
import seventhSonOfaSeventhSon from "../public/albums/seventh-son-of-a-seventh-son.jpg";
import somewhereInTime from "../public/albums/somewhere-in-time.jpg";
import theBookOfSouls from "../public/albums/the-book-of-souls.jpg";
import theFinalFrontier from "../public/albums/the-final-frontier.jpg";
import theXFactor from "../public/albums/the-x-factor.jpg";
import virtualXI from "../public/albums/virtual-XI.jpg";
import { StaticImageData } from "next/legacy/image";

export type Song = {
  name: string;
  duration: number;
  link: string;
};

export type Album = {
  name: string;
  slug: string;
  image: string | StaticImageData;
  blurhash: string;
  year: number;
  songs?: Song[];
};

export const albums: Album[] = [
  {
    name: "Iron Maiden",
    slug: "iron-maiden",
    image: ironMaiden,
    blurhash: "KJHe8lR.9z$;$|o#+}N2-T",
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
    image: killers,
    blurhash: "KDC?Pz.59K~BtQxr=zs*%G",
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
    image: numberOfTheBeast,
    blurhash: "KGDbj6VtX8~Ds:nj^jxujZ",
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
    image: pieceOfMind,
    blurhash: "KHD[%iIrE3}bs.xr;UxYWY",
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
    image: powerslave,
    blurhash: "KELDV^NF5]0[?GT208WA4n",
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
    image: somewhereInTime,
    blurhash: "K9E33a%0A[9D4nxb~pxa%N",
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
    image: seventhSonOfaSeventhSon,
    blurhash: "K8JJ3.-N1SUd?wI[009FD4",
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
    image: noPrayerForTheDying,
    blurhash: "KFFF5M-?1UR5WYRPrLxutO",
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
    slug: "fear-of-the-dark",
    image: fearOfTheDark,
    blurhash: "K68rOSHX00?]IBN3xcn|OG",
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
    name: "The X Factor",
    slug: "the-x-factor",
    image: theXFactor,
    blurhash: "K28W:O0100yYI9^j9sV?^,",
    year: 1995,
    songs: [
      {
        name: "Sign of the Cross",
        duration: 11 * 60 + 16,
        link: "https://www.youtube.com/watch?v=le2i7s_BGI4",
      },
      {
        name: "Lord of the Flies",
        duration: 5 * 60 + 4,
        link: "",
      },
      {
        name: "Man on the Edge",
        duration: 4 * 60 + 12,
        link: "",
      },
      {
        name: "Fortunes of War",
        duration: 7 * 60 + 24,
        link: "",
      },
      {
        name: "Look for the Truth",
        duration: 5 * 60 + 10,
        link: "",
      },
      {
        name: "The Aftermath",
        duration: 6 * 60 + 22,
        link: "",
      },
      {
        name: "Judgement of Heaven",
        duration: 5 * 60 + 12,
        link: "",
      },
      {
        name: "Blood on the World's Hands",
        duration: 5 * 60 + 58,
        link: "",
      },
      {
        name: "The Edge of Darkness",
        duration: 6 * 60 + 40,
        link: "",
      },
      {
        name: "2 A.M.",
        duration: 5 * 60 + 38,
        link: "",
      },
      {
        name: "The Unbeliever",
        duration: 8 * 60 + 10,
        link: "https://www.youtube.com/watch?v=IUM205PYVd8",
      },
    ],
  },
  {
    name: "Virtual XI",
    slug: "virtual-XI",
    image: virtualXI,
    blurhash: "KED[wr8v$,*|q^Q.m*R3NE",
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
    image: braveNewWorld,
    blurhash: "K6GImRtWDj8wL}-r00.TDg",
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
        link: "https://www.youtube.com/watch?v=CX2BpyXIqwI",
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
    image: danceOfDeath,
    blurhash: "K4E_5K5jro02}Z1104rv9Z",
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
    image: aMatterOfLifeAndDeath,
    blurhash: "K28z.D=Ya0_4={Rk0MWrE1",
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
    image: theFinalFrontier,
    blurhash: "K69jZ#%jDz=wI-Su^CbCom",
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
    image: theBookOfSouls,
    blurhash: "K57-H8NH00~qoJRP?vj[%1",
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
  {
    name: "Senjutsu",
    slug: "senjutsu",
    image: senjutsu,
    blurhash: "K26j%i$Q01}Ho|OT,@NaOE",
    year: 2021,
    songs: [
      {
        name: "Senjutsu",
        duration: 8 * 60 + 20,
        link: "",
      },
      {
        name: "Stratego",
        duration: 4 * 60 + 59,
        link: "https://www.youtube.com/watch?v=mpuwr9fF7kw",
      },
      {
        name: "The Writing On The Wall",
        duration: 6 * 60 + 13,
        link: "https://www.youtube.com/watch?v=ouNrpm0zRWg",
      },
      {
        name: "Lost In A Lost World",
        duration: 9 * 60 + 31,
        link: "",
      },
      {
        name: "Days of Future Past",
        duration: 4 * 60 + 3,
        link: "https://www.youtube.com/watch?v=FiLaLcB7SeM",
      },
      {
        name: "The Time Machine",
        duration: 7 * 60 + 9,
        link: "",
      },
      {
        name: "Darkest Hours",
        duration: 7 * 60 + 20,
        link: "",
      },
      {
        name: "Death of the Celts",
        duration: 10 * 60 + 20,
        link: "",
      },
      {
        name: "The Parchment",
        duration: 12 * 60 + 38,
        link: "https://www.youtube.com/watch?v=dt8uqyirQvM",
      },
      {
        name: "Hell On Earth",
        duration: 11 * 60 + 19,
        link: "https://www.youtube.com/watch?v=B1EOkFeD3Ho",
      },
    ],
  },
];
