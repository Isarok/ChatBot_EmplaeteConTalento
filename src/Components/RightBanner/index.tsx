import LeftBanner from "../LeftBanner";
import GameCategories from "../GameCategories";
import ChatBtn from "../ChatBotBtn";

const Banner = () => {
  return (
    <section className="w-full justify-center h-auto lg:mt-10 lg:ml-16 items-center text-white">
      <div className="flex flex-col xl:flex-row lgl:flex-row lg:flex-row gap-10">
        <LeftBanner />
        <GameCategories />
      </div>
      <div className="p-10">
        <ChatBtn />
      </div>
    </section>
  );
};

export default Banner;
