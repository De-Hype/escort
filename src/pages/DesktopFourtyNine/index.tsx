import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import Header1 from "components/Header1";

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

const DesktopFourtyNine = () => {
  return (
    <>
      <div className="bg-white-A700 flex overflow-x-hidden flex-col font-montserrat items-center justify-start mx-auto pb-[88px] w-full">
        <Img
          className="h-[9px] sm:h-auto object-cover w-full"
          src="images/img_pseudo_3.png"
          alt="pseudo"
        />
        <div className="md:h-[171px] h-[73px] sm:h-[85px] max-w-[1354px] mt-4 mx-auto md:px-5 relative w-full">
          <Header1 className="absolute bg-white-A700 border-b border-gray-200_03 border-solid  bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto w-full" />

          <div className="absolute flex flex-col items-center justify-start left-[0] py-4 top-[0] w-[22%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start px-4 w-full">
                <div className="flex flex-col items-center justify-start w-[79%] md:w-full">
                  <Img
                    className="h-[37px] md:h-auto object-cover w-full"
                    src="images/img_divvimageimage.png"
                    alt="divvimageimage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[1043px] h-[1444px] sm:h-[954px] mt-[37px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[94%]">
            <div className="flex flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-7 pb-[98px] w-[84%] md:w-full">
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
              <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
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
          <div
            className="absolute bg-cover  bg-no-repeat flex inset-x-[0] mx-auto pl-3 py-3 top-[0] w-full"
            style={{
              backgroundImage:
                "url('images/img_loginbannermasksvg_black_900.png')",
            }}
          >
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
            className="h-[358px] ml-[-11.48px] mr-3.5 mt-10 z-[1]"
            src="images/img_divlwadblockh90.svg"
            alt="divlwpageconten"
          /> */}
            {/* <Button
            className="flex h-14 items-center justify-center ml-[undefinedpx] mr-[59px] mt-auto rounded-[50%] w-14 z-[1]"
            shape="circle"
            size="xl"
            variant="gradient"
            color="orange_600_yellow_900"
          >
            <Img
              className="h-8"
              src="images/img_arrowup_white_a700.svg"
              alt="arrowup"
            />
          </Button> */}
            <div className="flex flex-col font-fuzzybubbles gap-[18px] items-center justify-start ml-[undefinedpx] p-4 w-[77%] z-[1]">
              <div className="">
                <div className="h-[426px] sm:h-[501px] md:h-[530px] relative w-[98%] md:w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-5 rounded-[5px] w-full">
                    <div className="flex flex-col gap-[18px] justify-start mb-[7px] mt-[266px] w-[91%] md:w-full">
                      <List
                        className="sm:flex-col flex-row font-roboto gap-[42px] grid md:grid-cols-1 grid-cols-2 justify-center md:ml-[0] ml-[18px] w-[99%]"
                        orientation="horizontal"
                      >
                        <div className="sm:h-[139px] h-[63px] relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                              <div className="flex sm:flex-1 flex-col items-center justify-end py-[11px] w-[68%] sm:w-full">
                                <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-gray-600_01 text-sm"
                                      size="txtRobotoBold14Gray60001"
                                    >
                                      Age verification
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start pt-1 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-red-A700_01 text-sm"
                                      size="txtRobotoRegular14RedA70001"
                                    >
                                      not verified
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex sm:flex-1 flex-col items-end justify-start pl-3 py-3 w-[33%] sm:w-full">
                                <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                  <Button
                                    className="!text-gray-600_01 border border-blue_gray-100_04 border-solid cursor-pointer leading-[normal] min-w-[120px] text-center text-sm"
                                    shape="square"
                                    color="white_A700"
                                    size="md"
                                    variant="fill"
                                  >
                                    verify
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Line className="absolute bg-black-900_1e bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                        </div>
                        <div className="h-16 md:h-[60px] relative w-full">
                          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto py-[11px] w-[68%]">
                            <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-600_01 text-sm"
                                  size="txtRobotoBold14Gray60001"
                                >
                                  Advert free
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start pt-1 w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-red-A700_01 text-sm"
                                  size="txtRobotoRegular14RedA70001"
                                >
                                  no ad-free
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start my-auto pl-3 py-3 right-[0] w-[33%]">
                            <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                              <Button
                                className="!text-gray-600_01 border border-blue_gray-100_04 border-solid cursor-pointer leading-[normal] min-w-[120px] text-center text-sm"
                                shape="square"
                                color="white_A700"
                                size="md"
                                variant="fill"
                              >
                                show
                              </Button>
                            </div>
                          </div>
                          <Line className="absolute bg-black-900_1e bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                        </div>
                      </List>
                      <Button
                        className="border border-pink-700 border-solid cursor-pointer font-fuzzybubbles min-w-[68px] mr-[837px] rounded-[3px] text-center text-sm"
                        shape="round"
                        color="pink_700"
                        size="sm"
                        variant="fill"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-3.5 inset-x-[0] items-start justify-end mx-auto p-[11px] top-[0] w-full">
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-2 w-[99%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtFuzzyBubblesRegular24"
                        >
                          Notification Settings
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-start justify-start ml-2 md:ml-[0] w-[99%] md:w-full">
                      <List
                        className="flex flex-col gap-2.5 w-[91%]"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                          <div className="h-16 md:h-[62px] mb-0.5 relative w-[47%] md:w-full">
                            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto py-[11px] w-[88%]">
                              <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-gray-600_01 text-sm"
                                    size="txtRobotoBold14Gray60001"
                                  >
                                    User name
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start pt-1 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-black-900_99 text-sm"
                                    size="txtRobotoRegular14Black90099"
                                  >
                                    ellytasha
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[60px] inset-y-[0] my-auto right-[0]"
                              src="images/img_arrowright_black_900.svg"
                              alt="arrowright"
                            />
                            <Line className="absolute bg-black-900_1e bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                          </div>
                          <div className="h-16 sm:h-[139px] md:h-[63px] md:mt-0 mt-0.5 relative w-[47%] md:w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                                <div className="flex sm:flex-1 flex-col items-center justify-end py-[11px] w-[88%] sm:w-full">
                                  <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-gray-600_01 text-sm"
                                        size="txtRobotoBold14Gray60001"
                                      >
                                        E-mail address
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center justify-start pt-1 w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-black-900_99 text-sm"
                                        size="txtRobotoRegular14Black90099"
                                      >
                                        veradesignr@gmail.com
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="h-[60px]"
                                  src="images/img_arrowleft.svg"
                                  alt="arrowleft"
                                />
                              </div>
                            </div>
                            <Line className="absolute bg-black-900_1e bottom-[3%] h-px inset-x-[0] mx-auto w-full" />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between my-0 w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start mb-[7px] w-[47%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                              <div className="flex sm:flex-1 flex-col items-center justify-end py-[11px] w-[88%] sm:w-full">
                                <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-gray-600_01 text-sm"
                                      size="txtRobotoBold14Gray60001"
                                    >
                                      phone
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start pt-1 w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-black-900_99 text-sm"
                                      size="txtRobotoRegular14Black90099"
                                    >
                                      Not specified
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="h-[60px]"
                                src="images/img_arrowright_black_900.svg"
                                alt="arrowright"
                              />
                            </div>
                            <Line className="bg-black-900_1e h-px mt-[3px] w-full" />
                          </div>
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly md:mt-0 mt-[11px] w-[47%] md:w-full">
                            <div className="flex flex-col items-center justify-end py-[11px] w-[88%] sm:w-full">
                              <div className="flex flex-col items-center justify-start pb-0.5 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-gray-600_01 text-sm"
                                    size="txtRobotoBold14Gray60001"
                                  >
                                    Language
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start pt-1 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-black-900_99 text-sm"
                                    size="txtRobotoRegular14Black90099"
                                  >
                                    English
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="h-[60px]"
                              src="images/img_arrowright_black_900.svg"
                              alt="arrowright_One"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                    <Line className="bg-black-900_1e h-px md:ml-[0] ml-[491px] w-[42%]" />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start mb-[35px] rounded-[5px] w-[98%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start p-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtFuzzyBubblesRegular24"
                        >
                          Your Applications
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col font-roboto items-center justify-start py-1">
                        <Text
                          className="leading-[25.00px] mb-9 text-gray-600_01 text-lg w-full"
                          size="txtRobotoRegular18"
                        >
                          Here is the list of other applications with the
                          respective status to your Ladies.de account. If you
                          have a link, you can log in there with your account
                          credentials and use additional functions.
                        </Text>
                      </div>
                      <Button
                        className="border border-pink-700 border-solid cursor-pointer font-fuzzybubbles min-w-[68px] rounded-[3px] text-center text-sm"
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
              </div>
              <Button
                className="border self-start border-pink-700 border-solid cursor-pointer font-fuzzybubbles mb-[180px] min-w-[68px]  mt-auto rounded-[3px] text-center text-sm z-[1]"
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
      </div>
    </>
  );
};

export default DesktopFourtyNine;
