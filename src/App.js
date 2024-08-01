// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [alignContent, setAlignContent] = useState('stretch');
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  const resetLayout = () => {
    setFlexDirection('row');
    setJustifyContent('flex-start');
    setAlignItems('stretch');
    setAlignContent('stretch');
    setItems([1, 2, 3]);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h1>Flex Layout Builder</h1>
        <div className="controls">
          <div>
            <label>Flex Direction:</label>
            <select value={flexDirection} onChange={(e) => setFlexDirection(e.target.value)}>
              <option value="row">Row</option>
              <option value="row-reverse">Row Reverse</option>
              <option value="column">Column</option>
              <option value="column-reverse">Column Reverse</option>
            </select>
          </div>
          <div>
            <label>Justify Content:</label>
            <select value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)}>
              <option value="flex-start">Flex Start</option>
              <option value="flex-end">Flex End</option>
              <option value="center">Center</option>
              <option value="space-between">Space Between</option>
              <option value="space-around">Space Around</option>
              <option value="space-evenly">Space Evenly</option>
            </select>
          </div>
          <div>
            <label>Align Items:</label>
            <select value={alignItems} onChange={(e) => setAlignItems(e.target.value)}>
              <option value="stretch">Stretch</option>
              <option value="flex-start">Flex Start</option>
              <option value="flex-end">Flex End</option>
              <option value="center">Center</option>
              <option value="baseline">Baseline</option>
            </select>
          </div>
          <div>
            <label>Align Content:</label>
            <select value={alignContent} onChange={(e) => setAlignContent(e.target.value)}>
              <option value="stretch">Stretch</option>
              <option value="flex-start">Flex Start</option>
              <option value="flex-end">Flex End</option>
              <option value="center">Center</option>
              <option value="space-between">Space Between</option>
              <option value="space-around">Space Around</option>
            </select>
          </div>
          <div className="item-controls">
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <button onClick={resetLayout}>Reset Layout</button>
          </div>
        </div>
      </div>
      <div
        className="flex-container"
        style={{
          display: 'flex',
          flexDirection,
          justifyContent,
          alignItems,
          alignContent,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-item">
            Item {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
