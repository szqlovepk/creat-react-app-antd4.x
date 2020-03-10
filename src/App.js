import React from 'react';
import { Button } from 'antd';
import './App.css';

const handleClick = () => {
    debugger;
  alert('hello world');
};

function App() {
  return (
    <div className="App">
        <Button onClick={handleClick} type="primary">Button</Button>
    </div>
  );
}

export default App;
