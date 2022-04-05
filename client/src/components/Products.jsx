import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { userRequest } from "../requestMethod";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try{
        const res = await userRequest.get("/product/");
        setProducts(res.data);
      }catch(err){

      }
    };
    getProducts();
  }, true);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
