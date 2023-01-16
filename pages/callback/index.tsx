import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetUserDataQuery } from "../../src/redux/services/spotifyApi/user/user";
import { useGetTokenMutation } from "../../src/redux/services/serverApi/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setRefreshToken, setIsAuthed } from "../../src/redux/reducers/userDataReducer/userDataReducer";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isAuthed = useSelector((state) => state.userData.isAuthed);

  const [skip, setSkip] = useState(true);

  const { data: userData, isUninitialized, isLoading, isFetching, isError } = useGetUserDataQuery({}, { skip });

  const [getToken] = useGetTokenMutation();

  const getTokenFunc = async () => {
    const getTokenRequest: any = await getToken({ code: router.query.code });
    const data = getTokenRequest.data;
    localStorage.setItem("token", data.data.access_token);
    localStorage.setItem("refresh_token", data.data.refresh_token);
    dispatch(setToken(data.data.access_token));
    dispatch(setRefreshToken(data.data.refresh_token));
    dispatch(setIsAuthed(true));
  };

  useEffect(() => {
    console.log(isAuthed);
    if (isAuthed) {
      setSkip(false);
    }
  }, [isAuthed]);

  useEffect(() => {
    if (router.query.code) {
      getTokenFunc();
    }
  }, [router.query]);

  return (
    <UserPanelTemplate>
      {!isFetching && !isUninitialized && !isLoading && (
        <>
          {" "}
          <img src={userData.images[0].url} alt='profileImage' width='500' height='500' />
          <div>{userData.display_name}</div>
          <div>{userData.email}</div>
        </>
      )}
    </UserPanelTemplate>
  );
};

export default Home;
