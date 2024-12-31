import { assestfile } from "../../assets/assetsfile";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [profileImage, setProfileImage] = useState(assestfile.profile_img);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-yellow-700 bg-opacity-80 p-4 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center flex-col space-x-4">
        <NavLink to="addservice">
          <img
            className="h-10 w-auto"
            src={assestfile.logo_img || ""}
            alt="logo"
          />
        </NavLink>
        <p className="text-lg font-bold text-white tracking-wider">
          Admin Panel
        </p>
      </div>

      {/* Header Section */}
      <div className="flex items-center space-x-8 mt-4 md:mt-0">
        <div className="bg-white p-2 border-2 border-white rounded-3xl pl-4 pr-4 text-black">
          <NavLink
            to="login"
            className="text-sm md:text-base font-medium transition duration-300"
          >
            Login
          </NavLink>
        </div>
        <div className="bg-white p-2 border-2 border-white rounded-3xl pl-4 pr-4 text-black">
          <NavLink
            to="registration"
            className="text-sm md:text-base text-black font-medium transition duration-300"
          >
            Registration
          </NavLink>
        </div>
        <div className="relative cursor-pointer group">
          <img
            className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border-2 border-white shadow-lg"
            src={profileImage}
            alt="profile_image"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            title="Change Profile Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
