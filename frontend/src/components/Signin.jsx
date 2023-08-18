import React from 'react'
import Header from './Header'

const Signin = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="row g-3 mt-5">
                            <h3>Vlog-App Sign in</h3>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <button className="btn btn-success">Submit</button>
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <a href="/register"> New usres clicke here</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin