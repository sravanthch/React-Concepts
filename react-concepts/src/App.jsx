import './App.css';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DashboardSearch from './components/DashboardSearch';

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/search' element={<DashboardSearch/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
