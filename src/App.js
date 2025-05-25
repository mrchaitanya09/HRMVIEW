import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard';
import CreateEmploy from './CreateEmploy/CreateEmploy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/createEmploy' element={<CreateEmploy />}></Route>
        </Routes>
      </BrowserRouter>


      
    </div>

    
  );
}

export default App;
