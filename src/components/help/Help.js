import React from "react";
import pro from "../img/prodicer1.jpg"
import donation from "../img/Donation.jpg"
import "./Help.css"

export default class Help extends React.Component {
    render() {
        return (
            <div className="container-fluid help mt-5 pb-5">
                <div className="heading">
                    <h2 className="text-center text-light pt-5">HOW CAN YOU HELP?</h2>
                </div>
                <div className="container">
                    <hr className="mt-5 text-dark" />
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 pb-3">
                            <div className="card coll">
                                <img src={pro} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title text-center text-light">Protecting Food Producers</h4>
                                    <div className="text-center">
                                        <a href="#a" className="btn text-light but">CAMPAIGN WITH US</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 pb-3">
                            <div className="card coll">
                                <img src={donation} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title text-center text-light">Your gift could provide emergency food</h4>
                                    <div className="text-center">
                                        <a href="#a" className="btn text-light but">CAMPAIGN WITH US</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 pb-3">
                            <div className="card coll">
                                <img src={donation} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h4 className="card-title text-center text-light">Register Your Resturant To Feed The Poor</h4>
                                    <div className="text-center">
                                        <a href="#ca" className="btn text-light but">CAMPAIGN WITH US</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
