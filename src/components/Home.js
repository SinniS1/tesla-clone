import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
        <Section title="Model-S" img="model-s.jpg" desc="Your favourite car is here" />
        <Section title="Model-3" img="model-3.jpg" desc="This is Caaaaar" />
        <Section title="Model-X" img="model-x.jpg" desc="Aukat he to khareed ke dikha" />
        <Section title="Model-Y" img="model-y.jpg" desc="Tu India se he dugana lagaan dena padega" />
        <Section title="Interior" img="new-interior.jpg" desc="Bhai kya mast kaar he na" />
        <Section title="Accessories" img="accessories.jpg" desc="Ye to bas dekhawe ke liye he" />
        <Section title="Audio" img="audio.jpg" desc="Bhai speaker ka base mast he" />
        <Section title="Connected" img="connected.jpg" desc="Bluetooth bhi he isme Iphone walo..." />
        <Section title="Solar Panel" img="solar-panel.jpg" desc="Sooraj se charge ho jate he bhai" />
        <Section title="Solar Roof" img="solar-roof.jpg" desc="Ab kya seen he bata lega ya nahi" />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
`;
