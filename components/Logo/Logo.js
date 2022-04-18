import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({ logoclasses }) {
  return (
    <Link href="/admin">
      <div className={`relative h-10 w-10 ${logoclasses}`}>
        <Image
          src="/img/logo.png"
          layout="fill"
          objectFit="contain"
          alt="logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
