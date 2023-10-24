import React from "react";
import Track from "../../atoms/Track/Track";
import { ProfileListWrapper } from "./ProfileList.styles";
import Artist from "../../atoms/Artist/Artist";

const ProfileList: React.FC<ProfileList> = ({ trackItems, artistItems, header, isTrack }) => {
  return (
    <ProfileListWrapper>
      <h2>{header}</h2>
      {isTrack && trackItems
        ? trackItems.map((item) => <Track artist={item.artist} album={item.album} title={item.title} time={item.time} image={item.image} />)
        : artistItems && artistItems.map((item) => <Artist title={item.title} type={item.type} image={item.image} />)}
    </ProfileListWrapper>
  );
};

export default ProfileList;
