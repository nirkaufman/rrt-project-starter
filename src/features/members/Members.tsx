import React from 'react';
import {MemberInfo} from "./types";
import {TableHeader, TableHeaderRow} from "../../shared/components/TableHeader";
import {Link} from "react-router-dom";
import {TableRow} from "../../shared/components/TableRow";
import styled from "styled-components";

//todo: mock data - replace with real data
const members: MemberInfo[] = [
  {
    id: 1,
    name: 'Nir Kaufman',
    email: 'nir@500tech.com',
    city: 'New York',
    website: 'nir.life',
    companyName: '500Tech'
  },
  {
    id: 2,
    name: 'Nir Kaufman',
    email: 'nir@500tech.com',
    city: 'New York',
    website: 'nir.life',
    companyName: '500Tech'
  },
  {
    id: 3,
    name: 'Nir Kaufman',
    email: 'nir@500tech.com',
    city: 'New York',
    website: 'nir.life',
    companyName: '500Tech'
  },
  {
    id: 4,
    name: 'Nir Kaufman',
    email: 'nir@500tech.com',
    city: 'New York',
    website: 'nir.life',
    companyName: '500Tech'
  },
];

const Members = () => {
      return (
          <>
            <TableHeader>
              <h3>Members</h3>
              <TableHeaderRow>
                <button className="button button-outline">Subscribe</button>
                <StyledLink to='/albums' className="button button-outline">Show Albums</StyledLink>
                <StyledLink to='/members/new' className="button button-outline">Add Member</StyledLink>
              </TableHeaderRow>
            </TableHeader>
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>city</th>
                <th>website</th>
                <th>company name</th>
                <th>selected</th>
              </tr>
              </thead>
              <tbody>
              {members.map(member => (
                  <TableRow>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>{member.city}</td>
                    <td>{member.website}</td>
                    <td>{member.companyName}</td>
                    <td><input type="checkbox"/></td>
                  </TableRow>
              ))}
              </tbody>
            </table>
          </>
      );
    }
;

const StyledLink = styled(Link)`
  margin-left: 5px;
`;


export default Members;
