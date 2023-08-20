import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


export const Signup = () => {





  return (

    <>
      <div className='wrapper container mt-5'>
        <div className="row justify-content-center">
          <div className='col-sm-10 mt-4 '>
            <Link to = {'/login'}>
              <button type='button' className='login-button btn btn-primary'>Login</button>
            </Link>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='form-header col'>
            <h2>SIGNUP</h2>
          </div>
        </div>


        <div className="mb-3 row mt-4 justify-content-center">
          <div >
            <label className="col-sm-2 form-label">Email:</label>
          </div>
          <div className="col-sm-10">
            <input type="text" className="form-control input-style" placeholder="email@example.com"></input>
          </div>
        </div>

        <div className="mb-3 row mt-4 justify-content-center">
          <div >
            <label className="col-sm-2 col-form-label">Password:</label>
          </div>
          <div className="col-sm-10">
            <input type="password" className="form-control input-style" placeholder="**********"></input>
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

