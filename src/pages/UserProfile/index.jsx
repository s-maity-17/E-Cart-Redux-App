import React from 'react';
import {Layout} from 'antd';
 const {Content} = Layout;

const UserProfile = () => {
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
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
            <div>
              <div>
                <h1>UserProfile</h1>
              </div>
             
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default UserProfile