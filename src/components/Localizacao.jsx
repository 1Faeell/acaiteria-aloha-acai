import { useState } from "react";
import {
  BsInstagram,
  BsWhatsapp,
  BsCart4,
  BsAlarmFill,
  BsEnvelopeFill,
  BsFillGeoAltFill,
  BsFillTelephoneForwardFill,
  BsPinMapFill,
} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import ModalIfood from "./ModalIfood";
import ModalInstagram from "./ModalInstagram";

const unidades = [
  {
    id: "pernambues",
    nome: "Aloha Açaí Pernambués",
    endereco: "R. Thomaz Gonzaga, 240 - Pernambués, Salvador - BA, 41100-000",
    telefone: "(71) 9 2002-1953",
    whatsapp: "5571920021953",
    horario: {
      semana: "10:30 às 20:30",
      sabado: "10:30 às 20:30",
      domingo: "14:00 às 20:30",
    },
    maps: "https://maps.app.goo.gl/kYsvSBGxWfvksrTJ9",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.2135238187107!2d-38.46565492482079!3d-12.966316787348546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b5d60d3544d%3A0xa6ef4b471b828ef8!2sAloha%20a%C3%A7a%C3%AD%20Pernambu%C3%A9s!5e1!3m2!1spt-BR!2sbr!4v1761181677812!5m2!1spt-BR!2sbr",
    instagram: "https://www.instagram.com/alohaacaipernambues/",
    ifood:
      "https://www.ifood.com.br/delivery/salvador-ba/aloha-acai-pernambues-pernambues/5d5a7569-2570-4d8a-9491-6c156ba7df79?UTM_Medium=share",
  },
  {
    id: "caminhoDeAreia",
    nome: "Aloha Açaí Caminho de Areia",
    endereco:
      "R. Manoel Barros de Azevedo, 133 - Caminho de Areia, Salvador - BA, 40440-360",
    telefone: "(71) 9 9372-3226",
    whatsapp: "5571993723226",
    horario: {
      semana: "14:15 às 21:45",
      sabado: "14:15 às 21:45",
      domingo: "14:15 às 22:00",
    },
    maps: "https://maps.app.goo.gl/9m8sE3TtUmCENmjPA",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.781983100791!2d-38.506707421856426!3d-12.930719799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71605a627f42d8d%3A0x1cc1453d2a429102!2zQWxvaGEgQcOnYcOt!5e1!3m2!1spt-BR!2sbr!4v1761313465010!5m2!1spt-BR!2sbr",
    instagram: "https://www.instagram.com/aloha.acai.cbx/",
    ifood:
      "https://www.ifood.com.br/delivery/salvador-ba/aloha-acai-cbx-caminho-de-areia/ce4ea411-29fa-4bc7-afd5-48153bdc7116",
  },
];

