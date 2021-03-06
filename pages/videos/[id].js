import React from "react";
import { URL } from "../../environments/index";

const VideoDetail = ({ video }) => {
  return (
    <div>
      <h1>{video.name}</h1>
      <p>{video.content}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${URL}/api/videos`);

  const videos = await res.json();

  const paths = videos.map((video) => {
    return {
      params: { id: video.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${URL}/api/videos/${context.params.id}`);

  const video = await res.json();

  return {
    props: {
      video,
    },
  };
};

export default VideoDetail;
