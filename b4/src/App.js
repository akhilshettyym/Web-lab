import React, { Component } from 'react';
import ItemList from './ItemList';
import './App.css';

class App extends Component {
  render() {
    const items = ['Cat', 'Dog', 'Chicken', 'Cow', 'Sheep', 'Horse'];
    return (
      <div className="app-container">
        <h1>Display animal names in List</h1>
        <ItemList items={items} />
      </div>
    );
  }
}
export default App;