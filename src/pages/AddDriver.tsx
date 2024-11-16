import { useNavigate } from "react-router-dom"
import AdminHeader from "../components/AdminHeader"
import React, { useState } from 'react';

import { Driver } from "../types/datatypes";

const AddDriver = () => { 

    const formInitialvalues: Driver = {
        date_of_birth: "",
        driver_type: "", 
        email: "",
        first_name: "",
        id: "",
        is_driver_registered: false,
        last_name: "",
        license_expiration_date: "",
        license_number: "",
        middle_name: "",
        sex: "", 
        user_id: null
    };
    
    const [formData, setFormData] = useState(formInitialvalues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //pass
    };

    const navigate = useNavigate()
    
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextClick = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBackClick = () => {
        setCurrentStep(currentStep - 1); 
    };
    
    const handleCancelButton = () => { 
        navigate('/encode')
     }
    
    const handleAddButton = () => { 
      navigate("/admin")
    }
        return (
            <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
              <div className="w-full max-w-3xl mb-8 mt-5">
                <AdminHeader />
              </div>

              <form onSubmit={ handleSubmit }>
              {currentStep === 1 && (
                <div>
                  <div className="text-textgreen">
                    <h1 className="text-2xl font-bold">Step 1: Add Driver</h1>
                    <p>Enter the driver information here...</p>
                  </div>

                  <div className="mt-12">
                    <div className="w-full mt-6">
                      <label 
                        className="block text-white font-syke-regular mb-1">
                        Last Name : 
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={ formData.last_name }
                        onChange={ handleInputChange }
                        className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                        required
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label 
                        className="block text-white font-syke-regular mb-1">
                        First Name : 
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={ formData.first_name }
                        onChange={ handleInputChange }
                        className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                        required
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label 
                        className="block text-white font-syke-regular mb-1">
                        Middle Name (Optional) : 
                      </label>
                      <input
                        type="text"
                        name="middle_name"
                        value={ formData.middle_name }
                        onChange={ handleInputChange }
                        className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                      />
                    </div>

                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <div className="text-textgreen">
                    <h1 className="text-2xl font-bold">Step 2: More Information</h1>
                    <p>Enter the driver information here...</p>
                  </div>

                  <div className="mt-12">

                    <label 
                      className="block text-white font-syke-regular mb-1">
                      Date of Birth : 
                    </label>

                    <input
                      name="date_of_birth"
                      type="date"
                      value={ formData.date_of_birth }
                      onChange={ handleInputChange }
                      className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                      required
                    />
                  </div>

                  <div className="mt-6">

                    <label 
                      className="block text-white font-syke-regular mb-1">
                      Sex : 
                    </label>

                    <select
                    name="sex"
                    value={ formData.sex }
                    onChange={ handleInputChange }
                      className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                      required
                    >
                      <option 
                        value="" 
                        disabled selected>
                        --Select--
                      </option>
                      
                      <option 
                        value="male">
                        Male
                      </option>

                      <option 
                        value="female">
                        Female
                      </option>

                    </select>
                  </div>

                  <div className="mt-6">
                    <label 
                      className="block text-white font-syke-regular mb-1">
                      Driver Type : 
                    </label>

                    <select
                      name="driver_type"
                      value={ formData.driver_type }
                      onChange={ handleInputChange }
                      className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                      required
                    >
                      <option 
                        value="" 
                        disabled selected>
                        --Select--
                      </option>

                      <option 
                        value="student">
                        Student
                      </option>

                      <option 
                        value="staff">
                        Staff
                      </option>

                      <option 
                        value="faculty">
                        Faculty
                      </option>

                    </select>
                  </div>

                  
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <div className="text-textgreen">
                    <h1 className="text-2xl font-bold">Step 3: License Information</h1>
                    <p>Enter the license information here...</p>
                  </div>

                  <div className="mt-20">
                    <div className="w-full">
                      <label 
                      className="block text-white font-syke-regular mb-1">
                        License Number : 
                        </label>
                      <input
                        value={ formData.license_number }
                        onChange={ handleInputChange }
                        name="license_number"
                        type="text"
                        className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                        pattern="^\d+$"
                        required
                      />
                    </div>

                    <div className="w-full mt-8">
                      <label 
                        className="block text-white font-syke-regular mb-1">
                        License Expiration : 
                      </label>
                      
                      <input
                        value={ formData.license_expiration_date }
                        onChange={ handleInputChange }
                        name="license_expiration_date"
                        type="date"
                        className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              { currentStep === 4 && ( 
                <div>
                  <div className="text-textgreen">
                    <h1 className="text-2xl font-bold">Step 4: Confirm Details</h1>
                    <p>Confirm the following details if it is correct...</p>
                  </div>

                  <div className="text-white mt-10">
                      <h1 className="mt-2">Last Name : </h1>
                      <h1>First Name : </h1>
                      <h1>Middle Name : </h1>
                      <h1>Age : </h1>
                      <h1>Sex : </h1>
                      <h1>Email : </h1>
                      <h1>License Number : </h1>
                      <h1>License Expiration Date : </h1>
                      <h1>Driver Type : </h1>
                  </div>
                </div>
              )}

              <div className="relative">
                
              { currentStep === 1 && (
               
               <div className="text-center flex justify-center gap-40 p-10">
                <div>
                    <button
                        type="button"
                        className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                        onClick={ handleCancelButton }
                        >
                        Cancel
                        </button>
                    </div>

                <div>
                    <button
                        type="button"
                        className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                        onClick={ handleNextClick }
                        >
                        Next
                        </button>
                        
                    </div>
                </div>

              
             )}

             {(currentStep === 2 || currentStep === 3) && (

                <div className="flex justify-center gap-40 p-10">
                <div>
                    <button
                        type="button"
                        className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                        onClick={ handleBackClick }
                        >
                        Back
                        </button>
                    </div>

                <div>
                    <button
                        type="button"
                        className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                        onClick={ handleNextClick }
                        >
                        Next
                        </button>
                    </div>
                </div>
             )}

             {currentStep === 4 && (
                <div className="flex justify-center gap-40 p-10">
                <div>
                    <button
                        type="button"
                        className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                        onClick={ handleBackClick }
                        >
                        Back
                        </button>
                    </div>

                <div>
                    <button
                        type="submit"
                        className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                        onClick={ handleAddButton }
                        >
                        Add
                        </button>
                    </div>
                </div>
             )}

                </div>
              </form>
              
            </div>
          );
        };
        
export default AddDriver;
