// components/Input.js
import React from 'react';

export default function Input(props) {
  return (
    <div>
        <input className={props.passclasses} placeholder={props.textToPass} />
    </div>
  );
}