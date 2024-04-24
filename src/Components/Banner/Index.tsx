const Banner = () => {
  return (
    <div className=" top-0 right-0 bottom-0 w-96 
                     2xl:fixed 2xl:mt-20 2xl:p-0 2xl:block  2xl:h-full
                     xl:fixed xl:mt-20 xl:p-0 xl:block xl:w-1/4
                     lg:fixed lg:mt-20 lg:p-0 lg:block lg:w-1/4 
                     md: md:p-4 md:block 
                     sm:p-6 sm:mt-0 mx-auto sm:w-full sm:block
                     xs:p-6 xs:mt-0">
      <div className="text-white bg-gray-800 bg-opacity-70 backdrop-blur-2xl rounded-lg  ">
          <h1 className="2xl:text-4xl 2xl:m-2
                      xl:text-1xl 
                      lg:text-2xl lg:mb-2
                      md:text-3xl md:mb-2
                      sm:text-1xl sm:mb-2  
                      text-center pt-4 font-semibold ">
                      ¡Descubre tus competencias profesionales a través de tus hobbies!
          </h1>
       <p className=" 2xl:text-2xl 2xl:m-6
                      xl:text-base 
                      lg:text-base lg:mb-2
                      md:text-base md:p-3
                      sm:text-1xl sm:mb-2 
                      text-base text-justify leading-relaxed p-2">
                      ¿Sabías que tus hobbies favoritos no solo te brindan diversión y entretenimiento, sino que también pueden ayudarte a desarrollar habilidades valiosas que te serán útiles en un entorno profesional?
        </p>
        <p className="2xl:text-2xl 2xl:m-6
                      xl:text-base 
                      lg:text-base lg:mb-2
                      md:text-base md:p-3
                      sm:text-1xl sm:mb-2 
                      text-base leading-relaxed text-justify p-2">
                      Con esta aplicación, podrás descubrir la conexión entre tus hobbies y las competencias profesionales que estás mejorando con ellos, al igual que las que puedes adquirir si los practicas.
        </p>
       <h2 className="2xl:text-2xl 2xl:m-6 2xl:text-center
                      xl:text-base 
                      lg:text-base lg:mb-2
                      md:text-base md:text-center 
                      sm:text-1xl sm:mb-2 
                      text-justify  leading-relaxed p-2
                      font-semibold text-lg mt-2 mb-2">
                      ¿Cómo funciona?
      </h2>
       <p className=" 2xl:text-2xl 2xl:m-6
                      xl:text-base 
                      lg:text-base lg:mb-2
                      md:text-base md:p-3
                      sm:text-1xl sm:mb-2 
                      text-base text-justify leading-relaxed p-2">
                      Es muy sencillo, selecciona tus hobbies favoritos de esta lista y la aplicación te mostrará las competencias profesionales que se asocian con cada uno de ellos.
        </p>
      </div>
    </div>
  );
};

export default Banner;
