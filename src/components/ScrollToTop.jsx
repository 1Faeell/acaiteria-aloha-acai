import { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

function ScrollToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => {
      if (window.scrollY > 300) {
        setVisivel(true);
      } else {
        setVisivel(false);
      }
    };

    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const subirAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={subirAoTopo}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${
        visivel
          ? "opacity-100 translate-y-0 bg-white rounded-full cursor-pointer border-2 hover:border-[#600b75] border-[#ffffff]"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <BsArrowUpCircleFill
        size={45}
        className="text-[#600b75] hover:text-[#FBB03B] hover:bg-[#600b75]  rounded-full transition-colors duration-300 drop-shadow-lg"
      />
    </button>
  );
}

export default ScrollToTop;
