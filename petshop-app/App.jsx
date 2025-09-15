import './App.css'
import Home from './pages/Home'
import Comprar from './pages/Comprar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path= '/home' element={<Home/>}/>
        <Route path= '/comprar' element={<Comprar/>}/>
      </Routes>
    </>
  );
}

export default App
