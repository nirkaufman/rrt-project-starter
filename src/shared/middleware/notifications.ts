import {Action} from "@reduxjs/toolkit";
import {uiSlice} from "../../app/ui.slice";
import {socket} from "../utils/socket";


export const notifications = () => (next: any) => (action: Action) => {
    if (action.type === uiSlice.actions.subscriptionStarted.type) {
      socket.subscribe( (message:string) => {
        next(uiSlice.actions.subscriptionStarted(message))
      })
    } else {
      next(action);
    }
};
