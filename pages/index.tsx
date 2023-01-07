import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>Main</div>
      <Link href={"api/login"}>Login</Link>
    </>
  );
}
