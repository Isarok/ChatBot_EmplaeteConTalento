import Banner from "../../Components/RightBanner";
import backgroundImage from "../../assets/BackgroundImg.jpeg";
// import Games from "../../components/GameCategories"

const Home = () => {
  return (
    <main
      className="w-full h-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="p-12 mt-8 w-full h-auto
        2xl:p-36 2xl:fixed "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",

        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          {/* <Games /> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
