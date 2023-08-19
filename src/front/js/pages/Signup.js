import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Signup = () => {

  // Retrieve actions from store
  const { store, actions } = useContext(Context);

  // Update email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (

    <>
      <div className='wrapper container mt-5'>
        <div className='row buttons-row mt-4 me-5 pe-2 justify-content-end'>
          <div className="col-1 mt-3">
            <button type="button" className='init-buttons btn btn-primary ms-4'>Login</button>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='form-header col'>
            <h2>SIGNUP</h2>
          </div>
        </div>


        <div className="mb-3 row mt-4 justify-content-center">
          <div >
            <label for="staticEmail" className="col-sm-2 col-form-label">Email:</label>
          </div>
          <div className="col-sm-10">
            <input type="text" className="form-control input-style" id="staticEmail" placeholder="email@example.com"></input>
          </div>
        </div>

        <div className="mb-3 row mt-4 justify-content-center">
          <div >
            <label for="inputPassword" className="col-sm-2 col-form-label">Password:</label>
          </div>
          <div className="col-sm-10">
            <input type="password" className="form-control input-style" id="inputPassword" placeholder='*************'></input>
          </div>
        </div>

        <div className="row justify-content-center">
        <div className='col-sm-10 mt-3'>
            <button type='button' className='submit-button btn btn-primary'>Signup</button>
          </div>
        </div>
        

      </div>
    </>

  )
}

