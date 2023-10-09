import { useEffect, useState } from "react";
import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetUserDataQuery } from "../../src/redux/services/spotifyApi/user/user";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../src/redux/reducers/userDataReducer/userDataReducer";
import { AppState } from "../../src/redux/store";

const Profile = () => {
  const userData = useSelector<AppState>((state) => state.userData.info) as any;
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const { data, isUninitialized, isLoading, isFetching } = useGetUserDataQuery({}, { skip });

  useEffect(() => {
    if (!userData.display_name) {
      setSkip(false);
    }
  }, []);

  useEffect(() => {
    if (!isUninitialized && !isLoading && !isFetching) {
      dispatch(setUserData(data));
    }
  }, [isUninitialized, isLoading, isFetching]);
  return (
    <UserPanelTemplate>
      {userData.display_name && (
        <>
          <img src={userData.images[1].url} alt='profileImage1' width='500' height='500' />
          <h2>{userData.display_name}</h2>
          <section>
            <div>
              <p>{userData.followers.total}</p>
              <p>Followers</p>
            </div>
            <div>
              <p>{userData.country}</p>
              <p>Country</p>
            </div>
            <div>
              <p>{userData.product === "premium" ? `yes` : "no"}</p>
              <p>Premium</p>
            </div>
          </section>
        </>
      )}
    </UserPanelTemplate>
  );
};

export default Profile;
