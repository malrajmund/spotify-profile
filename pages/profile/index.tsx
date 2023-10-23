import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../src/redux/store";
import { useEffect } from "react";
import { useGetUserTopItemsQuery, useLazyGetUserDataQuery } from "../../src/redux/services/spotifyApi/user/user";
import { setUserData } from "../../src/redux/reducers/userDataReducer/userDataReducer";
import ProfileList from "../../src/components/molecules/ProfileList/ProfileList";

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector<AppState>((state) => state.userData) as any;
  const [getUserData] = useLazyGetUserDataQuery();
  const { data, isLoading, isFetching } = useGetUserTopItemsQuery({ type: "tracks" });

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
      {!isLoading && !isFetching && (
        <ProfileList
          items={data.items.map((item: any) => ({
            album: item.album.name,
            title: item.name,
            artist: item.artists[0].name,
            image: item.album.images[2].url,
            time: item.duration_ms,
          }))}
          header={"Top tracks of all time"}
        />
      )}
    </UserPanelTemplate>
  );
};

export default Profile;
