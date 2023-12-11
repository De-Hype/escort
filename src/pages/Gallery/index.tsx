import GalleryHeader from "components/GalleryHeader";
import avatar from "../../assets/images/GalleryAssets/avatar.svg";
import home from "../../assets/images/GalleryAssets/home.svg";
import dropdown from "../../assets/images/GalleryAssets/dropdown.svg";
import profile from "../../assets/images/GalleryAssets/profile.svg";
import gallery from "../../assets/images/GalleryAssets/gallery.svg";
import edit from "../../assets/images/GalleryAssets/edit.svg";
import settings from "../../assets/images/GalleryAssets/settings.svg";
import stars from "../../assets/images/GalleryAssets/stars.svg";
import videos from "../../assets/images/GalleryAssets/videos.svg";
import logout from "../../assets/images/GalleryAssets/logout.svg";
import coloredvideo from "../../assets/images/GalleryAssets/coloredvideo.svg";
import { Link } from "react-router-dom";
import GalleryFooter from "components/GalleryFooter.tsx";
import GalleryImageCol from "components/GalleryImageCol";

const Gallery: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[20px] bg-[#FD00B3]"></div>
        <GalleryHeader />
        <div
          className="bg-cover  bg-no-repeat flex flex-col min-h-[1032px] items-center justify-start mx-auto p-[25px] sm:px-5 w-full"
          style={{
            backgroundImage:
              "url('images/img_loginbannermasksvg_black_900.png')",
          }}
        >
          <div className="w-full flex items-center gap-5 ">
            <div className="w-[350px] self-start gap-3 px-[10px] py-[15px] flex flex-col bg-[#fff] rounded-sm shadow border">
              <div className="flex flex-col justify-center gap-3 items-center">
                <img
                  src={avatar}
                  className="w-[120px] h-[120px] rounded-full"
                  alt=""
                />
                <div className="flex flex-col gap-1 justify-center items-center">
                  <h3 className="font-bold text-[1.4rem]">Elly Steph</h3>
                  <p className="text-[#999999]">
                    ID:<span>8312630</span>
                  </p>
                </div>
                <Link
                  className="bg-[#FD00B3] opacity-30 text-[#000] rounded w-[90%] py-[5px] text-center"
                  to="/"
                >
                  Public Profile
                </Link>
              </div>
              <div className="">
                <Link
                  className="flex gap-4  items-center px-2 pb-[23px] pt-[10px]"
                  to="/"
                >
                  <img src={home} alt="" /> <span>Dashboard</span>
                </Link>
                <div className=" border-y">
                  <Link
                    className="flex w-full items-center justify-between  py-4 px-2"
                    to="/"
                  >
                    <div className="flex items-center gap-4 ">
                      <img src={profile} alt="" /> <span>Profile</span>
                    </div>
                    <span>
                      <img src={dropdown} alt="" />
                    </span>
                  </Link>
                  <div className="flex flex-col ">
                    <Link
                      className="flex gap-4 justify-center bg-[#FD00B3] items-center py-3 px-2 "
                      to="/"
                    >
                      <div className="flex gap-2 items-center">
                        <img src={gallery} alt="" /> <span>Gallery</span>
                      </div>
                    </Link>
                    <Link
                      className="flex gap-2 justify-center  items-center py-3 px-2 "
                      to="/"
                    >
                      <div className="flex gap-2 items-center">
                        <img src={edit} alt="" /> <span>Edit profile</span>
                      </div>
                    </Link>
                  </div>
                  <Link
                    className="flex w-full items-center gap-4 py-4 px-2"
                    to="/"
                  >
                    <img src={settings} alt="" /> <span>Settings</span>
                  </Link>
                  <Link
                    className="flex w-full items-center gap-4  py-4 px-2"
                    to="/"
                  >
                    <img src={stars} alt="" />
                    <span>LadiesSTARS</span>
                  </Link>
                </div>
                <Link
                  className="flex w-full items-center gap-4  py-4 px-2"
                  to="/"
                >
                  <img src={videos} alt="" />{" "}
                  <span className="text-slate-400">Live videos</span>
                </Link>
                <div className="flex w-full items-center gap-4  py-4 px-2">
                  <img src={logout} alt="" />{" "}
                  <span className="text-slate-400">Logout</span>
                </div>
              </div>
            </div>
            <div className="w-full  bg-[#fff] flex flex-col gap-4 rounded-sm shadow border py-[30px]  pl-[20px] pr-[30px]">
              <div className="pt-[25px] flex flex-col gap-4  pb-[50px] pl-[15px]">
                <h3 className="font-bold text-[1.6rem]">Gallery</h3>
                <div className="flex flex-col gap-3">
                  <GalleryImageCol />
                  <GalleryImageCol />
                  <GalleryImageCol />
                </div>
                <div className="flex text-[#fff] items-center rounded-full justify-center px-[10px] py-[9px] mt-[20px] w-2/4 bg-[#FD00B3] ">
                  <div className="flex items-center gap-5">
                    <span>Click to view Livecam</span>
                    <div className="bg-[#fff] py-3 px-3 rounded-full shadow">
                      <img src={coloredvideo} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GalleryFooter />
      </div>
    </>
  );
};

export default Gallery;
