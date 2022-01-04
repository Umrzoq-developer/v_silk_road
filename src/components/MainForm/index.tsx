import React from "react";
import { Button } from "antd";
import Input from "../Input";

const MainForm = () => {
  const [obj, setObj] = React.useState<IObj>({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleSubmit = React.useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    const { username, lastname, firstname, password } =
      e.target as typeof e.target & {
        username: { value: string };
        password: { value: string };
        firstname: { value: string };
        lastname: { value: string };
      };

    setObj((obj) => ({
      ...obj,
      username: username.value,
      lastname: lastname.value,
      firstname: firstname.value,
      password: password.value,
    }));
  }, []);
  return (
    <form className="form_handle" onSubmit={handleSubmit}>
      <Input
        name="firstname"
        label="Firstname"
        placeholder="type name"
        type="text"
      />
      <Input
        name="lastname"
        label="Lastname"
        placeholder="type lastname"
        type="text"
      />
      <Input
        name="username"
        label="Username"
        placeholder="type username"
        type="text"
      />
      <Input
        name="password"
        label="Password"
        placeholder="type password"
        type="password"
      />
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
      {JSON.stringify(obj)}
    </form>
  );
};

export interface IObj {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}

interface IProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  obj: {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
  };
}

export default React.memo(MainForm);
