// components/ConfirmationDialog.js
import React from 'react';

const ConfirmationDialog = ({ onSubmit, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <h2>Are you sure you want to submit the survey?</h2>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default ConfirmationDialog;
