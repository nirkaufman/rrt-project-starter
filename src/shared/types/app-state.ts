import {CurrentUser, User} from "./user";
import {AlbumInfo} from "./albums";
import {MemberInfo} from "./members";
import {Ui} from "./ui";

export interface AppState {
  ui: Ui,
  currentUser: CurrentUser;
  albums: AlbumInfo[];
  members: MemberInfo[];
}
