import { useEffect } from "react";
import { Main } from "../lib/assets/main";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function () {
  useEffect(() => {
    window.location.href = "https://discord.gg/R3QtA68Cbf";
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="https://github.com/punctuations.png" />
        <meta name="theme-color" content="#2f3136" />
      </Head>
      <NextSeo
        title="discord"
        titleTemplate="%s | matt.mdx"
        description="Student and Typescript Developer."
        openGraph={{
          type: "website",
          url: "https://dont-ping.me/",
          title: "discord - matt.mdx",
          description: "Student and Typescript Developer.",
          images: [
            {
              url: "https://github.com/punctuations.png",
              width: 400,
              height: 200,
            },
          ],
        }}
        twitter={{
          handle: "@atmattt",
          site: "@atmattt",
          cardType: "summary_large_image",
        }}
      />

      <Main>
        <a href={"https://discord.gg/R3QtA68Cbf"}>Redirecting...</a>
      </Main>
    </>
  );
}