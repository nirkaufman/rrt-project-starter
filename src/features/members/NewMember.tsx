import React from 'react';
import styled from "styled-components";
import {TableHeader} from "../../shared/components/TableHeader";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {memberWizardSelector, uiSlice} from "../../app/ui.slice";
import {AppState} from "../../shared/types/app-state";
import {NewMemberWizard} from "../../shared/types/new-member-wizard";

function NewMember() {
  const dispatch = useDispatch();
  const {currentStep} = useSelector<AppState, NewMemberWizard>(memberWizardSelector);

  const nextStep = () => {
    dispatch(uiSlice.actions.wizardStepCompleted({step: currentStep}));
  };

  const previousStep = () => {
    //TODO: (student) implement previous step
  };

  return (
      <>
        <TableHeader>
          <h3>Create New Member</h3>
          <Link to='/members' className="button button-outline">
            Back to members
          </Link>
        </TableHeader>

        <form>
          {currentStep === 1 && (
              <Step>
                <strong>Step 1 - Basic Details</strong>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Phone"/>
                <input type="text" placeholder="website"/>
              </Step>
          )}

          {currentStep === 2 && (
              <Step>
                <strong>Step 2 - Address</strong>
                <input type="text" placeholder="Street"/>
                <input type="text" placeholder="Suite"/>
                <input type="text" placeholder="city"/>
                <input type="text" placeholder="zipCode"/>
                <input type="text" placeholder="latitude"/>
                <input type="text" placeholder="longitude"/>
              </Step>
          )}

          {currentStep === 3 && (
              <Step>
                <strong>Step 3 - Company</strong>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="catchPhrase"/>
                <input type="text" placeholder="bs"/>
              </Step>
          )}

          <StepActions>

            <button type="button"
                    disabled={currentStep === 1}
                    onClick={previousStep}
                    className="button button-outline">&lt;&lt; previous
            </button>

            <button type="button"
                    onClick={nextStep}
                    className="button button-outline">
                    { currentStep === 3 ? 'submit' :  'next'}&gt;&gt;
            </button>


          </StepActions>

        </form>

      </>
  );
}

const Step = styled.div`
  border: .5px solid #9b4dca;
  padding: 25px;
  margin-bottom: 25px;
`;

const StepActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default NewMember;
