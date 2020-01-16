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
    phone: '12341234',
    picture: "https://randomuser.me/api/portraits/thumb/men/6.jpg"
  },
  {
    id: 2,
    name: 'Nir Kaufman',
    email: 'nir@500tech.com',
    city: 'New York',
    phone: '12341234',
    picture: "https://randomuser.me/api/portraits/thumb/men/6.jpg"
  },
  {
    id: 3,
    name: 'Nir Kaufman',
    email: 'nir@500tech.com',
    city: 'New York',
    phone: '12341234',
    picture: "https://randomuser.me/api/portraits/thumb/men/6.jpg"
  },
  {
    id: 4,
    name: 'Nir Kaufman',
    email: 'nir@500tech.com',
    city: 'New York',
    phone: '12341234',
    picture: "https://randomuser.me/api/portraits/thumb/men/6.jpg"
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
                <th>City</th>
                <th>Phone</th>
                <th>Picture</th>
                <th>selected</th>
              </tr>
              </thead>
              <tbody>
              {members.map(member => (
                  <TableRow>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>{member.city}</td>
                    <td>{member.phone}</td>
                    <td><img src={member.picture} alt={member.name}/></td>
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
