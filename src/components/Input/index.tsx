import React from "react";
import { Input } from "antd";

const InputComponent = ({
  type = "text",
  value,
  placeholder,
  handleChange,
  label,
  name,
}: IProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <Input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

interface IProps {
  type: React.HTMLInputTypeAttribute;
  value?: string | number;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string | undefined;
  label?: string;
  name: string;
}

export default React.memo(InputComponent);
