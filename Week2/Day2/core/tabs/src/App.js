import react from 'react';
import './App.css';
import Tabs from './components/Tabs';
function App() {
  const Tab=[ "Tab 1 content is showing here" ,
              "Tab 2 content is showing here" ,
              "Tab 3 content is showing here" ]
  return (
    <div className="App">
       < Tabs mytab={Tab}/>    
    </div>
  );
}
export default App;
