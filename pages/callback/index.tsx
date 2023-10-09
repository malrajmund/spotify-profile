import { useRouter } from "next/router";
import { useEffect } from "react";
import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useLazyGetUserDataQuery } from "../../src/redux/services/spotifyApi/user/user";
import { useGetTokenMutation } from "../../src/redux/services/serverApi/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setRefreshToken, setIsAuthed, setUserData } from "../../src/redux/reducers/userDataReducer/userDataReducer";
import { AppState } from "../../src/redux/store";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector<AppState>((state) => state.userData) as UserState;

  const [getUserData] = useLazyGetUserDataQuery();

  const [getToken] = useGetTokenMutation();

  useEffect(() => {
    if (userData.isAuthed) {
      getUserData({})
        .unwrap()
        .then((fulfilled) => {
          dispatch(setUserData(fulfilled));
        });
    }
  }, [userData.isAuthed]);

  useEffect(() => {
    if (router.query.code) {
      console.log(router.query.code);
      getToken({ code: router.query.code })
        .unwrap()
        .then((fulfilled) => {
          const data = fulfilled.data;
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
          dispatch(setToken(data.access_token));
          dispatch(setRefreshToken(data.refresh_token));
          dispatch(setIsAuthed(true));
        });
    }
  }, [router.query]);

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

export default Home;
