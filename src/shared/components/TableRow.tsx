import styled from "styled-components";

interface TableRowProps {
    onClick?: any
}

export const TableRow = styled.tr<TableRowProps>`   
  &:hover {
   background-color: rgba(206,83,255,0.11);
   cursor: pointer;  
  }
`;
