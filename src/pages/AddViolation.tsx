import { useNavigate } from "react-router-dom"
import AdminHeader from "../components/AdminHeader"
import React, { useState } from 'react';

const AddViolation = () => { 

    const navigate = useNavigate()

    const [currentStep, setCurrentStep] = useState(1);

    const handleCancelButton = () => { 
        navigate('/encode')
    };

    const handleNextClick = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBackClick = () => {
        setCurrentStep(currentStep - 1);

    };
    return( 
        <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
            <div className="w-full max-w-3xl mb-8 mt-5">
            <AdminHeader />
            </div>
        
        { currentStep === 1 && (

            <div>
                <div className="text-textgreen">
                    <h1 className="text-2xl font-bold">Step 1: Find Driver</h1>
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
                        className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                        required
                    />
                    </div>

                    <div className="w-full mt-6">
                    <label 
                        className="block text-white font-syke-regular mb-1">
                        License Number
                         : 
                    </label>
                    <input
                        type="text"
                        className="text-center bg-secondgrey w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-textgreen text-white rounded-sm"
                        required
                    />
                    </div>

                </div>
            </div>
        )}

        { currentStep === 2 && (
            <div>
                <div className="text-textgreen">
                    <h1 className="text-2xl font-bold">Step 2: Add Violation</h1>
                    <p>Add the driver's violation here...</p>
                </div>

                <div className="text-white mt-4 space-y-5">
                    <div className="flex space-x-20">
                        <h1>Last Name : </h1>
                        <h1>First Name : </h1>
                        <h1>Middle Name : </h1>
                    </div>

                    <div className="flex space-x-20">
                        <h1>Age : </h1>
                        <h1>Sex : </h1>
                    </div>
                    
                    <h1>Email : </h1>

                    <div className="flex space-x-20">
                        <h1>License Number : </h1>
                        <h1>License Expiration Date : </h1>
                    </div>
        
                      <h1>Driver Type : </h1>

                  </div>

                  <div className="flex justify-center mt-4">
                    <button 
                        type="submit"
                        className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
                        >
                        Add Violation 
                    </button>
                  </div>
            </div>
            
        )}
          
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

             {currentStep === 2 && (

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
                        Confirm
                        </button>
                    </div>
                </div>
             )}

        </div>
    )
}

export default AddViolation;