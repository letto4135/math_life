import React from 'react';
import Col from 'react-bootstrap/Col';

import './Circle.css';

export default class Circle extends React.Component {
    render() {
        return (
            <Col xs={{span: this.props.span || 1, offset: this.props.col_size || 0}} className="outter-circle">
                <div className="circle" onClick={() => this.props.click(this.props.number)}>
                    <div>{this.props.number}</div>
                </div>
            </Col>
        );
    }
}
