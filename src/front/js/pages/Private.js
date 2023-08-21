import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Private = () => {

  // Retrieve actions from store
  const { store, actions } = useContext(Context);
  
  

  return (
    <>
      <div className='wrapper container mt-5'>
      
        <div className='row mt-4'>
          <div className='form-header col'>
            <h2>WELCOME BACK!</h2>
            <h6>You'v been authenticated.</h6>
          </div>
        </div>

        <div className="row justify-content-center">
            <div className='col-sm-10 mt-4'>
              <Link to = {"/signup"}>
              <button type='submit' className='logout btn btn-primary' onclick={actions.logout}>Logout</button>
              </Link>
            </div>
          </div>

      </div>
    </>
  )
}
