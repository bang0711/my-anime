"use client";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";
type Props = {};

function List({}: Props) {
  const list = [];
  for (let i = 1; i <= 10; i++) {
    list.push(i);
  }
  const params = useParams();
  const page = parseInt(params.page);

  return (
    <div className="flex items-center justify-around">
      <div className="flex items-center justify-center">
        <Link
          href={`/pagination/${page - 1}`}
          className="basis-1/5 border px-2 py-3 text-center"
        >
          Previous
        </Link>
      </div>

      <ul className="flex basis-3/5 items-center justify-around gap-3 px-2 py-5 font-bold">
        {list.map((number) => (
          <Link href={`/pagination/${number}`} className="m-auto" key={number}>
            {number}
          </Link>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Link
          href={`/pagination/${page + 1}`}
          className="basis-1/5 border px-2 py-3 text-center"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default List;
