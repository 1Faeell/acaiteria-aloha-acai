import { BsInstagram, BsXLg } from "react-icons/bs";

function ModalInstagram({ isOpen, onClose }) {
  if (!isOpen) return null;

  const instagramAccounts = [
    {
      name: "Aloha Açaí Pernambués",
      username: "@alohaacaipernambues",
      url: "https://www.instagram.com/alohaacaipernambues/",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      name: "Aloha Açaí Caminho de Areia",
      username: "@aloha.acai.cbx",
      url: "https://www.instagram.com/aloha.acai.cbx/",
      gradient: "from-pink-500 to-orange-500",
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
            <div className="bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 p-2 rounded-xl">
              <BsInstagram size={28} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Nossas Redes</h2>
          </div>

          {/* Lista de contas */}
          <div className="space-y-3">
            {instagramAccounts.map((account, index) => (
              <a
                key={index}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className={`bg-gradient-to-r ${account.gradient} p-4 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3">
                    <BsInstagram size={24} className="text-white" />
                    <div className="flex-1">
                      <p className="text-white font-bold text-lg">
                        {account.name}
                      </p>
                      <p className="text-white text-sm opacity-90">
                        {account.username}
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
            Siga-nos para novidades e promoções! 🍇
          </p>
        </div>
      </div>
    </>
  );
}

export default ModalInstagram;
