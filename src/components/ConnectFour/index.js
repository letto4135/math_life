import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './ConnectFour.css';
import Circle from './Circle';
import Instructions from './Instructions';

export default class ConnectFour extends React.Component {
    constructor(props) {
        super(props);
        let numbers = new Set();
        for ( let i = 1; i < 13; i++) {
            for (let j = 1; j < 13; j++) {
                if (props.multiplication) {
                    numbers.add(i * j);
                } else {
                    numbers.add(i + j);
                }
            }
        }
        this.state = {
            circles: Array.from({length: 64}, () => {
                const arr = Array.from(numbers.values());
                return arr[Math.floor(Math.random() * arr.length)]
            }),
            player: "green",
        };
    }

    logMe(number) {
        console.log('Clicked on ' + number);
    }

    render() {
        return (
            <div>
                <Instructions/>
                <Row>
                    {this.state.circles.map((circle, index) => {
                        return <Circle key={index + " " + circle} number={circle} click={this.logMe} />
                    })}
                </Row>
            </div>
        )
    }
}

