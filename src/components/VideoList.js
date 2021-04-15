import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    ></VideoItem>
  ));

  return (
    <div className="ui relaxed divided list">
      I have
      {" " + videos.length} videos.
      <br />
      {renderedList}
    </div>
  );
};

export default VideoList;
