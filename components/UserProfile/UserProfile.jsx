import React from 'react';
import Image from "next/image";


function UserProfile() {
  return (
    <div className="relative h-8 w-8 rounded-lg ">
      <Image src="/img/logo.png" layout="fill" objectFit="contain" alt="logo" />
    </div>
  );
}

export default UserProfile