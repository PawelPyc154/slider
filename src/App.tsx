import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

function App() {
  const plansOffer = [
    { id: 0, name: 'Plan 1' },
    { id: 1, name: 'Plan 2' },
    { id: 2, name: 'Plan 3' },
    { id: 3, name: 'Plan 4' },
  ];
  const [indexSelectedPlan, setIndexSelectedPlan] = useState(0);

  return (
    <Container className="App">
      <PlansWrapper indexSelectedPlan={indexSelectedPlan}>
        {plansOffer.map((item) => (
          <PlanOffer key={item.id}>{item.name}</PlanOffer>
        ))}
      </PlansWrapper>
      <DotWraper>
        {plansOffer.map((item) => (
          <Dot
            key={item.id}
            onClick={() => setIndexSelectedPlan(item.id)}
            className={item.id === indexSelectedPlan ? 'isActive' : ''}
          />
        ))}
      </DotWraper>
      <GlobalStyle />
    </Container>
  );
}

export default App;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;
interface PlansWrapperProps {
  indexSelectedPlan: number;
}
const PlansWrapper = styled.div<PlansWrapperProps>`
  display: flex;
  transition: 0.8s linear;
  transform: ${(props) => `translateX(${-props.indexSelectedPlan * 100}%)`};
`;
const PlanOffer = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  &:nth-child(odd) {
    background-color: #bdc3c7;
  }
`;
const DotWraper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
`;
const Dot = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  margin: 5px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
  &.isActive {
    background-color: transparent;
    border: 2px solid white;
  }
`;
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Roboto, Arial, sans-serif;
}
`;
