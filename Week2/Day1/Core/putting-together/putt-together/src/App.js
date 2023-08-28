import './App.css';
import Birthday from './components/Birthday';
function App() {
  return (
    <div className="App">
     < Birthday Name={"Doe"} Surname={"Jane"} age={45} color={"Black"} />
     < Birthday Name={"Smith"} Surname={"John"} age={88} color={"Brown"} />
    </div>
  );
}
export default App;