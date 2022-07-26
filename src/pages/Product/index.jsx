import { Layout, Form, Spin, message } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import ProductForm from "../../components/ProductForm";
import classes from "./style.module.css";
import { useForm } from "antd/lib/form/Form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions";
const { Content } = Layout;

const Product = () => {
  // const [products,setProducts] = useState([]);
  const [status, setStatus] = useState(false);
 

  const [productDetails] = Form.useForm();
  const dispatch = useDispatch();

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
              overflow: 'scroll'
            }}
          >
            <div>
              <div style={{ height: "65px" }}>
                <h1>Add New Product</h1>
              </div>
              <div className={classes.productform}>
                <ProductForm
                  addProduct={(values) =>
                    dispatch(addProduct(values), productDetails.resetFields(),message.success('Item Added '))
                  }
                  form={productDetails}
                  status={status}
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Product;
