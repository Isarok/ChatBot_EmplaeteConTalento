const ChatBtn = () => {
  return (
    <section className="flex flex-col gap-3 pt-5 py-[8vh] ml-[-55px] w-80 justify-center items-center
    md:w-full md:justify-center md:items-center md:ml-0 md:m-2
    lg:w-full lg:ml-[-59px] lg:p-0 lg:py-0 ">
      <div className="w-full custom-width backdrop-blur-xl flex flex-col rounded-xl border border-gray-300">
        <div className="flex flex-col justify-between items-center p-8
        md:p-4 md: md:space-y-4 md:justify-between md:
        lg:flex-row lg:p-8">
          <p className="md:text-xl md:mb-10 lg:text-left xl:text-left max-w-md text-lg mb-5 font-bold text-white"
            style={{ textShadow: '0 0 6px #1A1E6B' }}>
            ¿Quieres saber más? Despeja tus dudas con nuestro SuperBot
          </p>
          <button
            className="text-md font-sans bg-purple-400 hover:bg-purple-500 text-white p-4 px-20 rounded-md md:text-lg lg:w-auto  border-2  border-purple-500"
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
