import React from 'react';
import {AlbumInfo} from "./types";
import {TableHeader} from "../../shared/components/TableHeader";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {TableRow} from "../../shared/components/TableRow";

const albums: AlbumInfo[] = [
    {id: 1, owner: "Nir", title: "Album title", thumbnail: "https://via.placeholder.com/150/92c952", imageCount: 25},
    {id: 1, owner: "Nir", title: "Album title", thumbnail: "https://via.placeholder.com/150/92c952", imageCount: 25},
    {id: 1, owner: "Nir", title: "Album title", thumbnail: "https://via.placeholder.com/150/92c952", imageCount: 25},
    {id: 1, owner: "Nir", title: "Album title", thumbnail: "https://via.placeholder.com/150/92c952", imageCount: 25},
];

function Albums() {
    return (
        <>
            <TableHeader>
                <h3>Albums</h3>
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

const Thumbnail = styled.img`
  width: 50px;
`

export default Albums;
