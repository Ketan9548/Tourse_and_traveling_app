import { assestfile } from "../../assets/assetsfile";
import { useState } from "react";

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
    <div className="flex flex-col md:flex-row justify-between bg-blue-400 bg-opacity-55 items-center p-4 shadow-md">
      <div className="flex items-center space-x-3">
        <img
          className="h-10 w-auto"
          src={assestfile.logo_img || ""}
          alt="logo"
        />
        <p className="text-lg font-semibold text-white">Admin Panel</p>
      </div>

      <div className="relative mt-3 md:mt-0">
        <img
          className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
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
  );
};

export default Navbar;
