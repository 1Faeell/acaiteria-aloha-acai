import {
  BsArrow90DegRight,
  BsArrowRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";
import depoimentos from "../data/depoimentos.json";

function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="bg-[url('assets/images/fundo-depoimentos.jpg')] bg-cover bg-center bg-no-repeat max-w-full overflow-hidden text-center"
    >
      <div className="text-center w-full h-full px-6 md:px-16 py-30 flex flex-col justify-center bg-gradient-to-b from-[#fff] via-[#ffffffea] to-[#fff] ">
        <h2 className="text-[2rem] md:text-[2.4rem] text-[#600b75] font-extrabold relative inline-block mb-5">
          Depoimentos
          <span className="block w-20 h-1 bg-[#FBB03B] mt-1 rounded-full mx-auto"></span>
        </h2>
        <p className=" text-lg md:text-lg max-w-4xl mx-auto mb-6 leading-relaxed font-medium">
          Nossos clientes são a alma do Aloha 💜 Cada sorriso, cada colherada e
          cada elogio nos inspiram a continuar servindo o melhor açaí da cidade.
          Veja o que quem já viveu essa experiência tem a dizer!
        </p>
        <div className="max-w-7xl m-auto">
          <div
            className="
          flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
        "
          >
            {depoimentos.map((dep) => (
              <div
                key={dep.id}
                className="
              w-[280px] sm:w-[320px] md:w-[360px] lg:w-[300px]
              bg-gradient-to-br from-[#eeeeee] via-[#eeeeee] to-[#eeacff]
              p-8 md:p-10 rounded-2xl shadow-md snap-start
              my-5
              hover:shadow-xl hover:-translate-y-2.5 transition-all duration-500
              flex-shrink-0 text-left m-auto
            "
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={dep.foto}
                    alt={dep.nome}
                    className="w-16 h-16 rounded-full object-cover border-4 border-[#e478ff] bg-white"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#600b75]">
                      {dep.nome}
                    </h3>
                    <div className="flex text-[#FBB03B]">
                      {"★".repeat(dep.avaliacao)}
                      {"☆".repeat(5 - dep.avaliacao)}
                    </div>
                  </div>
                </div>
                <p className="text-[#774900] italic leading-relaxed text-sm md:text-base">
                  “{dep.comentario}”
                </p>
              </div>
            ))}
          </div>
          <p className="uppercase mt-5 font-semibold text-[#600b75] flex items-center justify-center gap-2">
            <BsChevronDoubleLeft size={20} /> Arraste para os lados{" "}
            <BsChevronDoubleRight size={20} />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
