import React, { useState } from "react";
import { Car } from "../types/datatypes";
import useAddCar from "../hooks/car-hooks/useAddCar";
import { toast } from "react-toastify";

const AddCar = ({
  driverId,
  licenseNumber,
  setVehicleModalActive,
}: {
  driverId: string;
  licenseNumber: string;
  setVehicleModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { postCar } = useAddCar();

  const [formData, setFormData] = useState<Car>({
    driver_id: driverId,
    brand: "",
    car_model: "",
    color: "",
    license_number: licenseNumber,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await postCar(formData);
    setVehicleModalActive(false);
  };

  const handleCancelButton = () => {
    setVehicleModalActive(false);
  };

  const handleNextClick = async () => {
    const { brand, car_model, color, license_number } = formData;
    
    if (!brand || !car_model || !color || !license_number) {
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
      <h1 className="text-3xl font-syke-bold text-textgreen p-2">
        Adding a Car
      </h1>
      {currentStep === 1 && (
        <>
          <p className="text-textgreen font-syke-light text-lg">Enter car details.</p>
          <div className="flex flex-col space-y-4 p-3">

            <div className="flex space-x-3">
              <div className="flex flex-col w-full">
                <h1 className="text-white font-syke-light text-xl">
                  License Plate
                </h1>
                <input
                  type="text"
                  className="bg-secondgrey font-syke-light w-full px-4 py-2 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                  name="license_plate"
                  placeholder="Enter License Plate"
                  value={formData.license_plate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="flex flex-col w-1/3">
                <h1 className="text-white font-syke-light text-xl">
                  Brand
                </h1>
                <input
                  type="text"
                  className="bg-secondgrey font-syke-light w-full px-4 py-2 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                  name="brand"
                  placeholder="Enter Car Brand"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-1/3">
                <h1 className="text-white font-syke-light text-xl">
                  Model
                </h1>
                <input
                  type="text"
                  className="bg-secondgrey font-syke-light w-full px-4 py-2 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                  name="car_model"
                  placeholder="Enter Car Model"
                  value={formData.car_model}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-1/3">
                <h1 className="text-white font-syke-light text-xl">
                  Color
                </h1>
                <input
                  type="text"
                  className="bg-secondgrey font-syke-light w-full px-4 py-2 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                  name="color"
                  placeholder="Enter Car Color"
                  value={formData.color}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
        <p className="text-textgreen font-syke-light text-lg">Confirm car details.</p>
        <div className="grid grid-cols-2 gap-6 p-5 w-full max-w-xl">
          <div className="flex flex-col">
            <h1 className="text-white font-syke-light text-xl">
              License Plate
            </h1>
            <h1 className="text-textgreen font-syke-medium text-3xl">
              {formData.license_plate}
            </h1>
          </div>
      
          {/* Model */}
          <div className="flex flex-col">
            <h1 className="text-white font-syke-light text-xl">
              Model
            </h1>
            <h1 className="text-textgreen font-syke-medium text-3xl">
              {formData.car_model}
            </h1>
          </div>
      
          {/* Brand */}
          <div className="flex flex-col">
            <h1 className="text-white font-syke-light text-xl">
              Brand
            </h1>
            <h1 className="text-textgreen font-syke-medium text-3xl">
              {formData.brand}
            </h1>
          </div>
      
          {/* Color */}
          <div className="flex flex-col">
            <h1 className="text-white font-syke-light text-xl">
              Color
            </h1>
            <h1 className="text-textgreen font-syke-medium text-3xl">
              {formData.color}
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
              Add Car
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddCar;
