import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useState } from "react";
import MenuList from "@/components/MenuList";
import "./index.css";
const { Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout className="main__layout">
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <MenuList />
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: !collapsed ? 200 : 20 }}
      >
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
