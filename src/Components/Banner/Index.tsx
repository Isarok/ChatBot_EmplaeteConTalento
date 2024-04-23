const Banner = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 w-96 mt-20 h-screen before:z-10 mx-auto sm:w-2/4 sm:block md:w-1/4 lg:block lg:w-1/4 md:hidden">
      <div className=" min-h-screen  text-white bg-gray-800 bg-opacity-70 backdrop-blur-2xl rounded-lg  ">
       <h1 className="text-2xl text-center pt-4 font-semibold mb-2 ">¡Descubre tus competencias profesionales a través de tus hobbies!</h1>
       <p className="text-base leading-relaxed  text-justify p-2">¿Sabías que tus hobbies favoritos no solo te brindan diversión y entretenimiento, sino que también pueden ayudarte a desarrollar habilidades valiosas que te serán útiles en un entorno profesional?</p>
       <p className="text-base leading-relaxed text-justify p-2">Con esta aplicación, podrás descubrir la conexión entre tus hobbies y las competencias profesionales que estás mejorando con ellos, al igual que las que puedes adquirir si los practicas.</p>
       <h2 className="text-lg mt-2 mb-2 text-center">¿Cómo funciona?</h2>
       <p className="text-base leading-relaxed text-justify p-2">Es muy sencillo, selecciona tus hobbies favoritos de esta lista y la aplicación te mostrará las competencias profesionales que se asocian con cada uno de ellos.</p>
      </div>
    </div>
  );
};

export default Banner;
