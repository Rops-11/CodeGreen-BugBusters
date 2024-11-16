import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import { useState } from "react";

const RegisterDriver = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleRegisterClick = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleConfirmClick = () => {
    navigate("/homepage");
  };

  return (
    <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl">
        <AdminHeader />
      </div>

      {currentStep === 1 && (
        <div className="items-center">
          <div className="text-textgreen">
            <h1 className="text-4xl font-bold">Registration Form: </h1>
            <p className="text-white">
              <b> Logged-in as:</b> nonoygwapo@hotmail.com
            </p>
          </div>

          <div className="flex gap-4 mt-12">
            <div className="flex-1 w-full flex items-center space-x-3">
              <label className="text-white font-syke-regular">
                First Name:
              </label>
              <input
                type="text"
                className="bg-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-md border border-black"
                required
              />
            </div>

            <div className="flex-1 w-full flex items-center space-x-3">
              <label className="text-white font-syke-regular">
                Middle Name (Optional):
              </label>
              <input
                type="text"
                className="bg-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-md border border-black"
              />
            </div>

            <div className="flex-1 w-full flex items-center space-x-3">
              <label className="text-white font-syke-regular">
                Last Name:
              </label>
              <input
                type="text"
                className="bg-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-md border border-black"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <div className="flex-1 w-full flex items-center space-x-3">
              <label className="text-white font-syke-regular">
                Date of Birth:
              </label>
              <input
                type="text"
                className="bg-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-md border border-black"
                required
              />
            </div>

            <div className="flex-1 w-full flex items-center space-x-3">
              <label className="text-white font-syke-regular">
                Sex:
              </label>
              <select
                className="bg-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-md border border-black"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="flex-1 w-full flex items-center space-x-3">
              <label className="text-white font-syke-regular">
                Driver Type:
              </label>
              <select
                className="bg-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-md border border-black"
                required
              >
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <div className="flex-1 w-full flex items-center space-x-3">
              <label className="text-white font-syke-regular">
               License No:
              </label>
              <input
                type="text"
                className="bg-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-md border border-black"
                required
              />
            </div>

            <div className="flex-1 w-full flex items-center space-x-3">
              <label className="text-white font-syke-regular">
                License expiration date:
              </label>
              <input
                type="text"
                className="bg-gray-600 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-md border border-black"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(34,38,41,0.66)] opacity-95 w-[804px] h-[451px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          <button
            className="absolute top-0 right-0 w-[23px] h-[25px] p-2"
            onClick={handleBackClick}
          >
            <img src="/assets/X.png" alt="Close" />
          </button>
          <div>
            <p className="text-white">are you sure you want to continue?</p>
          </div>
          <button
            type="button"
            className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm mt-4"
            onClick={handleConfirmClick}
          >
            confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterDriver;
