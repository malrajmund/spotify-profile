import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState<null | { access_token: string }>(null);
  const [image, setImage] = useState(null);

  const getData = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    const response: any = await fetch(
      `api/getToken?code=${router.query.code}&refresh_token=${refresh_token}`
    );
    const data = await response.json();
    localStorage.setItem("access_token", data.data.access_token);
    if (data.data.refresh_token) {
      localStorage.setItem("refresh_token", data.data.refresh_token);
    }
    setData(data.data);
  };

  const getUserData = async () => {
    const response = await fetch(
      `api/getUserData?token=${localStorage.getItem("access_token")}`
    );
    const data = await response.json();
    setImage(data.data.images[0].url);
  };

  useEffect(() => {
    if (router.query.code) {
      getData();
    }
  }, [router]);
  return (
    <>
      <div>Callback</div>
      <div>{data && data.access_token}</div>
      <div onClick={getUserData}>Get user data</div>
      {image && (
        <Image src={image} alt='profileImage' width='500' height='500' />
      )}
    </>
  );
};

export default Home;
