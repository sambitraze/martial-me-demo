import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProfilePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1220px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full">
              <Input
                name="searchbox"
                placeholder="Search here"
                className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                wrapClassName="bg-gray-900_02 flex md:flex-1 px-[35px] py-[18px] rounded-[34px] w-[27%] md:w-full"
                prefix={
                  <Img
                    className="h-7 mr-5 my-px"
                    src="images/img_search_2_blue_gray_700.svg"
                    alt="search 2"
                  />
                }
              ></Input>
              <Text
                className="md:ml-[0] ml-[79px] text-base text-deep_purple-600 underline"
                size="txtCairoBold16Deeppurple600"
              >
                OTHER MENUS
              </Text>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[27px] grid grid-cols-4 md:ml-[0] ml-[54px] md:px-5 w-[13%] md:w-full"
                orientation="horizontal"
              >
                <div className="md:h-7 h-[43px] relative w-full">
                  <Img
                    className="absolute bottom-[0] h-7 left-[0] w-7"
                    src="images/img_bell1.svg"
                    alt="bellOne"
                  />
                  <div className="absolute h-[27px] right-[0] top-[0] w-[26px]">
                    <div className="absolute bg-light_blue-300 h-[26px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs w-[26px]"></div>
                    <Text
                      className="absolute h-full inset-y-[0] my-auto right-[15%] text-gray-900 text-sm"
                      size="txtCairoBold14Gray900"
                    >
                      12
                    </Text>
                  </div>
                </div>
                <div className="md:h-7 h-[43px] relative w-full">
                  <Img
                    className="absolute bottom-[0] h-7 left-[0] w-7"
                    src="images/img_gift1.svg"
                    alt="giftOne"
                  />
                  <div className="absolute h-[27px] right-[0] top-[0] w-[26px]">
                    <div className="absolute bg-light_blue-300 h-[26px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs w-[26px]"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-gray-900 text-sm w-max"
                      size="txtCairoBold14Gray900"
                    >
                      5
                    </Text>
                  </div>
                </div>
                <div className="md:h-7 h-[43px] relative w-full">
                  <Img
                    className="absolute bottom-[0] h-7 left-[0] w-7"
                    src="images/img_checkbox11.svg"
                    alt="checkboxEleven"
                  />
                  <div className="absolute h-[27px] right-[0] top-[0] w-[26px]">
                    <div className="absolute bg-light_blue-300 h-[26px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs w-[26px]"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-gray-900 text-sm w-max"
                      size="txtCairoBold14Gray900"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="h-11 md:h-7 relative w-full">
                  <Img
                    className="absolute bottom-[0] h-7 left-[0] w-7"
                    src="images/img_office1.svg"
                    alt="officeOne"
                  />
                  <div className="absolute h-[27px] right-[0] top-[0] w-[26px]">
                    <div className="absolute bg-pink-400 h-[26px] inset-[0] justify-center m-auto outline outline-[3px] outline-gray-900_01 rounded-[50%] shadow-bs w-[26px]"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-gray-900 text-sm w-max"
                      size="txtCairoBold14Gray900"
                    >
                      !
                    </Text>
                  </div>
                </div>
              </List>
              <SelectBox
                className="bg-gray-900_02 md:flex-1 font-bold leading-[normal] md:ml-[0] ml-[54px] pl-5 sm:pr-5 pr-6 py-[18px] rounded-[34px] text-base text-left text-white-A700 w-[10%] md:w-full"
                placeholderClassName="text-white-A700"
                indicator={
                  <Img
                    className="h-2 mr-[0] w-[15px]"
                    src="images/img_arrow.svg"
                    alt="arrow"
                  />
                }
                isSearchable={false}
                placeholder="ENGLISH"
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <Img
                      className="h-7 mr-3.5 w-7"
                      src="images/img_unitedstates_1.svg"
                      alt="united-states 1"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                name="language"
                isMulti={false}
                options={languageOptionsList}
              />
              <Line className="bg-blue_gray-900 h-14 md:h-px md:ml-[0] ml-[30px] md:mt-0 my-1.5 rounded-[1px] md:w-full w-px" />
              <div className="flex md:flex-1 flex-row gap-6 items-center justify-center md:ml-[0] ml-[30px] mr-6 md:px-5 w-[12%] md:w-full">
                <Img
                  className="h-[57px] w-[57px]"
                  src="images/img_user_gray_400.svg"
                  alt="user"
                />
                <div className="flex flex-col items-center justify-start w-[64%]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-base text-white-A700"
                        size="txtCairoBold16"
                      >
                        Franklin Jr.
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-right text-sm"
                        size="txtCairoRegular14"
                      >
                        Super Admin
                      </Text>
                    </div>
                    <Img
                      className="h-2"
                      src="images/img_arrow.svg"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start mb-[125px] py-[33px] rounded-[14px] shadow-bs4 w-[49%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[3px] w-full">
                    <div className="flex flex-col gap-9 items-start justify-start w-[88%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                          size="txtCairoBold34"
                        >
                          My Profile
                        </Text>
                        <Text
                          className="text-lg text-white-A700"
                          size="txtOpenSans18"
                        >
                          Lorem ipsum dolor sit amet{" "}
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[41px] items-end justify-between w-full">
                        <div className="bg-gray-400 h-[195px] rounded-[14px] w-[195px]"></div>
                        <div className="flex flex-col gap-[26px] items-start justify-start sm:mt-0 mt-[17px]">
                          <div className="flex flex-col items-start justify-start w-[57%] md:w-full">
                            <div className="font-cairo h-[81px] relative w-[76%]">
                              <div className="flex flex-row font-opensans gap-[9px] items-start justify-start mb-[-5.84px] w-[45%] z-[1]">
                                <div className="bg-green-500 h-[11px] my-1 rounded-[5px] w-[11px]"></div>
                                <Text
                                  className="text-green-500 text-sm"
                                  size="txtOpenSansBold14Green500"
                                >
                                  ONLINE
                                </Text>
                              </div>
                              <Text
                                className="mt-auto mx-auto text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                                size="txtCairoBold36"
                              >
                                Franklin Jr.
                              </Text>
                            </div>
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansRomanSemiBold16"
                            >
                              <span className="text-white-A700 font-opensans text-left font-semibold">
                                UI Designer at{" "}
                              </span>
                              <span className="text-deep_purple-600 font-opensans text-left font-bold">
                                Kleon Studios
                              </span>
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                            <Input
                              name="fb"
                              placeholder="Chat Now"
                              className="font-bold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 w-full"
                              wrapClassName="bg-deep_purple-600 flex sm:flex-1 pl-[25px] pr-[35px] py-[13px] rounded-[14px] sm:w-full"
                              prefix={
                                <Img
                                  className="mt-px mb-auto h-6 mr-[15px]"
                                  src="images/img_comment_1_white_a700.svg"
                                  alt="comment 1"
                                />
                              }
                            ></Input>
                            <Button className="bg-gray-100 cursor-pointer font-bold leading-[normal] min-w-[185px] py-[15px] rounded-[14px] text-base text-center text-gray-700">
                              Edit Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[47px] justify-start mt-[87px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[69px] items-start justify-start ml-10 md:ml-[0] w-[82%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[43%] sm:w-full">
                          <div className="flex flex-row gap-5 items-start justify-between w-full">
                            <Button className="bg-gray-100_01 flex h-[50px] items-center justify-center mb-[50px] p-[13px] rounded-[50%] w-[50px]">
                              <Img
                                className="h-6"
                                src="images/img_icmap.svg"
                                alt="icmap"
                              />
                            </Button>
                            <div className="flex flex-col gap-[11px] items-start justify-start">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                ADDRESS
                              </Text>
                              <Text
                                className="text-base text-white-A700"
                                size="txtOpenSansRomanSemiBold16"
                              >
                                <>
                                  Franklin Avenue Street <br />
                                  New York, ABC 5562
                                  <br />
                                  United State
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[46%] sm:w-full">
                          <div className="flex flex-row gap-5 items-start justify-between w-full">
                            <Button className="bg-gray-100_01 flex h-[50px] items-center justify-center mb-[7px] p-[13px] rounded-[50%] w-[50px]">
                              <Img
                                className="h-6"
                                src="images/img_email1_deep_purple_600.svg"
                                alt="emailOne"
                              />
                            </Button>
                            <div className="flex flex-col gap-[13px] items-start justify-start">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                EMAIL
                              </Text>
                              <Text
                                className="text-base text-white-A700"
                                size="txtOpenSansRomanSemiBold16"
                              >
                                bigwindadmin@mail.com
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-700 h-px rounded-[1px] w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[31px]">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Bio
                      </Text>
                      <Text
                        className="leading-[28.00px] mt-1 text-lg text-white-A700 w-full"
                        size="txtOpenSans18"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-10 items-center justify-start w-[24%] md:w-full">
                  <div className="bg-gray-900_01 flex flex-col justify-end p-[29px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col items-start justify-start mr-[95px] mt-[3px]">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Profile Summary
                      </Text>
                      <Text
                        className="mt-1 text-blue_gray-700 text-lg"
                        size="txtOpenSans18Bluegray700"
                      >
                        Lorem ipsum dolor sit
                      </Text>
                    </div>
                    <Img
                      className="h-[171px] mt-[53px] mx-auto w-[171px]"
                      src="images/img_ringprogressbar.svg"
                      alt="ringprogressbar"
                    />
                    <div className="flex flex-col gap-[5px] items-center justify-start mt-[23px] mx-auto w-[84%] md:w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <div className="bg-deep_purple-600 h-4 my-3.5 rounded-[50%] w-4"></div>
                        <Text
                          className="ml-3.5 text-sm text-white-A700"
                          size="txtOpenSans14WhiteA700"
                        >
                          Visitors
                        </Text>
                        <Text
                          className="ml-[83px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          45,215
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <div className="bg-pink-400 h-4 mb-3 mt-4 rounded-[50%] w-4"></div>
                        <Text
                          className="ml-3.5 mt-[15px] text-sm text-white-A700"
                          size="txtOpenSans14WhiteA700"
                        >
                          Clicked
                        </Text>
                        <Text
                          className="ml-[117px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          245
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <div className="bg-light_blue-300 h-4 mb-3 mt-4 rounded-[50%] w-4"></div>
                        <Text
                          className="ml-3.5 mt-[15px] text-sm text-white-A700"
                          size="txtOpenSans14WhiteA700"
                        >
                          Contact
                        </Text>
                        <Text
                          className="ml-[111px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          672
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-start justify-start p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0] mt-0.5">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Socials
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtOpenSans18Bluegray700"
                      >
                        Lorem ipsum dolor sit
                      </Text>
                    </div>
                    <Input
                      name="facebookOne"
                      placeholder="/franklin.porto"
                      className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 w-full"
                      wrapClassName="bg-blue_gray-900 flex mt-[33px] pl-[13px] pr-[35px] py-3 rounded-[18px] w-full"
                      prefix={
                        <Img
                          className="mt-auto mb-px h-6 mr-8"
                          src="images/img_facebook_1.svg"
                          alt="facebook 1"
                        />
                      }
                    ></Input>
                    <div className="bg-blue_gray-900 flex flex-row gap-[23px] items-center justify-start mt-[23px] md:pr-10 sm:pr-5 pr-[108px] rounded-[18px] w-full">
                      <div className="bg-pink-300 flex flex-col h-[49px] items-center justify-start p-3 rounded-[14px] w-[49px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_dribbble1.svg"
                          alt="dribbbleOne"
                        />
                      </div>
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanSemiBold16"
                      >
                        /franklin.drib
                      </Text>
                    </div>
                    <Input
                      name="linkedinOne"
                      placeholder="/franklinjunior"
                      className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 w-full"
                      wrapClassName="bg-blue_gray-900 flex mt-[23px] pl-[15px] pr-[35px] py-[13px] rounded-[18px] w-full"
                      prefix={
                        <Img
                          className="mt-auto mb-[3px] h-[19px] mr-[35px]"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                      }
                    ></Input>
                    <div className="bg-blue_gray-900 flex flex-row gap-[23px] items-center justify-start mb-[19px] mt-[23px] md:pr-10 sm:pr-5 pr-[71px] rounded-[18px] w-full">
                      <div className="bg-red-A700 flex flex-col h-[49px] items-center justify-start p-3 rounded-[14px] w-[49px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_youtube1.svg"
                          alt="youtubeOne"
                        />
                      </div>
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSansRomanSemiBold16"
                      >
                        /franklinjrchannel
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 flex md:flex-1 flex-col font-cairo gap-[15px] justify-start mb-[111px] py-8 rounded-[14px] shadow-bs4 w-[24%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[30px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Suggested
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700"
                      size="txtOpenSans16Bluegray700"
                    >
                      <span className="text-blue_gray-700 font-opensans text-left font-normal">
                        You have{" "}
                      </span>
                      <span className="text-blue_gray-700 font-opensans text-left font-bold">
                        456
                      </span>
                      <span className="text-blue_gray-700 font-opensans text-left font-normal">
                        {" "}
                        contacts
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[46px] items-center justify-start w-full">
                    <List
                      className="flex flex-col gap-px items-center pt-[164px] w-full"
                      orientation="vertical"
                    >
                      <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3 rounded-[14px] w-full">
                        <div className="bg-gray-400 h-[50px] my-[3px] rounded-[14px] w-[50px]"></div>
                        <div className="flex flex-col items-start justify-start ml-4 mt-1">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Benny Kenn
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            Software Engineer
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[69px] mr-[17px] w-6"
                          src="images/img_add.svg"
                          alt="add"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3.5 rounded-[14px] w-full">
                        <div className="bg-gray-400 h-[50px] my-0.5 rounded-[14px] w-[50px]"></div>
                        <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Chynthia Lawra
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            CEO
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[70px] mr-4 w-6"
                          src="images/img_add.svg"
                          alt="add"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3 rounded-[14px] w-full">
                        <div className="bg-gray-400 h-[50px] my-[3px] rounded-[14px] w-[50px]"></div>
                        <div className="flex flex-col items-start justify-start ml-4 mt-[3px]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Andy Law
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            Graphic Designer
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[76px] mr-[17px] w-6"
                          src="images/img_add.svg"
                          alt="add"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3 rounded-[14px] w-full">
                        <div className="bg-gray-400 h-[50px] my-[3px] rounded-[14px] w-[50px]"></div>
                        <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Della Samantha
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            Head Manager
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[68px] mr-[17px] w-6"
                          src="images/img_add.svg"
                          alt="add"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3 rounded-[14px] w-full">
                        <div className="bg-gray-400 h-[50px] my-[3px] rounded-[14px] w-[50px]"></div>
                        <div className="flex flex-col items-start justify-start ml-4 mt-1">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Angela Moss
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            Marketing Manager
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[61px] mr-[17px] w-6"
                          src="images/img_add.svg"
                          alt="add"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3 rounded-[14px] w-full">
                        <div className="bg-gray-400 h-[50px] my-[3px] rounded-[14px] w-[50px]"></div>
                        <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Kusnaidi
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            Programmer
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[105px] mr-[17px] w-6"
                          src="images/img_add.svg"
                          alt="add"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3 rounded-[14px] w-full">
                        <div className="bg-gray-400 h-[50px] my-[3px] rounded-[14px] w-[50px]"></div>
                        <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Bella Humbs
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            Programmer
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[92px] mr-[17px] w-6"
                          src="images/img_add.svg"
                          alt="add"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3 rounded-[14px] w-full">
                        <div className="bg-gray-400 h-[50px] my-[3px] rounded-[14px] w-[50px]"></div>
                        <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Olvia Johnsons
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            Programmer
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[76px] mr-[17px] w-6"
                          src="images/img_add.svg"
                          alt="add"
                        />
                      </div>
                    </List>
                    <Button className="border border-blue_gray-700 border-solid cursor-pointer font-bold min-w-[279px] py-[13px] rounded-[14px] text-center text-lg text-white-A700">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]">
          <Img
            className="h-[120px] md:h-auto object-cover"
            src="images/img_header.png"
            alt="header"
          />
          <Text
            className="md:ml-[0] ml-[50px] mr-[189px] mt-3 text-base text-gray-400_01 tracking-[1.00px]"
            size="txtOpenSansBold16"
          >
            MAIN MENU
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "8px 8px 8px 50px",
                backgroundColor: "#15132b",
                gap: "26px",
                marginTop: "14px",
                color: "#464365",
                fontWeight: 600,
                fontSize: "18px",
                [`&:hover, &.ps-active`]: {
                  backgroundColor: "#15132bff !important",
                },
              },
            }}
            renderExpandIcon={() => (
              <Img
                className="h-6 mt-1 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            )}
            className="flex flex-col font-cairo items-center justify-start mt-4 pt-2 w-full"
          >
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_dashboard1.svg"
                  alt="dashboardOne"
                />
              }
              active={window.location.pathname === "/dashboard"}
              href="/dashboard"
            >
              <Text>Dashboard</Text>
            </MenuItem>
            <SubMenu
              icon={
                <Img
                  className="h-7 mt-0.5 w-7"
                  src="images/img_mail.svg"
                  alt="mail"
                />
              }
              label={<Text>Email</Text>}
              suffix={
                <Text className="bg-light_blue-300 flex font-bold h-[29px] items-center justify-center my-0.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]">
                  17
                </Text>
              }
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_comment1.svg"
                  alt="commentOne"
                />
              }
              active={window.location.pathname === "/chatdiscussions"}
              href="/chatdiscussions"
            >
              <Text>Chat</Text>
            </MenuItem>
            <SubMenu
              icon={
                <Img className="h-7 w-7" src="images/img_grid.svg" alt="grid" />
              }
              label={<Text>Kanban</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_contact1.svg"
                  alt="contactOne"
                />
              }
              active={window.location.pathname === "/contactpage"}
              href="/contactpage"
            >
              <Text>Contact</Text>
              <Button className="bg-pink-400 cursor-pointer font-bold leading-[normal] min-w-[63px] py-1 rounded-[17px] text-center text-sm text-white-A700">
                NEW
              </Button>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_calendarsilhouette.svg"
                  alt="calendarsilhoue"
                />
              }
              active={window.location.pathname === "/calendar"}
              href="/calendar"
            >
              <Text>Calendar</Text>
            </MenuItem>
            <SubMenu
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_invoice1.svg"
                  alt="invoiceOne"
                />
              }
              label={<Text>Invoices</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_setting1.svg"
                  alt="settingOne"
                />
              }
            >
              <Text>Settings</Text>
            </MenuItem>
          </Menu>
          <div className="font-cairo h-[203px] md:h-[262px] md:ml-[0] mt-[59px] mx-[50px] relative w-[72%]">
            <div className="bg-gradient  h-[203px] m-auto rounded-[32px] shadow-bs w-[63%]"></div>
            <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[32px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[203px] items-center justify-start p-[21px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group77.png')" }}
              >
                <div className="flex flex-col items-start justify-start mb-[19px] mt-3 w-[97%] md:w-full">
                  <Img
                    className="h-[29px] md:ml-[0] ml-[3px]"
                    src="images/img_grid_white_a700.svg"
                    alt="grid_One"
                  />
                  <Text
                    className="leading-[34.00px] mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtCairoBold24"
                  >
                    <span className="text-white-A700 font-cairo text-left font-bold">
                      Increase your{" "}
                    </span>
                    <span className="md:text-[21px] sm:text-[19px] text-white-A700 font-cairo text-left text-[23px] font-bold">
                      work with kanban
                    </span>
                  </Text>
                  <Img
                    className="h-[11px] ml-1.5 md:ml-[0] mt-[15px]"
                    src="images/img_arrowright_white_a700.svg"
                    alt="arrowright_Two"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[50px] mr-[46px] mt-[46px] text-base text-blue_gray-700 w-[73%] sm:w-full"
            size="txtCairoBold16Bluegray700"
          >
            Kleon Clean Admin Dashboard
          </Text>
          <Text
            className="mb-[181px] md:ml-[0] mt-1.5 mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default ProfilePage;
