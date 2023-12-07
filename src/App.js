import {AppBar} from '@material-ui/core';
import {Routes, Route} from 'react-router-dom'
import './App.css';

import Form from './Components/Form/Form';
import Laptops from './Components/Laptops/Laptops';

function App() {
  return (
    <>
      <AppBar className="App-header" position='static' style={{background: '#81B29A', color: '#2C2C54'}}>Laptop Price Predictor</AppBar>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/laptops'element={<Laptops />} />
      </Routes>
    </>
  );
}

export default App;
