import { useState } from "react";
import { BsList, BsXLg, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import ModalIfood from "./ModalIfood";
import Logo from "../assets/images/logo-acai-aloha.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      {/* Header fixo */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-[#600b75] to-[#8710a5] text-white flex justify-between items-center px-6 py-2 z-[100] shadow-lg">
        {/* Logo + Nome */}
        <div className="flex items-center z-[101]">
          <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
          <p className="ml-4 text-3xl font-semibold max-[880px]:hidden font-dancing-script">
            Aloha <span className="text-[#FBB03B]">Açaí</span>
          </p>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 font-bold items-center">
          <a href="#inicio" className="hover:text-[#2ECC71] transition-colors">
            Início
          </a>
          <a href="#sobre" className="hover:text-[#2ECC71] transition-colors">
            Sobre
          </a>
          <a
            href="#cardapio"
            className="hover:text-[#2ECC71] transition-colors"
          >
            Cardápio
          </a>
          <a
            href="#depoimentos"
            className="hover:text-[#2ECC71] transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#localizacao"
            className="text-[#FBB03B] hover:text-[#2ECC71] transition-colors"
          >
            Localização
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/alohaacaipernambues/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
              aria-label="Instagram Aloha Açaí"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="https://wa.me/5571993723226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1EBC74] transition-colors"
              aria-label="WhatsApp Aloha Açaí"
            >
              <BsWhatsapp size={20} />
            </a>

            <button
              onClick={() => setModalAberto(true)}
              className="hover:text-[#ff5757] transition-colors cursor-pointer"
              aria-label="Abrir opções do iFood"
            >
              <MdFastfood size={22} />
            </button>
          </div>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden z-[101] relative"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <BsXLg size={32} /> : <BsList size={32} />}
        </button>

        {/* Menu mobile */}
        <div
          className={`
            fixed top-[80px] left-0 w-full 
            bg-gradient-to-b from-[#600b75] to-[#6b0d7e]
            flex flex-col items-center gap-6 py-6 
            md:hidden z-[99] 
            border-t border-[#8710a5] shadow-lg
            transition-all duration-300 ease-in-out
            ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0 pointer-events-none"
            }
          `}
        >
          {[
            { name: "Início", link: "#inicio" },
            { name: "Sobre", link: "#sobre" },
            { name: "Cardápio", link: "#cardapio" },
            { name: "Depoimentos", link: "#depoimentos" },
            { name: "Localização", link: "#localizacao" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="w-full text-center py-3 text-lg font-semibold border-b border-[#470757] hover:text-[#2ECC71] hover:bg-[#470757] transition-all"
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-6 mt-2">
            <a
              href="https://www.instagram.com/alohaacaipernambues/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
              aria-label="Instagram Aloha Açaí"
            >
              <BsInstagram size={24} />
            </a>
            <a
              href="https://wa.me/5571993723226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1EBC74] transition-colors"
              aria-label="WhatsApp Aloha Açaí"
            >
              <BsWhatsapp size={24} />
            </a>
            <button
              onClick={() => {
                setModalAberto(true);
                setOpen(false);
              }}
              className="hover:text-[#ff5757] transition-colors cursor-pointer"
              aria-label="Abrir opções do iFood"
            >
              <MdFastfood size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Modal do iFood - Renderizado uma única vez */}
      <ModalIfood isOpen={modalAberto} onClose={() => setModalAberto(false)} />

      {/* Overlay para fechar menu mobile ao clicar fora */}
      {open && (
        <div
          className="fixed inset-0 bg-[#00000090] bg-opacity-50 z-[98] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
