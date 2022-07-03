import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout/Layout";
import ThemeProv from "../Context/ThemeContext";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProv>
      <Layout>
        <NextSeo title="Muhammad Satrio" description="Portofolio satrio" />

        <Component {...pageProps} />
      </Layout>
    </ThemeProv>
  );
}

export default MyApp;
