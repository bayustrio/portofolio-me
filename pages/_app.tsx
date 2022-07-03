import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout/Layout";
import ThemeProv from "../Context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProv>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProv>
  );
}

export default MyApp;
