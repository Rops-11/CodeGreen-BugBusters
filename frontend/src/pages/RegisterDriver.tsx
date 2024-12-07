import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import React, { useState } from "react";
import Adding from "../components/Adding";
import Success from "../components/Success";
import ErrorAlert from "../components/ErrorAlert";
import { Registration } from "../types/datatypes";
import { useAddRegistration } from "../hooks/registration-hooks/useAddRegistration";

const RegisterDriver = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const { postRegistration, loading, setLoading } = useAddRegistration();
  const [successMessage, setSuccessMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleConfirmClick = async (e: React.FormEvent) => {
    // if (
    //   currentStep === 1 &&
    //   (formData.license_number === "" ||
    //     formData.school_email ||
    //     formData.sex === "Select" ||
    //     formData.first_name === "" ||
    //     formData.last_name === "" ||
    //     formData.date_of_birth === "" ||
    //     formData.driver_type === "Select")
    // ) {
    //   setAlertMessage("Please fill in all the required fields.");
    //   return;
    // }
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    setAlertMessage("");
    setCurrentStep(currentStep + 1);
    try {
      await postRegistration(formData);
      setLoading(false);

      setSuccessMessage("Success");
      setTimeout(() => {
        navigate("/homepage");
      }, 5000);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting driver:", error);
    }
    navigate("/homepage");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState<Registration>({
    last_name: "",
    first_name: "",
    sex: "Select",
    date_of_birth: "",
    driver_type: "Select",
    license_number: "",
    school_email: "",
  });

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <Header />
        {loading && <Adding />}
        {successMessage && <Success />}
        {alertMessage && <ErrorAlert />}
      </div>

      {currentStep === 1 && (
        <div className="h-auto w-auto px-7 py-5 bg-zinc-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          <div className="text-center font-syke-light text-white justify-center items-center">
            <div className="text-textgreen text-3xl text-left font-syke-light">
              <h1 className="font-syke-medium">Registering as Driver</h1>
              <h1 className="text-sm font-syke-light">
                Please enter your information
              </h1>

              <div className="bg- w-[40rem] h-auto mt-4">
                <form className="space-y-2">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-xl">
                        Last Name
                      </h1>
                      <input
                        placeholder="Enter Last Name"
                        type="text"
                        className="bg-secondgrey border-b	 font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                        value={formData.last_name}
                        onChange={handleChange}
                        name="last_name"
                        required
                      />
                    </div>

                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-xl">
                        First Name
                      </h1>
                      <input
                        placeholder="Enter First Name"
                        type="text"
                        className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                        value={formData.first_name}
                        onChange={handleChange}
                        name="first_name"
                        required
                      />
                    </div>
                    <div className="flex-2">
                      <h1 className="text-white font-syke-light text-xl">
                        Sex
                      </h1>
                      <select
                        title="sex"
                        className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange}
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
                        Birth Date
                      </h1>
                      <input
                        placeholder="Enter Last Name"
                        type="date"
                        className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-xl">
                        Driver Type
                      </h1>
                      <select
                        title="drivertype"
                        className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                        value={formData.driver_type}
                        onChange={handleChange}
                        name="driver_type"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Staff">Staff</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-xl">
                        License Number
                      </h1>
                      <input
                        type="text"
                        className="bg-secondgrey border-b	 font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                        name="license_number"
                        value={formData.license_number}
                        onChange={handleChange}
                        placeholder="Enter license number"
                        required
                      />
                    </div>

                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-xl">
                        School email:
                      </h1>
                      <input
                        type="text"
                        className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                        name="school_email"
                        value={formData.school_email}
                        onChange={handleChange}
                        placeholder="Enter school email"
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
                  className="bg-buttongreen hover:bg-colorhover text-xl text-white py-2 px-4 w-[9rem] mt-[1rem] rounded-sm font-syke-bold"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterDriver;
