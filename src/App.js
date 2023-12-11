import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navBar';
// import { Routes, Route, Link } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import ToDo from './components/ToDo';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>

      <Routes>
        <Route path="/ToDo" element={<ToDo />}/>
        
        </Routes>
    </div>
  );
}

export default App;
