import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { albums } from "../models";

const HomePage = () => {
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
    <div className="min-w-screen min-h-screen p-6 bg-gray-600">
      <Head>
        <title>Iron Maiden Albums</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        className="grid gap-3 md:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {albums.map((album) => {
          return (
            <Link key={album.name} href={`/albums/${album.slug}`}>
              <motion.a
                className="h-80 shadow-lg flex cursor-pointer relative"
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
