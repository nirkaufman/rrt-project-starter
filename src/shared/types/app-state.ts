import {User} from "./user";
import {AlbumInfo} from "./albums";
import {MemberInfo} from "./members";
import {Ui} from "./ui";

export interface AppState {
  ui: Ui,
  currentUser: User;
  albums: AlbumInfo[];
  members: MemberInfo[];
}
