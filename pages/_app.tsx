import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/tailwind-utils.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
