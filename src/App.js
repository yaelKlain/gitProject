import './App.css';
import ResponsiveAppBar from './components/HomePages/navBar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/HomePages/Home';
import React, { Suspense } from 'react';

function App() {
  const LazyToDo=React.lazy(()=>import ('./components/ToDoPage/ToDo'))
  const LazyUser=React.lazy(()=>import ('./components/UsersPages/User'))
  const LazyPost=React.lazy(()=>import ('./components/PostPage/Post'))

  return (
    <div className="App">
      <ResponsiveAppBar />     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ToDo" element={<Suspense fallback="lodaing..."><LazyToDo /></Suspense>} />
        <Route path="Post" element={<Suspense fallback="lodaing..."><LazyPost /></Suspense>}/>
        <Route path="Users" element={<Suspense fallback="lodaing..."><LazyUser /></Suspense>} />
      </Routes>
    </div>
  );
}
export default App;
