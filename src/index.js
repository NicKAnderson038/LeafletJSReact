import React from 'react';
import ReactDOM from 'react-dom';
import { GeoJSON } from './examples';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h2>Leaflet.js w/ React</h2>
      <br />
      <GeoJSON />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
