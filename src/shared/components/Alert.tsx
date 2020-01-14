import React from 'react';
import styled from 'styled-components';

interface AlertProps {
    text?: string
}

function Alert({text}: AlertProps) {
    return text ? <AlertContainer>{text}</AlertContainer> : null;
}

const AlertContainer = styled.div`
  border: 0.5px solid #9b4dca;
  padding: 5px 10px;
  font-style: italic;
  margin: 5px 0;  
`;

export default Alert;
