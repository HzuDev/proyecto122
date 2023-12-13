import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
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



import './App.css'


function App() {
  return (
    <>
      <Router >
        <NavbarTest />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/proyecto122/acercade" element={<AcercaDe />} /> 
          <Route path="/proyecto122/clientes" element={<Clientes />} /> 
          <Route path="/proyecto122/empresa" element={<Empresa />} /> 
          <Route path="/proyecto122/socios" element={<Socios />} /> 

          <Route path="/proyecto122/computadoras" element={<Computadoras />} /> 
          <Route path="/proyecto122/telefonos" element={<Telefonos />} /> 
          <Route path="/proyecto122/gaming" element={<Gaming />} /> 
          <Route path="/proyecto122/complementos" element={<Complementos />} /> 

          <Route path="/proyecto122/guias-compra" element={<GuiasCompra />} /> 
          <Route path="/proyecto122/galeria" element={<Galeria />} /> 
          <Route path="/proyecto122/faq" element={<Faq />} /> 
          
          <Route path="/proyecto122/creditos" element={<Creditos />} />
          
         
    
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
