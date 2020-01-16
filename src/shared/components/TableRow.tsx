import styled from "styled-components";

interface TableRowProps {
    onClick?: any;
    selected?: boolean
}

export const TableRow = styled.tr<TableRowProps>`
  background-color: ${({ selected }) => selected ? 'rgba(206,83,255,0.11)' : '#fff'};    
  &:hover {
   background-color: rgba(206,83,255,0.11);
   cursor: pointer;  
  }
`;
