import React, { useEffect, useState } from "react";
import { Layout, Form, Row, Col, Drawer, message, Spin } from "antd";
import ProductCard from "../../components/ProductCard";
import ProductForm from "../../components/ProductForm";
import { useForm } from "antd/lib/form/Form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  addToFavorites,
  showProduct,
  editProduct,
} from "../../actions";


const { Content } = Layout;

const ProductList = () => {
  const [isVisible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [loading, setLoading] = useState(false);

  const itemList = useSelector((state) => state.addProductReducer.list);
  const productList = useSelector((state)=>state.cartReducer.list);
  const dispatch = useDispatch();

  const [productInfo] = Form.useForm();

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
  }, [itemList]);

  const getMessage = (product)=>{
      const getItem = productList?.some((item)=>item.id === product.id);
      if(getItem === true){
        message.warning('Already added to cart');
      }else{
        message.success('Added to cart');
      }
  }

  const showDrawer = (index) => {
    setVisible(true);
    console.log("index", index);
    const editItem = itemList[index];
    setSelectedItem(editItem);

    productInfo.setFieldsValue({
      productName: editItem?.data?.productName,
      price: editItem?.data?.price,
      description: editItem?.data?.description,
      url: editItem?.data?.url,
    });
  };

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
                <h1>List Of Products</h1>
              </div>
              <Spin spinning={loading}>
                <div>
                  <Row
                    gutter={[16, 24]}
                  
                  >
                    {itemList?.map((product, index) => {
                      return (
                        <Col
                          key={product?.data?.id}
                          className="gutter-row"
                          span={4}
                         
                        >
                         
                            <ProductCard
                              details={product}
                              form={productInfo}
                              showDetails={() => showDrawer(index)}
                              addToWishlist={() =>
                                dispatch(addToFavorites(product))
                              }
                              wishListed={product?.favorite}
                              showProduct={() =>
                                dispatch(
                                  showProduct(product?.id),
                                  navigate(`/product-list/${product?.id}`)
                                )
                              }
                              addToCart={() =>
                                dispatch(
                                  addToCart(product),
                                  getMessage(product)
                                )
                              }
                            />
                         
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Spin>
              <Drawer
                title="Product Details"
                width={420}
                visible={isVisible}
                onClose={() => setVisible(false)}
              >
                <ProductForm
                  form={productInfo}
                  addProduct={(values) =>
                    dispatch(
                      editProduct(values, selectedItem),
                      setVisible(false)
                    )
                  }
                />
              </Drawer>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default ProductList;
