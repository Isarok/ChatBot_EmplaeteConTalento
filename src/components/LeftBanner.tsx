import SuperBot from "./SuperBot";

const LeftBanner = () => {
  return (
    <section className="w-full lgl:w-1/2 flex flex-col p-10 gap-10">
      <div className="flex flex-col gap-3 pl-10">
        <h1 className="text-5xl font-sans font-bold text-white"
          style={{ textShadow: '0 0 6px #1A1E6B, 0 0 6px #1A1E6B, 0 0 6px #1A1E6B' }}>
          DESCUBRE TUS SUPER TALENTOS
        </h1>
        <p className="text-2xl font-sans font-bold text-white"
          style={{ textShadow: '0 0 6px #1A1E6B' }}>
          con nuestros juegos interactivos
        </p>
        {/* <button 
          className="text-md font-sans bg-purple-400 hover:bg-purple-500 text-white p-2 rounded-full w-60 border-2 border-purple-500"
        >
          Chat with SuperBot
        </button> */}
      </div>
      <SuperBot />
    </section>
  );
};

export default LeftBanner;

