import LeftBanner from "./LeftBanner";
import GameCategories from "./GameCategories";
import ChatBtn from "./ChatBotBtn";

const Banner = () => {
  return (
    <section
      className="w-full items-center"
    >
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