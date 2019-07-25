import React, { useState } from 'react';

import './App.css';

const UseState = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div className="panel">
      <input
        onChange={ e=> {
          setInputText(e.target.value)
          setHistoryList([...historyList, e.target.value])
        } }
        placeholder='enter text' />
        { inputText }
        <ul className="textList">
          {
            historyList.map((el, i) => (<li key={i}> { el } </li>))
          }
        </ul>
    </div>
  );
}

export default UseState;
