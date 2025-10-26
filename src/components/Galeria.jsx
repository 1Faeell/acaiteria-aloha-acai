import galeria from "../data/fotos-galeria.jsx";

function Galeria() {
  return (
    <section
      id="galeria"
      className="px-6 md:px-16 py-16 mb-16 text-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-[2rem] md:text-[2.4rem] text-[#600b75] font-extrabold relative inline-block mb-8">
          Galeria
          <span className="block w-20 h-1 bg-[#FBB03B] mt-1 rounded-full mx-auto"></span>
        </h2> */}

        {/* <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Confira alguns momentos e delícias do nosso Aloha 💜 Cada copo, cada
          sorriso e cada foto refletem a energia boa que a gente espalha!
        </p> */}

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4
          justify-center items-center"
        >
          {galeria.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              <img
                src={item.imagem}
                alt={`Foto ${item.id}`}
                className="w-full h-48 object-cover md:h-56 lg:h-84"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;
