import {createSelector, createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {MemberInfo} from "../../shared/types/members";
import {AppState} from "../../shared/types/app-state";

export const membersSlice = createSlice<MemberInfo[], SliceCaseReducers<MemberInfo[]>>({
  name: 'members',
  initialState: [],
  reducers: {
    membersLoaded: (state:MemberInfo[], action: PayloadAction<MemberInfo[]>) => action.payload
  }
});

// selectors
const rawMembers = (state:AppState) => state.members;

// map for member info
export const membersInfoSelector = createSelector(
    rawMembers,
    (rawMembers) => {
      return rawMembers.map( (member:any) => ({
        id: member.id,
        email: member.email,
        name: member.name.first,
        city: member.location.city,
        phone: member.phone,
        picture: member.picture.thumbnail
      }))
    }
);
