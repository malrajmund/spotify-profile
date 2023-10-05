import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetUserDataQuery } from "../../src/redux/services/spotifyApi/user/user";
import { useGetTokenMutation } from "../../src/redux/services/serverApi/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setRefreshToken, setIsAuthed, setUserData } from "../../src/redux/reducers/userDataReducer/userDataReducer";
import { AppState } from "../../src/redux/store";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed);

  const [skip, setSkip] = useState(true);

  const { data: userData, isUninitialized, isLoading, isFetching } = useGetUserDataQuery({}, { skip });

  const [getToken] = useGetTokenMutation();

  useEffect(() => {
    if (isAuthed) {
      setSkip(false);
    }
  }, [isAuthed]);

  useEffect(() => {
    if (router.query.code) {
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

  useEffect(() => {
    if (!isUninitialized && !isLoading && !isFetching) {
      dispatch(setUserData(userData));
      router.push("/profile");
    }
  }, [isUninitialized, isLoading, isFetching]);

  return (
    <UserPanelTemplate>
      {/* {!isFetching && !isUninitialized && !isLoading && (
        <>
          {" "}
          <img src={userData.images[0].url} alt='profileImage' width='500' height='500' />
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
      )} */}
    </UserPanelTemplate>
  );
};

export default Home;
