import Head from "next/head";
import Image from "next/legacy/image";
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Album, albums, Song } from "../../models";
import { motion } from "framer-motion";
import { generateBlurhashURI } from "../../functions/blurash";

type Props = {
  album: Album;
  blurDataURL: string;
};

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  if (params) {
    const { slug } = params as { slug: string };
    const album = albums.find((a) => a.slug === slug);

    if (album) {
      const blurDataURL = await generateBlurhashURI(album.blurhash, 2000, 2000);

      return {
        props: {
          album,
          blurDataURL,
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
  const { album, blurDataURL } = props;

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
    <motion.div className="flex w-screen h-screen" layoutId={album.name}>
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
        placeholder="blur"
        blurDataURL={blurDataURL}
      />

      <div className="flex flex-col justify-center flex-1">
        <motion.div
          className="grid justify-center gap-2 p-3 overflow-y-auto md:p-6 md:gap-6 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {album.songs &&
            album.songs.map((song: Song) => {
              const seconds = (song.duration % 60).toString().padStart(2, "0");
              const minutes = Math.floor(song.duration / 60);
              const durationText = `${minutes}:${seconds}`;

              const isDisabled = !song.link;

              if (isDisabled) {
                return (
                  <motion.div
                    key={song.name}
                    layout
                    className="flex flex-col justify-center p-2 text-gray-300 bg-gray-800 rounded-lg shadow md:p-4 bg-opacity-60 bg-blur-0"
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
                  className="flex flex-col justify-center p-2 text-white bg-black rounded-lg shadow cursor-pointer md:p-4 bg-opacity-30 bg-blur-5"
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
