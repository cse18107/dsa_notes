import './App.css';
import Header from './components/Header/Header';
import {Route,Routes} from 'react-router-dom';
import Topic from './components/Topic/Topic'
import Companies from './components/Companies/Companies';
import Tutorial from './components/Tutorial/Tutorial';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <div className="header-component"><Header/></div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/topic' element={<Topic/>}/>
        <Route path='/tutorial' element={<Tutorial/>}/>
        <Route path='/companies' element={<Companies/>}/>
      </Routes>
    </div>
  );
}

export default App;
