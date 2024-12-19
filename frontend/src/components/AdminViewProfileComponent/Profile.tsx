import { useState } from "react";
import { DriverWithVandC } from "../../types/datatypes";
import useEditDriver from "../../hooks/driver-hooks/useEditDriver";

const Profile = ({ driver }: { driver: DriverWithVandC }) => {
  const [isEditing, setIsEditing] = useState(false); 
  const [formData, setFormData] = useState<DriverWithVandC>(driver);

  const { editDriver } = useEditDriver();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); 
  };

  const handleEditToggle = async () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    await editDriver(formData);
    setIsEditing(false);
  };

  return (
    <div className="flex-col flex justify-center items-center w-full">
      <div className="w-full md:h-[25rem] h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="items-center p-4">
          <form className="lg:space-y-8 md:space-y-10 sm:space-y-12 space-y-14">
            <div className="flex space-x-1">
              <div className="flex-1">
                <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs"
                
                data-testid="profile-lastname">
                  Last Name:
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                    {formData.last_name}
                  </h1>
                )}
              </div>

              {/* FirstName */}
              <div className="flex-1">
                <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs">
                  First Name:
                </h1>
                {isEditing ? (
                  <input
                    title="firstname"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                    {formData.first_name}
                  </h1>
                )}
              </div>
              {/* Middle Name */}
              <div className="flex-1">
                <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs">
                  Middle Name:
                </h1>
                {isEditing ? (
                  <input
                  title="lastname"
                    type="text"
                    name="middle_name"
                    value={formData.middle_name || ""}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                    {formData.middle_name || "Unavailable"}
                  </h1>
                )}
              </div>
            </div>
            {/* Sex */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs">
                  Sex:
                </h1>
                {isEditing ? (
                  <input
                
                    type="text"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                    {formData.sex}
                  </h1>
                )}
              </div>
              {/* Date of Birth */}
              <div className="flex-1">
                <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs">
                  Date of Birth:
                </h1>
                {isEditing ? (
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                    {formData.date_of_birth}
                  </h1>
                )}
              </div>
              {/* Driver Type */}
              <div className="flex-1">
                <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs">
                  Driver Type:
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    name="driver_type"
                    value={formData.driver_type}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                    {formData.driver_type}
                  </h1>
                )}
              </div>
            </div>
            {/* Email */}
            <div className="space-y-2">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs">
                    Email:
                  </h1>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 rounded-sm text-black"
                    />
                  ) : (
                    <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                      {formData.email || "Unavailable"}
                    </h1>
                  )}
                </div>
              </div>
              {/* New Line */}
              <div className="flex space-x-4">
                {/* License Number */}
                <div className="flex-1">
                  <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs">
                    License Number:
                  </h1>
                  {isEditing ? (
                    <input
                      type="text"
                      name="license_number"
                      value={formData.license_number}
                      onChange={handleChange}
                      className="w-full p-2 rounded-sm text-black"
                    />
                  ) : (
                    <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                      {formData.license_number}
                    </h1>
                  )}
                </div>
                {/* License Expiration Date */}
                <div className="flex-1">
                  <h1 className="text-white font-syke-light lg:text-lg md:text-md sm:text-sm text-xs">
                    License Expiration Date:
                  </h1>
                  {isEditing ? (
                    <input
                      type="date"
                      name="license_expiration_date"
                      value={formData.license_expiration_date}
                      onChange={handleChange}
                      className="w-full p-2 rounded-sm text-black"
                    />
                  ) : (
                    <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg sm:text-md text-sm">
                      {formData.license_expiration_date}
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </form>
          
          <div className="flex justify-end mt-4 lg:text-lg md:text-md sm:text-sm text-xs">
            {isEditing ? (
              <button
                onClick={handleSaveEdit}
                className="p-2 px-4 m-2 bg-buttongreen hover:bg-lime-800 transition-colors rounded-sm text-white font-syke-bold">
                Save
              </button>
            ) : (
              <button
                onClick={handleEditToggle}
                className="p-2 px-4 m-2 bg-buttongreen hover:bg-lime-800 transition-colors rounded-sm text-white font-syke-bold">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
