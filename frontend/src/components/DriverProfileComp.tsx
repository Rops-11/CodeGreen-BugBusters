import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DriverProfileComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-full max-h-full justify-center">
      <div className="w-[35rem] h-[auto] mt-4 bg-hoverbutton p-5 rounded-sm">
        <form className="space-y-[2rem]">
          <div className="flex space-x-4">
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">Last Name</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Alcorin
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">First Name</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Shawn Patrick
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">Middle Name</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Surilla
              </h1>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">Sex</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Female
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">
                Date of Birth
              </h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                02/29/2004
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">Driver Type</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Student
              </h1>
            </div>
          </div>

          <div className="spacce-x-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Email</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  shawnpatrick.alcorin-23@cpu.edu.ph
                </h1>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  License Number
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  NO3-12-123456
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  License Expiration Date
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  03/10/2026
                </h1>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriverProfileComponent;
