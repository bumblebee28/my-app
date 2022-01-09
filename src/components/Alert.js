import React from 'react'
import { render } from 'react-dom';

export default function Alert(props) {
    const capitalize = (message) => {
        let lower = message.toLowerCase();
        return (lower.charAt(0).toUpperCase() + lower.slice(1));
    }
    
return (

    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissable fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
    </div>
)
}
