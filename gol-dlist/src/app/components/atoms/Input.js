import React, { useState } from 'react';

export default function Input(props) {
  let [inputValue, setInputValue] = useState('');
  let [headers, setHeaders] = useState([]);

  let handleChange = (e) => {
    setInputValue(e.target.value);
  };

  let handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setHeaders([...headers, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        className={props.passclasses}
        placeholder={props.textToPass}
        value={inputValue}
      />
      <ul>
        {headers.map((header, index) => (
          <li key={index}>
            <h1>{header}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}