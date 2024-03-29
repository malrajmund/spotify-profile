import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { useRouter } from "next/router";

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const router = useRouter();
  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed) as UserState;

  useLayoutEffect(() => {
    if (!isAuthed) {
      router.push("/");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedPage;
