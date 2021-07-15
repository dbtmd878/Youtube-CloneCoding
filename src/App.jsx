import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";

const App = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCNyged456xrxPXXAwmA-BLInpG39104C8&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCNyged456xrxPXXAwmA-BLInpG39104C8",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  });

  return (
    <div>
      <VideoList videos={videos} key={videos.id} />
    </div>
  );
};

export default App;
