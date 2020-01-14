import React from 'react';
import {MemberInfo} from "./types";
import styled from "styled-components";
import {TableHeader} from "../../shared/components/TableHeader";
import {Link} from "react-router-dom";
import {TableRow} from "../../shared/components/TableRow";

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
                <Link to='/albums' className="button button-clear">Show Albums for selected members</Link>
                <Link to='/members/new' className="button button-outline">Add Member</Link>
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
};



export default Members;
