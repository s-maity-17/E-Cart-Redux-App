import React, { useEffect, useState } from "react";
import { Card,Divider } from "antd";
import {
  EditOutlined,
  DollarCircleOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  HeartFilled,
  DeleteOutlined
} from "@ant-design/icons";
const { Meta } = Card;

const ProductCard = ({
  details,
  showDetails,
  addToWishlist,
  showProduct,
  addToCart,
  wishListed,
  cartActive,
  removeItem
}) => {

  useEffect(()=>{
    console.log('wishListed', wishListed)
  },[])
  return (
    <Card
      hoverable
      bordered="ture"
      style={{
        width: 180,
      }}
      
      size='small'
      cover={
        <img alt="example" style={{height:'200px', width:'180px'}} src={details?.data?.url} onClick={(e) => showProduct(e)} />
      }
    
    >
      <Meta
      style={{width:200,minHeight:70}}
        onClick={(e) => showProduct(e)}
        title={details?.data?.productName}
        description={details?.data?.description}
      />
      <h3 style={{ marginTop: "15px" }}>
        <DollarCircleOutlined /> {details?.data?.price}
      </h3>
      <Divider />
      <div style={{display:'flex',justifyContent:'space-between'}}>
        {wishListed?
          <HeartFilled style={{color:'red'}} key="liked" onClick={addToWishlist} />
          : 
          <HeartOutlined  key="disliked" onClick={addToWishlist} />
        }
        
        <Divider type="vertical" />
        <EditOutlined key="edit" onClick={(e) => showDetails(e)} />
        <Divider type="vertical" />
        {cartActive ? 
        <DeleteOutlined key="cart" onClick={removeItem}/>
        :
        <ShoppingCartOutlined key="cart" onClick={(e) => addToCart(e)} />
      }
        {/* <ShoppingCartOutlined key="cart" onClick={(e) => addToCart(e)} /> */}
      </div>
    </Card>
  );
};

export default ProductCard;
