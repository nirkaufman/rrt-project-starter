import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {CurrentUser, User} from "../../shared/types/user";
import {AppState} from "../../shared/types/app-state";

export const authSlice = createSlice<CurrentUser, SliceCaseReducers<CurrentUser>>({
  name: 'currentUser',
  initialState: null,
  reducers: {
    userLoggedIn: (state: CurrentUser, action: PayloadAction<User>) => action.payload,
    userLoggedOut: (state: CurrentUser, action: PayloadAction<null>) => action.payload,
  }
});

export const currentUserSelector = (state: AppState) => state.currentUser;
