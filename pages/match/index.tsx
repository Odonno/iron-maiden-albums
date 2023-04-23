import { useEffect, useState } from "react";
import { type SongWithAlbum, songs } from "../../models";
import { motion } from "framer-motion";
import Image from "next/image";

type ComparisonSong = {
  song: SongWithAlbum;
  score: number;
  uncertainty: number;
};

const K = 32;
const delta = 10;
const minUncertainty = 50;
const defaultUncertainty = 400;
const defaultScore = 1500;

const comparisonSongs = songs.map((song) => ({
  song,
  score: defaultScore,
  uncertainty: defaultUncertainty,
}));

const chooseRandomSong = (
  all: ComparisonSong[],
  excluded?: ComparisonSong[]
) => {
  const filtered = all.filter((song) => !excluded?.includes(song));
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
};

const expectedProbability = (score1: number, score2: number) => {
  return 1 / (1 + Math.pow(delta, (score2 - score1) / defaultUncertainty));
};

const updateScores = (
  song1: ComparisonSong,
  song2: ComparisonSong,
  winner: ComparisonSong
) => {
  const p = expectedProbability(song2.score, song1.score);
  const result = winner === song1 ? 1 : 0;
  const delta1 = K * (result - p);
  const delta2 = K * (1 - result - (1 - p));

  return [
    {
      ...song1,
      score: song1.score + delta1,
      uncertainty: Math.max(song1.uncertainty - delta, minUncertainty),
    },
    {
      ...song2,
      score: song2.score + delta2,
      uncertainty: Math.max(song2.uncertainty - delta, minUncertainty),
    },
  ];
};

const MatchPage = () => {
  const [allSongs, setAllSongs] = useState<ComparisonSong[]>(comparisonSongs);
  const [song1, setSong1] = useState<ComparisonSong>(
    chooseRandomSong(allSongs)
  );
  const [song2, setSong2] = useState<ComparisonSong>(
    chooseRandomSong(allSongs, [song1])
  );

  useEffect(() => {
    // read from localstorage
    const matchState = localStorage.getItem("state/match");
    if (matchState) {
      const parsed = JSON.parse(matchState);
      setAllSongs(parsed.allSongs);
      setSong1(parsed.song1);
      setSong2(parsed.song2);
    }
  }, []);

  const handleVote = (winner: ComparisonSong) => {
    const updatedSongs = updateScores(song1, song2, winner);

    const updatedAllSongs = allSongs.map((song) => {
      const updatedSong = updatedSongs.find((s) => s.song === song.song);
      return updatedSong ? updatedSong : song;
    });

    const newSong1 = chooseRandomSong(updatedAllSongs);
    const newSong2 = chooseRandomSong(updatedAllSongs, [newSong1]);

    setAllSongs(updatedAllSongs);
    setSong1(newSong1);
    setSong2(newSong2);

    // write to localstorage
    localStorage.setItem(
      "state/match",
      JSON.stringify({
        allSongs: updatedAllSongs,
        song1: newSong1,
        song2: newSong2,
      })
    );
  };

  return (
    <div className="flex">
      <SongComparison song1={song1} song2={song2} onVote={handleVote} />
      <SongRanking songs={allSongs} />
    </div>
  );
};

type SongComparisonProps = {
  song1: ComparisonSong;
  song2: ComparisonSong;
  onVote: (winner: ComparisonSong) => void;
};

const CopyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
      />
    </svg>
  );
};

const SongComparison = ({ song1, song2, onVote }: SongComparisonProps) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    albumHover: { scale: 1.05 },
  };

  const albumChildItem = {
    album: { opacity: 0, background: "#333333AA" },
    albumHover: { opacity: 1, background: "#333333AA" },
  };

  const handleCopy = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <section className="sticky top-0 flex-1 text-white flex gap-16 justify-center items-center h-screen">
      <div>
        <motion.button
          className="relative flex shadow-lg cursor-pointer w-80 h-80 justify-self-center"
          variants={item}
          initial="album"
          whileHover="albumHover"
          onClick={() => onVote(song1)}
        >
          <Image
            alt={song1.song.name}
            src={song1.song.album.image}
            className="rounded"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <motion.div
            className="z-10 w-full p-4 text-white flex justify-center items-center absolute bottom-0"
            variants={albumChildItem}
          >
            <div className="text-xl">Vote</div>
          </motion.div>
        </motion.button>

        <div className="mt-4 italic flex justify-center">
          <div className="flex text-sm bg-white text-black px-3 py-1.5 rounded">
            <div>{song1.song.name}</div>
            <button
              className="ml-2"
              onClick={() => handleCopy(song1.song.name)}
            >
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="text-xl flex justify-center items-center">vs.</div>

      <div>
        <motion.button
          className="relative flex shadow-lg cursor-pointer w-80 h-80 justify-self-center"
          variants={item}
          initial="album"
          whileHover="albumHover"
          onClick={() => onVote(song2)}
        >
          <Image
            alt={song2.song.name}
            src={song2.song.album.image}
            className="rounded"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <motion.div
            className="z-10 w-full p-4 text-white flex justify-center items-center absolute bottom-0"
            variants={albumChildItem}
          >
            <div className="text-xl">Vote</div>
          </motion.div>
        </motion.button>

        <div className="mt-4 italic flex justify-center">
          <div className="flex text-sm bg-white text-black px-3 py-1.5 rounded">
            <div>{song2.song.name}</div>
            <button
              className="ml-2"
              onClick={() => handleCopy(song2.song.name)}
            >
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

type SongRankingProps = {
  songs: ComparisonSong[];
};

const SongRanking = ({ songs }: SongRankingProps) => {
  const sortedSongs = [...songs].sort((a, b) => b.score - a.score);

  return (
    <section className="m-8">
      <h2 className="text-xl font-bold italic flex flex-col justify-center text-gray-300">
        Ranking
      </h2>

      <motion.ol layout className="mt-4 flex flex-col gap-2">
        {sortedSongs.map((song, index) => {
          return (
            <motion.li
              key={song.song.name}
              layout
              className="backdrop-blur py-2 flex text-gray-300 bg-gray-800 rounded-lg shadow bg-opacity-60"
            >
              <span className="text-xs w-[55px] flex justify-center items-center">
                #{index + 1}
              </span>
              <span className="font-bold pr-4 text-sm flex justify-center items-center">
                {song.song.name}
              </span>
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
};

export default MatchPage;
