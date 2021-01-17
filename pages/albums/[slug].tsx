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
    <div className="min-w-screen min-h-screen bg-gray-600 flex justify-center items-center">
      <Head>
        <title>Iron Maiden Albums - {album.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        className="p-6 min-h-screen-90 flex flex-col justify-center items-center bg-transparent shadow-lg bg-black relative z-0"
        layoutId={album.name}
      >
        <Image
          alt={album.name}
          src={album.image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded -z-1"
        />

        <motion.div
          className="grid gap-6 grid-cols-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {album.songs &&
            album.songs.map((song) => {
              return (
                <motion.a
                  key={song.name}
                  href={song.link || "#"}
                  target="_blank"
                  layout
                  className="p-4 bg-black bg-opacity-30 bg-blur-5 rounded-lg shadow text-white cursor-pointer z-1"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  {"> " + song.name}
                </motion.a>
              );
            })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AlbumPage;
