import './App.css';
import {Route,Routes} from 'react-router-dom'
import Newproduct from './components/Newproduct';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Newproduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
