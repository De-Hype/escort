import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import Header2 from "components/Header2";
import avatar from "../../assets/images/GalleryAssets/avatar.svg";
import home from "../../assets/images/GalleryAssets/home.svg";
import dropdown from "../../assets/images/GalleryAssets/dropdown.svg";
import profile from "../../assets/images/GalleryAssets/profile.svg";
import galleryNoHighlight from "../../assets/images/GalleryAssets/galleryNoHighlight.svg";
import edit from "../../assets/images/GalleryAssets/edit.svg";
import settings from "../../assets/images/GalleryAssets/settings.svg";
import stars from "../../assets/images/GalleryAssets/stars.svg";
import videos from "../../assets/images/GalleryAssets/videos.svg";
import logout from "../../assets/images/GalleryAssets/logout.svg";
import { Link } from "react-router-dom";

const preferredLanguageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const educationLevelOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DesktopFourtyEight = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col overflow-x-hidden font-montserrat items-start justify-start mx-auto pb-[414px] w-full">
        <div className="flex flex-col gap-[35px] items-center w-full">
          <Header2 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="flex flex-col mx-auto w-full">
              <div
                className="bg-cover bg-no-repeat h-[1032px] md:h-[917px] sm:h-[971px] mx-auto pl-[13px] py-[13px] w-full"
                style={{
                  backgroundImage:
                    "url('images/img_loginbannermasksvg_black_900.png')",
                }}
              >
                <div className="flex m-auto w-[98%] md:w-full">
                  
                  <div className="w-[22%] self-start gap-3 px-[10px] py-[15px] flex flex-col bg-[#fff] rounded-sm shadow border">
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
                      className="flex gap-4 justify-center  items-center py-3 px-2 "
                      to="/"
                    >
                      <div className="w-1/2">
                        <div className="flex gap-2 items-center">
                          <img src={galleryNoHighlight} alt="" />{" "}
                          <span className="">Gallery</span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="flex gap-2 justify-center  items-center py-3 px-2 "
                      to="/"
                    >
                      <div className="w-1/2">
                        <div className="flex gap-2 items-center">
                          <img src={edit} alt="" /> <span>Edit profile</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link
                    className="flex w-full items-center bg-[#FD00B3] gap-4 py-4 px-2"
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
                  {/* <Img
                    className="h-[358px] ml-[-11.48px] mr-5  z-[1]"
                    src="images/img_divlwadblockh90.svg"
                    alt="divlwpageconten"
                  />
                  <Img
                    className="h-[739px] ml-[undefinedpx] object-cover z-[1]"
                    src="images/img_divbecomecustomer.png"
                    alt="divbecomecustom"
                  /> */}
                </div>
                <div className="absolute flex flex-col gap-[43px] h-max inset-y-[0] items-center justify-start  right-[1%] w-[73%]">
                  <div className="flex flex-col gap-6 items-start justify-start w-[98%] md:w-full">
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-start p-[27px] sm:px-5 rounded-[15px] shadow-bs7 w-full">
                      <div className="flex flex-col items-start justify-start mb-[37px] w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900_dd sm:text-xl"
                          size="txtMontserratRegular24Black900dd"
                        >
                          Profile
                        </Text>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[120px] mt-11 rounded-lg shadow-bs1 w-full"></div>
                        <div className="border border-black-900 border-solid h-[54px] mt-[41px] rounded-lg shadow-bs1 w-full"></div>
                        <div className="flex flex-col font-roboto gap-1.5 items-start justify-start ml-3 md:ml-[0] mt-[39px] w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-gray-600_01 text-sm"
                              size="txtRobotoBold14Gray60001"
                            >
                              Current e-mail address
                            </Text>
                          </div>
                          <Text
                            className="text-gray-600_01 text-sm"
                            size="txtRobotoRegular14Gray60001"
                          >
                            veradesignr@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-col font-montserrat gap-[50px] items-center justify-start mt-[53px] w-full">
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                            <Input
                              name="groupTwentyFour"
                              placeholder="Nwe Email Addresss"
                              className="!placeholder:text-gray-700_04 !text-gray-700_04 p-0 text-[13px] text-left w-full"
                              wrapClassName="border border-black-900 border-solid flex sm:flex-1 rounded-lg shadow-bs1 sm:w-full"
                              type="email"
                              suffix={
                                <div className="mt-px ml-[35px] pt-2.5 pb-[9px] border-black-900 border border-solid px-1.5">
                                  <Img
                                    className="my-auto"
                                    src="images/img_vector_black_900.svg"
                                    alt="Vector"
                                  />
                                </div>
                              }
                              color="white_A700"
                              size="3xl"
                            ></Input>
                            <SelectBox
                              className="border border-black-900 border-solid sm:flex-1 text-[13px] text-left w-[49%] sm:w-full"
                              placeholderClassName="text-gray-700_04"
                              indicator={
                                <Img
                                  className="h-[5px] mr-[0] pt-2.5 pb-[9px] border-black-900 border border-solid w-[9px] px-1.5"
                                  src="images/img_vector_black_900.svg"
                                  alt="Vector"
                                />
                              }
                              isMulti={false}
                              name="groupTwentyThree"
                              options={preferredLanguageOptionsList}
                              isSearchable={false}
                              placeholder="Preferred Language"
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            />
                          </div>
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                            <Input
                              name="language_Three"
                              placeholder="Repeat Email  Address"
                              className="!placeholder:text-gray-700_04 !text-gray-700_04 p-0 text-[13px] text-left w-full"
                              wrapClassName="border border-black-900 border-solid flex sm:flex-1 rounded-lg shadow-bs1 sm:w-full"
                              type="email"
                              suffix={
                                <div className="ml-[35px] pt-2.5 pb-[9px] border-black-900 border border-solid px-1.5">
                                  <Img
                                    className="my-auto"
                                    src="images/img_vector_black_900.svg"
                                    alt="Vector"
                                  />
                                </div>
                              }
                              color="white_A700"
                              size="3xl"
                            ></Input>
                            <SelectBox
                              className="border border-black-900 border-solid sm:flex-1 text-[13px] text-left w-[49%] sm:w-full"
                              placeholderClassName="text-gray-700_04"
                              indicator={
                                <Img
                                  className="h-[5px] mr-[0] pt-2.5 pb-[9px] border-black-900 border border-solid w-[9px] px-1.5"
                                  src="images/img_vector_black_900.svg"
                                  alt="Vector"
                                />
                              }
                              isMulti={false}
                              name="groupTwentyOne"
                              options={educationLevelOptionsList}
                              isSearchable={false}
                              placeholder="Education Level"
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-16 h-[70px] relative w-[13%]">
                      <div className="bg-purple-400 py-3 inset-x-[0] rounded-[22px] top-[0] w-full">
                        <Text
                          className="capitalize inset-x-[0] leading-[32.00px] mx-auto text-center text-white-A700 text-xl tracking-[0.50px]  sm:w-full font-montserrat font-normal"
                          size="txtMontserratRegular20"
                        >
                          Save
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-fuzzybubbles items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_03 sm:text-xl"
                        size="txtFuzzyBubblesRegular24Black90003"
                      >
                        Change Password
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col font-fuzzybubbles items-center justify-start ml-auto mr-[18px] mt-[-52px] pb-3 px-3 w-3/4 z-[1]">
                <div className="bg-white-A700 flex flex-col items-center justify-start mb-3 p-2 rounded-[5px] w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start my-[11px] w-full">
                    <div className="flex flex-col items-center justify-start ml-3 md:ml-[0] w-[98%] md:w-full">
                      <div className="flex flex-col items-start justify-start pb-1 pr-1 w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtFuzzyBubblesRegular16Black900"
                        >
                          Current Password
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-end justify-end outline outline-gray-800_04 p-1.5 rounded-[5px] w-full">
                        <Img
                          className="h-[19px] mr-1.5 mt-[5px]"
                          src="images/img_eye_gray_700_05.svg"
                          alt="eye"
                        />
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-px grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col items-center justify-start px-3 w-full">
                        <div className="flex flex-col items-start justify-start pb-1 pr-1">
                          <Text
                            className="text-base text-black-900"
                            size="txtFuzzyBubblesRegular16Black900"
                          >
                            New Password
                          </Text>
                        </div>
                        <div className="bg-white-A700 flex flex-col items-end justify-start outline outline-gray-800_04 p-2 rounded-[5px] w-full">
                          <Img
                            className="h-[19px] mr-1"
                            src="images/img_eye_gray_700_05.svg"
                            alt="eye"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start pb-[3px] pr-[3px]">
                          <Text
                            className="text-base text-black-900"
                            size="txtFuzzyBubblesRegular16Black900"
                          >
                            New Password Confirmation
                          </Text>
                        </div>
                        <div className="bg-white-A700 flex flex-col items-end justify-start outline outline-gray-800_04 p-2 rounded-[5px] w-[95%] md:w-full">
                          <Img
                            className="h-[19px] mr-[7px]"
                            src="images/img_eye_gray_700_05.svg"
                            alt="eye"
                          />
                        </div>
                      </div>
                    </List>
                    <Button
                      className="border border-pink-700 border-solid cursor-pointer min-w-[166px] ml-3 md:ml-[0] rounded-[5px] text-base text-center"
                      shape="round"
                      color="pink_700"
                      size="md"
                      variant="fill"
                    >
                      Update Password
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-black-900 border-solid flex flex-col font-roboto items-center justify-start ml-auto mr-1 mt-[-16px] p-[30px] sm:px-5 rounded-[15px] shadow-bs7 w-[77%] z-[1]">
              <div className="flex flex-col gap-[27px] items-start justify-start mb-[35px] mt-[27px] w-full">
                <div className="flex flex-row gap-[7px] items-start justify-start w-[8%] md:w-full">
                  <Img
                    className="h-[22px] mt-0.5 w-[22px]"
                    src="images/img_frame_black_900.svg"
                    alt="frame_One"
                  />
                  <Text
                    className="text-[17px] text-black-900_dd"
                    size="txtRobotoRegular17"
                  >
                    Looks
                  </Text>
                </div>
                <div className="font-montserrat md:gap-5 gap-[22px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="md:h-[50px] h-[59px] relative w-full">
                    <div className="absolute bg-white-A700 border border-gray-900_04 border-solid bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto rounded-lg shadow-bs1 w-full">
                      <Img
                        className="h-6 my-[13px] w-6"
                        src="images/img_frame_black_900_24x24.svg"
                        alt="frame"
                      />
                    </div>
                    <Text
                      className="absolute left-[4%] text-[13px] text-gray-700_04 top-[0]"
                      size="txtMontserratRegular13"
                    >
                      Ethnicity
                    </Text>
                  </div>
                  <div className="md:h-[50px] h-[59px] relative w-full">
                    <div className="absolute bg-white-A700 border border-gray-900_04 border-solid bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto rounded-lg shadow-bs1 w-full">
                      <Img
                        className="h-6 my-[13px] w-6"
                        src="images/img_frame_black_900_24x24.svg"
                        alt="frame"
                      />
                    </div>
                    <Text
                      className="absolute left-[4%] text-[13px] text-gray-700_04 top-[0]"
                      size="txtMontserratRegular13"
                    >
                      Body type
                    </Text>
                  </div>
                  <div className="md:h-[50px] h-[59px] relative w-full">
                    <div className="absolute bg-white-A700 border border-gray-900_04 border-solid bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto rounded-lg shadow-bs1 w-full">
                      <Img
                        className="h-6 my-[13px] w-6"
                        src="images/img_frame_black_900_24x24.svg"
                        alt="frame"
                      />
                    </div>
                    <Text
                      className="absolute left-[4%] text-[13px] text-gray-700_04 top-[0]"
                      size="txtMontserratRegular13"
                    >
                      Height
                    </Text>
                  </div>
                  <div className="h-[60px] relative w-full">
                    <Text
                      className="mb-[-7.21px] ml-5 text-[13px] text-gray-700_04 z-[1]"
                      size="txtMontserratRegular13"
                    >
                      Hair color
                    </Text>
                    <div className="bg-white-A700 border border-gray-900_04 border-solid flex flex-col items-end justify-start mt-auto mx-auto rounded-lg shadow-bs1 w-full">
                      <Img
                        className="h-6 my-[13px] w-6"
                        src="images/img_frame_black_900_24x24.svg"
                        alt="frame"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-roboto md:gap-10 gap-[60px] items-end mt-[60px] px-1 w-full">
          <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-start p-[30px] md:px-5 rounded-[15px] shadow-bs7 w-[77%] md:w-full">
            <div className="flex flex-col gap-[25px] items-start justify-start mb-[35px] mt-7 w-full">
              <div className="flex flex-row gap-[7px] items-start justify-start w-[12%] md:w-full">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_frame_black_900_22x22.svg"
                  alt="frame_Two"
                />
                <Text
                  className="text-black-900_dd text-lg"
                  size="txtRobotoRegular18Black900dd"
                >
                  Personality
                </Text>
              </div>
              <div className="font-montserrat md:gap-5 gap-[22px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="h-[62px] relative w-full">
                  <Text
                    className="bg-white-A700 h-[17px] justify-center mb-[-7px] ml-[11px] pl-[9px] pr-[13px] text-[13px] text-gray-700_04 w-[86px] z-[1]"
                    size="txtMontserratRegular13"
                  >
                    Character
                  </Text>
                  <div className="bg-white-A700 border border-black-900_04 border-solid flex flex-col items-end justify-start mt-auto mx-auto rounded-lg shadow-bs1 w-full">
                    <Img
                      className="h-6 my-[13px] w-6"
                      src="images/img_frame_black_900_24x24.svg"
                      alt="frame"
                    />
                  </div>
                </div>
                <div className="h-[62px] relative w-full">
                  <Text
                    className="bg-white-A700 h-[17px] justify-center mb-[-7px] ml-[11px] pl-[9px] pr-[13px] text-[13px] text-gray-700_04 w-[78px] z-[1]"
                    size="txtMontserratRegular13"
                  >
                    Children
                  </Text>
                  <div className="bg-white-A700 border border-black-900_04 border-solid flex flex-col items-end justify-start mt-auto mx-auto rounded-lg shadow-bs1 w-full">
                    <Img
                      className="h-6 my-[13px] w-6"
                      src="images/img_frame_black_900_24x24.svg"
                      alt="frame"
                    />
                  </div>
                </div>
                <div className="h-[62px] relative w-full">
                  <Text
                    className="bg-white-A700 h-[17px] justify-center mb-[-7px] ml-[11px] pl-[9px] pr-3 text-[13px] text-gray-700_04 w-[70px] z-[1]"
                    size="txtMontserratRegular13"
                  >
                    Friends
                  </Text>
                  <div className="bg-white-A700 border border-black-900_04 border-solid flex flex-col items-end justify-start mt-auto mx-auto rounded-lg shadow-bs1 w-full">
                    <Img
                      className="h-6 my-[13px] w-6"
                      src="images/img_frame_black_900_24x24.svg"
                      alt="frame"
                    />
                  </div>
                </div>
                <div className="h-[62px] relative w-full">
                  <Text
                    className="bg-white-A700 h-[17px] justify-center mb-[-7px] ml-[11px] px-2.5 text-[13px] text-gray-700_04 w-[50px] z-[1]"
                    size="txtMontserratRegular13"
                  >
                    Pets
                  </Text>
                  <div className="bg-white-A700 border border-black-900_04 border-solid flex flex-col items-end justify-start mt-auto mx-auto rounded-lg shadow-bs1 w-full">
                    <Img
                      className="h-6 my-[13px] w-6"
                      src="images/img_frame_black_900_24x24.svg"
                      alt="frame"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-fuzzybubbles gap-4 items-center justify-start mr-[34px] md:px-5 px-6 w-[77%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[5px] w-full">
              <div className="flex flex-col gap-[22px] items-center justify-start p-2 rounded-[5px] w-full">
                <div className="flex flex-col items-start justify-start mt-3 w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtFuzzyBubblesRegular24"
                    >
                      Notification Settings
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-start mb-3 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start pb-2 w-1/2 md:w-full">
                            <div className="flex flex-col items-start justify-start px-3 w-full">
                              <div className="flex flex-col items-start justify-start w-[49%] md:w-full">
                                <CheckBox
                                  className="text-base text-left"
                                  inputClassName="border border-pink-700 border-solid h-4 mr-[5px] w-4"
                                  name="showvisitorsnot_One"
                                  id="showvisitorsnot_One"
                                  label="Show Visitors Notification"
                                  color="pink_700"
                                  size="xs"
                                ></CheckBox>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start pb-2 px-2 w-1/2 md:w-full">
                            <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]  md:w-full">
                              <div className="flex flex-row items-start gap-3 justify-evenly w-full">
                                <CheckBox
                                  className="mb-[3px] text-base text-left"
                                  inputClassName="border border-gray-600_04 border-solid h-4 mr-[5px] w-4"
                                  name="showlikesnotifi_One"
                                  id="showlikesnotifi_One"
                                  label="Show Likes Notification"
                                  color="gray_600_04"
                                ></CheckBox>
                                <Img
                                  className="h-6 md:h-auto object-cover w-6"
                                  src="images/img_premiumbadgesvg.png"
                                  alt="premiumbadgesvg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                          <div className="flex md:flex-1 flex-col items-start justify-start px-3 w-1/2 md:w-full">
                            <div className="flex flex-col items-start justify-start w-[44%] md:w-full">
                              <CheckBox
                                className="text-base text-left"
                                inputClassName="border border-pink-700 border-solid h-4 mr-[5px] w-4"
                                name="showgiftsnotifi_One"
                                id="showgiftsnotifi_One"
                                label="Show Gifts Notification"
                                color="pink_700"
                                size="xs"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start px-3 w-1/2 md:w-full">
                            <div className="flex flex-col items-start justify-start w-[52%] md:w-full">
                              <CheckBox
                                className="text-base text-left"
                                inputClassName="border border-pink-700 border-solid h-4 mr-[5px] w-4"
                                name="showmessagesnot_One"
                                id="showmessagesnot_One"
                                label="Show Messages Notification"
                                color="pink_700"
                                size="xs"
                              ></CheckBox>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end pt-2 w-1/2 md:w-full">
                        <div className="flex flex-col items-start justify-start px-3 w-full">
                          <div className="flex flex-col items-start justify-start w-[81%] md:w-full">
                            <CheckBox
                              className="text-base text-left"
                              inputClassName="border border-pink-700 border-solid h-4 mr-[5px] w-4"
                              name="showloginnotifi_One"
                              id="showloginnotifi_One"
                              label="Show Login Notification For Your Liked Users"
                              color="pink_700"
                              size="xs"
                            ></CheckBox>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="border border-pink-700 border-solid cursor-pointer min-w-[68px] ml-3 md:ml-[0] mr-[945px] rounded-[3px] text-center text-sm"
                    shape="round"
                    color="pink_700"
                    size="sm"
                    variant="fill"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-[5px] w-full">
              <div className="flex flex-col items-start justify-start mb-[3px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtFuzzyBubblesRegular24"
                    >
                      Delete Account
                    </Text>
                  </div>
                </div>
                <Text
                  className="mt-[27px] text-base text-black-900"
                  size="txtFuzzyBubblesRegular16Black900"
                >
                  All content including photos and other data will be
                  permanently removed!
                </Text>
                <div className="flex flex-col items-start justify-start mt-[18px] w-full">
                  <div className="bg-red-500 border border-red-500 border-solid flex flex-col items-center justify-start p-1 rounded-[3px]">
                    <Text
                      className="mb-[3px] text-center text-sm text-white-A700"
                      size="txtFuzzyBubblesRegular14"
                    >
                      Delete Account?
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-center justify-start mt-[10px] md:px-5 w-[93%] md:w-full">
          <div className="flex flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-7 pb-[98px] w-[86%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-end pt-9 w-[34%] md:w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start px-[11px] w-1/2">
                      <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          About Us
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="leading-[32.00px] text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            <>
                              Terms and
                              <br />
                              Conditions
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pr-[5px] py-[5px]">
                        <a
                          href="javascript:"
                          className="mt-0.5 text-gray-800 text-sm"
                        >
                          <Text size="txtMontserratRegular14">
                            Privacy Policy
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-end pr-1.5 py-1.5">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Contact
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pb-[11px] px-[11px] w-1/2">
                      <div className="flex flex-col items-start justify-start pr-[7px] py-[7px] w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="leading-[32.00px] text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            <>
                              Frequently Asked
                              <br />
                              Questions
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                        <Text
                          className="text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Refund
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-end mb-5 pr-[5px] py-[5px]">
                        <Text
                          className="mt-0.5 text-gray-800 text-sm"
                          size="txtMontserratRegular14"
                        >
                          Blog
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-roboto gap-[11px] items-center justify-start pb-1.5 px-1.5 w-[42%] md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[14.88px] text-blue_gray-900 tracking-[0.06px]"
                      size="txtRobotoRegular1488"
                    >
                      Always up to date with our latest offers and discounts!
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row font-montserrat sm:gap-5 items-center justify-start mb-[115px] w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start px-[5px] w-3/4 sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Input
                          name="input"
                          placeholder="Enter your email address"
                          className="leading-[normal] p-0 placeholder:text-black-900 text-left text-sm tracking-[0.05px] w-full"
                          wrapClassName="flex w-full"
                          type="email"
                          prefix={
                            <Img
                              className="mr-3 my-auto"
                              src="images/img_svg_gray_600.svg"
                              alt="SVG"
                            />
                          }
                          shape="round"
                          size="xl"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start px-[5px] w-[26%] sm:w-full">
                      <Button
                        className="cursor-pointer min-w-[100px] text-center text-sm tracking-[0.05px] uppercase"
                        shape="round"
                        color="gray_800"
                        size="xl"
                        variant="fill"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-roboto items-center justify-start pb-[11px] px-[11px] w-[17%] md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mb-[111px] w-full">
                    <Text
                      className="text-[14.77px] text-blue_gray-900 tracking-[0.06px]"
                      size="txtRobotoRegular1477"
                    >
                      Follow us!
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Button
                        className="flex h-[42px] items-center justify-center w-[42px]"
                        shape="circle"
                        color="gray_400_4f"
                        size="xl"
                        variant="fill"
                      >
                        <Img src="images/img_facebook.svg" alt="facebook" />
                      </Button>
                      <Button
                        className="flex h-[42px] items-center justify-center w-[42px]"
                        shape="circle"
                        color="gray_400_4f"
                        size="lg"
                        variant="fill"
                      >
                        <Img src="images/img_trash.svg" alt="trash" />
                      </Button>
                      <Button
                        className="flex h-[42px] items-center justify-center w-[42px]"
                        shape="circle"
                        color="gray_400_4f"
                        size="xl"
                        variant="fill"
                      >
                        <Img src="images/img_contrast.svg" alt="contrast" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
                  <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[349px] w-full">
                    <div className="flex flex-col items-center justify-start px-[11px] w-1/2">
                      <div className="flex flex-col items-start justify-end pr-1.5 py-1.5 w-full">
                        <div className="flex flex-row items-start justify-start w-[63%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_globe.svg"
                            alt="globe"
                          />
                          <Text
                            className="ml-1 text-gray-800 text-sm"
                            size="txtMontserratRegular14"
                          >
                            {" "}
                            Language
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end p-[5px]">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-0.5 text-gray-800 text-sm"
                        size="txtMontserratRegular14"
                      >
                        Developers
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start px-[11px] w-[34%] md:w-full">
                  <div className="flex flex-col items-end justify-start pl-1.5 py-1.5">
                    <Text
                      className="leading-[32.00px] text-base text-gray-800 text-right"
                      size="txtMontserratRegular16Gray800"
                    >
                      <>
                        Copyright © 2023 Quickdate. All rights
                        <br />
                        reserved.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourtyEight;
