import React from 'react';
import styled from 'styled-components';

interface AlertProps {
    text?: string,
    onClose?: any
}

function Alert({text, onClose}: AlertProps) {
    return text ? (
        <AlertContainer>
            <span>{text}</span>
            <CloseButton onClick={onClose}>X</CloseButton>
        </AlertContainer>
    ) : null;
}

const AlertContainer = styled.div`
  border: 0.5px solid #9b4dca;
  padding: 5px 20px;
  margin: 5px 0;  
  box-shadow: 10px 10px 30px 0px rgba(150,148,150,1);
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.span`
    cursor: pointer;
    &:hover {
      color: #9b4dca
    }
`;


export default Alert;
