import React from "react";

const YouTubeShortEmbed = ({ videoId }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        height: 0,
        overflow: "hidden",
        opacity: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "400px",
          height: "500px",
        }}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
    </div>
  );
};

export default YouTubeShortEmbed;
