import { MdFastfood } from "react-icons/md";
import { BsGeoAlt, BsGeoAltFill, BsXLg, BsCart4 } from "react-icons/bs";

function ModalIfood({ isOpen, onClose }) {
  if (!isOpen) return null;

  const ifoodStores = [
    {
      name: "Aloha Açaí - Pernambués",
      location: "Pernambués",
      url: "https://www.ifood.com.br/delivery/salvador-ba/aloha-acai-pernambues-pernambues/5d5a7569-2570-4d8a-9491-6c156ba7df79?UTM_Medium=share",
      gradient: "from-[#ea1d2c] to-[#a00e1b]",
    },
    {
      name: "Aloha Açaí - Caminho de Areia",
      location: "Caminho de Areia",
      url: "https://www.ifood.com.br/delivery/salvador-ba/aloha-acai-cbx-caminho-de-areia/ce4ea411-29fa-4bc7-afd5-48153bdc7116",
      gradient: "from-[#8740a5] to-[#600b75]",
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[#0000006b] bg-opacity-60 z-[200] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Fechar modal"
          >
            <BsXLg size={20} />
          </button>

          {/* Título */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-[#ea1d2c] to-[#d43b3b] p-2 rounded-xl">
              <MdFastfood size={28} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Peça no iFood</h2>
          </div>

          {/* Lista de lojas */}
          <div className="space-y-3">
            {ifoodStores.map((store, index) => (
              <a
                key={index}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                onClick={onClose}
              >
                <div
                  className={`bg-gradient-to-r ${store.gradient} p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3">
                    <BsCart4 size={24} className="text-white" />
                    <div className="flex-1">
                      <p className="text-white font-bold text-lg">
                        {store.name}
                      </p>
                      <p className="text-white text-sm opacity-90 flex items-center gap-2">
                        <BsGeoAlt /> {store.location}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Rodapé */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Escolha a loja mais próxima de você! 🍇
          </p>
        </div>
      </div>
    </>
  );
}

export default ModalIfood;
