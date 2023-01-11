import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsAuthed, setRefreshToken, setToken } from "../src/redux/reducers/userDataReducer/userDataReducer";

export default function Home() {
  return (
    <>
      <div>Main</div>
      <Link href={"api/login"}>Login</Link>
    </>
  );
}
