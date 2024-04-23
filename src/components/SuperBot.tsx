import profileImg from "../assets/SuperBot.png";

const SuperBot = () => {
  return (
    <div className="w-full flex justify-center items-center relative animate-float">
      <img className="w-96" src={profileImg} alt="profileImg" />
    </div>
  );
};

export default SuperBot;
