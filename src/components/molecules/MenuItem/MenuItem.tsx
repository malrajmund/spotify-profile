import Link from "next/link";
import React from "react";
import { MenuItemWrapper } from "./MenuItem.styles";
import { useRouter } from "next/router";

const MenuItem: React.FC<MenuItem> = ({ title, href }) => {
  const router = useRouter();
  console.log(router);
  return (
    <MenuItemWrapper isActive={href === router.pathname}>
      <Link href={href}>{title}</Link>
    </MenuItemWrapper>
  );
};

export default MenuItem;
