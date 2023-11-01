import React from "react";
import { TrackDetailsWrapper } from "./TrackDetails.style";
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import { BUTTON_TYPE } from "../../atoms/Button/constant";

const TrackDetails: React.FC<TrackDetails> = ({ image, artist, album, href, title, date }) => {
  return (
    <TrackDetailsWrapper>
      <Image src={image} width={250} height={250} alt={artist} />
      <div>
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <p>
          {album}.{date}
        </p>
        <Button label='PLAY' isAnchor href={href} buttonType={BUTTON_TYPE.PRIMARY} target='_blank' />
      </div>
    </TrackDetailsWrapper>
  );
};

export default TrackDetails;
