import './App.css';
import Colorbox from './components/Colorbox';
function App() {
  const mycolors=[]
  return (
    <div className="App">
     < Colorbox colors={mycolors}/>
    </div>
  );
}

export default App;
