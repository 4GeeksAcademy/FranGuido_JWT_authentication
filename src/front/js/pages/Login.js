import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Login = () => {

    // Retrieve actions from store
    const { store, actions } = useContext(Context);

    
  // Controller component (update email and password)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
				
    actions.fetchLogin();
  }
   

    return (
        <>
            <div className='wrapper container mt-5'>
                <div className='row mt-5'>
                    <div className='form-header col'>
                        <h2>PLEASE LOGIN</h2>
                    </div>
                </div>

                <form>
                <div className="mb-3 row mt-5 justify-content-center">
                    <div >
                        <label className="col-sm-2 form-label">Email:</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control input-style" placeholder="email@example.com" ></input>
                    </div>
                </div>

                <div className="mb-3 row mt-4 justify-content-center">
                    <div >
                        <label className="col-sm-2 col-form-label">Password:</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control input-style" placeholder="**********" ></input>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className='col-sm-10 mt-4'>
                        <button type='submit' className='submit-button btn btn-primary' onClick={handleClick}>Login</button>
                    </div>
                </div>
                </form>


            </div>



        </>
    )
}
