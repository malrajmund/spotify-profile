import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../src/redux/store";
import { useEffect } from "react";
import { useGetUserTopItemsQuery, useLazyGetUserDataQuery } from "../../src/redux/services/spotifyApi/user/user";
import { setUserData } from "../../src/redux/reducers/userDataReducer/userDataReducer";
import ProfileList from "../../src/components/molecules/ProfileList/ProfileList";
import { ProfileListsWrapper } from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate.styles";

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector<AppState>((state) => state.userData) as any;
  const [getUserData] = useLazyGetUserDataQuery();
  const { data: tracksData, isLoading: areTracksLoading, isFetching: areTracksFetching } = useGetUserTopItemsQuery({ type: "tracks" });
  const { data: artistsData, isLoading: areArtistsLoading, isFetching: areArtistsFetching } = useGetUserTopItemsQuery({ type: "artists" });

  useEffect(() => {
    getUserData({})
      .unwrap()
      .then((fulfilled) => {
        dispatch(setUserData(fulfilled));
      });
  }, []);
  return (
    <UserPanelTemplate>
      {userData.info.display_name !== "" && (
        <>
          <img src={userData.info.images[1].url} alt='profileImage2' width='200' height='200' />
          <h2>{userData.info.display_name}</h2>
          <section>
            <div>
              <p>{userData.info.followers.total}</p>
              <p>Followers</p>
            </div>
            <div>
              <p>{userData.info.country}</p>
              <p>Country</p>
            </div>
            <div>
              <p>{userData.info.product === "premium" ? `yes` : "no"}</p>
              <p>Premium</p>
            </div>
          </section>
        </>
      )}
      <ProfileListsWrapper>
        {!areArtistsLoading && !areArtistsFetching && (
          <ProfileList
            artistItems={artistsData.items.map((item: any) => ({
              title: item.name,
              type: item.genres[0],
              image: item.images[2].url,
            }))}
            header={"Top artists of all time"}
          />
        )}
        {!areTracksLoading && !areTracksFetching && (
          <ProfileList
            trackItems={tracksData.items.map((item: any) => ({
              album: item.album.name,
              title: item.name,
              artist: item.artists[0].name,
              image: item.album.images[2].url,
              time: item.duration_ms,
            }))}
            header={"Top tracks of all time"}
            isTrack
          />
        )}
      </ProfileListsWrapper>
    </UserPanelTemplate>
  );
};

export default Profile;
