import React from 'react'
import Pick from '../../assets/choose.png';
import Habit from '../../assets/habit.png';
import Submit from '../../assets/submit.png';

const Work = () => {
    const workInfoData = [
        {
            image: Pick,
            title: "Select Date",
            text: "Pick the date on which you want to start forming your habit",
        },
        {
            image: Habit,
            title: "Create a Habit",
            text: "Define the habit you aim to cultivate",
        },
        {
            image: Submit,
            title: "Submit",
            text: "Once you've created your habit, confirm and submit it",
        },
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Getting Started</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                    Follow these three simple steps, it is easy!
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
