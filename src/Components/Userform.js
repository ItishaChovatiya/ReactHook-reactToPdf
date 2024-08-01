import React, { useState } from 'react';
import Pdf from './Pdf';

export default function Userform() {
  // State to manage form data
  const [formdata, setformdata] = useState({
    abc: '',
    name: '',
    body: '',
    submitForm: false
  });

  // Handler function for form submission
  const formdataSubmit = (e) => {
    e.preventDefault();
    setformdata({
      name: e.target.name.value,
      abc: e.target.abc.value,
      body: e.target.body.value,
      submitForm: true
    });
  };

  /*
   * The Userform component renders a form initially.
   * Upon form submission, it updates the state and renders the Pdf component
   * with the form data passed as props.
   */
  return (
    <div>
      {formdata.submitForm === false ? (
        <form className='w-50 mx-auto mt-5' onSubmit={formdataSubmit}>
          <label htmlFor="inputImageURL" className="form-label">Image URL:</label>
          <input type="text" name='abc' className="form-control" id="inputImageURL" />

          <label htmlFor="inputName" className="form-label">User Name:</label>
          <input type="text" name='name' className="form-control" id="inputName" />

          <label htmlFor="inputBody" className="form-label">Body:</label>
          <input type="text" name='body' className="form-control" id="inputBody" />

          {/* Correcting the button type to 'submit' */}
          <button type='submit' className='btn btn-success w-100 mx-auto mt-3'>Submit</button>
        </form>
      ) : (
        <Pdf itisha={formdata}></Pdf>
      )}
    </div>
  );
}
