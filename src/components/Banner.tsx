import LeftBanner from "./LeftBanner";
import GameCategories from "./GameCategories";

const Banner = () => {
  return (
    <section
      className="w-full items-center"
    >
      <div className="flex flex-col xl:flex-row lgl:flex-row lg:flex-row gap-3">
        <LeftBanner />
        <GameCategories />
      </div>
    </section>
  );
};

export default Banner;