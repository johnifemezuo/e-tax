import React from "react";

function Header() {
  return (
    <div className="flex justify-between">
      <div>Dashbaord</div>
      <div className="text-darkgray flex gap-5">
        <p>28 Jan 2022-28</p>
        <p>28 Dec 2022-28</p>
        <p>Funnel</p>
      </div>
    </div>
  );
}

export default Header;
