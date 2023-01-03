import React from "react";
import styled from "styled-components";

const Section = ({ title, img, desc }) => {
  return (
    <Wrap bgimg={img}>
      <ItemText>
        <h1>{title}</h1>
        <p>{desc}</p>
      </ItemText>

      <ButtonGroupp>
        <Button1>Custom Order</Button1>
        <Button2>Existing Inventory</Button2>
      </ButtonGroupp>
      <img
        style={{ height: "35px", position: "absolute", bottom: "15px", cursor: "pointer", animation: "animateDown infinite 1.0s" }}
        src="/images/down-arrow.svg"
        alt="hello"
      />
    </Wrap>
  );
};

export default Section;
const Wrap = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(/images/${props.bgimg})`};
  display: flex;
  justify-content: center;
  position: relative;
`;

const ItemText = styled.div`
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGroupp = styled.div`
  position: absolute;
  bottom: 70px;
  display: flex;
  width: 25vw;
  height: 10vh;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button1 = styled.button`
  width: 100%;
  height: 30px;
  background-color: black;
  color: white;
  border: none;
  font-size: 15px;
  border-radius: 15px;
  cursor: pointer;
  &:active {
    color: black;
    background-color: white;
  }
  overflow: hidden;
  margin: 5px;
`;

const Button2 = styled(Button1)`
  color: black;
  background-color: white;
  &:active {
    color: white;
    background-color: black;
  }
`;
