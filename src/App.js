import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <h1><header>
        Posts
      </header>
      </h1>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
