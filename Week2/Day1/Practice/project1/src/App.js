import './App.css';
import First from './compenents/First';
function App() {
  return (
    <div className="App">
      <First 
      lastname={"doe"}
      firstname={"jane"}
      age={45}
      hair={"Black"}
      />
      <First 
      lastname={"smith"}
      firstname={"jone"}
      age={88}
      hair={"brown"}
      />
       <First 
      lastname={"Fillmore"}
      firstname={"Millard"}
      age={50}
      hair={"brown"}
      />
       <First 
      lastname={"smith"}
      firstname={"Maria"}
      age={62}
      hair={"brown"}
      />
    </div>
  );
}

export default App;
