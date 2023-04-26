import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};
export async function getData(id: string) {
  const res = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
  if (!res.ok) {
    throw new Error("failed to get data");
  }
  return res.json();
}
async function AnimePage({ params: { id } }: Props) {
  const data = await getData(id);
  return (
    <div className={`h-full px-4 py-2`}>
      <div
        key={data.data.id}
        className="mx-auto flex w-full flex-col items-center justify-center gap-4 md:flex-row"
      >
        <Image
          width={300}
          height={250}
          className=" mx-auto"
          src={data.data.attributes.posterImage.large}
          loading="lazy"
          alt={data.data.attributes.titles.en_jp}
        />
        <div className="flex basis-1/2 flex-col gap-3">
          <p>
            <span className="text-lg font-bold">Name: </span>
            {data.data.attributes.titles.en_jp}
          </p>

          <p className="">
            <span className="text-lg font-bold">Summary: </span>
            {data.data.attributes.synopsis}
          </p>
          <p>
            <span className="text-lg font-bold">Average Rating Point: </span>
            {data.data.attributes.averageRating}
          </p>
          <p>
            <span className="text-lg font-bold">Range of Age: </span>
            {data.data.attributes.ageRatingGuide}
          </p>
          <p>
            <span className="text-lg font-bold">Status: </span>
            {data.data.attributes.status}
          </p>
          <p>
            {data.data.attributes.youtubeVideoId === "" ? (
              <span className="flex items-center text-lg font-bold">
                Youtube Video:&nbsp;
                <span className="text-base font-normal ">No Video</span>
              </span>
            ) : (
              <Link
                href={`https://www.youtube.com/watch?v=${data.data.attributes.youtubeVideoId}`}
                target="_blank"
              >
                <button className="rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-105">
                  You Tube Video
                </button>
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnimePage;
