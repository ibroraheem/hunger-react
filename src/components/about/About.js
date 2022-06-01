import React from 'react';
import agric from '../img/food-agriculture-topic.jpg'
import feeding from '../img/feeding.jpg'
export default class About extends React.Component {
    render() {
        return (
            <div class="container" id="about">
                <div class="heading">
                    <h1 class="text-center mt-5">WHAT WE DO</h1>
                </div>
                <div class="col-md-12">
                    <div className="row mt-4">
                        <div className="col mt-5">
                            <h2>WE ARE HELPING TO GROW FOOD FOR TOMORROW</h2>
                            <p>Supporting local small businesses to grow food and keep livestock means people can earn an
                                income,
                                live sustainably, and keep feeding their families and communities.</p>
                        </div>
                        <div className="col-md-12 col-12 col-lg-6 mt-5">
                            <img src={agric} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-12 col-lg-6 mt-3">
                        <img src={feeding} alt="" className="img-fluid" />
                    </div>
                    <div className="col mt-5">
                        <h2>WE ARE CHALLENGING THE INJUSTICE OF HUNGER</h2>
                        <p>No-one needs to go to bed hungry. But so many do. Bracket supporters challenge the world's
                            governments to protect and provide for the people going hungry every day.</p>
                    </div>
                </div>
            </div>
        )
    }
}