import React, {useState} from 'react';
import {AlbumInfo} from "./types";
import {TableHeader} from "../../shared/components/TableHeader";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {TableRow} from "../../shared/components/TableRow";
import Modal from "../../shared/components/Modal";
import Member from '../members/Member';

interface MemberNameProps {
  onClick: any;
}

const selectedMember = {
  id: 1,
  name: 'Nir Kaufman',
  email: 'nir@500tech.com',
  city: 'New York',
  phone: '12341234',
  picture: "https://randomuser.me/api/portraits/thumb/men/6.jpg"
};

const albums: AlbumInfo[] = [
  {id: 1, owner: "Nir", title: "Album title", thumbnail: "https://via.placeholder.com/150/92c952", imageCount: 25},
  {id: 1, owner: "Nir", title: "Album title", thumbnail: "https://via.placeholder.com/150/92c952", imageCount: 25},
  {id: 1, owner: "Nir", title: "Album title", thumbnail: "https://via.placeholder.com/150/92c952", imageCount: 25},
  {id: 1, owner: "Nir", title: "Album title", thumbnail: "https://via.placeholder.com/150/92c952", imageCount: 25},
];

function Albums() {
  const [show, setShow] = useState(false);

  return (
      <>
        {show && <Modal onClose={() => setShow(false)}><Member member={selectedMember}/></Modal>}
        <TableHeader>
          <h3>Albums of <MemberName onClick={() => setShow(true)}>{selectedMember.name}</MemberName></h3>
          <Link to='/members' className="button button-outline">Back to members</Link>
        </TableHeader>
        <table>
          <thead>
          <tr>
            <th>thumbnail</th>
            <th>owner</th>
            <th>title</th>
            <th>Image count</th>
          </tr>
          </thead>
          <tbody>
          {albums.map(album => (
              <TableRow>
                <td><Thumbnail src={album.thumbnail} alt=""/></td>
                <td>{album.owner}</td>
                <td>{album.title}</td>
                <td>{album.imageCount}</td>
              </TableRow>
          ))}
          </tbody>
        </table>
      </>
  );
}

const MemberName = styled.span<MemberNameProps>`
    cursor: pointer;
    color: #9b4dca;;

    &:hover {
        text-decoration: underline;
    }
`;

const Thumbnail = styled.img`
  width: 50px;
`;

export default Albums;
