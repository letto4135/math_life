import React from 'react';
import './Instructions.css';

export default class Instructions extends React.Component {
    render () {
        return (
            <div>
                <h1 className="instructions-h1">How to Play:</h1>
                <h2 className="instructions-h2">Roll two 12 sided dice. Multiply or divide the numbers as needed.</h2>
                <h2 className="instructions-h2">Select a circle with your answer.</h2>
                <h2 className="instructions-h2">First player to get 4 in a row wins.</h2>
            </div>
        );
    }
};
