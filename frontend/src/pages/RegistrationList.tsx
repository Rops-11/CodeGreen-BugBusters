import { useState } from "react";
import { toast } from "react-toastify";
import useGetRegistration from "../hooks/registration-hooks/useGetRegistration";
import AdminHeader from "../components/AdminHeader";
import RegistrationListCard from "../components/RegistrationListCard";
import { Registration } from "../types/datatypes";
import { useApproveRegistration } from "../hooks/registration-hooks/useApproveRegistration";

const RegistrationList = () => {
  const { registration: registrations } = useGetRegistration();
  const [selectedRegistration, setSelectedRegistration] =
    useState<Registration>();
  const { approveRegistration, loading } = useApproveRegistration();

  const handleRegisterClick = (registration: Registration) => {
    setSelectedRegistration(registration);
  };

  const handleAccept = async () => {
    if (!selectedRegistration?.license_number) {
      toast.error("License number is missing for the selected registration.");
      return;
    }

    await approveRegistration(selectedRegistration.license_number);
  };

  if (!registrations || registrations.length === 0) {
    return <div>No registrations found.</div>;
  }

  return (
    <div className="flex flex-col items-center bg-adminlanding-bg min-h-screen">
      <div>
        <AdminHeader />
      </div>
      <div className="w-[75rem] h-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="max-w-full max-h-full flex justify-center items-center">
          <div className="w-[35rem] p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            {selectedRegistration ? (
              <div className="items-center px-5">
                <div className="text-left font-syke-light text-white">
                  <div className="text-textgreen py-2 mb-9">
                    <h1 className="text-4xl font-syke-bold">
                      Registration Details
                    </h1>
                    <div>Approve or Reject Registration.</div>
                  </div>
                </div>
                <form className="space-y-[2rem]">
                  <div className="flex space-x-1">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        Last Name
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedRegistration.last_name || ""}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        First Name
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedRegistration.first_name || ""}
                      </h1>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">Sex</h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedRegistration.sex || ""}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        Date of Birth
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedRegistration.date_of_birth || "MM/DD/YY"}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        Driver Type
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedRegistration.driver_type || ""}
                      </h1>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <h1 className="text-white font-syke-light text-l">
                          Email
                        </h1>
                        <h1 className="text-textgreen font-syke-medium text-xl">
                          {selectedRegistration.school_email || ""}
                        </h1>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-1">
                        <h1 className="text-white font-syke-light text-l">
                          License Number
                        </h1>
                        <h1 className="text-textgreen font-syke-medium text-xl">
                          {selectedRegistration.license_number || ""}
                        </h1>
                      </div>
                      <div>
                        <button
                          onClick={handleAccept}
                          disabled={loading}
                          className="p-2 px-4 m-2 bg-hoverbutton hover:bg-buttongreen transition-colors rounded-sm text-white font-syke-bold"
                        >
                          {loading ? "Processing..." : "Accept"}
                        </button>
                        <button className="p-2 px-5  m-2 bg-hoverbutton hover:bg-red-900 transition-colors rounded-sm text-white font-syke-bold">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-white text-center font-syke p-2">
                Select a registration to see details.
              </div>
            )}
          </div>
          <div className="w-[50%] h-full p-6 rounded-md">
            <div className="text-left rounded-xl bg-clip-padding">
              <div className="text-left font-syke-light text-white">
                <div className="text-textgreen py-3">
                  <h1 className="text-4xl font-syke-bold">
                    Registration's List
                  </h1>
                  <div>List of Users that Registered.</div>
                </div>
              </div>
              <div
                className="w-full h-[20rem] overflow-y-auto"
                id="listcontainer"
              >
                <div className="flex flex-col overflow-y-auto h-80 scrollbar-thin scrollbar text-white">
                  {registrations && registrations.length > 0 ? (
                    registrations.map((registration) => (
                      <div
                        key={registration.user_id}
                        className="cursor-pointer hover:bg-secondgrey"
                        onClick={() => handleRegisterClick(registration)}
                      >
                        <RegistrationListCard
                          key={registration.user_id}
                          user_id={registration.user_id!}
                          license_number={registration.license_number!}
                          school_email={registration.school_email!}
                          first_name={registration.first_name!}
                          last_name={registration.last_name!}
                          sex={registration.sex!}
                          driver_type={registration.driver_type!}
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-white text-center">No drivers found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationList;
