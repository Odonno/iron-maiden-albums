import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/tailwind-utils.css";
import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
};

export default MyApp;
