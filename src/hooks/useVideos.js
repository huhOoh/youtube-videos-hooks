import { useState, useEffect } from "react";
import Youtube from "../Apis/Youtube";

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);

    console.log(videos);
  };

  return [videos, search];
};

export default useVideo;