function Localizacao() {
  const [sedeSelecionada, setSedeSelecionada] = useState("pernambues");
  const [modalIfoodAberto, setModalIfoodAberto] = useState(false);
  const [modalInstagramAberto, setModalInstagramAberto] = useState(false);

  const unidadeAtual = unidades.find((u) => u.id === sedeSelecionada);

  return (
    <section
      id="localizacao"
      className="bg-[url('assets/images/fundo-mapa.jpg')] bg-cover bg-center bg-no-repeat max-w-full"
    >
      <div className="px-6 md:px-16 py-20 bg-gradient-to-b from-[#600b75ad] to-[#3d0d49] text-center">
        <h2 className="text-[2rem] md:text-[2.4rem] text-[#ffffff] font-extrabold relative inline-block mb-6">
          Localização & Contato
          <span className="block w-30 h-1 bg-[#FBB03B] rounded-full mx-auto"></span>
        </h2>

        {/* Botões de filtro entre sedes */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSedeSelecionada("pernambues")}
            className={`px-6 py-2 rounded font-bold border-2 transition-all ${
              sedeSelecionada === "pernambues"
                ? "bg-[#600b75] text-white border-[#FBB03B]"
                : "bg-white text-[#600b75] border-[#ffffff] hover:bg-[#c000b0] hover:text-white"
            }`}
          >
            Pernambués
          </button>
          <button
            onClick={() => setSedeSelecionada("caminhoDeAreia")}
            className={`px-6 py-2 rounded font-bold border-2 transition-all ${
              sedeSelecionada === "caminhoDeAreia"
                ? "bg-[#600b75] text-white border-[#FBB03B]"
                : "bg-white text-[#600b75] border-[#ffffff] hover:bg-[#c000b0] hover:text-white"
            }`}
          >
            Caminho de Areia
          </button>
        </div>

        <div className="text-center max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-transparent via-[#7b0e96] to-transparent shadow-xl p-6 rounded-2xl flex flex-col text-left">
            <iframe
              src={unidadeAtual.iframe}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl mb-6 border-2 border-[#1EBC74]"
              title={`Mapa - ${unidadeAtual.nome}`}
            ></iframe>

            <h3 className="text-2xl font-extrabold text-[#FBB03B] mb-3">
              {unidadeAtual.nome}
            </h3>

            <ul className="space-y-4 text-[#ffffff] flex flex-col font-semibold">
              <li className="flex items-start gap-2 bg-[#3d0d49] px-4 py-3 rounded-xl flex-wrap max-[375px]:flex-col">
                <span className="flex items-center gap-2 font-extrabold text-[#1EBC74]">
                  <BsFillGeoAltFill size={20} /> Endereço:
                </span>
                <p>{unidadeAtual.endereco}</p>
              </li>

              <li className="flex items-center gap-2 bg-[#3d0d49] px-4 py-3 rounded-xl max-[375px]:flex-col">
                <span className="flex items-center gap-2 font-extrabold text-[#1EBC74]">
                  <BsFillTelephoneForwardFill size={20} /> Telefone:
                </span>
                {unidadeAtual.telefone}
              </li>

              <li className="flex items-center gap-2 bg-[#3d0d49] px-4 py-3 rounded-xl max-[375px]:flex-col">
                <span className="flex items-center gap-2 font-extrabold text-[#1EBC74]">
                  <BsWhatsapp size={20} /> WhatsApp:
                </span>
                <a
                  href={`https://wa.me/${unidadeAtual.whatsapp}`}
                  className="text-[#31ffa2] font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale conosco
                </a>
              </li>

              <li className="flex items-start gap-2 bg-[#3d0d49] px-4 py-3 rounded-xl flex-col max-[375px]:flex-col">
                <span className="flex items-center gap-2 font-extrabold text-[#1EBC74]">
                  <BsAlarmFill size={20} /> Horário:
                </span>
                <div>
                  <b>Seg-Sex:</b> {unidadeAtual.horario.semana}
                </div>
                <div>
                  <b>Sábado:</b> {unidadeAtual.horario.sabado}
                </div>
                <div>
                  <b>Domingo:</b> {unidadeAtual.horario.domingo}
                </div>
              </li>
            </ul>

            <div className="mt-6 flex gap-3 font-bold flex-row flex-wrap justify-between max-2xl:justify-center">
              <a
                href={unidadeAtual.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
              >
                <BsPinMapFill size={20} /> Mapa
              </a>
              <button
                onClick={() => setModalInstagramAberto(true)}
                className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-pink-600 transition cursor-pointer"
              >
                <BsInstagram /> Instagram
              </button>
              <a
                href={`https://wa.me/${unidadeAtual.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-600 transition"
              >
                <BsWhatsapp size={20} /> WhatsApp
              </a>
              <button
                onClick={() => setModalIfoodAberto(true)}
                className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition cursor-pointer"
              >
                <MdFastfood size={20} /> Ifood
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modais */}
      <ModalIfood
        isOpen={modalIfoodAberto}
        onClose={() => setModalIfoodAberto(false)}
      />
      <ModalInstagram
        isOpen={modalInstagramAberto}
        onClose={() => setModalInstagramAberto(false)}
      />
    </section>
  );
}

export default Localizacao;
