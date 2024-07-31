const ChatBtn = () => {
  return (
    <section className="flex justify-center">
      <div className="custom-width font-sans p-8 backdrop-blur-2xl flex flex-col rounded-full border border-gray-300">
        <div className="flex flex-col lg:flex-row lgl:flex-row justify-between items-center gap-5">
          <p className="lg:text-left lgl:text-left max-w-md text-2xl font-sans font-bold text-white"
            style={{ textShadow: '0 0 6px #1A1E6B' }}>
            ¿Quieres saber más? Despeja tus dudas con nuestro SuperBot
          </p>
          <button
            className="text-md font-sans bg-purple-400 hover:bg-purple-500 text-white p-2 rounded-full lg:w-auto lgl:w-60 border-2 border-purple-500"
            onClick={() => window.location.href = '/chatbot'}
          >
            Chatear
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatBtn;
