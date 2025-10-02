
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import './app.css';

const App = () => {
  return (
    <>

     <Routes>
   
<Route path="/" element={<Home />} />

</Routes>
    
    </>
   
  )
}

export default App
