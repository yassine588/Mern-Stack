import './App.css';
import Todo from './components/Todo';
function App() {
  const myTab=[]
  return (
    <div className="App">
     <Todo Tab={myTab} />
    </div>
  );
}

export default App;
