import React, { useState } from 'react'
import axios from "axios";


const Register = () => {
    const [inputs,setInputs]=useState({});

    const inputHandler = (e)=>{
        console.log("onchange")
        setInputs({
            ...inputs,[e.target.Name]:e.target.value
        })
        console.log(inputs)

    }
    const submitHandler= ()=>{
        console.log("btn clicked", inputs);
        axios.post("http://localhost:5000/api/signup",inputs)
        .then((response)=>{
            console.log(response);
            
        })
        .catch(err=>console.log(err))

    }

    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="row g-3 mt-5">
                            <h3>Vlog-App Register</h3>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='Name' onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">Email id</label>
                                <input type="text" className="form-control" name='Emailid' onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name='Address' onChange={inputHandler} id="" cols="30" rows="5" className='form-control' ></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">Phone number</label>
                                <input type="text" className="form-control" name='Phonenumber' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name='Username' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="text" className="form-control" name='Password' onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <button className="btn btn-danger" onClick={submitHandler}>Register</button>
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <a href="/"> Back to login</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register