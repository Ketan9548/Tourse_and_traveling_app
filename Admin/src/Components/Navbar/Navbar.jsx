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
    <div className="flex flex-row justify-between sticky bg-blue-400 bg-opacity-55 items-center p-4">
      <div className="flex flex-col items-center">
        <img className="logo h-10 w-auto mr-2" src="" alt="logo" />
        <p className="text-lg font-semibold">Admin Panel</p>
      </div>
      <div className="relative">
        <img
          className="mt-1 ml-1 h-12 w-12 rounded-full object-cover"
          src={profileImage}
          style={{ height: "85px", width: "85px" }}
          alt="profile_image"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
