import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout, Button, Image, message, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions";

const { Content } = Layout;

const ProductDetails = () => {
  const [loading, setLoading] = useState(false);

  let { id } = useParams();
  const selectedItem = useSelector((state) => state.addProductReducer.item);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);
  }, [selectedItem]);

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
              overflow: 'scroll'
            }}
          >
            <div>
              <div style={{ height: "65px" }}>
                <h1>Product Details</h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "10%" }}>
                  <Button onClick={() => navigate("/product-list")}>
                    <ArrowLeftOutlined />
                  </Button>
                </div>
                  
                  <div style={{ width: "90%", textAlign: "center" }}>
                 
                    <Image width={300} src={selectedItem?.data?.url} />
                    <div>
                      <br />
                      <h3>
                        <strong>Product Name: </strong>
                        {selectedItem?.data?.productName}
                      </h3>
                      <br />
                      <h3>
                        <strong>Price: </strong>
                        {selectedItem?.data?.price}
                      </h3>
                      <br />
                      <h3>
                        <strong>Description: </strong>
                        {selectedItem?.data?.description}
                      </h3>
                      <br />
                    </div>
                  </div>
                 
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      color: "ButtonHighlight",
                    }}
                  >
                    <Button
                      onClick={() =>
                        dispatch(
                          addToCart(selectedItem),
                          message.success("Added to Cart")
                        )
                      }
                    >
                      Add to Cart
                    </Button>
                    
                  </div>
                  
              </div>
              
            </div>
            
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default ProductDetails;
