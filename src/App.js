import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/reports' Component={Reports}/>
          <Route path='/products' Component={Products}/>
        </Routes>
      </Router>  
    </>
  );
}

export default App;
