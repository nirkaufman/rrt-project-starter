import React from 'react';
import styled, {keyframes} from "styled-components";

function Loader() {
  return (
      <RippleContainer>
        <Ripple>
          <div/>
          <div/>
        </Ripple>
      </RippleContainer>
  );
}

const rotate = keyframes`
0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const RippleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

   div {
  position: absolute;
  border: 4px solid #9b4dca;
  opacity: 1;
  border-radius: 50%;
  animation: ${rotate} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

 div:nth-child(2) {
  animation-delay: -0.5s;
}
`;


export default Loader;
