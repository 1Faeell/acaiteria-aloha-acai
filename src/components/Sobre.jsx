import Image1 from "../assets/images/foto1-aloha-acai.png";
import Image2 from "../assets/images/foto3-aloha-acai.png";
import ModalIfood from "./ModalIfood"; // importa o componente que criamos
import { useState } from "react";

import {
  BsFillGeoAltFill,
  BsGeoAlt,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";

function Sobre() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <section id="sobre" className="px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto flex flex-row gap-2 max-lg:flex-col-reverse max-lg:gap-4">
        <div className="flex flex-row justify-between items-center gap-2.5 max-sm:flex-col">
          {/* Imagem 1 */}
          <img
            src={Image1}
            alt="Interior da Aloha Açaí"
            className="rounded-3xl w-full max-w-[360px] h-[440px] lg:h-[480px] max-lg:h-[380px] object-cover hover:-translate-y-2 transition-all duration-500"
          />

          {/* Imagem 2 */}
          <img
            src={Image2}
            alt="Produtos Aloha Açaí"
            className="rounded-3xl w-full max-w-[420px] h-[440px] lg:h-[480px] max-lg:h-[380px] object-cover hover:-translate-y-2 transition-all duration-500"
          />

          {/* Imagem 3 */}
        </div>

        {/* Texto Sobre Nós */}
        <div className="bg-gradient-to-b from-transparent via-[#eeeeee] to-transparent px-10 py-10 m-auto rounded-3xl text-[1.1rem] leading-relaxed">
          <h2 className="text-3xl md:text-4xl text-[#600b75] font-extrabold relative inline-block mb-5">
            Sobre Nós
            <span className="block w-16 h-1 bg-[#FBB03B] rounded-full  "></span>
          </h2>

          <p className="mb-4">
            Na <span className="font-semibold text-[#600b75]">Aloha Açaí</span>,
            cada copo é mais que um lanche, é um momento de felicidade. Aqui,
            cada fruta, cada topping e cada detalhe são pensados para você
            sorrir a cada colherada.
          </p>

          <p className="mb-4">
            Queremos criar experiências. Seja na pausa do trabalho, no encontro
            com amigos ou naquela tarde preguiçosa, nosso objetivo é deixar
            momentos memoráveis e deliciosos!
          </p>

          <p>
            <span className="flex items-center gap-2 font-bold">
              Localização:
            </span>{" "}
            <i className="flex items-center gap-2 italic text-[0.9rem]">
              <BsGeoAlt size={20} /> Rua Thomaz Gonzaga, 240 - Pernambués,
              Salvador - BA, 41100-000
            </i>
            <i className="flex items-center gap-2 italic text-[0.9rem]">
              <BsGeoAlt size={20} /> R. Manoel Barros de Azevedo, 133 - Caminho
              de Areia, Salvador - BA, 40440-360
            </i>
          </p>
          {/* Redes Sociais */}
          <div className="flex gap-4 text-xl justify-end items-center mt-6">
            <button
              onClick={() => setModalAberto(true)}
              className="hover:text-red-800 text-red-500 transition cursor-pointer"
              aria-label="Abrir opções do iFood"
            >
              <MdFastfood size={30} />
            </button>

            <ModalIfood
              isOpen={modalAberto}
              onClose={() => setModalAberto(false)}
            />

            <a
              href="https://www.instagram.com/alohaacaipernambues/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-800 text-pink-500 transition cursor-pointer"
            >
              <BsInstagram size={30} />
            </a>
            <a
              href="https://wa.me/5571993723226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-800 text-green-500 transition"
            >
              <BsWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
