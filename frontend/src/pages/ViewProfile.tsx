import { useState } from "react";
import { useParams } from "react-router-dom";
import Violation from "../components/AdminViewProfileComponent/ViolationList";
import Vehicle from "../components/AdminViewProfileComponent/Vehicle";
import Profile from "../components/AdminViewProfileComponent/Profile";
import AdminHeader from "../components/AdminHeader";
import Header from "../components/Header";
import useGetDriver from "../hooks/driver-hooks/useGetDriver";
import { AuthContextType } from "../types/user.types";
import useAuth from "../hooks/context-hooks/useAuth";
import Loading from "../components/Loading";

const ViewProfile = () => {
  const { driverId } = useParams<{ driverId: string }>();
  const [activeSection, SetActiveSection] = useState("profile");
  const { loading, driver } = useGetDriver(driverId!);
  const { auth }: AuthContextType = useAuth();

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover sm:bg-top md:bg-right lg:bg-left bg-no-repeat h-screen">
      <div>{auth!.isAdmin ? <AdminHeader /> : <Header />}</div>

      <h1 className="text-4xl text-textgreen font-syke-bold mb-3 pb-3 ">
        My Gateway Account
      </h1>

      <div className="flex">
        <aside className="p-4 grid items-center">
          <nav>
            <div className="space-y-[2rem]">
              <button
                onClick={() => SetActiveSection("profile")}
                className={`block cursor-pointer transition-colors text-2xl font-syke-medium ${
                  activeSection === "profile"
                    ? "text-textgreen"
                    : "text-white hover:text-textgreen"
                }`}>
                Profile
              </button>

              <button
                onClick={() => SetActiveSection("vehicle")}
                className={`block cursor-pointer transition-colors text-2xl font-syke-medium ${
                  activeSection === "vehicle"
                    ? "text-textgreen"
                    : "text-white hover:text-textgreen"
                }`}>
                Vehicles
              </button>

              <button
                onClick={() => SetActiveSection("violation")}
                className={`block cursor-pointer transition-colors text-2xl font-syke-medium ${
                  activeSection === "violation"
                    ? "text-textgreen"
                    : "text-white hover:text-textgreen"
                }`}>
                Violations
              </button>
            </div>
          </nav>
        </aside>
        {activeSection === "profile" && <Profile driver={driver} />}
        {activeSection === "vehicle" && <Vehicle driver={driver} />}
        {activeSection === "violation" && (
          <Violation violations={driver.violations!} />
        )}
      </div>
    </div>
  );
};

export default ViewProfile;
