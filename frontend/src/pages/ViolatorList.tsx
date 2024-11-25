
// const ViolatorList = () => { 
//     return (
//         <p>Violator List Page!</p>
//     )
// }

// export default ViolatorList;


import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import { ViolatorsTable } from "../types/datatypes";
import { useEffect, useState } from "react";

const ViolatorList = () => {
  const navigate = useNavigate();

  const [violators, setViolators] = useState<ViolatorsTable[]>([
    {
      id: "1",
      first_name: "Love",
      last_name: "Alcorin",
      paid_status: true,
      violation_date: "Ror",
      violation_type: "d",
    },
    {
      id: "2",
      first_name: "Love",
      last_name: "Faith",
      paid_status: true,
      violation_date: "Ror",
      violation_type: "d",
    },
  ])
  useEffect(() => {

    const getData = async () => {
      return await fetch("").then(res => res.json())
    }

    getData().then(res => {
      setViolators(res)
    })
  }, [])

  // Sample data for violators

  return (
    <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <AdminHeader />
      </div>

      {/* Table Container */}
      <div className="w-full max-w-3xl overflow-x-auto bg-zinc-600 text-white">
        <table className="min-w-full border border-gray-300 rounded-md">
          <thead>
            <tr className="bg-zinc-700 text-white border-b">
              <th className="py-3 px-4 text-left font-semibold">Last Name</th>
              <th className="py-3 px-4 text-left font-semibold">First Name</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
              <th className="py-3 px-4 text-left font-semibold">Date</th>
              <th className="py-3 px-4 text-left font-semibold">Type</th>
            </tr>
          </thead>
          <tbody>
            {violators.map(({ id, first_name, last_name, paid_status, violation_date, violation_type }) => (
              <tr key={id} className="border-b hover:bg-zinc-500">
                <td className="py-3 px-4">{last_name}</td>
                <td className="py-3 px-4">{first_name}</td>
                <td className="py-3 px-4">{paid_status}</td>
                <td className="py-3 px-4">{violation_date}</td>
                <td className="py-3 px-4">{violation_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViolatorList;