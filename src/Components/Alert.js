import React from 'react';
import "../App.css";

const Alert=(props) => {
    return <div className={`alert alert-${props.type}`}>{props.text}</div>;
}
export default Alert;