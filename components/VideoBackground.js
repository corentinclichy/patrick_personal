import { useState } from "react";

function VideoBackground({ videoURL }) {
  return (
    <div className="splatch-screen w-screen h-screen">
      <video
        className="h-screen w-screen object-cover z-0"
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={videoURL} type="video/mp4" />
      </video>
      <div className="h-screen w-screen bg-black opacity-40 absolute top-0 left-0 z-10"></div>
    </div>
  );
}

export default VideoBackground;
