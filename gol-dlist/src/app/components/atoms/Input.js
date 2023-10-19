import React, { useState, useEffect } from 'react';

export default function Input(props) {
  let [inputValue, setInputValue] = useState('');
  let [headers, setHeaders] = useState(() => {
    // Load headers from localStorage if available, or use an empty array
    const storedHeaders = localStorage.getItem('headers');
    return storedHeaders ? JSON.parse(storedHeaders) : [];
  });

  useEffect(() => {
    // Save headers to localStorage whenever it changes
    localStorage.setItem('headers', JSON.stringify(headers));
  }, [headers]);

  let handleChange = (e) => {
    setInputValue(e.target.value);
  };

  let handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setHeaders([...headers, inputValue]);
      setInputValue('');
    }
  };

  let deleteHeader = (index) => {
    // Create a new array without the header at the given index
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