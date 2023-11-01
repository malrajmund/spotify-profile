import React from "react";
import { TrackWrapper } from "./Track.styles";
import Image from "next/image";
import { useRouter } from "next/router";

const Track: React.FC<Track> = ({ image, title, artist, album, time, id }) => {
  const router = useRouter();

  const millisToMinutesAndSeconds = (ms: number) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <TrackWrapper onClick={() => router.push(`/track/${id}`)}>
      <Image width='64' height='64' src={image} alt={title + album} />
      <div>
        <h4>{title}</h4>
        <p>{`${artist} , ${album}`}</p>
      </div>
      <p>{millisToMinutesAndSeconds(time)}</p>
    </TrackWrapper>
  );
};

export default Track;
