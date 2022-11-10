import { NextSeo } from "next-seo";
import { useSelector } from "react-redux";

import Data from "/public/data/algorithmData.json";

export default function Seo({ category, id }) {
  let algoName = useSelector((state) => state.page.algoName);
  if (algoName) {
    let currAlgo = algoName.replace(" ", "");
    let currAlgoData = Data[currAlgo];
    if (currAlgoData) {
      return (
        <>
          <NextSeo
            title={currAlgoData.metaTitle}
            description={currAlgoData.description}
            canonical={`https://algospace.vercel.app/${category}/${id}`}
            openGraph={{
              url: `https://algospace.vercel.app/${category}/${id}`,
              title: currAlgoData.metaTitle,
              description: currAlgoData.description,
              profile: {
                firstName: "Rahul",
                lastName: "Biswakarma",
              },
              images: [
                {
                  url: "https://www.example.ie/og-image-01.jpg",
                  width: 800,
                  height: 600,
                  alt: "Og Image Alt",
                  type: "image/jpeg",
                },
              ],
              siteName: "Algospace",
            }}
            twitter={{
              handle: "@rahul_7298",
              cardType: "summary_large_image",
            }}
          />
        </>
      );
    }
  }
}
