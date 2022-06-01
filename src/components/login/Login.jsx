import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import "./Login.css";

export default class Login extends React.Component {
    render() {
        return (<div>
            <Navbar />
            <div class="container wrapper">
                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Enter Password" />
                    </div>
                    <div class="mb-5">
                        <button type="submit" class="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
        )
    }
}