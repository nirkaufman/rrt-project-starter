import {NewMemberWizard} from "./new-member-wizard";

export interface Ui {
  selectedMembersIds: number[]
  newMemberWizard: NewMemberWizard,
  loading: boolean,
  message: string,
  currentRoute: string
}
