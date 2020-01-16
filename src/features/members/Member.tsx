import React from 'react';
import styled from "styled-components";
import {MemberInfo} from "./types";

interface MemberProps {
 member: MemberInfo
}

const Member = ({member}: MemberProps) => {
    return (
        <>
            <Name>{member.name}</Name>
            <Info>{member.companyName} | {member.city}</Info>
            <Info>{member.email} | <strong>{member.website}</strong></Info>
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
