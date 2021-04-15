import React from "react";

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">
          Title: {selectedVideo.snippet.title} Desc:{" "}
        </h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
