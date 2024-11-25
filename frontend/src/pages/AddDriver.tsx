import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import React, { useState } from "react";

const AddDriver = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCancelButton = () => {
    navigate("/encode");
  };

  const handleAddButton = () => {
    navigate("/admin");
  };
  return (
    <div className="flex flex-col items-center bg-hoverbutton bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <AdminHeader />
      </div>

      {currentStep === 1 && (
        <div>
          <div className="text-left font-syke-light text-white justify-center items-center">
            <div className="text-textgreen">
              <h1 className="text-4xl font-syke-bold">Adding a Driver</h1>
              <div>Step 1: Please enter driver's Full Name.</div>
            </div>

            <div className="w-[30rem] mt-[1rem]">
              <form className="space-y-5">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Last Name
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey border-b	 font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="last_name"
                      placeholder="Enter"
                      required
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      First Name
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey border-b	 font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="first_name"
                      placeholder="Enter"
                      required
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Middle Name
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="middle_name"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <div className="text-left font-syke-light text-white justify-center items-center">
            <div className="text-textgreen">
              <h1 className="text-4xl font-syke-bold">Adding a Driver</h1>
              <div>Step 2: Please enter driver's additional information.</div>
            </div>

            <div className="w-[30rem] mt-4">
              <form className="space-y-5">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">Sex</h1>
                    <select
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="sex"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Rather not say">Rather not say</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Birth Date
                    </h1>
                    <input
                      type="date"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="birthday"
                      required
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
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
              </form>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <div className="text-left font-syke-light text-white justify-center items-center">
            <div className="text-textgreen">
              <h1 className="text-4xl font-syke-bold">Adding a Driver</h1>
              <div>Step 3: Please enter driver's license information.</div>
            </div>

            <div className="w-[30rem] mt-[1rem]">
              <form className="space-y-5">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      License Number
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey border-b	 font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="license_number"
                      placeholder="Enter"
                      required
                    />
                  </div>
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
              </form>
            </div>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div>
          <div className="text-left font-syke-light text-white justify-center items-center">
            <div className="text-textgreen">
              <h1 className="text-4xl font-syke-bold">Adding a Driver</h1>
              <div>Step 4: Confirm Details</div>
            </div>

            <div className="w-[40rem] h-[auto] mt-4">
              <form className="space-y-[2rem]">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Last Name
                    </h1>
                    <h1 className="text-textgreen font-syke-medium text-3xl">
                      Alcorin
                    </h1>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      First Name
                    </h1>
                    <h1 className="text-textgreen font-syke-medium text-3xl">
                      Shawn Patrick
                    </h1>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Middle Name
                    </h1>
                    <h1 className="text-textgreen font-syke-medium text-3xl">
                      Surilla
                    </h1>
                  </div>
                  
                </div>

                <div className="flex space-x-4">
                <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">Sex</h1>
                    <h1 className="text-textgreen font-syke-medium text-3xl">
                      Female
                    </h1>
                  </div>
                  <div className="flex-1">
                    
                    <h1 className="text-white font-syke-light text-xl">
                      Date of Birth
                    </h1>
                    <h1 className="text-textgreen font-syke-medium text-3xl">
                      02/29/2004
                    </h1>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Driver Type
                    </h1>
                    <h1 className="text-textgreen font-syke-medium text-3xl">
                      Student
                    </h1>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      License Number
                    </h1>
                    <h1 className="text-textgreen font-syke-medium text-3xl">
                      NO3-12-123456
                    </h1>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      License Expiration Date
                    </h1>
                    <h1 className="text-textgreen font-syke-medium text-3xl">
                      03/10/2026
                    </h1>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        {currentStep === 1 && (
          <div className="flex justify-center gap-10 p-10">
            <div>
              <button
                type="button"
                className="w-32 text-xl bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleCancelButton}
              >
                Cancel
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-32 text-xl bg-buttongreen text-white py-2 font-syke-medium hover:bg-[#33471a] transition-colors rounded-sm"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {(currentStep === 2 || currentStep === 3) && (
          <div className="flex justify-center gap-10 p-10">
            <div>
              <button
                type="button"
                className="w-32 text-xl bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-32 text-xl bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="flex justify-center gap-20 p-10">
            <div>
              <button
                type="button"
                className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleBackClick}
              >
                Back
              </button>
            </div>

            <div>
              <button
                type="button"
                className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                onClick={handleAddButton}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddDriver;
