import React from "react";
import Track from "../../atoms/Track/Track";
import { ProfileListWrapper } from "./ProfileList.styles";
import Artist from "../../atoms/Artist/Artist";
import Button from "../../atoms/Button/Button";
import { BUTTON_TYPE } from "../../atoms/Button/constant";

const ProfileList: React.FC<ProfileList> = ({ trackItems, artistItems, header, isTrack, inSubpage, withPagination, setPagination }) => {
  return (
    <ProfileListWrapper inSubpage={inSubpage}>
      <div>
        <h2>{header}</h2>
        {withPagination && (
          <div>
            <Button onClick={() => setPagination("10")} buttonType={BUTTON_TYPE.SECONDARY} label='10' />
            <Button onClick={() => setPagination("25")} buttonType={BUTTON_TYPE.SECONDARY} label='25' />
            <Button onClick={() => setPagination("50")} buttonType={BUTTON_TYPE.SECONDARY} label='50' />
          </div>
        )}
      </div>
      {isTrack && trackItems
        ? trackItems.map((item) => <Track artist={item.artist} album={item.album} title={item.title} time={item.time} image={item.image} />)
        : artistItems && artistItems.map((item) => <Artist title={item.title} type={item.type} image={item.image} />)}
    </ProfileListWrapper>
  );
};

export default ProfileList;
