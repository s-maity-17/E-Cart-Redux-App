import {
  ShopOutlined,
  AuditOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HomeOutlined 
} from "@ant-design/icons";
import "antd/dist/antd.min.css";
import { Layout, Menu, Typography, Avatar } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { Submenu } = Menu;

const Layouts = () => {
  const [selectedKey, setSelectedKey] = useState("/account");

  useEffect(() => {
    setSelectedKey(window.location.pathname);
    console.log("window.location.pathnamet", window.location.pathname);
  }, [window.location.pathname]);

  const navigate = useNavigate();

  return (
    <>
      <Sider
        style={{
          height: "100vh",
          position: "sticky",
        }}
      >
        <div style={{display:'flex',textAlign: "center", marginTop: "10px" }}>
          <div style={{width:"30%",marginLeft:'5px',padding:'2px'}}>
          <Avatar 
          size='default'
          onClick={() => navigate("/profile")}
          key="/profile"
          icon={<UserOutlined />} />
            
          </div>
          <div style={{width:'70%'}}>
            <h3 style={{color:'white',margin:'5px 25px'}}>usename</h3>
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          selectedKeys={[selectedKey]}
        >
          <Menu.Item
            onClick={() => navigate("/home")}
            key="/home"
            icon={<HomeOutlined />}
          >
            Home
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/product")}
            key="/product"
            icon={<AuditOutlined />}
          >
            Product
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/product-list")}
            key="/product-list"
            icon={<ShopOutlined />}
          >
            List of Products
          </Menu.Item>
          <Menu.Item
            onClick={() => navigate("/cart")}
            key="/cart"
            icon={<ShoppingCartOutlined />}
          >
            Cart
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Layouts;
