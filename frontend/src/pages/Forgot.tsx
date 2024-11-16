import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false); // New state for the success message
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailSent(true);
  };

  const handleReturn = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center bg-hoverbutton bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="bg-hoverbutton p-5 rounded-sm w-">
        <div className="flex flex-col justify-center items-start font-syke-medium text-textgreen text-4xl gap-2">
          <h1>Reset Password</h1>
        </div>
        <h5 className="font-skye-regular text-white mt-2">
          Please enter your email address to request a password reset.
        </h5>

        <form className="space-y-2" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondgrey mt-4 font-syke-regular w-11/12 px-3 py-2 focus:shadow-inner border-none focus:outline-none focus:ring-1 focus:ring-textgreen rounded-sm text-white placeholder-white"
              placeholder="Email"
              required
            />
            <h1
              className="mt-4 mb-2 text-buttongreen cursor-pointer font-syke-medium text-sm"
              onClick={handleReturn}
            >
              Remembered your password?
            </h1>
          </div>
          <button
            type="submit"
            className={`w-1/2 py-2 font-syke-regular transition-colors rounded-sm ${
              isEmailSent
                ? "bg-gray-500 text-white"
                : "bg-buttongreen text-white hover:bg-[#33471a]"
            }`}
          >
            {isEmailSent ? "Email Sent" : "Send Reset Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
