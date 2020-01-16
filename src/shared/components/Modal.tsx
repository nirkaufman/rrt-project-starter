import React from 'react';
import styled from "styled-components";

interface ModalProps {
    children: any;
    onClose?: any
}

const Modal = ({children, onClose}: ModalProps) => {
    return (
        <ModalContainer>
            <Content>
                <Close className="close" onClick={onClose}>&times;</Close>
                {children}
            </Content>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
    display: block; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`;

const Content = styled.div`
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #9b4dca;;     
    width: 50%; /* Could be more or less, depending on screen size */
`;

const Close = styled.span`
    float: right;
    font-size: 28px;    
    
    &:hover,
    &:focus {      
    color: #9b4dca;;
        text-decoration:none;
        cursor: pointer;
    }
`;

export default Modal;
