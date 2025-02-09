import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const DesktopTwentyNinePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
      <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="1436" height="10" viewBox="0 0 1436 10" fill="none">
              <mask id="path-1-inside-1_60_11978" fill="white">
                <path d="M0 0H1443V10H0V0Z"/>
              </mask>
              <path d="M0 0V-10H-10V0H0ZM1443 0H1453V-10H1443V0ZM1443 10V20H1453V10H1443ZM0 10H-10V20H0V10ZM0 10H1443V-10H0V10ZM1433 0V10H1453V0H1433ZM1443 0H0V20H1443V0ZM10 10V0H-10V10H10Z" fill="purple" mask="url(#path-1-inside-1_60_11978)"/>
            </svg>
              <div className="md:h-[171px] h-[73px] m-0 sm:h-[85px] md:ml-[0] ml-[25px] mr-[57px] mt-4 relative w-[95%] md:w-full">
                <div className="absolute bg-white-A700 border-b border-gray-200_03 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
                  <div className="nav-links flex md:flex-col flex-row md:gap-10 items-center justify-end px-[15px] w-full">
                    <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-center pr-[18px] w-[29%] md:w-full">
                      <div className="flex flex-row items-center justify-start p-4 shadow-bs4 w-[51%]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M3.60357 7.557L10.7416 4.448C10.8594 4.39751 10.9861 4.37112 11.1142 4.37038C11.2423 4.36963 11.3693 4.39456 11.4877 4.44367C11.6061 4.49279 11.7134 4.5651 11.8034 4.65636C11.8933 4.74761 11.9641 4.85595 12.0116 4.975L16.9356 16.877C17.0369 17.1185 17.0398 17.3899 16.9438 17.6335C16.8478 17.8771 16.6604 18.0736 16.4216 18.181L9.28457 21.29C9.16673 21.3406 9.03994 21.3672 8.91169 21.368C8.78343 21.3688 8.65631 21.3439 8.53783 21.2948C8.41935 21.2457 8.31192 21.1733 8.22187 21.082C8.13183 20.9906 8.061 20.8822 8.01357 20.763L3.08957 8.86C2.98855 8.61851 2.98574 8.34713 3.08173 8.1036C3.17773 7.86007 3.36495 7.66461 3.60357 7.557Z" stroke="#cc42bd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 4.35999H16C16.2652 4.35999 16.5196 4.46534 16.7071 4.65288C16.8946 4.84042 17 5.09477 17 5.35999V8.85999" stroke="#cc42bd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 6.35999C20.264 6.47199 20.52 6.57699 20.768 6.67499C21.0121 6.77857 21.2051 6.97488 21.3045 7.22073C21.4039 7.46659 21.4015 7.74185 21.298 7.98599L19 13.36" stroke="#cc42bd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                        <Text
                          className="ml-1 text-base match"
                          size="txtMontserratMedium16"
                        >
                          {" "}
                          Find Matches
                        </Text>
                      </div>
                      <div className="h-[35px] relative w-[46%]">
                        <div className="absolute h-[29px] inset-[0] justify-center m-auto w-[99%]">
                          <div className="bg-gradient7  h-[29px] m-auto outline outline-[1px] outline-yellow-800_01 rounded-[14px] w-full"></div>
                          <Text
                            className="absolute capitalize h-max inset-y-[0] my-auto right-[8%] text-base text-white-A700"
                            size="txtMontserratRegular16WhiteA700"
                          >
                            {" "}
                            Go Premium
                          </Text>
                        </div>
                        <Button
                          className="absolute flex h-[35px] inset-y-[0] items-center justify-center left-[0] my-auto rounded-[17px] w-[35px]"
                          size="md"
                          variant="gradient"
                          color="yellow_700_01_yellow_800_01"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center Dashboard-left-nav justify-center w-[38%] md:w-full">
                      <div className="flex flex-col items-center justify-end p-3 w-[32%] sm:w-full">
                        <div className=" credit-wrap border border-gray-200_03 border-solid flex flex-row items-center justify-center p-[5px] rounded-[15px] w-[97%] md:w-full">
                          <Text
                            className="ml-2.5 text-base text-gray-800_02"
                            size="txtMontserratMedium16Gray80002"
                          >
                            Credit  {" "}
                          </Text>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                            <path d="M1.64435 11.5053H9.97416C10.175 11.5053 10.3676 11.4256 10.5097 11.2835C10.6517 11.1413 10.7316 10.9481 10.7316 10.7471C10.7316 10.5461 10.6517 10.3534 10.5097 10.2113C10.3676 10.0691 10.175 9.9894 9.97416 9.9894H3.91654C2.9125 9.9894 1.94963 9.59005 1.23967 8.87963C0.529705 8.1692 0.130859 7.20594 0.130859 6.20125C0.130859 5.19656 0.529705 4.23281 1.23967 3.52239C1.94963 2.81196 2.9125 2.4131 3.91654 2.4131H5.43149V0.898132H8.46018V2.41407H12.2456V5.44498H3.91654C3.71565 5.44498 3.52307 5.5247 3.38102 5.66684C3.23897 5.80898 3.15906 6.00169 3.15906 6.20271C3.15906 6.40373 3.23897 6.59644 3.38102 6.73858C3.52307 6.88072 3.71565 6.96044 3.91654 6.96044H9.97416C10.9782 6.96044 11.9411 7.35979 12.651 8.07021C13.361 8.78064 13.7598 9.7439 13.7598 10.7486C13.7598 11.7533 13.361 12.717 12.651 13.4275C11.9411 14.1379 10.9782 14.5372 9.97416 14.5372H8.45921V16.0527H5.43052V14.5372H1.64435V11.5053Z" fill="purple"/>
                          </svg>
                          <Text
                            className="ml-[7px] mr-2.5 text-base text-gray-800_02"
                            size="txtMontserratMedium16Gray80002"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[57px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Img
                        className="h-[57px]"
                        src="images/img_item.svg"
                        alt="item"
                      />
                      <div className="flex flex-row items-center justify-evenly w-[47%] sm:w-full">
                        <section className="thunder">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                            <g clip-path="url(#clip0_60_11959)">
                              <path d="M14.3854 6.76984C14.2558 6.55947 14.027 6.43108 13.7802 6.43108H10.5122L12.2785 0.926682C12.3476 0.710734 12.3099 0.474323 12.1761 0.291187C12.0428 0.108551 11.8294 0 11.6029 0H8.35465C8.04615 0 7.77285 0.199253 7.67907 0.492902L5.04466 8.70403C4.97554 8.91993 5.01323 9.15623 5.14709 9.33948C5.28034 9.52212 5.49379 9.63067 5.7202 9.63067H6.29211H8.91483L8.06835 18.6716C8.05481 18.8153 8.14543 18.948 8.2843 18.988C8.4225 19.0282 8.56998 18.9646 8.63534 18.8357L14.4131 7.46277C14.5248 7.2424 14.5143 6.98029 14.3854 6.76984Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_60_11959">
                                <rect width="19" height="19" fill="white" transform="translate(0.25)"/>
                              </clipPath>
                            </defs>
                            </svg>
                        </section>
                        <div className="flex flex-col items-end justify-start pl-2 py-2 w-4/5">
                          <div className="border border-orange-600 border-solid flex flex-row items-center justify-start user-btn rounded-[20px] w-[99%] md:w-full">
                            <div className=" user-img-wrap flex flex-col items-start justify-start ml-3 w-[38px]">
                              <Img
                                className=" user-img h-[39px] md:h-auto object-cover rounded-[20px] w-[74%]"
                                src="images/img_bv7mozwnhchqrqp.png"
                                alt="bv7mozwnhchqrqp"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="capitalize text-[15px] pl-2 text-white-A700"
                                size="txtMontserratMedium15WhiteA700"
                              >
                                Hi, tekena
                              </Text>
                            </div>
                            <Img
                              className="h-[22px]"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute logo-wrap flex flex-col items-center justify-start left-[0] py-4 top-[0] w-[22%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col logo-img-wrap items-start justify-start px-4 w-full">
                      <div className="flex flex-col items-center justify-start w-fit md:w-full">
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
            </header>
        <div className="font-inter sm:h-[3210px] h-[3969px] md:h-[4799px] max-w-[1395px] mt-[38px] mx-auto md:px-5 relative w-full">
          <div className="absolute inset-y-[0] my-auto right-[0] w-[1120px] md:w-full">
            <div className="flex flex-col items-center justify-start m-auto w-full">
              <div className="bg-white flex flex-col items-center justify-start w-full">
                <div className="flex flex-col relative w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col h-[350px] md:h-auto items-start justify-start max-w-[1120px] w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-gray-300_01 flex flex-col items-center justify-start w-full">
                            <div className="sm:h-[1154px] h-[350px] relative w-full">
                              <div className="flex flex-col h-full items-end justify-end m-auto pl-[5px] pt-[5px] w-full">
                                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-5 w-[61%] md:w-full">
                                  <div className="flex flex-col h-px items-end justify-end sm:mt-0 mt-[37px] w-px">
                                    <div className="w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <div className=" flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                          <Img
                                            className="md:h-auto h-px md:mt-0 mt-64 object-cover w-px"
                                            src="images/img_vt.png"
                                            alt="vt"
                                          />
                                          <Img
                                            className="md:h-auto h-px ml-64 md:ml-[0] md:mt-0 mt-64 object-cover w-px"
                                            src="images/img_vt_1x1.png"
                                            alt="vt_One"
                                          />
                                          <Img
                                            className="md:h-auto h-px md:mt-0 mt-64 object-cover w-px"
                                            src="images/img_vt_1.png"
                                            alt="vt_Two"
                                          />
                                          <Img
                                            className="md:h-auto h-px md:ml-[0] ml-[255px] md:mt-0 mt-64 object-cover w-px"
                                            src="images/img_vt_2.png"
                                            alt="vt_Three"
                                          />
                                          <Img
                                            className="h-64 md:h-auto md:ml-[0] ml-[511px] object-cover w-64"
                                            src="images/img_vt_256x256.png"
                                            alt="vt_Four"
                                          />
                                          <Img
                                            className="h-64 md:h-auto object-cover w-64"
                                            src="images/img_vt_3.png"
                                            alt="vt_Five"
                                          />
                                        </div>
                                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                          <Img
                                            className="md:h-auto h-px md:mt-0 mt-64 object-cover w-px"
                                            src="images/img_vt_4.png"
                                            alt="vt_Six"
                                          />
                                          <Img
                                            className="md:h-auto h-px object-cover w-px"
                                            src="images/img_vt_5.png"
                                            alt="vt_Seven"
                                          />
                                          <div className="h-px relative w-px">
                                            <div className="flex flex-row h-full items-center justify-between m-auto w-px">
                                              <Img
                                                className="md:h-auto h-px object-cover w-px"
                                                src="images/img_vt_6.png"
                                                alt="vt_Eight"
                                              />
                                              <Img
                                                className="md:h-auto h-px object-cover w-px"
                                                src="images/img_vt_7.png"
                                                alt="vt_Nine"
                                              />
                                            </div>
                                            <Img
                                              className="absolute bottom-[0] h-px object-cover right-[0] w-px"
                                              src="images/img_vt_8.png"
                                              alt="vt_Ten"
                                            />
                                            <Img
                                              className="absolute bottom-[0] h-px inset-x-[0] mx-auto object-cover w-px"
                                              src="images/img_vt_9.png"
                                              alt="vt_Eleven"
                                            />
                                            <Img
                                              className="absolute bottom-[0] h-px left-[0] object-cover w-px"
                                              src="images/img_vt_10.png"
                                              alt="vt_Twelve"
                                            />
                                            <Img
                                              className="absolute bottom-[0] h-px object-cover right-[0] w-px"
                                              src="images/img_vt_11.png"
                                              alt="vt_Thirteen"
                                            />
                                            <Img
                                              className="absolute h-px inset-y-[0] left-[0] my-auto object-cover w-px"
                                              src="images/img_vt_12.png"
                                              alt="vt_Fourteen"
                                            />
                                          </div>
                                          <Img
                                            className="h-64 md:h-auto md:ml-[0] ml-[511px] object-cover w-64"
                                            src="images/img_vt_13.png"
                                            alt="vt_Fifteen"
                                          />
                                          <Img
                                            className="h-64 md:h-auto object-cover w-64"
                                            src="images/img_vt_14.png"
                                            alt="vt_Sixteen"
                                          />
                                        </div>
                                        <Img
                                          className="h-64 md:h-auto md:ml-[0] ml-[768px] object-cover w-64"
                                          src="images/img_vt_15.png"
                                          alt="vt_Seventeen"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[84%] sm:w-full">
                                    <div className="flex flex-col h-[150px] md:h-auto items-start justify-start w-[150px]">
                                      <div className="flex flex-col h-[150px] md:h-auto items-center justify-center w-[150px]">
                                        <div className="bg-amber-400_95 flex flex-col h-[150px] items-center justify-center p-8 sm:px-5 rounded-[50%] w-[150px]">
                                          <Img
                                            className="h-[45px] mt-1.5"
                                            src="images/img_eye.svg"
                                            alt="eye"
                                          />
                                          <Text
                                            className="mb-1 sm:text-[17.82px] md:text-[19.82px] text-[21.82px] text-white-A700"
                                            size="txtInterRegular2182"
                                          >
                                            HIDDEN
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-[44%] md:w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Img
                                      className="md:h-auto h-px object-cover w-[16%]"
                                      src="images/img_transparentpng.png"
                                      alt="transparentpng"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="h-[26px] mr-[1049px] mt-[148px]"
                                  src="images/img_divh2d7da0963d.svg"
                                  alt="divh2d7da0963d"
                                />
                              </div>
                              <div className="absolute bottom-[0] font-asap right-[0] w-[21%]">
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end w-full">
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-3.5 md:h-auto items-start justify-center pt-[1.13px] w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_divgmstylecc.svg')",
                                      }}
                                    >
                                      <div className="flex flex-col items-start justify-start px-1.5 w-auto">
                                        <Text
                                          className="text-[10px] text-black-900 text-center tracking-[0.50px] w-auto"
                                          size="txtAsapRegular10"
                                        >
                                          Keyboard shortcuts
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <div className="h-3.5 md:h-auto pt-[1.13px] relative w-full">
                                      <Img
                                        className="absolute flex-1 h-3.5 inset-[0] m-auto w-[129px]"
                                        src="images/img_divgmstylecc.svg"
                                        alt="divh2d639ce712"
                                      />
                                      <div className="flex flex-1 flex-col items-center justify-start mt-auto mx-auto px-1.5 relative w-auto md:w-full">
                                        <Text
                                          className="text-[10px] text-black-900 text-right tracking-[0.50px] w-auto"
                                          size="txtAsapRegular10"
                                        >
                                          Map data ©2023 Google
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-row h-3.5 md:h-auto items-start justify-center pt-[1.13px] w-auto"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_divgmnoprint.png')",
                                    }}
                                  >
                                    <div className="h-[13px] w-full"></div>
                                  </div>
                                  <div className="h-3.5 md:h-auto ml-10 sm:ml-[0] pt-[1.13px] relative w-[105px]">
                                    <Img
                                      className="absolute h-3.5 inset-[0] m-auto w-[105px]"
                                      src="images/img_divgmstylecc.svg"
                                      alt="divh2d879eeb2c"
                                    />
                                    <div className="flex flex-col items-center justify-start m-auto px-1.5 relative w-auto">
                                      <Text
                                        className="text-[10px] text-black-900 text-right tracking-[0.50px] w-auto"
                                        size="txtAsapRegular10"
                                      >
                                        Report a map error
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:h-[3172px h-[3729px] md:h-[4761px] mt-[-110px] mx-auto w-[1120px] md:w-full z-[1]">
                    <div className="escort-preview absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto w-auto">
                      <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 w-auto md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
                          <Img
                            className="h-6 sm:h-auto object-cover w-[1056px] md:w-full"
                            src="images/img_divmediaicons.png"
                            alt="divmediaicons"
                          />
                          <div className="flex flex-col items-start justify-center w-auto md:w-full">
                            <div className="flex flex-col h-[403px] md:h-auto items-start justify-start max-w-[1056px] w-full">
                              <div className="w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-start w-full">
                                  <div className="flex flex-1 md:flex-1 flex-col items-start justify-start sm:pr-5 pr-[30px] w-auto md:w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="pb-[3.39px] relative w-full">
                                        <Img
                                          className="h-[400px] m-auto object-cover w-[300px] md:w-full"
                                          src="images/img_124614633imagejpg.png"
                                          alt="124614633imagej"
                                        />
                                        <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-center justify-center left-[3%] my-auto pb-[88px] pl-[2.18px] pr-[2.21px] w-[27px]">
                                          <div className="flex flex-col h-[132px] md:h-auto items-start justify-start w-[22px]">
                                            <Text
                                              className="leading-[44.00px] max-w-[22px] md:max-w-full text-[22px] text-amber-A200_01 sm:text-lg md:text-xl"
                                              size="txtInterRegular22"
                                            >
                                              prev
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 md:flex-1 flex-col items-start justify-start sm:pr-5 pr-[30px] w-auto md:w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="flex flex-col items-start justify-start pb-[3.39px] w-full">
                                        <Img
                                          className="h-[400px] sm:h-auto object-cover w-[300px] md:w-full"
                                          src="images/img_124614634imagejpg.png"
                                          alt="124614634imagej"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 md:flex-1 md:flex-col flex-row gap-[30px] items-start justify-start sm:pr-5 pr-[30px] w-auto md:w-full">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="flex flex-col items-start justify-start pb-[3.39px] w-full">
                                        <Img
                                          className="h-[400px] sm:h-auto object-cover w-[300px] md:w-full"
                                          src="images/img_124614634imagejpg.png"
                                          alt="124614635imagej"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="pb-[3.39px] relative w-full">
                                        <Img
                                          className="h-[400px] m-auto object-cover w-[300px] md:w-full"
                                          src="images/img_124614636imagejpg.png"
                                          alt="124614636imagej"
                                        />
                                        <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-center justify-center left-[37%] my-auto pb-[88px] pl-[2.19px] pr-[2.2px] w-[27px]">
                                          <div className="flex flex-col h-[132px] md:h-auto items-start justify-start w-[22px]">
                                            <Text
                                              className="leading-[44.00px] max-w-[22px] md:max-w-full text-[22px] text-amber-A200_01 sm:text-lg md:text-xl"
                                              size="txtInterRegular22"
                                            >
                                              next
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-asap items-center justify-start pt-20 md:px-10 sm:px-5 px-[63.3px] w-auto md:w-full">
                        <div className="details-text flex flex-col items-start justify-start w-auto md:w-full">
                          <div className="border-purple-A100 border-solid border-y-2 flex flex-col items-start justify-start py-0.5 w-full">
                            <div className="flex flex-col h-12 md:h-auto items-start justify-start max-w-[1056px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:px-10 sm:px-5 w-full">
                                <div className="flex flex-row h-12 md:h-auto items-center justify-center md:px-10 px-12 sm:px-5 py-2.5 w-auto">
                                  <Img
                                    className="h-full w-[38px]"
                                    src="images/img_eye_amber_a200_01.svg"
                                    alt="eye_One"
                                  />
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="sm:text-[17px] md:text-[19px] text-[21px] text-amber-A200_01 text-center tracking-[0.50px] uppercase w-auto"
                                      size="txtAsapMedium21"
                                    >
                                      Overview
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row h-12 md:h-auto items-center justify-center md:px-10 px-12 sm:px-5 py-2.5 w-auto">
                                  <Img
                                    className="h-full w-[38px]"
                                    src="images/img_imgmargin.svg"
                                    alt="imgmargin"
                                  />
                                  <div className="flex flex-col items-center justify-start pl-[0.39px] pr-[0.05px] w-auto">
                                    <Text
                                      className="sm:text-[17px] md:text-[19px] text-[21px] text-center text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                      size="txtAsapMedium21PurpleA100"
                                    >
                                      Services
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row h-12 md:h-auto items-center justify-center md:px-10 px-12 sm:px-5 py-2.5 w-auto">
                                  <Img
                                    className="h-full w-[38px]"
                                    src="images/img_favorite_purple_a100.svg"
                                    alt="favorite"
                                  />
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="sm:text-[17px] md:text-[19px] text-[21px] text-center text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                      size="txtAsapMedium21PurpleA100"
                                    >
                                      Reviews
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col items-start justify-start pb-12 pt-16 sm:px-5 px-[35px] w-auto">
                              <div className="flex flex-col items-start justify-start pb-12 w-auto md:w-full">
                                <div className="flex flex-col gap-[47.99px] items-start justify-start pb-4 pt-6 w-auto md:w-full">
                                  <div className="flex flex-row gap-[11px] items-start justify-start max-w-[1056px] md:pr-10 sm:pr-5 w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_imgsvg.svg"
                                      alt="imgsvg"
                                    />
                                    <div className="flex flex-col h-7 md:h-auto items-start justify-start">
                                      <Text
                                        className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[0.50px] uppercase w-auto"
                                        size="txtAsapBold24"
                                      >
                                        About me
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start pr-[4.63px] w-auto md:w-full">
                                    <Text
                                      className="leading-[32.00px] text-base text-black-900 tracking-[0.50px]"
                                      size="txtAsapRegular16"
                                    >
                                      <>
                                        Hello, my name is Marina and i am 25
                                        years old. I am one very sweet and sexy
                                        girl.
                                        <br />
                                        Young, attractive and very passionate. I
                                        love the sex. I am something you wont
                                        forget.
                                        <br />I am proffesional escort/vip
                                        escort. You will receive a very special
                                        attitude. I CAN DO
                                        <br />
                                        EVERYTHING FOR YOU. JUST ASK ABOUT IT.
                                        DONT WORRY.
                                      </>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pb-12 w-auto md:w-full">
                                <div className="flex flex-col gap-12 items-start justify-start pt-6 w-auto md:w-full">
                                  <div className="flex flex-row gap-[11px] items-start justify-start md:pr-10 sm:pr-5 pr-[805.39px] w-auto md:w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_imgsvg_black_900.svg"
                                      alt="imgsvg_One"
                                    />
                                    <Text
                                      className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                      size="txtAsapBold24"
                                    >
                                      Personal Details
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[100%] md:w-full">
                                    <div className="flex md:flex-col flex-row md:gap-5 items-end w-[100%] justify-start w-auto">
                                      <List
                                        className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 justify-center md:grid-cols-2 grid-cols-3 w-[60%] md:w-full"
                                        orientation="horizontal"
                                      >
                                        <div className="flex flex-col items-start justify-start pb-[25px] w-auto">
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-center justify-start pt-[23px]">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px]"
                                                size="txtAsapRegular16"
                                              >
                                                Female
                                              </Text>
                                            </div>
                                            <div className="flex flex-col items-center justify-start pt-1">
                                              <Text
                                                className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                size="txtAsapSemiBold14"
                                              >
                                                Gender
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start pb-[25px] w-auto">
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-center justify-start pt-[23px]">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px]"
                                                size="txtAsapRegular16"
                                              >
                                                Heterosexual
                                              </Text>
                                            </div>
                                            <div className="flex flex-col items-center justify-start pt-1">
                                              <Text
                                                className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                size="txtAsapSemiBold14"
                                              >
                                                Sexuality
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start pb-[25px] w-auto">
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-center justify-start pt-[23px]">
                                              <Text
                                                className="h-[18px] text-base text-black-900 tracking-[0.50px]"
                                                size="txtAsapRegular16"
                                              >
                                                26
                                              </Text>
                                            </div>
                                            <div className="flex flex-col items-center justify-start pt-1">
                                              <Text
                                                className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                size="txtAsapSemiBold14"
                                              >
                                                Age
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </List>
                                      <div className="flex flex-col items-start justify-start pb-[25px] w-auto">
                                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                          <div className="flex flex-col items-center justify-start pt-6">
                                            <Text
                                              className="text-base text-black-900 tracking-[0.50px]"
                                              size="txtAsapRegular16"
                                            >
                                              Bulgarian
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-center justify-start pt-1">
                                            <Text
                                              className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                              size="txtAsapSemiBold14"
                                            >
                                              Nationality
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pb-12 w-auto md:w-full">
                                <div className="flex flex-col gap-12 items-start justify-start pt-6 w-auto md:w-full">
                                  <div className="flex flex-row gap-[11px] items-start justify-start md:pr-10 sm:pr-5 pr-[825px] w-auto md:w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_imgsvg_black_900_24x24.svg"
                                      alt="imgsvg_Two"
                                    />
                                    <Text
                                      className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                      size="txtAsapBold24"
                                    >
                                      Physical Details
                                    </Text>
                                  </div>
                                  <div className="p-details flex flex-col items-start justify-start w-auto md:w-full">
                                    <div className="person flex flex-col items-center justify-start w-full">
                                      <div className="flex items-start flex-col items-center justify-start w-full">
                                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                          <div className="flex flex-col items-start justify-start pb-[25px] w-auto">
                                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                              <div className="flex flex-row h-[42px] md:h-auto items-start justify-start w-auto">
                                                <List
                                                  className="sm:flex-col flex-row grid grid-cols-2 w-[43px]"
                                                  orientation="horizontal"
                                                >
                                                  <div className="flex flex-col items-start justify-end pr-1 pt-1 w-full">
                                                    <Text
                                                      className="mt-[19px] text-base text-black-900 tracking-[0.50px]"
                                                      size="txtAsapRegular16"
                                                    >
                                                      - / 
                                                    </Text>
                                                  </div>
                                                  <div className="flex flex-col items-start justify-end pr-1 pt-1 w-full">
                                                    <Text
                                                      className="mt-[19px] text-base text-black-900 tracking-[0.50px]"
                                                      size="txtAsapRegular16"
                                                    >
                                                      - / 
                                                    </Text>
                                                  </div>
                                                </List>
                                                <div className="flex flex-col items-center justify-end pt-6">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    -
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex flex-col items-center justify-end pt-[5px]">
                                                <Text
                                                  className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                  size="txtAsapSemiBold14"
                                                >
                                                  CHEST / WAIST / HIPS
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                          <List
                                            className="types md:flex-1 sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[76%] md:w-full"
                                            orientation="horizontal"
                                          >
                                            <div className="flex flex-col items-center justify-start sm:ml-[0] pb-[25px] w-auto">
                                              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                                <div className="flex flex-col items-center justify-start pt-[23px]">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    Caucasian
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-center justify-end pt-1">
                                                  <Text
                                                    className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                    size="txtAsapSemiBold14"
                                                  >
                                                    Ethnicity
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start sm:ml-[0] pb-[25px] w-auto">
                                              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                                <div className="flex flex-col h-[42px] items-center justify-start pt-[23px] w-[42px]">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    Black
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-center justify-end pt-1">
                                                  <Text
                                                    className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                    size="txtAsapSemiBold14"
                                                  >
                                                    Hair colour
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-start sm:ml-[0] pb-[25px] w-auto">
                                              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                                <div className="flex flex-col items-center justify-start pt-[23px]">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    169cm
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-center justify-end pt-1">
                                                  <Text
                                                    className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                    size="txtAsapSemiBold14"
                                                  >
                                                    Height
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </List>
                                        </div>
                                        <div className="flex md:flex-col flex-row gap-[7%] items-start justify-start w-full">
                                          <div className="w-[10%] h-44 md:h-[89px] relative w-1/4 md:w-full">
                                            <div className="absolute flex flex-col items-start justify-start mx-auto pb-[25px] top-[0] w-auto">
                                              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                                <div className="flex flex-col items-center justify-end pt-6">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    52kg
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-center justify-end pt-1">
                                                  <Text
                                                    className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                    size="txtAsapSemiBold14"
                                                  >
                                                    Weight
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-auto">
                                              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                                <div className="flex flex-col items-center justify-end pt-6">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    -
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-center justify-end pt-1">
                                                  <Text
                                                    className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                    size="txtAsapSemiBold14"
                                                  >
                                                    Breast implant
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex md:flex-1 flex-col gap-[42px] items-center justify-start w-1/4 md:w-full">
                                            <div className="flex flex-col items-start justify-start pb-[25px] w-auto">
                                              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                                <div className="flex flex-col items-center justify-start pt-[23px]">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    Brown
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-center justify-end pt-1">
                                                  <Text
                                                    className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                    size="txtAsapSemiBold14"
                                                  >
                                                    Eye colour
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-start pb-[24.09px] md:pr-10 sm:pr-5 pt-[5px] w-auto">
                                              <Text
                                                className="text-purple-A100 text-sm tracking-[0.50px] uppercase w-auto"
                                                size="txtAsapSemiBold14"
                                              >
                                                Body Type
                                              </Text>
                                            </div>
                                          </div>
                                          <div className="h-44 md:h-[89px] relative w-1/4 md:w-full">
                                            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[25px] top-[0] w-auto">
                                              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                                <div className="flex flex-col items-center justify-end pt-6">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    -
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-center justify-end pt-1">
                                                  <Text
                                                    className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                    size="txtAsapSemiBold14"
                                                  >
                                                    Genetalia
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-auto">
                                              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                                <div className="flex flex-col items-center justify-end pt-6">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px]"
                                                    size="txtAsapRegular16"
                                                  >
                                                    -
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-center justify-end pt-1">
                                                  <Text
                                                    className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                    size="txtAsapSemiBold14"
                                                  >
                                                    Body Art
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-start justify-start pb-[25px] w-auto">
                                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[75px] w-auto">
                                              <div className="flex flex-col items-center justify-end pt-6">
                                                <Text
                                                  className="text-base text-black-900 tracking-[0.50px]"
                                                  size="txtAsapRegular16"
                                                >
                                                  -
                                                </Text>
                                              </div>
                                              <div className="flex flex-col items-center justify-end pt-1">
                                                <Text
                                                  className="text-purple-A100 text-sm tracking-[0.50px] uppercase"
                                                  size="txtAsapSemiBold14"
                                                >
                                                  Cup Size
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pb-12 w-auto md:w-full">
                                <div className="flex flex-col gap-[47.99px] items-start justify-start pt-6 w-auto md:w-full">
                                  <div className="flex flex-row gap-[11px] items-start justify-start md:pr-10 sm:pr-5 pr-[940.39px] w-auto md:w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_imgsvg_24x24.svg"
                                      alt="imgsvg_Three"
                                    />
                                    <Text
                                      className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                      size="txtAsapBold24"
                                    >
                                      Language
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                                    <div className="flex relative w-full">
                                      <div className="flex flex-col items-start justify-start my-auto pb-8 md:pr-10 sm:pr-5 pr-[49.87px] w-auto">
                                        <div className="flex flex-col items-start justify-between pr-[0.01px] w-[484px] sm:w-full">
                                          <div className="flex flex-col items-start justify-start pr-4 w-auto">
                                            <div className="flex flex-row items-center justify-start w-auto">
                                              <Img
                                                className="h-full w-12"
                                                src="images/img_close_red_a700.svg"
                                                alt="close"
                                              />
                                              <div className="flex flex-col items-start justify-start w-auto">
                                                <Text
                                                  className="text-base text-black-900 tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular16"
                                                >
                                                  English
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-center justify-start ml-[-0.01px] my-auto pb-8 md:pr-10 sm:pr-5 pr-[49.88px] w-auto z-[1]">
                                        <div className="flex flex-col items-center justify-between w-auto sm:w-full">
                                          <div className="flex flex-col items-start justify-start pr-4 w-auto">
                                            <div className="flex flex-row items-center justify-start w-auto">
                                              <Img
                                                className="h-full w-12"
                                                src="images/img_contrast_red_a700.svg"
                                                alt="contrast"
                                              />
                                              <div className="flex flex-col items-start justify-start w-auto">
                                                <Text
                                                  className="text-base text-black-900 tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapRegular16"
                                                >
                                                  German
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start pb-8 md:pr-10 sm:pr-5 pr-[49.87px] w-auto sm:w-full">
                                      <div className="flex flex-col items-center justify-between pr-[0.01px] w-auto sm:w-full">
                                        <div className="flex flex-col items-start justify-start pr-4 w-auto">
                                          <div className="flex flex-row items-center justify-start w-auto">
                                            <Img
                                              className="h-full w-12"
                                              src="images/img_imgmargin_light_green_900.svg"
                                              alt="imgmargin_One"
                                            />
                                            <div className="flex flex-col items-start justify-start w-auto">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px] uppercase w-auto"
                                                size="txtAsapRegular16"
                                              >
                                                Bulgarian
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pb-12 w-auto md:w-full">
                                <div className="flex flex-col gap-[47.99px] items-start justify-start pt-6 w-auto md:w-full">
                                  <div className="flex flex-row gap-[11px] items-start justify-start md:pr-10 sm:pr-5 pr-[825.39px] w-auto md:w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_imgsvg_1.svg"
                                      alt="imgsvg_Four"
                                    />
                                    <Text
                                      className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                      size="txtAsapBold24"
                                    >
                                      Booking Notes
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between w-full">
                                          <div className="flex sm:flex-1 flex-col items-start justify-start pb-2 w-auto sm:w-full">
                                            <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[369.7px] w-auto sm:w-full">
                                              <Img
                                                className="h-full w-9"
                                                src="images/img_close_purple_a100.svg"
                                                alt="close_One"
                                              />
                                              <div className="flex flex-col items-start justify-start w-auto">
                                                <Text
                                                  className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                  size="txtAsapRegular16"
                                                >
                                                  Anonymous Calls
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex sm:flex-1 flex-col items-start justify-start pb-2 w-auto sm:w-full">
                                            <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[428.7px] w-auto sm:w-full">
                                              <Img
                                                className="h-full w-9"
                                                src="images/img_close_purple_a100.svg"
                                                alt="close_Two"
                                              />
                                              <div className="flex flex-col items-start justify-start w-auto">
                                                <Text
                                                  className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                  size="txtAsapRegular16"
                                                >
                                                  Telegram
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start pb-2 w-auto md:w-full">
                                          <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[957.92px] w-auto md:w-full">
                                            <Img
                                              className="h-full w-9"
                                              src="images/img_close_purple_a100.svg"
                                              alt="close_Three"
                                            />
                                            <div className="flex flex-col items-start justify-start pr-[0.47px] w-auto">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                size="txtAsapRegular16"
                                              >
                                                Whatsapp
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pb-12 w-auto md:w-full">
                                <div className="flex flex-col gap-12 items-start justify-start pt-6 w-auto md:w-full">
                                  <div className="flex flex-row gap-[11px] items-start justify-start md:pr-10 sm:pr-5 pr-[949.39px] w-auto md:w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_imgsvg_2.svg"
                                      alt="imgsvg_Five"
                                    />
                                    <Text
                                      className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                      size="txtAsapBold24"
                                    >
                                      Location
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                                    <div className="md:h-[341px] h-[343px] relative w-[1021px] md:w-full">
                                      <div className="absolute flex flex-col gap-[0.01px] md:h-auto h-full inset-y-[0] items-center justify-start left-[0] my-auto pb-[246.04px]">
                                        <div className="flex flex-col items-start justify-start pb-[31.59px] md:pr-10 sm:pr-5 pt-[19.92px] w-auto sm:w-full">
                                          <Text
                                            className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                            size="txtAsapBold24"
                                          >
                                            Incall
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[128.69px] w-full">
                                          <Text
                                            className="text-base text-black-900 tracking-[0.50px] w-auto"
                                            size="txtAsapRegular16"
                                          >
                                            This Gingr has chosen not to show
                                            their exact address.
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start my-auto right-[0] w-[48%]">
                                        <div className="flex flex-col items-start justify-start pb-[31.59px] md:pr-10 sm:pr-5 pr-[427.7px] pt-[19.92px] w-auto sm:w-full">
                                          <Text
                                            className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                            size="txtAsapBold24"
                                          >
                                            Outcall
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start pb-[15.16px] md:pr-10 sm:pr-5 pr-[471.7px] w-auto sm:w-full">
                                          <Text
                                            className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900 tracking-[0.50px] w-auto"
                                            size="txtAsapRegular21"
                                          >
                                            Zürich
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[405px] w-auto sm:w-full">
                                          <Text
                                            className="sm:text-[17px] md:text-[19px] text-[21px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                            size="txtAsapSemiBold21"
                                          >
                                            Location
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[432.7px] w-auto sm:w-full">
                                          <Text
                                            className="text-base text-black-900 tracking-[0.50px] w-auto"
                                            size="txtAsapRegular16"
                                          >
                                            <>Client&#39;s Hotel</>
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start mt-12 md:pr-10 sm:pr-5 w-auto sm:w-full">
                                          <Text
                                            className="sm:text-[17px] md:text-[19px] text-[21px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                            size="txtAsapSemiBold21"
                                          >
                                            I travel to
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[505.7px] w-full">
                                            <Text
                                              className="text-base text-black-900 tracking-[0.50px] w-auto"
                                              size="txtAsapRegular16"
                                            >
                                              City
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[403.7px] w-full">
                                            <Text
                                              className="text-base text-black-900 tracking-[0.50px] w-auto"
                                              size="txtAsapRegular16"
                                            >
                                              City surroundings
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[469.7px] w-full">
                                            <Text
                                              className="text-base text-black-900 tracking-[0.50px] w-auto"
                                              size="txtAsapRegular16"
                                            >
                                              National
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pb-12 w-auto md:w-full">
                                <div className="flex flex-col gap-[47.99px] items-start justify-start pt-6 w-auto md:w-full">
                                  <div className="flex flex-row gap-[11px] items-start justify-start md:pr-10 sm:pr-5 pr-[1001.39px] w-auto md:w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_imgsvg_3.svg"
                                      alt="imgsvg_Six"
                                    />
                                    <Text
                                      className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                      size="txtAsapBold24"
                                    >
                                      Price
                                    </Text>
                                  </div>
                                  <div className="flex md:flex-col flex-row gap-[-0.02px] items-start justify-start w-full">
                                    <div className="call-wrap lex flex-col h-[190px] md:h-auto items-start justify-start">
                                      <div className="flex flex-col items-start justify-start pb-[31.59px] md:pr-10 sm:pr-5 w-auto sm:w-full">
                                        <Text
                                          className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                          size="txtAsapBold24"
                                        >
                                          INCALL
                                        </Text>
                                      </div>
                                      <List
                                        className="flex flex-col items-start md:pr-10 sm:pr w-full"
                                        orientation="vertical"
                                      >
                                        <div className="flex flex-1 md:flex-1 md:flex-col flex-row md:gap-10 gap-[50px] items-start justify-start my-0 pb-[13.69px] pr-[0.01px] w-auto md:w-full">
                                          <div className="flex flex-col items-start justify-start w-auto">
                                            <Text
                                              className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                              size="txtAsapSemiBold19"
                                            >
                                              1 Hour
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                size="txtAsapRegular16"
                                              >
                                                € 200
                                              </Text>
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                size="txtAsapRegular16"
                                              >
                                                € 200
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 md:flex-1 md:flex-col flex-row md:gap-10 w-[63%] gap1 gap-[50px] items-start justify-start my-0 pb-[13.69px] pr-[0.01px] w-auto md:w-full">
                                          <div className="flex flex-col items-start justify-start w-auto">
                                            <Text
                                              className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                              size="txtAsapSemiBold19"
                                            >
                                              2 Hour
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                size="txtAsapRegular16"
                                              >
                                                € 400
                                              </Text>
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                size="txtAsapRegular16"
                                              >
                                                € 400
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 md:flex-1 md:flex-col flex-row md:gap-10 gap-[50px] items-start justify-start my-0  pb-[13.69px] pr-[0.01px] w-auto md:w-full">
                                          <div className="flex flex-col items-start justify-start w-auto">
                                            <Text
                                              className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                              size="txtAsapSemiBold19"
                                            >
                                              3 Hour
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                size="txtAsapRegular16"
                                              >
                                                € 600
                                              </Text>
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-auto">
                                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                              <Text
                                                className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                size="txtAsapRegular16"
                                              >
                                                € 600
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </List>
                                    </div>
                                    <div className="w-[48%]">
                                      <div className="flex flex-col h-[190px] md:h-auto items-start justify-start">
                                        <div className="flex flex-col items-start justify-start pb-[31.59px] md:pr-10 sm:pr-5 w-auto sm:w-full">
                                          <Text
                                            className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                            size="txtAsapBold24"
                                          >
                                            OUTCALL
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                          <div className="flex flex-col items-start justify-start pb-[13.69px] w-auto sm:w-full">
                                            <div className="flex flex-col items-start justify-start w-auto">
                                              <Text
                                                className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                size="txtAsapSemiBold19"
                                              >
                                                1 Hour
                                              </Text>
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-start justify-start pb-[13.69px] w-auto sm:w-full">
                                            <div className="flex flex-col items-start justify-start w-auto">
                                              <Text
                                                className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                size="txtAsapSemiBold19"
                                              >
                                                2 Hour
                                              </Text>
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-start justify-start pb-[13.69px] w-auto sm:w-full">
                                            <div className="flex flex-col items-start justify-start w-auto">
                                              <Text
                                                className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                size="txtAsapSemiBold19"
                                              >
                                                3 Hour
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pb-12 w-auto md:w-full">
                                <div className="flex flex-col items-start justify-start pt-6 w-auto md:w-full">
                                  <div className="flex flex-col gap-[47.99px] items-start justify-start w-full">
                                    <div className="flex flex-row gap-[11px] items-start justify-start md:pr-10 sm:pr-5 pr-[915.39px] w-auto md:w-full">
                                      <Img
                                        className="h-6 w-6"
                                        src="images/img_clock_black_900.svg"
                                        alt="clock"
                                      />
                                      <Text
                                        className="text-2xl md:text-[22px] text-amber-A200_01 sm:text-xl tracking-[1.10px] uppercase w-auto"
                                        size="txtAsapBold24"
                                      >
                                        Availability
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-[100%] md:w-full">
                                      <div className="flex md:flex-col flex-row gap-[-0.01px] w-[80%] items-start justify-start w-auto">
                                        <div className="flex flex-col items-start justify-start w-[40%] w-auto sm:w-full">
                                          <List
                                            className="flex flex-col w-[60%] gap-px items-center w-full"
                                            orientation="vertical"
                                          >
                                            <div className="flex flex-1 flex-col items-start justify-start pb-[7px] pr-[7px] w-full">
                                              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[50px] items-end justify-between pr-[0.01px] w-auto sm:w-full">
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start pb-[19px]">
                                                  <Text
                                                    className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                    size="txtAsapSemiBold19"
                                                  >
                                                    Monday
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start">
                                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                                    <Text
                                                      className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                      size="txtAsapRegular16"
                                                    >
                                                      All day
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex flex-1 flex-col items-start justify-start pb-[7px] pr-[7px] w-full">
                                              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[50px] items-end justify-between pr-[0.01px] w-auto sm:w-full">
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start pb-[19px]">
                                                  <Text
                                                    className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                    size="txtAsapSemiBold19"
                                                  >
                                                    Tuesday
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start">
                                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                                    <Text
                                                      className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                      size="txtAsapRegular16"
                                                    >
                                                      All day
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </List>
                                          <div className="flex flex-col items-start justify-start pb-[7px] pr-[7px] w-full">
                                            <div className=" w-[53%]">
                                              <div className="flex md:flex-col flex-row md:gap-10 gap-[18px] items-end justify-between pr-[0.01px] w-auto">
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start pb-[19px] pr-[0.44px]">
                                                  <Text
                                                    className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                    size="txtAsapSemiBold19"
                                                  >
                                                    Wednesday
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start">
                                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                                    <Text
                                                      className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                      size="txtAsapRegular16"
                                                    >
                                                      All day
                                                    </Text>
                                                  </div>
                                                </div>
                                                <div className="flex flex-col hidden h-[41px] md:h-auto items-start justify-start">
                                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                                    <Text
                                                      className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                      size="txtAsapRegular16"
                                                    >
                                                      All day
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex flex-col items-start justify-start pb-[7px] pr-[7px] w-full">
                                            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[50px] items-end justify-between pr-[0.01px] w-auto sm:w-full">
                                              <div className="flex flex-col h-[41px] md:h-auto items-start justify-start pb-[19px]">
                                                <Text
                                                  className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                  size="txtAsapSemiBold19"
                                                >
                                                  Thursday
                                                </Text>
                                              </div>
                                              <div className="flex flex-col h-[41px] md:h-auto items-start justify-start">
                                                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                                  <Text
                                                    className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                    size="txtAsapRegular16"
                                                  >
                                                    All day
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col items-start w-[45%] justify-start w-auto sm:w-full">
                                          <List
                                            className="flex flex-col gap-px w-full"
                                            orientation="vertical"
                                          >
                                            <div className="flex md:flex-1 flex-col items-start justify-start pb-[7px] pr-[7px] w-[92%] md:w-full">
                                              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[50px] items-end justify-between w-auto sm:w-full">
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start pb-[19px]">
                                                  <Text
                                                    className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                    size="txtAsapSemiBold19"
                                                  >
                                                    Friday
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start">
                                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                                    <Text
                                                      className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                      size="txtAsapRegular16"
                                                    >
                                                      All day
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex md:flex-1 flex-col items-start justify-start pb-[7px] pr-[7px] w-[92%] md:w-full">
                                              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[25px] items-end justify-between w-auto sm:w-full">
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start pb-[19px]">
                                                  <Text
                                                    className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                    size="txtAsapSemiBold19"
                                                  >
                                                    Saturday
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start">
                                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 w-full">
                                                    <Text
                                                      className="text-base text-black-900 tracking-[0.50px] w-auto"
                                                      size="txtAsapRegular16"
                                                    >
                                                      All day
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex flex-1 flex-col items-start justify-start pb-[7px] w-full">
                                              <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                                                <div className="flex flex-col h-[41px] md:h-auto items-start justify-start pb-[19px]">
                                                  <Text
                                                    className="text-[19px] text-purple-A100 tracking-[0.50px] uppercase w-auto"
                                                    size="txtAsapSemiBold19"
                                                  >
                                                    Sunday
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </List>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute escort-details-wrap flex flex-col font-asap inset-x-[0] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[63px] top-[0] w-full">
                      <div className="escort-details flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                        <div className="escort-widget-wrap flex flex-col h-[360px] md:h-auto items-start justify-start w-[360px]">
                          <Img
                            className="h-[360px] escort-img md:h-auto object-cover w-[360px]"
                            src="images/img_divngtnsc30975.png"
                            alt="divngtnsc30975"
                          />
                        </div>
                        <div className="escort-text-wrap flex flex-col h-[360px] md:h-auto items-start justify-end sm:pl-5 pl-[25px] pt-[143px]">
                          <div className="flex flex-col h-[90px] md:h-auto items-center justify-between py-8 w-full">
                            <div className="flex flex-col items-center justify-start md:pr-10 sm:pr-5 pr-[339.19px] w-auto">
                              <div className="flex flex-col items-start justify-start pr-[0.44px] w-auto">
                                <Text
                                  className="hidden text-3xl sm:text-[26px] md:text-[28px] text-white-A700 tracking-[0.50px] uppercase w-auto"
                                  size="txtAsapRegular30"
                                >
                                  Marina
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-between md:pr-10 sm:pr-5 pr-[575.05px] w-full">
                            <div className="flex flex-row items-center justify-start w-auto">
                              <Img
                                className="h-8 w-8"
                                src="images/img_svg_purple_a100_01.svg"
                                alt="svg"
                              />
                              <div className="flex flex-col items-end justify-start pl-3">
                                <Text
                                  className="text-base text-white-A700 tracking-[0.50px] uppercase"
                                  size="txtAsapRegular16WhiteA700"
                                >
                                  0.0 KM
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[25px]"
                                src="images/img_videocamera_white_a700.svg"
                                alt="videocamera"
                              />
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700 tracking-[0.50px] uppercase w-auto"
                                  size="txtAsapRegular16WhiteA700"
                                >
                                  Zürich
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[43px] md:h-auto object-cover w-full"
                            src="images/img_divdividermobile.png"
                            alt="divdividermobil"
                          />
                          <div className="flex md:flex-col flex-row gap-[0.01px] items-start justify-between w-full">
                            <div className="flex sm:flex-1 flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[197.19px] w-auto sm:w-full">
                              <div className="flex flex-col h-[52px] md:h-auto items-start justify-start">
                                <div className="flex flex-col items-center justify-between w-full">
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <div className="flex flex-col h-[52px] md:h-auto items-start justify-start w-[180px]">
                                      <Button
                                        className="cursor-pointer font-bold text-[19px] text-center tracking-[0.50px] uppercase w-full"
                                        shape="square"
                                        color="amber_A200_01"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        Hook Up
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-end md:pl-10 sm:pl-5 pl-[143.34px] w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-col gap-[6.99px] items-start justify-start w-full">
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[88.72px] w-auto">
                                    <div className="flex flex-row items-start justify-between pr-[0.18px] w-full">
                                      <Text
                                        className="text-amber-A200_01 text-base tracking-[0.50px] uppercase w-auto"
                                        size="txtAsapRegular16AmberA20001"
                                      >
                                        INCALL
                                      </Text>
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <div className="flex flex-row gap-[0.19px] items-center justify-between w-full">
                                          <Text
                                            className="text-base text-white-A700 tracking-[0.50px] uppercase w-auto"
                                            size="txtAsapRegular16WhiteA700"
                                          >
                                            from 
                                          </Text>
                                          <div className="flex flex-col items-start justify-start pr-[0.94px] w-auto">
                                            <Text
                                              className="text-base text-white-A700 tracking-[0.50px] uppercase w-auto"
                                              size="txtAsapRegular16WhiteA700"
                                            >
                                              € 200
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[72.72px] items-start justify-start pr-[0.18px] w-auto">
                                    <Text
                                      className="text-amber-A200_01 text-base tracking-[0.50px] uppercase w-auto"
                                      size="txtAsapRegular16AmberA20001"
                                    >
                                      OUTCALL
                                    </Text>
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <div className="flex flex-col items-center justify-between w-full">
                                        <Text
                                          className="text-base text-white-A700 tracking-[0.50px] uppercase w-auto"
                                          size="txtAsapRegular16WhiteA700"
                                        >
                                          from 
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[54px] inset-x-[0] mx-auto top-[0] w-full"></div>
          </div>
          <div className="profile-nav absolute font-montserrat md:h-[917px] h-[952px] left-[0] pb-1.5 px-1.5 top-[1%] w-[22%]">
            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[15px] shadow-bs7 w-[93%]">
              <div className="flex flex-col items-start justify-start mb-[674px] w-full">
                <div className="flex flex-col items-start justify-start w-[34%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[70px] items-start justify-start p-1 w-[84%] md:w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_divuserpopularityicn.svg')",
                    }}
                  >
                    <Img
                      className="h-[49px] md:h-auto my-1.5 rounded-[50%] w-[49px]"
                      src="images/img_bv7mozwnhchqrqp_49x49.png"
                      alt="bv7mozwnhchqrqp_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start py-3 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-900_02"
                      size="txtMontserratMedium16Bluegray90002"
                    >
                      Tekena west
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-end py-[5px]">
                      <Text
                        className="text-[15px] text-gray-800"
                        size="txtMontserratRegular15Gray800"
                      >
                        <span className="text-gray-800 font-montserrat text-left font-normal">
                          Popularity:{" "}
                        </span>
                        <span className="text-purple-400 font-montserrat text-left font-normal">
                          Very low
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium mb-[3px] min-w-[227px] mt-[15px] rounded-[17px] text-center text-sm"
                    color="pink_50"
                    size="md"
                    variant="outline"
                  >
                    Increase Popularity
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[3%] flex flex-col font-roboto inset-x-[0] items-center justify-start mx-auto py-2 w-[85%]">
              <div className="leftNav flex flex-row items-center justify-start px-4 w-full">
                <Img
                  className="h-14 w-14"
                  src="images/img_home.svg"
                  alt="home"
                />
                <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-gray-600_01"
                        size="txtRobotoRegular16"
                      >
                        Home page
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <div className="h-14 relative w-full">
                  <Img
                    className="absolute h-14 inset-y-[0] left-[6%] my-auto w-14"
                    src="images/img_divvlistitemiconmargin.svg"
                    alt="divvlistitemico"
                  />
                  <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center my-auto right-[6%] w-[70%]">
                    <div className="flex flex-col items-center justify-start py-4 w-[84%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtRobotoRegular16"
                          >
                            Features
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-4 cursor"
                      src="images/img_arrowdown_gray_600_01.svg"
                      alt="arrowdown_One"
                    />
                  </div>
                  <Line className="absolute bg-black-900_1e border-gray-800_03 border-solid border-t h-px inset-x-[0] mx-auto top-[0] w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    <div className="leftNav flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
                      <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Overview
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leftNav flex flex-1 flex-col items-end justify-start my-0 px-4 w-full">
                      <div className="flex flex-col items-center justify-start py-4 w-[79%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              Advert free
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leftNav flex flex-1 flex-col justify-start my-0 w-full">
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[72px] py-4 w-[70%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtRobotoRegular16"
                            >
                              18 + content
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-black-900_1e border-b border-gray-800_03 border-solid h-px w-full" />
                    </div>
                  </List>
                </div>
              </div>
              <Input
                name="link"
                placeholder="Account settings"
                className="font-bold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                wrapClassName="flex mt-4 pl-4 pr-[35px] w-full"
                prefix={
                  <Img
                    className="h-14 my-auto"
                    src="images/img_lock_white_a700.svg"
                    alt="lock"
                  />
                }
                shape="square"
                color="orange_600"
              ></Input>
              <div className="leftNav flex flex-row items-center justify-start mt-4 px-4 w-full">
                <Img
                  className="h-14 w-14"
                  src="images/img_divvlistitemiconmargin_gray_600_01.svg"
                  alt="divvlistitemico_One"
                />
                <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-gray-600_01"
                        size="txtRobotoRegular16"
                      >
                        Become a customer
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leftNav flex flex-row items-center justify-start mt-[15px] px-4 w-full">
                <Img
                  className="h-14 w-14"
                  src="images/img_divvlistitemiconmargin_gray_600_01_56x56.svg"
                  alt="divvlistitemico_Two"
                />
                <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-gray-600_01"
                        size="txtRobotoRegular16"
                      >
                        LadiesSTARS
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leftNav flex flex-row items-center justify-start mt-4 px-4 w-full">
                <Img
                  className="h-14 w-[55px]"
                  src="images/img_divvlistitemiconmargin_gray_600_01_56x55.svg"
                  alt="divvlistitemico_Three"
                />
                <div className="flex flex-col items-center justify-start py-4 w-[79%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-gray-600_01"
                        size="txtRobotoRegular16"
                      >
                        Coins
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-montserrat items-center justify-end mb-[34px] p-[5px] w-full">
                <div className="flex flex-row items-center justify-start pr-[11px] py-[11px] w-[82%] md:w-full">
                  <Img
                    className="h-5"
                    src="images/img_user_gray_800.svg"
                    alt="user_One"
                  />
                  <Text
                    className="text-base text-gray-800"
                    size="txtMontserratRegular16Gray800"
                  >
                    Live Videos
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-montserrat items-center justify-start max-w-[1349px] mt-[59px] mx-auto md:px-5 w-full">
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
                        <Img src="images/img_contrast.svg" alt="contrast_One" />
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
      </div>
    </>
  );
};

export default DesktopTwentyNinePage;
