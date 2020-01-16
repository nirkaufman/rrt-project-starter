import React from 'react';
import {Link} from "react-router-dom";
import {TableHeader} from "../../shared/components/TableHeader";
import styled from "styled-components";

const memberAlbums = [
    {
        memberName: "Nir Kaufman",
        albums: [
            {
                title: "Album 1",
                imageCount: 50,
            },
            {
                title: "Album 1",
                imageCount: 50,
            },
            {
                title: "Album 1",
                imageCount: 50,
            },
        ]
    },
    {
        memberName: "Nir Kaufman",
        albums: [
            {
                title: "Album 1",
                imageCount: 50,
            },
            {
                title: "Album 1",
                imageCount: 50,
            },
            {
                title: "Album 1",
                imageCount: 50,
            },
        ]
    },

];

const MemberAlbums = () => {
    return (
        <>
            <TableHeader>
                <h3>Albums By Members</h3>
                <Link to='/members' className="button button-outline">Back to members</Link>
            </TableHeader>

            <Dl>
                {memberAlbums.map(member => (
                    <>
                        <Dt>{member.memberName}</Dt>
                        {member.albums.map(album => (
                            <dd>{album.title} | <strong>{album.imageCount} photos</strong></dd>
                        ))}

                    </>
                ))}
            </Dl>

        </>
    );
};

const Dl = styled.dl`
  margin-top: 50px;  
`;

const Dt = styled.dt`
  font-weight: bold;
  color: #9b4dca
`;

export default MemberAlbums;
