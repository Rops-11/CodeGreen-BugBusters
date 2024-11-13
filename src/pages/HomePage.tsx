import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterButton = () => {
    navigate("/register-driver");
  };
  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl mb-8 mt-5">
        <Header />
      </div>

      <div className="text-left text-white justify-center items-left">
        <h1 className="text-7xl font-bold text-textgreen mb-7">Welcome!</h1>
        <p className="text-center">
          <b>Logged-in as: </b> nonoycute@hotmail.com
        </p>
      </div>

      <div className="justify-start text-white mt-5 space-y-7">
        <h1>Please register to continue!</h1>

        <button
          type="submit"
          className="p-2 rounded-sm w-5/6 bg-gray-600 hover:bg-buttongreen transition-colors duration-300"
          onClick={handleRegisterButton}
        >
          Register Now!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
