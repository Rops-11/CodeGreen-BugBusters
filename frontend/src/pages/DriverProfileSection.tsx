import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import DriverProfileComponents from "../components/DriverProfileComp";

const DriverProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover sm:bg-top md:bg-right lg:bg-left bg-no-repeat h-screen">
    <div> <Header/> </div>
    <h1 className="text-4xl text-textgreen font-syke-bold mr-[10rem] pb-3">My Gateway Account</h1>

      <div className="mi flex">
      <aside className="w-auto h-auto shadow-lg pr-2 mr-4 mb-5">
      <nav className="mt-4 ">
        <ul className="space-y-8">
          <li>
            <a className="block cursor-pointer transition-colors text-white text-2xl font-syke-medium hover:text-textgreen">Profile</a>
          </li>
          <li>
            <a className="block cursor-pointer transition-colors text-white text-2xl font-syke-medium hover:text-textgreen">Vehicles</a>
          </li>
          <li>
            <a className="block cursor-pointer transition-colors text-white text-2xl font-syke-medium hover:text-textgreen">Violations</a>
          </li>
        </ul>
      </nav>
    </aside>
    <div>
      <DriverProfileComponents/>
    </div>
    </div>
    </div>

  );
};

export default DriverProfile;
