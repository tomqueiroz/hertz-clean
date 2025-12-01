import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LinhaAntirruido from './pages/LinhaAntirruido';
import LinhaAltoPadrao from './pages/LinhaAltoPadrao';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import RegiaoAtendida from './pages/RegiaoAtendida';
import GTMPageView from './components/GTMPageView';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GTMPageView />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linha-antirruido" element={<LinhaAntirruido />} />
          <Route path="/linha-alto-padrao" element={<LinhaAltoPadrao />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/regiao-atendida" element={<RegiaoAtendida />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;