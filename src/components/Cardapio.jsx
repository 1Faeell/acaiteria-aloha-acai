import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import cardapio from "../data/produtos-cardapio.jsx";
import {
  BsCart4,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";

function Cardapio() {
  const [sedeSelecionada, setSedeSelecionada] = useState("pernambues");
  const [menu, setMenu] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const scrollRef = useRef(null);

  // Atualiza menu conforme a sede selecionada
  useEffect(() => {
    const novoMenu = cardapio?.[sedeSelecionada] || [];
    setMenu(novoMenu);
    setCategoriaSelecionada("todas");
    setIndiceCategoria(0);
  }, [sedeSelecionada]);

  // Extrai categorias do menu
  const categorias = useMemo(() => menu.map((c) => c.categoria), [menu]);

  // Filtra produtos conforme categoria
  const produtosParaExibir = useMemo(() => {
    if (categoriaSelecionada === "todas") {
      return menu.flatMap((cat) => cat.produtos || []);
    }
    const categoria = menu.find(
      (cat) => cat.categoria === categoriaSelecionada
    );
    return categoria?.produtos || [];
  }, [menu, categoriaSelecionada]);

  // Navegação entre categorias
  const proximaCategoria = useCallback(() => {
    if (categorias.length === 0) return;
    const nextIdx = (indiceCategoria + 1) % categorias.length;
    setIndiceCategoria(nextIdx);
    setCategoriaSelecionada(categorias[nextIdx]);
  }, [categorias, indiceCategoria]);

  const categoriaAnterior = useCallback(() => {
    if (categorias.length === 0) return;
    const prevIdx =
      indiceCategoria - 1 < 0 ? categorias.length - 1 : indiceCategoria - 1;
    setIndiceCategoria(prevIdx);
    setCategoriaSelecionada(categorias[prevIdx]);
  }, [categorias, indiceCategoria]);

  // Reseta scroll ao trocar categoria
  useEffect(() => {
    if (scrollRef.current && produtosParaExibir.length > 0) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [categoriaSelecionada, produtosParaExibir]);

  return (
    <section
      id="cardapio"
      className="text-center bg-[url('assets/images/fundo-plantas-cardapio.jpg')] bg-cover bg-center bg-no-repeat max-w-full select-none overflow-hidden"
    >
      <div className="w-full h-full bg-gradient-to-br from-[#600b75] via-[#a00093af] to-[#fbb13b79] px-6 md:px-16 py-16 transition-all duration-500 ease-in-out">
        {/* Título */}
        <h2 className="text-[2rem] md:text-[2.4rem] text-[#ffffff] font-extrabold mb-10 relative inline-block">
          Cardápio
          <span className="block w-16 h-1 bg-[#FBB03B] rounded-full mx-auto"></span>
        </h2>

        {/* Subtítulo */}
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Escolha sua unidade e descubra por que o Aloha é sinônimo de
          <span className="text-[#FBB03B] font-bold">
            {" "}
            satisfação e sabor incomparável.
          </span>
        </p>

        {/* Filtro de sede */}
        <div className="flex justify-center gap-4 mb-12">
          {["pernambues", "caminhoDeAreia"].map((sede) => (
            <button
              key={sede}
              onClick={() => setSedeSelecionada(sede)}
              className={`px-6 py-2 rounded font-bold border-2 transition-all ${
                sedeSelecionada === sede
                  ? "bg-[#600b75] text-white border-[#FBB03B]"
                  : "cursor-pointer bg-white text-[#600b75] border-[#ffffff] hover:bg-[#c000b0] hover:text-white"
              }`}
            >
              {sede === "pernambues" ? "Pernambués" : "Caminho de Areia"}
            </button>
          ))}
        </div>

        {/* Filtro de categorias */}
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            <button
              onClick={() => setCategoriaSelecionada("todas")}
              className={`px-5 py-2 rounded font-bold transition-all duration-200 ${
                categoriaSelecionada === "todas"
                  ? "bg-[#c000b0] text-[#ffffff] border-[#ffffff]"
                  : "cursor-pointer bg-white text-[#600b75] border-2 border-[#ffffff] hover:bg-[#c000b0] hover:text-white"
              }`}
            >
              Todas
            </button>

            {menu.map((cat, index) => (
              <button
                key={index}
                onClick={() => setCategoriaSelecionada(cat.categoria)}
                className={`px-5 py-2 rounded-xl font-bold transition-all duration-200 ${
                  categoriaSelecionada === cat.categoria
                    ? "bg-[#600b75] text-white border-2 border-[#c000b0]"
                    : "cursor-pointer bg-white text-[#600b75] border-2 border-[#ffffff] hover:bg-[#600b75] hover:text-white"
                }`}
              >
                {cat.categoria}
              </button>
            ))}
          </div>

          {/* Instrução mobile */}
          <p className="md:hidden uppercase text-[#ffffff] flex items-center gap-2 justify-center">
            <BsChevronDoubleLeft /> Deslize para os lados{" "}
            <BsChevronDoubleRight />
          </p>

          {/* Lista de produtos */}
          <div className="relative flex items-center justify-center mb-20">
            {/* seta esquerda */}
            <button
              onClick={categoriaAnterior}
              className="cursor-pointer px-5 flex items-center absolute -bottom-20 left-0 z-10 bg-white/80 text-[#600b75] hover:bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
            >
              <BsChevronDoubleLeft size={26} />
              <span className="max-[460px]:hidden">Categoria Anterior</span>
            </button>

            {/* Produtos */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 py-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              {produtosParaExibir.length > 0 ? (
                produtosParaExibir.map((produto, i) => (
                  <div
                    key={i}
                    className="w-[260px] md:w-[280px] lg:w-[300px] flex-shrink-0 bg-white rounded-2xl shadow-md snap-start hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                  >
                    {/* Imagem */}
                    {produto.imagem && (
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-full h-[180px] md:h-[200px] object-cover rounded-t-2xl"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    )}

                    {/* Conteúdo */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                      <div className="p-5">
                        <h4 className="text-[1.1rem] md:text-[1.15rem] font-bold text-[#600b75] uppercase tracking-wide">
                          {produto.nome}
                          {produto.tamanho && (
                            <span className="text-[#ffa109] text-sm ml-1">
                              ({produto.tamanho})
                            </span>
                          )}
                        </h4>
                        <p className="text-[#2ECC71] font-extrabold text-[1.05rem] mt-2">
                          {produto.preco}
                        </p>
                      </div>

                      {/* Botão/link */}
                      {produto.link && produto.link.trim() !== "" ? (
                        <a
                          href={produto.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 mt-auto w-full bg-gradient-to-r from-[#d43b3b] to-[#f56c6c] text-white font-bold py-3 rounded-b-xl hover:scale-[1.03] transition-transform duration-200"
                        >
                          <BsCart4 size={20} /> Mais detalhes...
                        </a>
                      ) : (
                        <button
                          disabled
                          className="mt-auto w-full bg-gray-300 text-gray-600 font-bold py-3 rounded-b-xl cursor-not-allowed"
                        >
                          Link Indisponível
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white font-semibold">
                  Nenhum produto disponível nesta categoria.
                </p>
              )}
            </div>

            {/* seta direita */}
            <button
              onClick={proximaCategoria}
              className="cursor-pointer px-5 flex items-center absolute -bottom-20 right-0 z-10 bg-white/80 text-[#600b75] hover:bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
            >
              <span className="max-[460px]:hidden">Próxima Categoria</span>
              <BsChevronDoubleRight size={26} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cardapio;
