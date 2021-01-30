import Head from "next/head";
import Image from "next/image";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Album, albums } from "../../models";
import { motion } from "framer-motion";

type Props = {
  album: Album;
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  if (params) {
    const { slug } = params as { slug: string };
    const album = albums.find((a) => a.slug === slug);

    if (album) {
      return {
        props: {
          album,
        },
      };
    }
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = albums.map((album) => `/albums/${album.slug}`);
  return { paths, fallback: false };
};

const AlbumPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { album } = props;

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
  };

  return (
    <motion.div
      className="w-screen h-allscreen flex bg-gray-600"
      layoutId={album.name}
      animate={{ scale: 1 }}
    >
      <Head>
        <title>Iron Maiden Albums - {album.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        alt={album.name}
        src={album.image}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          className="p-3 md:p-6 grid justify-center gap-2 overflow-y-auto md:gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {album.songs &&
            album.songs.map((song) => {
              const seconds = (song.duration % 60).toString().padStart(2, "0");
              const minutes = Math.floor(song.duration / 60);
              const durationText = `${minutes}:${seconds}`;

              const isDisabled = !song.link;

              if (isDisabled) {
                return (
                  <motion.div
                    key={song.name}
                    layout
                    className="p-2 md:p-4 flex flex-col justify-center bg-gray-800 bg-opacity-60 bg-blur-0 rounded-lg shadow text-gray-300"
                    variants={item}
                  >
                    <div>{song.name}</div>
                    <div className="text-sm italic">{durationText}</div>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={song.name}
                  href={song.link}
                  target="_blank"
                  layout
                  className="p-2 md:p-4 flex flex-col justify-center bg-black bg-opacity-30 bg-blur-5 rounded-lg shadow text-white cursor-pointer"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="font-bold">{song.name}</div>
                  <div className="text-sm italic">{durationText}</div>
                </motion.a>
              );
            })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AlbumPage;
