import './App.css';
import {Route,Routes} from 'react-router-dom'
import Newproduct from './components/Newproduct';
import Oneproduct from './components/Oneproduct';
import { Edit } from './components/Edit';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Newproduct/>}/>
        <Route path='oneproduct/:id' element={<Oneproduct/>}/>
        <Route path='Edit/:id' element={< Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
