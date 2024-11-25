import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomepageDriver = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <Header />
      </div>

      <div className="mt-3 px-5 py-3 w-auto bg-[#222629] rounded flex">
        <div className="w-full h-[25rem]">
          <h1 className="text-xl font-syke-medium text-white">Notices</h1>
          <div
            className="mt-2 h-[22rem] bg-[#474B4F] w-[40rem] py-3 px-3 overflow-y-auto rounded scrollbar"
            alt="2ndcontainer"
          >
            <p className="text-white p-2">
              Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-white p-2">
              Event 2: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 3: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 4: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 5: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 6: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 7: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 8: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 9: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 9: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 9: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageDriver;
