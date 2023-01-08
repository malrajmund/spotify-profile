import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import UserPanelTemplate from "../../src/components/templates/UserPanelTemplate/UserPanelTemplate";

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState<null | {
    images: { url: string }[];
    email: string;
    display_name: string;
  }>(null);

  const getData = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    const response: any = await fetch(
      `api/getAuthToken?code=${router.query.code}`
    );
    const data = await response.json();
    if (data.data.error) {
      const refreshToken: any = await fetch(
        `api/refreshToken?code=${router.query.code}&refresh_token=${refresh_token}`
      );
    }
    localStorage.setItem("access_token", data.data.access_token);
    if (data.data.refresh_token) {
      localStorage.setItem("refresh_token", data.data.refresh_token);
    }
    setData(data.data);
  };

  useEffect(() => {
    if (router.query.code) {
      getData();
    }
  }, [router]);

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
