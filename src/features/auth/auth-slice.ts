import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {User} from "../../shared/types/user";

export const authSlice = createSlice<User, SliceCaseReducers<User>>({
  name: 'currentUser',
  initialState: {},
  reducers: {
    userLoaded: (state:User, action:PayloadAction<User>) => action.payload,
  }
});
