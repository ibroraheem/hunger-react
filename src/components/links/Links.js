import React from 'react';
import "./Links.css"

export default class Links extends React.Component {
    render() {
        return (
            <div class="container-fluid pb-5 links">
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-12 col-lg-4 col-md-6">
                            <h5>About</h5>
                            <p>Bracket is a global movement of millions of people who share the belief that, in a world rich
                                in
                                resources, poverty isn't inevitable.</p>
                            <i class="fa fa-facebook" aria-hidden="false"></i>
                        </div>
                        <div class="col-12 col-lg-4 col-md-6 mt-4">
                            <h5>Quick Links</h5>
                            <ul class="quick-links">
                                <li><a href="#a">Available Restaurant</a></li>
                                <li><a href="#a">Restaurant available with left overs</a></li>
                                <li><a href="#a">Make a Donation</a></li>
                                <li><a href="#a">FAQs</a></li>
                                <li><a href="#a">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-4 col-md-6 mt-4">
                            <h5>Contact Details</h5>
                            <ul class="quick-links">
                                <li><a href="mailto:#">teambracket@gmail.com</a></li>
                                <li><a href="tel:09040931311">09040931311</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}