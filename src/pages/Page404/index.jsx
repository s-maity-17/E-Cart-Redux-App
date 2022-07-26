import React from "react";
import "antd/dist/antd.min.css";
import { Layout, Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

const PageNotFound = () => {

    const navigate = useNavigate();
  return (
    <>
      <Layout
        style={{
          height: "100vh",
        }}
      >
        <Layout className="site-layout">
          <Content
            style={{
              margin: "0",
              padding: 24,
              height: 600,
              backgroundColor: "white",
              overflow: "scroll",
            }}
          >
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button onClick={()=>navigate('/home')} type="primary">Back Home</Button>}
            />
            
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default PageNotFound;
