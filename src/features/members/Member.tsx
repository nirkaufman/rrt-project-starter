import React from 'react';
import styled from "styled-components";
import {MemberInfo} from "./types";

interface MemberProps {
 member: MemberInfo
}

const Member = ({member}: MemberProps) => {
    return (
        <>
          <img src={member.picture} alt={member.name}/>
            <Name>{member.name}</Name>
            <Info>{member.email} | {member.phone}</Info>
            <Info>{member.city}</Info>
        </>
    );
};

const Name = styled.h3`
  margin-bottom: 10px;
`;
const Info = styled.em`
  display: block;
`;

export default Member;
