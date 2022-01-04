import React, { useCallback } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ Icon, path, text }: IProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(path);
  }, []);

  return (
    <div className="menu__item" onClick={handleClick}>
      {text}{" "}
      <span>
        <Icon />
      </span>
    </div>
  );
};

interface IProps {
  Icon: any;
  key: string;
  path: string;
  text: string;
}

export default React.memo(MenuItem);
