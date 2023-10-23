import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { useRouter } from "next/router";

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const router = useRouter();
  const [isHavingAccess, setIsHavingAccess] = useState<boolean>(false);
  const isAuthed = useSelector<AppState>((state) => state.userData.isAuthed) as UserState;
  useEffect(() => {
    if (!isAuthed) {
      // router.push("/");
    } else {
      setIsHavingAccess(true);
    }
  }, [isAuthed]);
  return isHavingAccess ? <>{children}</> : null;
};

export default ProtectedPage;
