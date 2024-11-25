import Header from "../components/Header";
import { useState } from "react";

const Policies = () => {
  const [activeSection, setActiveSection] = useState("protocols");

  return (
    <div className="flex flex-col items-center min-h-screen bg-adminlanding-bg">

      <div>
        <Header/>
      </div>
      
      <div className="flex flex-grow w-full"
      >
        <div className="flex flex-col items-start p-2 ml-2 space-y-4 bg-none w-1/5">
          <button
            type="button"
            className={`text-left text-lg ${
            activeSection === "protocols"
                ? "text-textgreen font-semibold opacity-100 underline decoration-white "
                : "text-white opacity-50"
            }`}
            onClick={() => setActiveSection("protocols")}
          >
            Protocols and Decorum
          </button>

          <button
            type="button"
            className={`text-left text-lg ${
            activeSection === "rules"
                ? "text-textgreen font-semibold opacity-100 underline decoration-white"
                : "text-white opacity-50"
            }`}
            onClick={() => setActiveSection("rules")}
          >
            Rules and Regulations
          </button>
        </div>

        <div className="flex flex-col mr-24 mb-6 w-full bg-hoverbutton p-8 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 border border-textgreen">

          {activeSection === "protocols" && (
            <div className="text-white space-y-4 mt-2 ">

              <h1 
              className="font-bold text-textgreen text-2xl">
                CPU Traffic Protocol and Decorum
                </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
              1.
              </span>
                 All vehicle owner/drivers are required to open their windows for
                visual inspection and identification when going in and out of the CPU
                campus.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
              2.
              </span>
               The speed limit inside the campus is 15KPH. OVERTAKING is not allowed.
                </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
              3.
              </span>
                All vehicles/motorcycles must park properly at designated parking
                areas. Illegal parking and Blocking of Driveway are not allowed.
                Observe No Loading/Unloading signs on designated areas.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
              4.
              </span>
                Blowing horns, loud noise, and blaring sounds of all
                vehicles/motorcycles are not allowed.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
              5.
              </span>
                All vehicles/motorcycles must follow all implementing traffic
                routes and road signs on campus.
              </h1>

              <h1>
              <span 
                className="text-textgreen font-bold mr-1">
              6.
              </span>
                The following are not allowed inside the campus:
                <div 
                className="ml-12 mt-2 space-y-2">

                  <h1 
                  className="whitespace-normal">
                    <span 
                    className="text-textgreen font-bold mr-1">
                    a.
                    </span>
                    Smoking belching vehicles.
                    </h1>

                  <h1 
                  className="whitespace-normal">
                    <span 
                      className="text-textgreen font-bold mr-1">
                    b.
                    </span>
                    Vehicles suspected of carrying bombs, dangerous chemicals or
                    contaminated by hazardous elements.
                  </h1>

                  <h1 
                  className="whitespace-normal">
                    <span 
                    className="text-textgreen font-bold mr-1">
                    c.
                    </span>
                    Vehicle suspected of being used by criminal elements or used for Kidnap for Ransom (KFR).
                    </h1>

                  <h1 
                  className="whitespace-normal">
                    <span 
                    className="text-textgreen font-bold mr-1">
                    d.
                    </span>
                    Tricycles, pedicabs or tri-sikads and similar types of
                    transportation (except when the owner is issued a special permit by
                    the CPU Administration).
                  </h1>
                </div>
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                7.
                </span>
                Vehicles involved in accidents inside the campus will be held by the
                CPU guards for inspection and upon verification from the proper
                authorities.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                8.
                </span>
                Any vehicle suspected or found bringing illegal drugs, fireams,
                deadly weapons, alcoholic drinks, or prographic materials inside the
                campus will be held by the CPU guards for inspection and proper disposition of the CPU
                Administration and PNP or any related Law Enforcement Agencies.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
              9.
              </span>The CPU Administration through the Campus Traffic, Security and
                Safety Office has the discretion to allow or prevent any vehicle or
                motorcycle entry to the CPU campus if it compromises the safety and security of the
                University.
              </h1>

              <h1 
              className="whitespace-normal" >
                <span 
                className="text-textgreen font-bold mr-1">
              10.
              </span>
                All drivers should follow CPU administrative policies, especially
                those concerning health and safety protocols.
              </h1>

            </div>
          )}

          {activeSection === "rules" && (
            <div className="text-white space-y-4 mt-2 ">

              <h1 
              className="font-bold text-textgreen text-2xl">
                Parking Rules and Regulations 
                </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                1.
                </span>
                All vehicles/motorcycles are required to park properly at designated parking areas.
                </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                2.
                </span>
                Avoid parking on roadsides and gutters on campus.
                </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                3.
                </span>
                Any damage caused by a vehicle/motorcycle to any CPU property shall
                be properly assessed and the owner will be charged the amount
                equivalent to its current cost.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                4.
                </span>
                Vehicles/motorcycles with car passes are given priority in parking
                areas while non-car pass vehicles are limited to only 3 hours on
                parking inside the campus unless it is used for official purposes and sanctioned by the University
                Administration. All vehicles/motorcycles owners must follow 10:00 PM to
                5:00 AM curfew hours inside the campus.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                5.
                </span>
                A vehicle/motorcycle who wants to park overnight inside the campus
                must ask permission from CPU Administration.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
              6.
              </span>
                The CPU Administration is not liable for any loss or damage that may
                happen to any vehicle/motorcycle while parked inside the campus.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                7.
                </span>
                The CPU Administration has the right to revoke parking privileges to
                any vehicle/motorcycle as necessary to protect the University in
                <br />accordance with the University standing policies for security and safety reasons.
              </h1>

              <h1 
              className="whitespace-normal">
                <span 
                className="text-textgreen font-bold mr-1">
                8.
                </span>
                Parking inside the CPU Campus is only a privilege given by the
                Administration and not a right given to any individual or group
                regardless of his position or affiliation.
              </h1>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Policies;
