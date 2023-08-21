import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

    // Retrieve actions from store
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    
    // Checking
    console.log(store.email)
    console.log(store.password)
   
    

    return (
        <>
            <div className='wrapper container mt-5'>
                <div className='row mt-5'>
                    <div className='form-header col'>
                        <h2>PLEASE LOGIN</h2>
                    </div>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    actions.fetchLogin()
                    e.target.reset()
                    
                    !store.token ? alert("Access denied. Go back.") : alert("You're logged") //si ingreso info incorrecta, la alerta sí funciona
                    navigate("/private") //Pero arreglar, porque siempre pasa a private
                }}>
                <div className="mb-3 row mt-5 justify-content-center">
                    <div >
                        <label className="col-sm-2 form-label">Email:</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" name="email" onChange={actions.handleChange} className="form-control input-style" placeholder="email@example.com" required></input>
                    </div>
                </div>

                <div className="mb-3 row mt-4 justify-content-center">
                    <div >
                        <label className="col-sm-2 col-form-label">Password:</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="password" name="password" onChange={actions.handleChange} className="form-control input-style" placeholder="**********" ></input>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className='col-sm-10 mt-4'>
                        <button type='submit' className='submit-button btn btn-primary'>Login</button>
                    </div>
                </div>
                </form>


            </div>



        </>
    )
}
