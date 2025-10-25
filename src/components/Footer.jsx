import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { useState } from "react";
import ModalIfood from "./ModalIfood";

function Footer() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <footer className=" bg-gray-900 text-white relative">
      {/* Borda gradient superior */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-green-400"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col max-md:text-center md:flex-row justify-between items-center gap-6">
        {/* Logo ou Nome */}
        <div className="text-2xl font-bold">Aloha Açaí</div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-300 text-sm">
          <a href="#inicio" className="hover:text-[#f9f9f9]">
            Início
          </a>
          <a href="#sobre" className="hover:text-[#f9f9f9]">
            Sobre
          </a>
          <a href="#cardapio" className="hover:text-[#f9f9f9]">
            Cardápio
          </a>
          <a href="#depoimentos" className="hover:text-[#f9f9f9]">
            Depoimentos
          </a>
          <a href="#localizacao" className="hover:text-[#f9f9f9]">
            Localização
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <BsInstagram />
          </a>
          <a
            href="https://wa.me/559999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <BsWhatsapp />
          </a>
          <button
            onClick={() => setModalAberto(true)}
            className="hover:text-red-500 transition cursor-pointer"
          >
            <MdFastfood />
          </button>

          <ModalIfood
            isOpen={modalAberto}
            onClose={() => setModalAberto(false)}
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-xs pb-4">
        © {new Date().getFullYear()} Aloha Açaí. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
