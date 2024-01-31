import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/HomePages/navBar';
// import { Routes, Route, Link } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import ToDo from './components/ToDoPage/ToDo';
import Home from './components/HomePages/Home';
// import FormDialog from './components/ToDoPage/DialogAdd';
import Post from './components/PostPage/Post';

import User from './components/UsersPages/User';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      {/* <Home /> */}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="ToDo" element={<ToDo />} />
        <Route path="Post" element={<Post />} />
        <Route path="Users" element={<User />} />


      </Routes>
    </div>
  );
}

export default App;
