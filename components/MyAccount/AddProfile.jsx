import React from "react";

function AddProfile() {
  return (
    <div className="my-8 flex items-center space-x-6">
      <div className="flex h-8 w-8 rounded-full dark:bg-blue-300 bg-blue-900 p-10"></div>
      <div>
        <p className="mb-2 ">Choose a profile of .png</p>
        <input type="file" />
      </div>
    </div>
  );
}

export default AddProfile;





