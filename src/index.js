import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomNavBar from "./components/CustomNavBar";

import App from './App';
import ConnectFour from './components/ConnectFour';
import About from './components/About';
import FourOhFour from './components/FourOhFour';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CustomNavBar/>
        <Row>
            <Col md={2}></Col>
            <Col>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<App />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/connect_four" element={<ConnectFour multiplication />} />
                        <Route path="*" element={<FourOhFour/>} />
                    </Routes>
                </BrowserRouter>
            </Col>
            <Col md={2}></Col>
        </Row>
    </React.StrictMode>
);

