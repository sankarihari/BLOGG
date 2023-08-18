import React from 'react'
import Header from './Header'

const Addpost = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="row g-3 mt-4">
                            <div className="col col-12 col-sm-6 col-md-6">
                                <textarea name="" id="" cols="30" rows="6" className="form-control" placeholder='Type something'></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12">
                                <button className="btn btn-success">Add Post</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addpost