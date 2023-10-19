import React, { useState } from 'react';

export default function Input(props) {
  const [inputValue, setInputValue] = useState('');
  const { headers, setHeaders } = props;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setHeaders([...headers, inputValue]);
      setInputValue('');
    }
  };

  const deleteHeader = (index) => {
    const updatedHeaders = [...headers];
    updatedHeaders.splice(index, 1);
    setHeaders(updatedHeaders);
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
            <h1 onClick={() => deleteHeader(index)}>{header}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}