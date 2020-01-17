import {configureStore} from "@reduxjs/toolkit";
import {AppState} from "../shared/types/app-state";
import {albumsSlice} from "../features/albums/albums-slice";
import {membersSlice} from "../features/members/members.slice";
import {authSlice} from "../features/auth/auth-slice";
import {uiSlice} from "./ui.slice";
import {persistent} from "../shared/middleware/persistent";


export const store = configureStore<AppState>({
  reducer: {
    ui: uiSlice.reducer,
    currentUser: authSlice.reducer,
    albums: albumsSlice.reducer,
    members: membersSlice.reducer
  },
  middleware: [persistent]
});
