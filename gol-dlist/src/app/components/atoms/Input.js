import React, { useState } from 'react';

export default function Input(props) {
  const [inputValue, setInputValue] = useState('');
  const { headers, setHeaders } = props;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setHeaders([...headers, { text: inputValue, isStriked: false }]);
      setInputValue('');
    }
  };

  const deleteHeader = (index) => {
    const updatedHeaders = [...headers];
    updatedHeaders.splice(index, 1);
    setHeaders(updatedHeaders);
  };

  const toggleStrikethrough = (index) => {
    const updatedHeaders = [...headers];
    updatedHeaders[index].isStriked = !updatedHeaders[index].isStriked;
    setHeaders(updatedHeaders);
  };

  const handleDivClick = (index) => {
    toggleStrikethrough(index);
  };

  const handleDeleteClick = (index, e) => {
    e.stopPropagation();
    deleteHeader(index);
  };

  const handleDeleteAllStriked = () => {
    const updatedHeaders = headers.filter((header) => !header.isStriked);
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
            <div
              className={`itemDiv ${header.isStriked ? 'strikethrough' : ''}`}
              onClick={() => handleDivClick(index)}
            >
              <h1>{header.text}</h1>
              <button onClick={(e) => handleDeleteClick(index, e)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Headers Created: {headers.length}</p>
        <button onClick={handleDeleteAllStriked}>Delete All Striked</button>
      </div>
    </div>
  );
}