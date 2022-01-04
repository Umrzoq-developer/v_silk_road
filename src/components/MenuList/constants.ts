import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";

interface IRoute {
  path: string;
  key: string;
  text: string;
  icon: any;
}

export const routes: IRoute[] = [
  {
    path: "/",
    key: "1",
    text: "Home Page",
    icon: PieChartOutlined,
  },
  {
    path: "/feed",
    key: "2",
    text: "Feed Page",
    icon: DesktopOutlined,
  },
  {
    path: "/register",
    key: "3",
    text: "Register",
    icon: FileOutlined,
  },
];
