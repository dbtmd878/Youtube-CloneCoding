import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onselect, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onselect(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url}
          alt="video thumnails"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
