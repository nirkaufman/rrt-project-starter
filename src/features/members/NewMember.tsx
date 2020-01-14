import React from 'react';
import styled from "styled-components";
import {TableHeader} from "../../shared/components/TableHeader";
import {Link} from "react-router-dom";

function NewMember() {
    return (
        <>
            <TableHeader>
                <h3>Create New Member</h3>
                <Link to='/members' className="button button-outline">
                    Back to members
                </Link>
            </TableHeader>

            <form>
                <Step>
                    <strong>Basic Details</strong>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone"/>
                    <input type="text" placeholder="website"/>
                </Step>

                <Step>
                    <strong>Address</strong>
                    <input type="text" placeholder="Street"/>
                    <input type="text" placeholder="Suite"/>
                    <input type="text" placeholder="city"/>
                    <input type="text" placeholder="zipCode"/>
                    <input type="text" placeholder="latitude"/>
                    <input type="text" placeholder="longitude"/>
                </Step>

                <Step>
                    <strong>Company</strong>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="catchPhrase"/>
                    <input type="text" placeholder="bs"/>
                </Step>

                <StepActions>
                    <button className="button button-outline">&lt;&lt; previous</button>
                    <button className="button button-outline">next &gt;&gt;</button>
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
