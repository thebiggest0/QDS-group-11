import React, { useState } from 'react';
import './moodTracker.css';

type Props = {
    onAddMood: Function;
}

function MoodTracker({onAddMood}: Props) {
    // State to manage form inputs
    const [phrase, setPhrase] = useState('');
    const [date, setDate] = useState(getToday());
    const [mood, setMood] = useState('');
    const [reason, setReason] = useState('');

    // Function to get today's date in the format 'YYYY-MM-DD'
    function getToday() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Function to handle mood selection
    const handleMoodSelect = (mood) => {
        setMood(mood);
    };

    // Submit handler for the form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the entered mood, phrase, and date here
        console.log('Date:', date);
        console.log('Mood:', mood);
        console.log('Reason:', reason);
        console.log('Phrase:', phrase);

        onAddMood(date, mood, reason, phrase);
    };

    return (
        <div className="moodTracker flex justify-center items-center flex-col p-20">
            <h1>Mood Tracker</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className="text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">
                    <label htmlFor="dateInput">Date:</label>
                    <input
                        type="date"
                        id="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">
                    <label>Mood:</label>
                    <div className="mood-buttons flex flex-wrap gap-2">
                        <div
                            onClick={() => handleMoodSelect('😄')}
                            className="text-white rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-500 no-underline text-gray-500"
                        >
                            <span className='emoji-font'>😄</span> Very Good
                        </div>
                        <div
                            onClick={() => handleMoodSelect('😊')}
                            className="text-white rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-500 no-underline text-gray-500"
                        >
                            😊 Good
                        </div>
                        <div
                            onClick={() => handleMoodSelect('😐')}
                            className="text-white rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-500 no-underline text-gray-500"
                        >
                            😐 Neutral
                        </div>
                        <div
                            onClick={() => handleMoodSelect('😕')}
                            className="text-white rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-500 no-underline text-gray-500"
                        >
                            😕 Bad
                        </div>
                        <div
                            onClick={() => handleMoodSelect('😔')}
                            className="text-white rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-500 no-underline text-gray-500"
                        >
                            😔 Very Bad
                        </div>
                    </div>
                </div>
                <p className="text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">
                    Selected Mood: {mood}
                </p>

                <div className="text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">
                    <label htmlFor="reasonInput">Reason for the mood:</label><br />
                    <textarea
                        id="reasonInput"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        rows="2"
                        cols="30"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">
                    <label htmlFor="phraseInput">Today's note:</label><br />
                    <textarea
                        id="phraseInput"
                        value={phrase}
                        onChange={(e) => setPhrase(e.target.value)}
                        rows="2"
                        cols="30"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div
                    // onClick={() => {handleSubmit}}
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                    className="text-white  text-center record-button rounded-md bg-secondary-500 px-5 py-1 
                    hover:bg-primary-500 no-underline text-gray-500
                    text-xl lg:text-6xl font-light leading-tight tracking-tight"
                >
                    Record
                </div>
            </form>
        </div>
    );
}

export default MoodTracker;



