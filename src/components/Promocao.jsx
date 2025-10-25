function Promocao() {
  return (
    <div className="relative overflow-hidden h-16 bg-gradient-to-r from-purple-400 via-red-400 to-yellow-400 flex items-center shadow-2xl">
      <div className="absolute whitespace-nowrap animate-scroll text-white text-3xl font-bold uppercase">
        Promoções Imperdíveis é só na Aloha Açaí 🌴 | Sabores que irão te deixar
        com um toque de quero mais! 😋
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Promocao;
