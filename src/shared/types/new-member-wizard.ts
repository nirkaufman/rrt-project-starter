export interface NewMemberWizard {
  started: boolean,
  currentStep: number;
  completed: boolean;
  memberId: number | null;
}
