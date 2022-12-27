import { motion, Variants } from "framer-motion";
import Image from "next/image";
import spotifyImage from "../public/icons/spotify.png";

const spotifyPlaylistUrl =
  "https://open.spotify.com/playlist/71ceynt9bxrNkoMuAodpts?si=4c3b8790135f456d";

export const SpotifyButton = () => {
  const container = {
    prepand: { width: 80 },
    expand: { width: 360 },
  };

  const item = {
    prepand: {
      visibility: "hidden",
      transition: { duration: 2 },
    } as Variants,
    expand: {
      visibility: "visible",
      transition: { delay: 0.2 },
    } as Variants,
  };

  const altItem = {
    prepand: { translateX: 0 },
    expand: { translateX: 0 },
  };

  const content = (
    <>
      <motion.div variants={item} className="mr-4">
        <div className="text-sm sm:text-base">
          Playlist - Iron Maiden, only the best
        </div>
        <div className="text-xs italic sm:text-sm">71 songs - 7h 57min</div>
      </motion.div>

      <motion.div variants={altItem}>
        <Image
          src={spotifyImage}
          alt=""
          layout="fixed"
          width={40}
          height={40}
        />
      </motion.div>
    </>
  );

  return (
    <>
      <a
        href={spotifyPlaylistUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center self-auto justify-center h-20 p-4 mb-6 -mt-2 text-white bg-gray-700 rounded-lg sm:hidden"
      >
        {content}
      </a>

      <motion.a
        href={spotifyPlaylistUrl}
        target="_blank"
        rel="noreferrer"
        className="items-center self-end justify-center hidden h-20 p-4 mb-6 -mt-2 text-white bg-gray-700 rounded-lg sm:inline-flex"
        variants={container}
        initial="prepand"
        whileTap="expand"
        whileHover="expand"
      >
        {content}
      </motion.a>
    </>
  );
};
