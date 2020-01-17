import {Action} from "@reduxjs/toolkit";

export const UI_STATE = 'UI_STATE';

export const persistent = ({getState}: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type !== '@@INIT') {
    try {
      window.localStorage.setItem(UI_STATE, JSON.stringify(getState().ui))
    } finally {
    }
  }

};
