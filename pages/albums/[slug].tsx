import Head from "next/head";
import Error from "next/error";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { albums } from "../../models";
import { motion } from "framer-motion";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  if (params) {
    const { slug } = params as { slug: string };
    console.log(slug);
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
    props: {
      album: undefined,
    },
  };
};

const AlbumPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { album } = props;

  if (!album) {
    return <Error statusCode={404} />;
  }

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
    <div className="min-w-screen min-h-screen p-12 bg-gray-600">
      <Head>
        <title>Iron Maiden Albums - {album.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center">
        <motion.h2
          className="text-3xl text-white font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {album.name}
        </motion.h2>

        <motion.div
          className="mt-20 grid gap-6 grid-cols-5"
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
                  className="p-4 bg-black bg-opacity-30 rounded-lg shadow text-white cursor-pointer"
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                >
                  {"> " + song.name}
                </motion.a>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default AlbumPage;
