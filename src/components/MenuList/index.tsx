import React from "react";
import { routes } from "./constants";
import MenuItem from "../MenuItem";
import "./index.css";

const MenuList = () => {
  return (
    <div className="menu__wrap">
      {routes.map((item) => {
        return <MenuItem Icon={item.icon} {...item} />;
      })}
    </div>
  );
};

export default React.memo(MenuList);
