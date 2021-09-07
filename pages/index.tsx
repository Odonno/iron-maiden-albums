import { motion, Variants } from "framer-motion";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { generateBlurhashURI } from "../functions/blurash";
import { albums } from "../models";
import spotifyImage from "../public/icons/spotify.png";

const spotifyPlaylistUrl =
  "https://open.spotify.com/playlist/71ceynt9bxrNkoMuAodpts?si=4c3b8790135f456d";

type Blurahashes = { [key: string]: string };

type Props = {
  blurhashes: Blurahashes;
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  let blurhashes: Blurahashes = {};

  const promises = albums.map(async (album) => {
    const blurDataURL = await generateBlurhashURI(album.blurhash, 1000, 1000);
    blurhashes[album.slug] = blurDataURL;
  });

  await Promise.all(promises);

  return {
    props: {
      blurhashes,
    },
  };
};

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { blurhashes } = props;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const spotifyContainer = {
    prepand: { width: 80 },
    expand: { width: 360 },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const spotifyItem = {
    prepand: {
      visibility: "hidden",
      transition: { duration: 2 },
    } as Variants,
    expand: {
      visibility: "visible",
      transition: { delay: 0.2 },
    } as Variants,
  };

  const altSpotifyItem = {
    prepand: { translateX: 0 },
    expand: { translateX: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen p-6 min-w-screen">
      <Head>
        <title>Iron Maiden Albums</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.a
        href={spotifyPlaylistUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center self-end justify-center h-20 p-4 mb-6 -mt-2 text-white bg-gray-700 rounded-lg"
        variants={spotifyContainer}
        initial="prepand"
        whileHover="expand"
      >
        <motion.div variants={spotifyItem} className="mr-4">
          <div>Playlist - Iron Maiden, only the best</div>
          <div className="text-sm italic">69 songs - 7h 43min</div>
        </motion.div>

        <motion.div variants={altSpotifyItem}>
          <Image
            src={spotifyImage}
            alt=""
            layout="fixed"
            width={40}
            height={40}
          />
        </motion.div>
      </motion.a>

      <motion.div
        className="flex flex-wrap justify-evenly"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {albums.map((album) => {
          return (
            <Link
              key={album.name}
              href={`/albums/${album.slug}`}
              scroll={false}
              passHref
            >
              <motion.a
                className="relative flex m-2 shadow-lg cursor-pointer md:m-3 w-80 h-80"
                layout
                layoutId={album.name}
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  alt={album.name}
                  src={album.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="rounded"
                  priority={true}
                  placeholder="blur"
                  blurDataURL={blurhashes[album.slug]}
                />
              </motion.a>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HomePage;
