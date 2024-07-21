import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div className="App">
      <h1>Click the Buttons!</h1>
      <Button id={1} label="Button 1" />
      <Button id={2} label="Button 2" />
      <Button id={3} label="Button 3" />
    </div>
  );
};

export default App;