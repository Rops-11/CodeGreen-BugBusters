import { useState } from "react";
import { Violation } from "../types/datatypes";
import useAddViolation from "../hooks/violation-hooks/useAddViolation";
import { toast } from "react-toastify";

const AddViolationComponent = ({
  driverId,
  setViolationModalActive,
}: {
  driverId: string;
  setViolationModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { postViolation } = useAddViolation();
  const date = new Date().toJSON()

  const [formData, setFormData] = useState<Violation>({
    driver_id: driverId,
    violation_type: "",
    violation_date: date.slice(0, 10),
    description: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await postViolation(formData);
    setViolationModalActive(false);
  };

  const handleCancelButton = () => {
    setViolationModalActive(false);
  };

  const handleNextClick = async () => {
    const { violation_type, violation_date, description } = formData;

    if (!violation_type || !violation_date || !description) {
      toast.error("Missing input fields.");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="absolute flex flex-col m-auto w-full left-0 right-0 top-0 bottom-0 items-center justify-center h-full px-6 py-5 bg-secondgrey rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <h1 className="text-3xl font-syke-bold text-textgreen">
        Adding a Violation
      </h1>
      {currentStep === 1 && (
        <>
          <p className="text-textgreen font-syke-light text-lg">Enter violation details.</p>
          <div className="flex flex-col space-y-3 p-3 w-full max-w-lg mx-auto">

            <div className="flex space-x-4 w-full">
              <div className="flex flex-col w-1/2">
                <h1 className="text-white font-syke-light text-xl">
                  Violation Type
                </h1>
                <input
                  type="text"
                  className="bg-secondgrey font-syke-regular text-md w-full px-4 py-2 borderborder-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                  name="violation_type"
                  placeholder="Enter Type of Violation"
                  value={formData.violation_type}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-1/3">
                <h1 className="text-white font-syke-light text-xl">
                  Violation Date
                </h1>
                <input
                  type="date"
                  className="bg-secondgrey font-syke-regular text-md w-full px-4 py-2 borderborder-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                  name="violation_date"
                  placeholder="Enter Violation Date"
                  value={formData.violation_date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="flex flex-col w-full">
                <h1 className="text-white font-syke-light text-xl">
                  Description
                </h1>
                <input
                  type="text"
                  className="bg-secondgrey font-syke-regular text-md w-full px-4 py-2 borderborder-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                  name="description"
                  placeholder="Enter Violation Description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </>
      )}

{currentStep === 2 && (
  <>
    <p className="text-textgreen mb-6">Confirm violation details below.</p>
    <div className="flex flex-col items-center space-y-6 w-full max-w-lg mx-auto">
      
      <div className="flex space-x-4 w-full">
        {/* Violation Type */}
        <div className="flex flex-col w-1/2">
          <h1 className="text-white font-syke-light text-xl mb-2">
            Violation Type
          </h1>
          <h1 className="text-textgreen font-syke-medium text-2xl">
            {formData.violation_type}
          </h1>
        </div>

        {/* Violation Date */}
        <div className="flex flex-col w-1/2">
          <h1 className="text-white font-syke-light text-xl mb-2">
            Violation Date
          </h1>
          <h1 className="text-textgreen font-syke-medium text-2xl">
            {formData.violation_date || "Date Today"}
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col w-full">
        <h1 className="text-white font-syke-light text-xl mb-2">
          Description
        </h1>
        <h1 className="text-textgreen font-syke-medium text-2xl">
          {formData.description}
        </h1>
      </div>
    </div>
  </>
)}


      <div className="flex justify-center items-center gap-5 p-5">
        {currentStep === 1 && (
          <>
            <button
              type="button"
              className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleCancelButton}>
              Cancel
            </button>

            <button
              type="button"
              className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleNextClick}>
              Next
            </button>
          </>
        )}
        {currentStep === 2 && (
          <>
            <button
              type="button"
              className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleBackClick}>
              Back
            </button>

            <button
              type="button"
              className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleSubmit}>
              Add Violation
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddViolationComponent;