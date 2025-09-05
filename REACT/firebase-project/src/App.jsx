
import LoginComponent from './views/login/LoginComponent'
import { Products } from './views/products/products'  
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router';

function App() {

  return (
    <>
    <BrowserRouter>
      <h1>Hola</h1>
      <LoginComponent />
      <Products />
      </BrowserRouter>
    
      
    </>
  )
}

export default App
