import { useEffect, useState } from "react";
import { BsClock, BsFillClockFill } from "react-icons/bs";

function HorarioStatus() {
  const [status1, setStatus1] = useState("");
  const [status2, setStatus2] = useState("");
  const [horarioAtual, setHorarioAtual] = useState("");

  useEffect(() => {
    const verificarHorario = () => {
      const agora = new Date();
      const diaSemana = agora.getDay();
      const horas = agora.getHours();
      const minutos = agora.getMinutes();

      const horaFormatada = `${horas.toString().padStart(2, "0")}:${minutos
        .toString()
        .padStart(2, "0")}`;
      setHorarioAtual(horaFormatada);

      // === Primeira divisão ===
      let aberto1 = false;
      if (diaSemana >= 1 && diaSemana <= 5) {
        aberto1 =
          (horas > 10 || (horas === 10 && minutos >= 30)) &&
          (horas < 20 || (horas === 20 && minutos <= 30));
      } else if (diaSemana === 6 || diaSemana === 0) {
        aberto1 =
          (horas > 14 || (horas === 14 && minutos >= 0)) &&
          (horas < 20 || (horas === 20 && minutos <= 30));
      }

      // === Segunda divisão ===
      let aberto2 = false;
      if (diaSemana >= 1 && diaSemana <= 6) {
        aberto2 =
          (horas > 14 || (horas === 14 && minutos >= 15)) &&
          (horas < 21 || (horas === 21 && minutos <= 45));
      } else if (diaSemana === 0) {
        aberto2 =
          (horas > 14 || (horas === 14 && minutos >= 15)) &&
          (horas < 20 || (horas === 20 && minutos <= 0));
      }

      setStatus1(aberto1 ? "aberto" : "fechado");
      setStatus2(aberto2 ? "aberto" : "fechado");
    };

    verificarHorario();
    const intervalo = setInterval(verificarHorario, 1000 * 60);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-transparent to-transparent shadow-xl text-[#600b75] max-[480px]:text-[14px] px-6 md:px-16 py-6 pb-12">
      <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-[#00000069] to-transparent text-[#ffffff] flex items-center justify-center gap-2 uppercase mt-5 font-bold">
        Agora são {horarioAtual} <BsClock />
      </p>
      <div className="max-w-7xl mx-auto">
        {/* Tabelas de horário */}
        <div className="flex justify-evenly items-center gap-10 text-[0.8rem] max-[501px]:flex-col max-[895px]:justify-around ">
          {/* Primeira divisão */}
          <div className="flex flex-row gap-2 max-[895px]:flex-col ">
            <div className="flex flex-col max-[895px]:justify-center max-[895px]:items-center">
              <h4 className="text-[1rem] uppercase font-bold">
                Aloha - Pernambués:
              </h4>
              <p className="flex items-center gap-2">
                <BsFillClockFill />
                Seg-Sex: <span className="font-bold">10:30</span> às{" "}
                <span className="font-bold">20:30</span>
              </p>
              <p className="flex items-center gap-2">
                <BsFillClockFill />
                Sáb-Dom: <span className="font-bold">14:00</span> às{" "}
                <span className="font-bold">20:30</span>
              </p>
            </div>

            <p
              className={`text-center text-[0.9rem] font-extrabold uppercase p-5 px-8 rounded-2xl max-md:text-[0.8rem] max-md:px-6 ${
                status1 === "aberto"
                  ? "text-[#1EBC74] bg-[#1ebc7433]"
                  : "text-[#d43b3b] bg-[#d43b3b42]"
              }`}
            >
              <span className="">
                {status1 === "aberto" ? "ABERTO 🍧" : "FECHADO 😴"}
              </span>
            </p>
          </div>

          {/* Segunda divisão */}
          <div className="flex flex-row gap-2 max-[895px]:flex-col">
            <div className="flex flex-col  max-[895px]:justify-center max-[895px]:items-center">
              <h4 className="text-[1rem] uppercase font-bold">
                Aloha - Caminho de Areia:
              </h4>
              <p className="flex items-center justify-start gap-2">
                <BsFillClockFill />
                Seg-Sáb: <span className="font-bold">14:15</span> às{" "}
                <span className="font-bold">21:45</span>
              </p>

              <p className="flex items-center justify-start gap-2">
                <BsFillClockFill />
                Dom: <span className="font-bold">14:15</span> às{" "}
                <span className="font-bold">20:00</span>
              </p>
            </div>

            <p
              className={`text-center text-[0.9rem] font-extrabold uppercase  p-5 px-8 rounded-2xl max-md:text-[0.8rem] max-md:px-6 ${
                status2 === "aberto"
                  ? "text-[#1EBC74] bg-[#1ebc7433]"
                  : "text-[#d43b3b] bg-[#d43b3b42]"
              }`}
            >
              <span>{status2 === "aberto" ? "ABERTO 🍧" : "FECHADO 😴"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorarioStatus;
