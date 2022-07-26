import { Layout, Carousel,Card,Divider, Row,Col, message } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import {useSelector,useDispatch} from 'react-redux';
import ProductCard from "../../components/ProductCard";
import { addToCart } from "../../actions";

const { Content } = Layout;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {

  const [wishList,setWishList] = useState([]);

  const itemList = useSelector((state)=>state.addProductReducer.list);
  const productList = useSelector((state)=>state.cartReducer.list);

  
  const dispatch = useDispatch();

  useEffect(()=>{
    getWishList();
  },[])
  
  const getWishList =() =>{
    const tempList = itemList?.filter((item)=>item.favorite === true);
    setWishList(tempList);
    console.log('tempList', wishList)
  }

  const getMessage = (product)=>{
    const getItem = productList?.some((item)=>item.id === product.id);
    if(getItem === true){
      message.warning('Already added to cart');
    }else{
      message.success('Added to cart');
    }
}

  console.log('wishList', wishList)
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
                <h2>Your WishList</h2>
                <Divider />
                <div>
                <Row gutter={[16, 24]}>
                  {
                    wishList?.map((product,index)=>{
                      return(
                        <Col
                        className="gutter-row"
                        span={4}
                        key={product?.data?.id}
                      >
                          <ProductCard 
                          details={product}
                          wishListed={product?.favorite}
                          addToCart={() =>
                            dispatch(
                              addToCart(product),
                              getMessage(product)
                            )
                          }
                          />
                        </Col>
                      )
                    })
                  } 
                </Row>
                </div>
                <Divider />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
