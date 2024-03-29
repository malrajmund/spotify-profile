import React from "react";
import Track from "../../atoms/Track/Track";
import { ProfileListWrapper } from "./ProfileList.styles";
import Artist from "../../atoms/Artist/Artist";
import Button from "../../atoms/Button/Button";
import { BUTTON_TYPE } from "../../atoms/Button/constant";

const ProfileList: React.FC<ProfileList> = ({
  trackItems,
  artistItems,
  header,
  isTrack,
  inSubpage,
  withPagination,
  setPagination,
  currentPagination,
}) => {
  return (
    <ProfileListWrapper inSubpage={inSubpage}>
      <div>
        <h2>{header}</h2>
        {withPagination && (
          <div>
            <Button
              onClick={() => setPagination("10")}
              buttonType={currentPagination === "10" ? BUTTON_TYPE.SECONDARY_ACTIVE : BUTTON_TYPE.SECONDARY}
              label='10'
            />
            <Button
              onClick={() => setPagination("25")}
              buttonType={currentPagination === "25" ? BUTTON_TYPE.SECONDARY_ACTIVE : BUTTON_TYPE.SECONDARY}
              label='25'
            />
            <Button
              onClick={() => setPagination("50")}
              buttonType={currentPagination === "50" ? BUTTON_TYPE.SECONDARY_ACTIVE : BUTTON_TYPE.SECONDARY}
              label='50'
            />
          </div>
        )}
      </div>
      {isTrack && trackItems
        ? trackItems.map((item, index) => (
            <Track key={index} artist={item.artist} album={item.album} title={item.title} time={item.time} image={item.image} id={item.id} />
          ))
        : artistItems && artistItems.map((item, index) => <Artist key={index} title={item.title} type={item.type} image={item.image} />)}
    </ProfileListWrapper>
  );
};

export default ProfileList;
