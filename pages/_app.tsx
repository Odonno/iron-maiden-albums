import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/tailwind-utils.css";
import type { AppProps } from "next/app";
import { AnimateSharedLayout, motion } from "framer-motion";
import { use100vh } from "react-div-100vh";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const realHeight = use100vh();

  const initial = realHeight && {
    "--realHeight": `${realHeight}px`,
  };
  const animate = realHeight && {
    "--realHeight": `${realHeight}px`,
  };

  if (initial && animate) {
    return (
      <AnimateSharedLayout>
        <motion.div initial={initial as any} animate={animate as any}>
          <Component {...pageProps} />
        </motion.div>
      </AnimateSharedLayout>
    );
  }

  return (
    <AnimateSharedLayout>
      <div>
        <Component {...pageProps} />
      </div>
    </AnimateSharedLayout>
  );
};

export default MyApp;
