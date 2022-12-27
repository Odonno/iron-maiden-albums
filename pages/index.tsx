import { motion } from "framer-motion";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SpotifyButton } from "../components/SpotifyButton";
import { generateBlurhashURI } from "../functions/blurash";
import { albums } from "../models";

type Blurahashes = { [key: string]: string };

type Props = {
  blurhashes: Blurahashes;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
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

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    albumHover: { scale: 1.05 },
  };

  const albumChildItem = {
    album: { opacity: 0, background: "#333333AA" },
    albumHover: { opacity: 1, background: "#333333AA" },
  };

  return (
    <div className="flex flex-col min-h-screen p-6 min-w-screen">
      <Head>
        <title>Iron Maiden Albums</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SpotifyButton />

      <motion.div
        className="grid gap-4 md:gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {albums.map((album, index) => {
          const priority = index <= 3;

          return (
            <Link
              key={album.name}
              href={`/albums/${album.slug}`}
              scroll={false}
              passHref
            >
              <motion.div
                className="relative flex shadow-lg cursor-pointer w-80 h-80 justify-self-center"
                layout
                layoutId={album.name}
                variants={item}
                initial="album"
                whileHover="albumHover"
              >
                <Image
                  alt={album.name}
                  src={album.image}
                  className="rounded"
                  priority={priority}
                  placeholder="blur"
                  blurDataURL={blurhashes[album.slug]}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }} />

                <motion.div
                  className="z-10 w-full p-4 text-white"
                  variants={albumChildItem}
                >
                  <div className="text-2xl">{album.name}</div>
                  <div className="mt-1">{album.year}</div>
                  {album.songs && (
                    <div className="mt-1 text-xs italic">
                      {album.songs.length} songs
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HomePage;
