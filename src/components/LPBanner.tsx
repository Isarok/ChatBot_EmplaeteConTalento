import LeftBanner from "./LeftBanner";
import GameCategories from "./GameCategories";

const Banner = () => {
  return (
    <section
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont"
    >
      <div className="flex flex-col xl:flex-row gap-10">
        <LeftBanner />
        <GameCategories />
      </div>
    </section>
  );
};

export default Banner;