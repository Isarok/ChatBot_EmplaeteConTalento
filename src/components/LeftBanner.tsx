import SuperBot from "./SuperBot";

const LeftBanner = () => {
  return (
    <section className="w-full lgl:w-1/2 flex flex-col p-10 gap-10">
      <div className="flex flex-col gap-5 pl-10">
        <h1 className="text-6xl font-bold text-white font-sans">
          BUSCA TU
        </h1>
        <h1 className="text-6xl font-sans font-bold text-white">
          <span className="text-blue-800">HÉROE</span> INTERIOR
        </h1>
        <p className="text-base font-sans leading-6 tracking-wider">
         ¿Preparad@ para descubrir tus super talentos? Explora tus capacidades ocultos con nuestros juegos interactivos.
        </p>
        {/* <button 
          className="bg-purple-400 hover:bg-purple-700 text-white p-2 rounded-full w-60"
        >
          Chat with SuperBot
        </button> */}
      </div>
      <SuperBot />
    </section>
  );
};

export default LeftBanner;
