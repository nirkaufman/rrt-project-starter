import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {Ui} from "../shared/types/ui";
import {AppState} from "../shared/types/app-state";
import {membersSlice} from "../features/members/members.slice";

export const uiSlice = createSlice<Ui, SliceCaseReducers<Ui>>({
  name: 'ui',
  initialState: {
    selectedMembersIds: [],
    loading: false,
    message: '',
    currentRoute: '/',
    newMemberWizard: {
      started: false,
      completed: false,
      currentStep: 1,
      memberId: null,
    }
  },
  reducers: {
    routeUpdated: (state:Ui, actions: PayloadAction<string>) => {state.currentRoute = actions.payload},
    subscriptionStarted: (state:Ui, actions: PayloadAction<string>) => {state.message = actions.payload},
    loaderStarted: (state:Ui, action:PayloadAction<boolean>) => {state.loading = true},
    uiStateRestored: (state: Ui, action:PayloadAction<Ui>) => {
      return action.payload;
    },
    memberSelected: (state: Ui, action: PayloadAction<number>) => {
      if (state.selectedMembersIds.includes(action.payload)) {
        const index = state.selectedMembersIds.indexOf(action.payload);
        state.selectedMembersIds.splice(index, 1);
      } else {
        state.selectedMembersIds.push(action.payload);
      }
    },
    wizardStepCompleted: (state:Ui, actions:PayloadAction<{ step:number, memberId:number }>) => {
      const completedStepNumber = actions.payload.step;

      if(completedStepNumber === 1) {
        state.newMemberWizard.started = true;
        state.newMemberWizard.currentStep = 2;
        state.newMemberWizard.memberId = actions.payload.memberId;
      }

      if(completedStepNumber === 2) {
        state.newMemberWizard.currentStep = 3
      }

      if(completedStepNumber === 3) {
        state.newMemberWizard.currentStep = 1;
        state.newMemberWizard.memberId = actions.payload.memberId;
        state.newMemberWizard.completed = true;
        state.newMemberWizard.started = false;
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(membersSlice.actions.membersLoaded, (state, action) => {
      state.loading = false
    })
  }
});

// selectors
export const loadingSelector = (state:AppState) => state.ui.loading;
export const memberWizardSelector = (state:AppState) => state.ui.newMemberWizard;
export const selectedMembersSelector = (state:AppState) => state.ui.selectedMembersIds;
export const messageSelector = (state:AppState) => state.ui.message;
export const currentRouteSelector = (state:AppState) => state.ui.currentRoute;
