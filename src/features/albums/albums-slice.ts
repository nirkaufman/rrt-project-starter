import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {AlbumInfo} from "../../shared/types/albums";

export const albumsSlice = createSlice<AlbumInfo[], SliceCaseReducers<AlbumInfo[]>>({
  name: 'albums',
  initialState: [],
  reducers: {
    albumsLoaded: (state: AlbumInfo[], action: PayloadAction<AlbumInfo[]>) => action.payload,
  }
});
