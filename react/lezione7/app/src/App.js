import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import './Route.js';
import './Form.js';

let  App = () => {
  //da fare i componenti about e contact
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/about">Chi siamo</Link></li>
        <li><Link to = "/contact">Contatti</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path='/about' Component={About}></Route>
      <Route path='/contact' Component={Contact}></Route>  
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
