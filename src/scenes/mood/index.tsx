import React, { useState } from 'react';

function MoodTracker() {
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

        // Additional processing such as sending data to server can be added here
    };

    return (
        <div>
            <h1>Mood Tracker</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="dateInput">Date:</label>
                    <input
                        type="date"
                        id="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div>
                    <label>Mood:</label>
                    <div className="mood-buttons">
                        <button
                            onClick={() => handleMoodSelect('😄')}
                            className={mood === '😄' ? 'selected' : ''}
                        >
                            😄 Very Good
                        </button>
                        <button
                            onClick={() => handleMoodSelect('😊')}
                            className={mood === '😊' ? 'selected' : ''}
                        >
                            😊 Good
                        </button>
                        <button
                            onClick={() => handleMoodSelect('😐')}
                            className={mood === '😐' ? 'selected' : ''}
                        >
                            😐 Neutral
                        </button>
                        <button
                            onClick={() => handleMoodSelect('😕')}
                            className={mood === '😕' ? 'selected' : ''}
                        >
                            😕 Bad
                        </button>
                        <button
                            onClick={() => handleMoodSelect('😔')}
                            className={mood === '😔' ? 'selected' : ''}
                        >
                            😔 Very Bad
                        </button>
                    </div>
                </div>
                <p>Selected Mood: {mood}</p>

                <div>
                    <label htmlFor="reasonInput">Reason for the mood:</label><br />
                    <textarea
                        id="reasonInput"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        rows="2" 
                        cols="30"
                    />
                </div>

                <div>
                    <label htmlFor="phraseInput">Today's note:</label><br />
                    <textarea
                        id="phraseInput"
                        value={phrase}
                        onChange={(e) => setPhrase(e.target.value)}
                        rows="2"
                        cols="30"
                    />
                </div>
                <button type="submit">Record</button>
            </form>

        </div>
    );
}

export default MoodTracker;



