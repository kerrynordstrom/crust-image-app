import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';

import BikeForm from './BikeForm'; 
import Upload from './Upload';
import Success from './Success';

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