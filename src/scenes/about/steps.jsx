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
                <h1>How It Works</h1>
                <p className="text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">
                    Follow these three simple steps, it is easy!
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2 className='text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500'>{data.title}</h2>
                        <p className='font-light leading-tight tracking-tight text'>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
