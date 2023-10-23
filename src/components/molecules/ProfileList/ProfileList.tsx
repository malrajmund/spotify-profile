import React from "react";
import Track from "../../atoms/Track/Track";
import { ProfileListWrapper } from "./ProfileList.styles";

const ProfileList: React.FC<ProfileList> = ({ items, header }) => {
  return (
    <ProfileListWrapper>
      <h2>{header}</h2>
      {items.map((item) => (
        <Track artist={item.artist} album={item.album} title={item.title} time={item.time} image={item.image} />
      ))}
    </ProfileListWrapper>
  );
};

export default ProfileList;
