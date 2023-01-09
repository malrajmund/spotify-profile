import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";
import { useGetUserDataQuery } from "../../src/redux/services/spotifyApi/user/user";
import { useGetTokenMutation } from "../../src/redux/services/serverApi/auth/auth";

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState<null | {
    images: { url: string }[];
    email: string;
    display_name: string;
  }>(null);

  const [skip, setSkip] = useState(true);

  const {
    data: userData,
    isUninitialized,
    isLoading,
    isFetching,
    isError,
  } = useGetUserDataQuery({}, { skip });

  const [getToken] = useGetTokenMutation();

  // const getData = async () => {
  //   // const refresh_token = localStorage.getItem("refresh_token");
  //   // const response: any = await fetch(
  //   //   `api/getAuthToken?code=${router.query.code}`
  //   // );
  //   // const data = await response.json();
  //   // if (data.data.error) {
  //   //   const refreshToken: any = await fetch(
  //   //     `api/refreshToken?code=${router.query.code}&refresh_token=${refresh_token}`
  //   //   );
  //   // }
  //   // localStorage.setItem("access_token", data.data.access_token);
  //   // if (data.data.refresh_token) {
  //   //   localStorage.setItem("refresh_token", data.data.refresh_token);
  //   // }
  //   // setData(data.data);
  // };

  const getTokenFunc = async () => {
    const getTokenRequest = await getToken({ code: router.query.code });
    if ("data" in getTokenRequest) {
      console.log("Git");
    }
  };

  useEffect(() => {
    if (router.query.code) {
      getTokenFunc();
    }

    // if (data) {
    //   console.log(data);
    // }
  }, []);

  return (
    <UserPanelTemplate>
      {data && (
        <>
          {" "}
          <img
            src={data.images[0].url}
            alt='profileImage'
            width='500'
            height='500'
          />
          <div>{data.display_name}</div>
          <div>{data.email}</div>
        </>
      )}
    </UserPanelTemplate>
  );
};

export default Home;
