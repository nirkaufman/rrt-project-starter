import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {Ui} from "../shared/types/ui";
import {AppState} from "../shared/types/app-state";

export const uiSlice = createSlice<Ui, SliceCaseReducers<Ui>>({
  name: 'ui',
  initialState: {selectedMembersIds: []},
  reducers: {
    memberSelected: (state: Ui, action: PayloadAction<number>) => {
      if (state.selectedMembersIds.includes(action.payload)) {
        const index = state.selectedMembersIds.indexOf(action.payload);
        state.selectedMembersIds.splice(index, 1);
      } else {
        state.selectedMembersIds.push(action.payload);
      }
    }
  }
});

export const selectedMembersSelector = (state:AppState) => state.ui.selectedMembersIds;
