import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => (
  <ul>
    {props.videos.map((item) => (
      <VideoItem video={item} key={item.id} />
    ))}
  </ul>
);

export default VideoList;
