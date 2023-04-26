import List from "@/app/component/List";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    page: number;
  };
};
async function fetchAnimeData(link: string) {
  const res = await fetch(link);
  if (!res.ok) {
    throw new Error("Failed to fetch anime data");
  }
  const json = await res.json();
  return json.data;
}
async function getData(page: number) {
  const res = await fetch(
    `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch anime list");
  }
  const json = await res.json();
  const selfLinks = json.data.map((anime: Anime) => anime.links.self);
  const animeData = await Promise.all(
    selfLinks.map((link: string) => fetchAnimeData(link))
  );
  return animeData;
}
async function PaginationPage({ params: { page } }: Props) {
  const animeData = await getData(page * 20);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4 md:grid-cols-5">
        {animeData.map((anime: Anime) => (
          <div
            key={anime.id}
            className="mx-auto flex w-full flex-col items-center justify-center gap-4"
          >
            <Link href={`/anime/${anime.id}`} className="">
              <Image
                width={200}
                height={150}
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                src={anime.attributes.posterImage.large}
                loading="lazy"
                alt={anime.attributes.titles.en_jp}
              />
            </Link>
            <div className="h-16 text-sm" key={anime.id}>
              {anime.attributes.titles.en_jp}
            </div>
          </div>
        ))}
      </div>
      <List />
    </>
  );
}

export default PaginationPage;
