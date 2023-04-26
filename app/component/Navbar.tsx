"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
type Props = {};

function Navbar({}: Props) {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return (
    <div className="sticky top-0 z-50 mb-3 flex h-fit w-full items-center gap-3 bg-black p-3 py-4">
      <p
        onClick={back}
        className="h-fit cursor-pointer select-none bg-gray-500 p-3 text-center text-white"
      >
        Back
      </p>
      <Link href={"/"} className="h-fit bg-gray-500 p-3 text-center text-white">
        Home
      </Link>
    </div>
  );
}

export default Navbar;
