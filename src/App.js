import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [alignContent, setAlignContent] = useState('stretch');
  const [flexWrap, setFlexWrap] = useState('nowrap');
  const [items, setItems] = useState([
    { id: 1, order: 0, alignSelf: 'auto', flexBasis: '100px' },
    { id: 2, order: 0, alignSelf: 'auto', flexBasis: '100px' },
    { id: 3, order: 0, alignSelf: 'auto', flexBasis: '100px' },
  ]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, order: 0, alignSelf: 'auto', flexBasis: '100px' }]);
  };

  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  const resetLayout = () => {
    setFlexDirection('row');
    setJustifyContent('flex-start');
    setAlignItems('stretch');
    setAlignContent('stretch');
    setFlexWrap('nowrap');
    setItems([
      { id: 1, order: 0, alignSelf: 'auto', flexBasis: '100px' },
      { id: 2, order: 0, alignSelf: 'auto', flexBasis: '100px' },
      { id: 3, order: 0, alignSelf: 'auto', flexBasis: '100px' },
    ]);
  };

  const updateItemProperty = (index, property, value) => {
    const updatedItems = [...items];
    updatedItems[index][property] = value;
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h1>Flex Layout Builder</h1>
        <div className="controls">
          <h2>Container Properties</h2>
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
            <label>Flex Direction:</label>
            <select value={flexDirection} onChange={(e) => setFlexDirection(e.target.value)}>
              <option value="row">Row</option>
              <option value="row-reverse">Row Reverse</option>
              <option value="column">Column</option>
              <option value="column-reverse">Column Reverse</option>
            </select>
          </div>
          <div>
            <label>Flex Wrap:</label>
            <select value={flexWrap} onChange={(e) => setFlexWrap(e.target.value)}>
              <option value="nowrap">No Wrap</option>
              <option value="wrap">Wrap</option>
              <option value="wrap-reverse">Wrap Reverse</option>
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
          <h2>Item Properties</h2>
          {items.map((item, index) => (
            <div key={item.id} className="item-properties">
              <h3>Item {item.id}</h3>
              <div>
                <label>Order:</label>
                <input
                  type="number"
                  value={item.order}
                  onChange={(e) => updateItemProperty(index, 'order', parseInt(e.target.value))}
                />
              </div>
              <div>
                <label>Align Self:</label>
                <select value={item.alignSelf} onChange={(e) => updateItemProperty(index, 'alignSelf', e.target.value)}>
                  <option value="auto">Auto</option>
                  <option value="flex-start">Flex Start</option>
                  <option value="flex-end">Flex End</option>
                  <option value="center">Center</option>
                  <option value="baseline">Baseline</option>
                  <option value="stretch">Stretch</option>
                </select>
              </div>
              <div>
                <label>Flex Basis:</label>
                <input
                  type="text"
                  value={item.flexBasis}
                  onChange={(e) => updateItemProperty(index, 'flexBasis', e.target.value)}
                  placeholder="e.g., 100px, 50%"
                />
              </div>
            </div>
          ))}
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
          flexWrap,
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-item"
            style={{
              order: item.order,
              alignSelf: item.alignSelf,
              flexBasis: item.flexBasis,
            }}
          >
            Item {item.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
