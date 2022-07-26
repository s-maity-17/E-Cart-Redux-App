import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Layout, Row, Col, message, Spin } from "antd";
import ProductCard from "../../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions";
const { Content,Footer } = Layout;

const Cart = () => {
  
const [loading,setLoading] = useState(false);
const productList = useSelector((state)=>state.cartReducer.list);
const dispatch = useDispatch();

useEffect(() => {
  if (loading) {
    setTimeout(() => {
    setLoading(false);
  }, 1000);
  }
}, [loading]);

useEffect(()=>{
 
    setLoading(true);
},[productList])

const showLog=(product)=>{
  console.log('product', product)
}


  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Layout className="site-layout">
          <Content
            // className="site-layout-background"
            style={{
              margin: "0",
              padding: 24,
              height: 600,
              backgroundColor: "white",
              overflow: 'scroll'
            }}
          >
            <div>
              <div>
                <h1> My Cart </h1>
              </div>
              <div>
              <Spin spinning={loading}>
              
                <Row gutter={[16, 24]}>
                  {productList?.map((product, index) => {
                    return (
                      <Col
                        className="gutter-row"
                        span={4}
                        key={product?.data?.id}
                      >
                        <ProductCard
                          details={product?.data}
                          wishListed={product?.data?.favorite}
                          cartActive={true}
                          removeItem={()=>dispatch(removeFromCart(product.id),message.warn("removed from cart"))}
                         
                        />
                      </Col>
                    );
                  })}
                </Row>
                </Spin>
              </div>
             
            </div>
          </Content>
          {/* <Footer>
      Ant Design ©2018 Created by Ant UED
    </Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default Cart;
