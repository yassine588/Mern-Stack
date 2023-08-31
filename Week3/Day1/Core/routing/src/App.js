import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Params from './components/Params';
import ParamsComponent from './components/ParamsComponent';

function App() {
  return (
    <div className="App">
    
     < Routes >
     <Route path='/home' element={<Home/>}/>
     < Route path='/:hello' element={<ParamsComponent/>}/>
     < Route path='/:word/:color/:background' element={< Params />}/>
     </Routes>
    </div>
  );
}

export default App;
