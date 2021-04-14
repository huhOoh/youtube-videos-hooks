import axios from "axios";

const KEY = "AIzaSyDli4qq9sCI4b6y9lroS_ZLzwNzX8FRraA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
