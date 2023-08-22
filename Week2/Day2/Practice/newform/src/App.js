import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import Container from './components/Container'
import container from './components/Container';
function App() {
  const rowStyle = {
    display: 'flex',
  };
  return (
    <div className="app"> 
       <Container>
       <div>
       < Header/>
       </div>
       < Navigation />
         <Main>
              < SubContents />
              < SubContents />
              < SubContents />
              < Advertisement />
          </Main>
        </Container>
 </div> );
}
export default App;