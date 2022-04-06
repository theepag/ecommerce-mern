import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {useSelector} from "react-redux";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;



const Navbar = () => {
  const quantity = useSelector(state =>state.cart.quantity);
  const user = useSelector(state=> state.user.currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          
        </Left>
        <Center>
        <Link to={`/`} style={{ textDecoration: 'none', color: 'Black' }}>
          <Logo>Easy Shop.</Logo>
        </Link>
        </Center>
        <Right>
        <Link to={`/register`} style={{ textDecoration: 'none', color: 'Black' }}>
          {!user ? <MenuItem>REGISTER</MenuItem> : <span></span>}
        </Link> 
        <Link to={`/login`} style={{ textDecoration: 'none', color: 'Black' }}>
        {!user ? <MenuItem>SIGN IN</MenuItem> : <span></span>}
        </Link>
          {user ? user.username : <span></span>}
        <Link to={`/cart`} style={{ textDecoration: 'none', color: 'Black' }}>
          <MenuItem >
          
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right> 
      </Wrapper>
    </Container>
  );
};

export default Navbar;
