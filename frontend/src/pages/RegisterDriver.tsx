import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
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
    navigate("/homepagedriver");
  };

  return (
    <div className="flex flex-col items-center bg-hoverbutton bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <Header/>
      </div>

      {currentStep === 1 && (
        <div className="text-center font-syke-light text-white justify-center items-center">
          <div className="text-textgreen text-3xl text-left font-syke-medium">
            <h1>Registering as Driver</h1>
            <h1 className="text-sm font-syke-light">Please enter your information</h1>


            <div className="bg- w-[40rem] h-[25rem] mt-4">
              <form className="space-y-2">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Last Name
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey border-b	 font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="last_name"
                      required
                    />
                  </div>

                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      First Name
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="first_name"
                      required
                    />
                  </div>
                  <div className="flex-2">
                    <h1 className="text-white font-syke-light text-xl">Sex</h1>
                    <select
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="sex"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>{" "}
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Date of Birth
                    </h1>
                    <input
                      type="date"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="birthday"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Driver Type
                    </h1>
                    <select
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="drivertype"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Student">Male</option>
                      <option value="Faculty">Faculty</option>
                      <option value="Guest">Guest</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      License Number:
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="licenseNum"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      License Expiration Date
                    </h1>
                    <input
                      type="date"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="LicenseExp"
                      required
                    />
                  </div>
                </div>
              </form>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  className="w-6 h-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label
                  htmlFor="termsCheckbox"
                  className="ms-4 text-xl font-medium text-gray-900 dark:text-gray-300"
                >
                  I verify that the information I have provided above is true.
                </label>
              </div>
                <button
                  onClick={handleConfirmClick}
                  className="bg-buttongreen hover:bg-colorhover text-xl text-white py-2 px-4 w-[9rem]  mt-[1rem] rounded-sm">
                Confirm
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterDriver;
