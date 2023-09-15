import './App.css';
import {Route,Routes} from 'react-router-dom'
import Newproduct from './components/Newproduct';
import Oneproduct from './components/Oneproduct';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Newproduct/>}/>
        <Route path='oneproduct/:id' element={<Oneproduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
