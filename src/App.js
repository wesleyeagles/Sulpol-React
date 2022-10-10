import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './main.css';
import { RoutesDOM } from '../src/components/RoutesDOM'

function App() {
  return (
    <BrowserRouter>
    <RoutesDOM />
    </BrowserRouter>

  )
}

export default App;
