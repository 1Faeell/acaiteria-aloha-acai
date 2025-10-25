function ModalIfood({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0000006b] flex items-center justify-center z-50"
      onClick={onClose} // clique fora fecha
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center relative"
        onClick={(e) => e.stopPropagation()} // previne fechar ao clicar dentro
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#600b75] mb-5">
          Escolha o Aloha 🍧
        </h2>

        <div className="flex flex-col gap-4">
          <a
            href="https://www.ifood.com.br/delivery/salvador-ba/aloha-acai-pernambues-pernambues/5d5a7569-2570-4d8a-9491-6c156ba7df79?UTM_Medium=share"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d43b3b] hover:bg-[#e04949] text-white font-semibold py-2 rounded-xl transition"
            onClick={onClose}
          >
            Aloha Açaí - Pernambués
          </a>

          <a
            href="https://www.ifood.com.br/delivery/salvador-ba/aloha-acai-cbx-caminho-de-areia/ce4ea411-29fa-4bc7-afd5-48153bdc7116"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#600b75] hover:bg-[#520961] text-white font-semibold py-2 rounded-xl transition"
            onClick={onClose}
          >
            Aloha Açaí - Caminho de Areia
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalIfood;
