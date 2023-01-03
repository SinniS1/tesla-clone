import React, { useState } from "react";
import styled from "styled-components";
const Header = () => {
  const [burgerStates, setBurgerStates] = useState(false);
  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt="Tesla" />
      </div>
      <Menu>
        <li>
          <a style={{ textDecoration: "none", cursor: "pointer" }} href="h">
            Model 3
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", cursor: "pointer" }} href="h">
            Model S
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", cursor: "pointer" }} href="h">
            Model X
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", cursor: "pointer" }} href="h">
            Model Y
          </a>
        </li>
      </Menu>
      <RightMenu>
        <li>Shop</li>
        <li>Tesla account</li>
        <li>
          <img
            style={{ height: "25px" }}
            onClick={() => {
              setBurgerStates(true);
            }}
            src="/images/burger.png"
            alt=""
            srcset=""
          />
        </li>
      </RightMenu>
      <BurgerMenu show={burgerStates}>
        <img
          style={{ height: "30px", marginLeft: "12vw", marginTop: "1vh", cursor: "pointer" }}
          onClick={() => {
            setBurgerStates(false);
          }}
          src="images/cross.png"
          alt=""
          srcset=""
        />
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Tesla Taquilla</li>
        <li>Spacecraft</li>
      </BurgerMenu>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

const Menu = styled.div`
  width: 30vw;
  font-size: 20px;
  font-weight: bold;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  list-style-type: none;
  width: max-content;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    cursor: pointer;
    margin: 0 5px;
  }
`;

const BurgerMenu = styled.div`
  display: ${(props) => (props.show ? "content" : "none")};
  border-radius: 10px 0 0 10px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  list-style-type: none;
  background-color: white;
  width: 15vw;
  li {
    padding-bottom: 10px;
    margin: 50px 10px;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 1px solid gray;
  }
`;
