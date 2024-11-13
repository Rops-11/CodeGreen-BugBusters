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

      <div className="text-center text-white justify-center items-center">
        <h1 className="text-5xl font-syke-medium text-textgreen mb-7">Welcome, Name Name</h1>
        <p className="text-center font-syke-regular">
          <b>Logged-in as: </b> nonoycute@hotmail.com
        </p>
      </div>

      <div className="justify-center text-center text-white mt-5 font-syke-regular space-y-7">
        <h1>Please register to continue!</h1>

        <button
          type="submit"
          className="p-2 rounded-sm w-5/6 font-syke-regular bg-buttongreen hover:bg-colorhover transition-colors duration-300"
          onClick={handleRegisterButton}
        >
          Register Now!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
