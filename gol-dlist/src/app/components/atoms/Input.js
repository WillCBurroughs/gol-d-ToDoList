// components/Input.js
import React from 'react';


export default function Input(props) {

    let change = e => {
        console.log(e.target.value)
    }

    let submit = e => {
        valueArray 
    }

  return (
    <div>
        <input onChange = {change} className={props.passclasses} placeholder={props.textToPass} />
    </div>
  );

}