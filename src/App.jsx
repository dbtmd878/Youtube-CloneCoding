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
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBRP3CLzJxa5BO9bnhoMeP0Jdw3trs4GXk",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  });

  return <VideoList videos={videos} />;
};

export default App;
