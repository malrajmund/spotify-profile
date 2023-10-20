import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../src/redux/store";
import { useEffect } from "react";
import { useLazyGetUserDataQuery } from "../../src/redux/services/spotifyApi/user/user";
import { setUserData } from "../../src/redux/reducers/userDataReducer/userDataReducer";

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector<AppState>((state) => state.userData) as any;
  const [getUserData] = useLazyGetUserDataQuery();

  useEffect(() => {
    if (userData.isAuthed) {
      getUserData({})
        .unwrap()
        .then((fulfilled) => {
          dispatch(setUserData(fulfilled));
        });
    }
  }, [userData.isAuthed]);
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
    </UserPanelTemplate>
  );
};

export default Profile;
