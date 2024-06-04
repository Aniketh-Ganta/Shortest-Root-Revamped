import './App.css';
import Home from './Components/Home';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact path='/' element={<SignIn />}/>
              <Route exact path='/login' element={<Home />}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
