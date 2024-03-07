import logo from './logo.svg';
import './App.css';
import Code1 from './features/code1/Code1';

import { BrowserRouter as Router, Route, Switch, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Code1</Link>
            </li>
            <li>
              {/* <Link to="/list">List</Link> */}
            </li>
          </ul>
        </nav>

        <Routes>
        
          <Route path="/dashboard" element={<Code1 />} />
s
      </Routes>
      </div>
    </Router>
  );
}

export default App;
