import React from "react";

function CoverImageAndProfileImage() {
  return (
    <>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
          className="h-40 w-full md:h-64"
        />

        {/* The Image container */}
        <div className="image-container absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 transform md:left-4 md:-ml-0 md:transform-none">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="profile picture"
            className="h-32 w-32 rounded-full  object-cover object-center ring-4 ring-white"
          />
        </div>
      </div>
    </>
  );
}

export default CoverImageAndProfileImage;
