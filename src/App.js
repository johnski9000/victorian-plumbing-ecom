import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import NewData from './pages/NewData';


function App() {
  return (
<Routes>
<Route path='/' element={<Home/>}>
</Route>
<Route path='/new' element={<NewData/>}/>

</Routes>  
)
}

export default App