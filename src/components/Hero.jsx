import { BsCart4 } from "react-icons/bs";
import HorarioStatus from "./HorarioStatus";

function Hero() {
  return (
    <div
      id="inicio"
      className="bg-[url('assets/images/fundo-cardapio3.jpg')] bg-cover bg-center bg-no-repeat"
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
            <a
              href="https://www.ifood.com.br/delivery/salvador-ba/aloha-acai-pernambues-pernambues/5d5a7569-2570-4d8a-9491-6c156ba7df79?UTM_Medium=share"
              target="_blank"
              className="text-[#ffffff] underline bg-[#d43b3b] font-bold hover:brightness-120 transition-all px-10 py-3 rounded-4xl items-center flex gap-2"
            >
              <BsCart4 size={20} />
              Pedir Delivery...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
