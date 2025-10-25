import { BsCart4 } from "react-icons/bs";
import ModalIfood from "./ModalIfood";
import { useState } from "react";

function Hero() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div
      id="inicio"
      className="bg-[url('assets/images/fundo-plantas.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="relative w-full h-full px-6 md:px-16 py-20 bg-gradient-to-t from-[#fbb13b49] to-[#600b758f] text-center flex flex-col justify-center items-center gap-8">
        <div className="max-w-7xl h-screen flex flex-col justify-center items-center gap-10 ">
          <h1 className="font-dancing-script text-8xl text-white max-md:text-[4rem]">
            Aloha{" "}
            <span className="text-[#FBB03B] max-md:text-[4rem]">Açaí</span>
          </h1>

          <p className="text-[1.4rem] text-white max-w-[660px] max-md:text-[1.2rem] w-full ">
            Experimente a excelência do Aloha Açaí. Sabor, frescor e qualidade
            em cada colherada. Açaí, Sorvete, Milkshake e MUITO MAIS!
          </p>

          <div className="flex gap-3 max-md:flex-col">
            <a
              href="#cardapio"
              className="cursor-pointer px-10 py-3 rounded-4xl bg-[#1EBC74] border-2 border-[#1EBC74] text-white text-[1rem] font-bold hover:brightness-105 max-md:px-8 max-md:py-3 hover:bg-transparent transition-colors"
            >
              Ver cardápio
            </a>

            {/* QUERO QUE ESSE BOTÃO / LINK ABAIXO "pedir delivery"  ABRA O MODAL <<<< */}
            <button
              onClick={() => setModalAberto(true)}
              className="cursor-pointer flex items-center gap-2 px-10 py-3 rounded-4xl bg-[#d43b3b] text-white transition font-bold hover:brightness-110 max-md:px-8 max-md:py-3"
              aria-label="Abrir opções do iFood"
            >
              <BsCart4 size={22} /> Pedir Delivery...
            </button>

            <ModalIfood
              isOpen={modalAberto}
              onClose={() => setModalAberto(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
