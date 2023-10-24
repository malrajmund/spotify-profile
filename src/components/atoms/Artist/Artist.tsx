import React from "react";
import { ArtistWrapper } from "./Artist.styles";
import Image from "next/image";

const Artist: React.FC<Artist> = ({ image, title, type }) => {
  return (
    <ArtistWrapper>
      <Image width='64' height='64' src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{type}</p>
      </div>
    </ArtistWrapper>
  );
};

export default Artist;
