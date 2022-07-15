import React from 'react';
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
                <Row className="reduce-margin-sm">
                    {this.state.circles.map((circle, index) => {
                        switch (index) {
                            case 0:
                                return <Circle col_size={2} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 7:
                                return <Circle span={3} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 8:
                                return <Circle col_size={2} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 15:
                                return <Circle span={3} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 16:
                                return <Circle col_size={2} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 23:
                                return <Circle span={3} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 24:
                                return <Circle col_size={2} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 31:
                                return <Circle span={3} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 32:
                                return <Circle col_size={2} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 39:
                                return <Circle span={3} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 40:
                                return <Circle col_size={2} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 47:
                                return <Circle span={3} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 48:
                                return <Circle col_size={2} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 55:
                                return <Circle span={3} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            case 56:
                                return <Circle col_size={2} key={index + " " + circle} number={circle} click={this.logMe.bind(this, circle)}/>;
                            default:
                                return <Circle key={index + " " + circle} number={circle} click={this.logMe} />
                        }
                    })}
                </Row>
            </div>
        )
    }
}

