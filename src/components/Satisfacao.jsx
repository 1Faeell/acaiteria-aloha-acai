import ClientImage1 from "../assets/images/cliente/satisfacao-cliente1.png";
import ClientImage2 from "../assets/images/cliente/satisfacao-cliente3.png";

function Satisfacao() {
  return (
    <section className="w-full bg-[url('assets/images/fundo-palmeiras-satisfacao.png')] bg-cover bg-center bg-no-repeat bg-gray-50 my-20">
      <div className="bg-gradient-to-b from-[#fff] via-[#ffffffcc] to-[#fff] w-full h-full m-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#600b75] mb-16">
          Satisfação e Amor pelo Açaí
          <span className="block w-20 h-1 bg-[#FBB03B] mt-3 mx-auto rounded-full"></span>
        </h2> */}

          <div className="flex flex-col gap-28">
            {/* BLOCO 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 md:gap-16">
              <div className="flex justify-center">
                <img
                  className="max-w-[400px] w-full object-cover rounded-3xl shadow-xl hover:scale-[1.03] transition-transform duration-300"
                  src={ClientImage1}
                  alt="Satisfação do Cliente"
                />
              </div>

              <div className="text-center space-y-4 max-w-[460px] m-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-[#600b75]">
                  Cada sorriso é o nosso combustível 💜
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Na Aloha Açaí, acreditamos que um bom açaí vai muito além do
                  sabor é sobre proporcionar momentos de alegria, frescor e
                  satisfação. Cada copo preparado é feito com carinho e cuidado
                  para garantir que você sinta o melhor da nossa energia
                  tropical.
                </p>
                {/* <p className="text-gray-700 text-lg leading-relaxed max-md:max-w-[400px] w-full max-md:mx-auto">
                Nosso objetivo é simples: ver cada cliente sair com um sorriso
                no rosto e o coração leve. Afinal, o segredo do nosso sucesso é
                a felicidade de quem nos escolhe todos os dias.
              </p> */}
              </div>
            </div>

            {/* BLOCO 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10 md:gap-16 ">
              <div className="order-2 sm:order-1 text-center space-y-4 max-w-[460px] m-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-[#600b75]">
                  Qualidade que sente a cada colher 🍓
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Cada ingrediente é escolhido com atenção, das frutas frescas
                  ao toque especial que dá vida aos nossos copos. Queremos que
                  cada experiência com nosso açaí seja única, refrescante e
                  inesquecível.
                </p>
                {/* <p className="text-gray-700 text-lg leading-relaxed max-md:max-w-[400px] w-full max-md:mx-auto">
                É por isso que ouvimos nossos clientes, aprimoramos nossas
                receitas e mantemos viva a essência do que fazemos: servir com
                amor e dedicação em cada detalhe.
              </p> */}
              </div>

              <div className="order-1 sm:order-2 flex justify-center">
                <img
                  className="max-w-[400px] w-full object-cover rounded-3xl shadow-xl hover:scale-[1.03] transition-transform duration-300"
                  src={ClientImage2}
                  alt="Satisfação do Cliente"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Satisfacao;
