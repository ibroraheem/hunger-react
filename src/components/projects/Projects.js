import React from "react";
import "./Projects.css"
import Adi from "../img/OGB_111375_Addises_Story_-_Ethiopi.67369eeb.fill-480x480.jpg"
import beat from "../img/beating-hunger.jpg";
import fight from "../img/fighting-coronavirus.jpg"

export default class Projects extends React.Component {
    render() {
        return (
            <div class="container mt-5 pb-5">
                <div class="heading">
                    <h2 class="text-center mt-5 pb-5">Projects we are sponsoring</h2>
                </div>
                <hr />
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 pb-3">
                        <div class="card bg-secondary">
                            <img src={Adi} class="card-img-top"
                                alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">SECURITY FOR ALL</h5>
                                <p class="card-text">We provide farmers with security and good road so as to make production of
                                    farm product more easier.</p>
                                <a href="#about" class="btn but text-light">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 pb-3">
                        <div class="card bg-secondary">
                            <img src={beat} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">BEATING HUNGER</h5>
                                <p class="card-text">No-one should go to bed hungry. We work to help people put food back on
                                    their table, today and tomorrow.</p>
                                <a href="#about" class="btn but text-light">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 pb-3">
                        <div class="card bg-secondary">
                            <img src={fight} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">FIGHTING DISEASES</h5>
                                <p class="card-text">We’re providing health facilities, clean water and toilets to the most
                                    vulnerable communities Team Bracket Is helping the less privileged to.</p>
                                <a href="#about" class="btn but text-light">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}