import { motion } from "framer-motion";
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

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="min-h-screen p-6 min-w-screen">
      <Head>
        <title>Iron Maiden Albums</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
