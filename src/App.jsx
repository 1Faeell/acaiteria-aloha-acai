import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Promocao from "./components/Promocao.jsx";
import HorarioStatus from "./components/HorarioStatus.jsx";
import Sobre from "./components/Sobre.jsx";
import Satisfacao from "./components/Satisfacao.jsx";
import Galeria from "./components/Galeria.jsx";
import Cardapio from "./components/Cardapio.jsx";
import Depoimentos from "./components/Depoimentos.jsx";
import Localizacao from "./components/Localizacao.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// import { useState } from 'react'

/* 
  BRANCO: #FFFFFF
  ROXO: #600b75
  LARANJA: #FBB03B
  VERDE: #1EBC74
  VERMELHO: #d43b3b
*/

function App() {
  return (
    <div className="leading-[1.6]">
      <Header />
      <Hero />
      <Promocao />
      <HorarioStatus />
      <Sobre />
      <Satisfacao />
      <Galeria />
      <Cardapio />
      <Depoimentos />
      <Localizacao />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
