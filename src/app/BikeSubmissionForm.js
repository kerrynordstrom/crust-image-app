import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';

import BikeForm from './bikeSubmissionForm/BikeForm'; 
import Upload from './bikeSubmissionForm/Upload';
import Success from './bikeSubmissionForm/Success';

const BikeSubmissionForm = () => {
  const [bikeDetails, setBikeDetails] = useState({});
  console.log('bikeDetails w/in BikeSubmissionForm', bikeDetails);
  return (
    <StepWizard>
      <BikeForm setBikeDetails={setBikeDetails} bikeDetails={bikeDetails} />
      <Upload bikeDetails={bikeDetails} />
      <Success />
    </StepWizard>
  );
}

export default BikeSubmissionForm;