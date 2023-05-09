// Import Statements
import Nav from "./Components/Nav";
import Homepage from './Components/Homepage';
import Destination from './Components/Destination';
import Crew from "./Components/Crew"
import Technology from './Components/Technology';
import './style/common.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App Component
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/' element={ <Homepage /> }></Route>
          <Route exact path='/training' element={ <Destination /> }></Route>
          <Route exact path='/audit-search' element={ <Crew /> }></Route>
          <Route exact path='/github' element={ <Technology /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

