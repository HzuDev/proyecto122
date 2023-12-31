import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarTest from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Creditos from './pages/Creditos';

import AcercaDe from './pages/Empresa/AcercaDe';
import Clientes from './pages/Empresa/Clientes';
import Empresa from './pages/Empresa/Empresa';
import Socios from './pages/Empresa/Socios';

import Computadoras from './pages/Productos/Computadoras';
import Telefonos from './pages/Productos/Telefonos';
import Gaming from './pages/Productos/Gaming';
import Complementos from './pages/Productos/Complementos';

import GuiasCompra from './pages/Recursos/GuiasCompra';
import Galeria from './pages/Recursos/Galeria';
import Faq from './pages/Recursos/Faq';

import { CartProvider } from './functions/cartContext';

import './App.css'


function App() {
  return (
    <CartProvider>
      <Router basename="/proyecto122">
        <NavbarTest />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/acercade" element={<AcercaDe />} /> 
          <Route path="/clientes" element={<Clientes />} /> 
          <Route path="/empresa" element={<Empresa />} /> 
          <Route path="/socios" element={<Socios />} /> 

          <Route path="/computadoras" element={<Computadoras />} /> 
          <Route path="/telefonos" element={<Telefonos />} /> 
          <Route path="/gaming" element={<Gaming />} /> 
          <Route path="/complementos" element={<Complementos />} /> 

          <Route path="/guias-compra" element={<GuiasCompra />} /> 
          <Route path="/galeria" element={<Galeria />} /> 
          <Route path="/faq" element={<Faq />} /> 
          
          <Route path="/creditos" element={<Creditos />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
