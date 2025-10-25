import { useState } from "react";
import { BsList, BsXLg, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import ModalIfood from "./ModalIfood";

function Header() {
  const [open, setOpen] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      {/* Header fixo */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-[#600b75] to-[#8710a5] text-white flex justify-between items-center px-6 py-2 z-50 shadow-lg">
        {/* Logo + Nome */}
        <div className="flex items-center">
          <img
            src="src/assets/images/logo-acai-aloha.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
          <p className="ml-4 text-3xl font-semibold max-[880px]:hidden font-dancing-script">
            Aloha <span className="text-[#FBB03B]">Açaí</span>
          </p>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 font-bold">
          <a href="#inicio" className="hover:text-[#2ECC71]">
            Início
          </a>
          <a href="#sobre" className="hover:text-[#2ECC71]">
            Sobre
          </a>
          <a href="#cardapio" className="hover:text-[#2ECC71]">
            Cardápio
          </a>
          <a href="#depoimentos" className="hover:text-[#2ECC71]">
            Depoimentos
          </a>
          <a
            href="#localizacao"
            className="text-[#FBB03B] hover:text-[#2ECC71]"
          >
            Localização
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/alohaacaipernambues/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="https://wa.me/5571993723226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1EBC74]"
            >
              <BsWhatsapp size={20} />
            </a>

            <button
              onClick={() => setModalAberto(true)}
              className="hover:text-[#ff5757] transition cursor-pointer"
              aria-label="Abrir opções do iFood"
            >
              <MdFastfood size={22} />
            </button>

            <ModalIfood
              isOpen={modalAberto}
              onClose={() => setModalAberto(false)}
            />
          </div>
        </nav>

        {/* Botão mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <BsXLg size={32} /> : <BsList size={32} />}
        </button>

        {/* Menu mobile */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#600b75] flex flex-col items-center gap-6 py-6 md:hidden z-40 border-t border-[#8710a5] shadow-md">
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
                className="w-full text-center py-2 border-b border-[#470757] hover:text-[#2ECC71]"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/alohaacaipernambues/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <BsInstagram size={22} />
              </a>
              <a
                href="https://wa.me/5571993723226"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1EBC74]"
              >
                <BsWhatsapp size={22} />
              </a>
              <button
                onClick={() => setModalAberto(true)}
                className="hover:text-[#ff5757] transition cursor-pointer"
                aria-label="Abrir opções do iFood"
              >
                <MdFastfood size={22} />
              </button>

              <ModalIfood
                isOpen={modalAberto}
                onClose={() => setModalAberto(false)}
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
