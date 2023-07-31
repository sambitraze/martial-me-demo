import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  SelectBox,
  Text,
} from "components";
import C01DashboardNav from "components/C01DashboardNav";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BoardPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1241px] mx-auto overflow-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[1121px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
        </div>
        <div className="absolute bottom-[0] flex flex-col items-center justify-start md:px-5 right-[0] w-[95%]">
          <div className="flex flex-col gap-[29px] items-start justify-start w-full">
            <div className="bg-gray-900_01 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[14px] shadow-bs4 w-[82%] md:w-full">
              <div className="flex flex-col gap-[25px] items-end justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-2 justify-start w-[27%] md:w-full">
                    <div className="flex flex-row font-cairo gap-[18px] items-end justify-start mr-[30px] w-[93%] md:w-full">
                      <Img
                        className="h-[38px] mb-[3px] mt-[11px] w-[38px]"
                        src="images/img_btnback.svg"
                        alt="btnback"
                      />
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtCairoBold28"
                      >
                        School November Tasks
                      </Text>
                    </div>
                    <Text
                      className="ml-14 md:ml-[0] text-gray-500_01 text-sm"
                      size="txtOpenSans14Gray50001"
                    >
                      Created by Instructor Day on November 31, 2022
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-[18px] items-end justify-center md:ml-[0] ml-[736px] w-[18%] md:w-full">
                    <div className="flex flex-col items-end justify-start mb-1 mt-2">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Centered Martial Arts
                      </Text>
                      <Text
                        className="text-gray-500_01 text-sm"
                        size="txtOpenSans14Gray50001"
                      >
                        Sunnyvale, Ca
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col h-[68px] items-center justify-start p-3 rounded-[14px] shadow-bs3 w-[68px]">
                      <div className="flex flex-col h-11 items-center justify-start w-11">
                        <Img
                          className="h-[42px] w-[42px]"
                          src="images/img_brightness.svg"
                          alt="brightness"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-6 md:ml-[0] ml-[27px] md:mt-0 mt-[22px] w-6"
                    src="images/img_verticon_gray_500_01.svg"
                    alt="verticon"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[96%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[13%] md:w-full">
                    <div className="flex relative w-full">
                      <div className="flex my-auto w-[81%]">
                        <div className="flex my-auto w-[77%]">
                          <div className="flex my-auto w-[70%]">
                            <div className="bg-gray-400 h-10 my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10"></div>
                            <div className="bg-gray-400 h-10 ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10 z-[1]"></div>
                          </div>
                          <div className="bg-gray-400 h-10 ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10 z-[1]"></div>
                        </div>
                        <div className="bg-gray-400 h-10 ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10 z-[1]"></div>
                      </div>
                      <Text
                        className="bg-pink-400 flex h-10 items-center justify-center ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] text-center text-lg text-white-A700 w-10 z-[1]"
                        size="txtCairoBold18"
                      >
                        5+
                      </Text>
                    </div>
                  </div>
                  <div className="bg-deep_purple-600 flex flex-row gap-[11px] items-center justify-center ml-5 md:ml-[0] p-1 rounded-[14px] w-[12%] md:w-full">
                    <Img
                      className="h-6 ml-[9px] w-6"
                      src="images/img_addfriend1.svg"
                      alt="addfriendOne"
                    />
                    <Text
                      className="mr-[19px] mt-0.5 text-base text-white-A700"
                      size="txtCairoBold16"
                    >
                      Invite People
                    </Text>
                  </div>
                  <Button className="border border-blue_gray-700 border-solid cursor-pointer font-bold leading-[normal] min-w-[89px] ml-5 md:ml-[0] py-1.5 rounded-[14px] text-base text-center text-white-A700">
                    Private
                  </Button>
                  <Button className="bg-blue_gray-700 cursor-pointer font-bold leading-[normal] min-w-[78px] ml-3 md:ml-[0] py-1.5 rounded-[14px] text-base text-center text-white-A700">
                    Edit
                  </Button>
                  <Button
                    className="border border-blue_gray-700 border-solid cursor-pointer flex items-center justify-center min-w-[167px] ml-5 md:ml-[0] px-4 py-1.5 rounded-[14px]"
                    leftIcon={
                      <Img
                        className="h-6 mt-0.5 mb-[3px] mr-[13px]"
                        src="images/img_chat_1_1.svg"
                        alt="chat (1) 1"
                      />
                    }
                  >
                    <div className="font-semibold leading-[normal] text-base text-left text-white-A700">
                      45 Comments
                    </div>
                  </Button>
                  <div className="flex sm:flex-col flex-row font-opensans gap-7 items-start justify-between md:ml-[0] ml-[189px] md:mt-0 mt-[11px] w-[32%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Total Progress 60%
                    </Text>
                    <div className="h-3.5 mb-[5px] sm:mt-0 mt-0.5 overflow-hidden relative">
                      <div className="w-full h-full absolute bg-blue_gray_900 rounded-[7px]"></div>
                      <div
                        className="h-full absolute bg-deep_purple_600  rounded-[7px]"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="bg-gray-900 flex md:flex-1 flex-col gap-3.5 items-center justify-start pb-[34px] rounded-[20px] w-[19%] md:w-full">
                <div className="bg-gray-900 flex flex-row items-center justify-between p-[13px] rounded-tl-[14px] rounded-tr-[14px] w-full">
                  <Text
                    className="ml-[17px] text-white-A700 text-xl"
                    size="txtCairoBold20"
                  >
                    To-Do List (24)
                  </Text>
                  <Button className="bg-deep_purple-600 flex h-[49px] items-center justify-center my-[3px] p-[15px] rounded-[14px] shadow-bs3 w-[49px]">
                    <Img
                      className="h-[17px]"
                      src="images/img_minimize.svg"
                      alt="minimize"
                    />
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-end p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col items-center justify-start mt-0.5 w-[99%] md:w-full">
                      <div className="flex flex-row font-opensans items-center justify-between w-full">
                        <div className="flex flex-row gap-[11px] items-start justify-start">
                          <div className="bg-orange-400 h-2.5 mb-1.5 mt-[3px] rounded-[50%] w-2.5"></div>
                          <Text
                            className="text-orange-400 text-sm"
                            size="txtOpenSansRomanSemiBold14"
                          >
                            Important
                          </Text>
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_verticon_24x24.svg"
                          alt="verticon"
                        />
                      </div>
                      <Text
                        className="leading-[30.00px] text-lg text-white-A700 w-full"
                        size="txtCairoSemiBold18WhiteA700"
                      >
                        Create sign up sheet for holiday student/parent
                        conferences.
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                        <div className="h-[7px] overflow-hidden relative w-full">
                          <div className="w-full h-full absolute bg-blue_gray_900 rounded-[3px]"></div>
                          <div
                            className="h-full absolute bg-orange_400  rounded-[3px]"
                            style={{ width: "24%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-row font-opensans items-end justify-between mt-6 w-full">
                        <Img
                          className="h-8"
                          src="images/img_people.svg"
                          alt="people"
                        />
                        <div className="flex flex-row gap-[9px] items-start justify-start mb-1 mt-[7px]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock11.svg"
                            alt="clockEleven"
                          />
                          <Text
                            className="text-gray-500_01 text-right text-sm"
                            size="txtOpenSansRomanSemiBold14Gray50001"
                          >
                            Due in 4 days
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-end p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col items-center justify-start mt-0.5 w-[99%] md:w-full">
                      <div className="flex flex-row font-opensans items-start justify-between w-full">
                        <div className="flex flex-row gap-[11px] items-start justify-start">
                          <div className="bg-pink-400 h-2.5 mb-1.5 mt-[3px] rounded-[50%] w-2.5"></div>
                          <Text
                            className="text-pink-400 text-sm"
                            size="txtOpenSansRomanSemiBold14Pink400"
                          >
                            Instructor Meeting
                          </Text>
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_verticon_24x24.svg"
                          alt="verticon"
                        />
                      </div>
                      <Text
                        className="leading-[30.00px] text-lg text-white-A700 w-full"
                        size="txtCairoSemiBold18WhiteA700"
                      >
                        Plan holiday demonstration program. Create outline.
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                        <div className="h-[7px] overflow-hidden relative w-full">
                          <div className="w-full h-full absolute bg-blue_gray_900 rounded-[3px]"></div>
                          <div
                            className="h-full absolute bg-pink_400  rounded-[3px]"
                            style={{ width: "38%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-row font-opensans items-end justify-between mt-6 w-full">
                        <Img
                          className="h-8"
                          src="images/img_ticket_gray_400.svg"
                          alt="ticket"
                        />
                        <div className="flex flex-row gap-[9px] items-start justify-start mb-1 mt-[7px]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock11.svg"
                            alt="clockEleven"
                          />
                          <Text
                            className="text-gray-500_01 text-right text-sm"
                            size="txtOpenSansRomanSemiBold14Gray50001"
                          >
                            Due in 4 days
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-end p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row font-opensans items-start justify-between w-full">
                        <div className="flex flex-row gap-[11px] items-center justify-start">
                          <div className="bg-green-500 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                          <Text
                            className="text-green-500 text-sm"
                            size="txtOpenSansRomanSemiBold14Green500"
                          >
                            Databse
                          </Text>
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_verticon_24x24.svg"
                          alt="verticon"
                        />
                      </div>
                      <Text
                        className="leading-[30.00px] text-lg text-white-A700 w-full"
                        size="txtCairoSemiBold18WhiteA700"
                      >
                        Determine how many boards need to be ordered for testing
                        and demo.
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                        <div className="h-[7px] overflow-hidden relative w-full">
                          <div className="w-full h-full absolute bg-blue_gray_900 rounded-[3px]"></div>
                          <div
                            className="h-full absolute bg-green_500  rounded-[3px]"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-row font-opensans items-end justify-between mt-6 w-full">
                        <Img
                          className="h-8"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                        <div className="flex flex-row gap-[9px] items-start justify-start mb-1 mt-[7px]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock11.svg"
                            alt="clockEleven"
                          />
                          <Text
                            className="text-gray-500_01 text-right text-sm"
                            size="txtOpenSansRomanSemiBold14Gray50001"
                          >
                            Due in 4 days
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="md:h-[734px] h-[786px] relative w-2/5 md:w-full">
                <div className="absolute md:h-[734px] h-[786px] inset-y-[0] my-auto right-[0] w-[48%]">
                  <div className="absolute bg-gray-900 flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto pb-[203px] rounded-[20px] top-[0] w-full">
                    <div className="bg-gray-900 flex flex-row items-center justify-between p-4 rounded-tl-[14px] rounded-tr-[14px] w-full">
                      <Text
                        className="ml-3.5 text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        Done (3)
                      </Text>
                      <Button className="bg-gray-900_02 flex h-[49px] items-center justify-center mr-3.5 p-[15px] rounded-[14px] w-[49px]">
                        <Img
                          className="h-[17px]"
                          src="images/img_plus.svg"
                          alt="plus"
                        />
                      </Button>
                    </div>
                    <List
                      className="flex flex-col gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-end p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row font-opensans items-start justify-between w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-start">
                              <div className="bg-red-A200 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                              <Text
                                className="text-red-A200 text-sm"
                                size="txtOpenSansRomanSemiBold14RedA200"
                              >
                                BUGS FIXING
                              </Text>
                            </div>
                            <Img
                              className="h-6 w-6"
                              src="images/img_verticon_24x24.svg"
                              alt="verticon"
                            />
                          </div>
                          <Text
                            className="leading-[30.00px] text-lg text-white-A700 w-full"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Action Button needed for Google Maps visits.
                          </Text>
                          <Img
                            className="h-[7px] mt-[23px]"
                            src="images/img_progressbar.svg"
                            alt="progressbar"
                          />
                          <div className="flex flex-row font-opensans items-end justify-between mt-6 w-full">
                            <Img
                              className="h-8"
                              src="images/img_people.svg"
                              alt="people"
                            />
                            <div className="flex flex-row gap-[9px] items-start justify-start mb-1 mt-[7px]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_clock11.svg"
                                alt="clockEleven"
                              />
                              <Text
                                className="text-gray-500_01 text-right text-sm"
                                size="txtOpenSansRomanSemiBold14Gray50001"
                              >
                                Due in 4 days
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-end p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row font-opensans items-start justify-between w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-start">
                              <div className="bg-green-500 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                              <Text
                                className="text-green-500 text-sm"
                                size="txtOpenSansRomanSemiBold14Green500"
                              >
                                Database
                              </Text>
                            </div>
                            <Img
                              className="h-6 w-6"
                              src="images/img_verticon_24x24.svg"
                              alt="verticon"
                            />
                          </div>
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Update new instructor photos.
                          </Text>
                          <Img
                            className="h-[7px] mt-[23px]"
                            src="images/img_progressbar_green_500.svg"
                            alt="progressbar"
                          />
                          <div className="flex flex-row font-opensans items-end justify-between mt-6 w-full">
                            <Img
                              className="h-8"
                              src="images/img_people.svg"
                              alt="people"
                            />
                            <div className="flex flex-row gap-[9px] items-start justify-start mb-1 mt-[7px]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_clock11.svg"
                                alt="clockEleven"
                              />
                              <Text
                                className="text-gray-500_01 text-right text-sm"
                                size="txtOpenSansRomanSemiBold14Gray50001"
                              >
                                Due in 4 days
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="absolute bg-gray-900_02 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col items-center justify-start mt-0.5 w-[99%] md:w-full">
                      <div className="flex flex-row font-opensans items-start justify-between w-full">
                        <div className="flex flex-row gap-[11px] items-start justify-start">
                          <div className="bg-pink-400 h-2.5 mb-1.5 mt-[3px] rounded-[50%] w-2.5"></div>
                          <Text
                            className="text-pink-400 text-sm"
                            size="txtOpenSansRomanSemiBold14Pink400"
                          >
                            Instructor Meeting
                          </Text>
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_verticon_24x24.svg"
                          alt="verticon_One"
                        />
                      </div>
                      <Text
                        className="leading-[30.00px] text-lg text-white-A700 w-full"
                        size="txtCairoSemiBold18WhiteA700"
                      >
                        Review/correct yellow belt techniques.
                      </Text>
                      <Img
                        className="h-[7px] mt-[23px]"
                        src="images/img_progressbar_pink_400.svg"
                        alt="progressbar_One"
                      />
                      <div className="flex flex-row font-opensans items-end justify-between mt-6 w-full">
                        <Img
                          className="h-8"
                          src="images/img_people.svg"
                          alt="people"
                        />
                        <div className="flex flex-row gap-[9px] items-start justify-start mb-1 mt-[7px]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock11.svg"
                            alt="clockEleven"
                          />
                          <Text
                            className="text-gray-500_01 text-right text-sm"
                            size="txtOpenSansRomanSemiBold14Gray50001"
                          >
                            Due in 4 days
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute md:h-[502px] h-[613px] left-[0] top-[0] w-[55%] sm:w-full">
                  <div className="absolute md:h-[502px] h-[571px] left-[0] top-[0] w-[89%]">
                    <div className="absolute bg-gray-900 flex flex-col gap-3 inset-x-[0] items-center justify-start mx-auto pb-[183px] rounded-[20px] top-[0] w-full">
                      <div className="bg-gray-900 flex flex-row items-start justify-between p-[11px] rounded-tl-[14px] rounded-tr-[14px] w-full">
                        <Text
                          className="ml-[19px] mt-3 text-white-A700 text-xl"
                          size="txtCairoBold20"
                        >
                          In Progress (2)
                        </Text>
                        <Button className="bg-gray-900_02 flex h-[49px] items-center justify-center mr-[19px] mt-2.5 p-[15px] rounded-[14px] w-[49px]">
                          <Img
                            className="h-[17px]"
                            src="images/img_plus.svg"
                            alt="plus_One"
                          />
                        </Button>
                      </div>
                      <div className="bg-gray-900_02 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row font-opensans items-start justify-between w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-start">
                              <div className="bg-light_blue-300 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                              <Text
                                className="text-light_blue-300 text-sm"
                                size="txtOpenSansRomanSemiBold14Lightblue300"
                              >
                                Video
                              </Text>
                            </div>
                            <Img
                              className="h-6 w-6"
                              src="images/img_verticon_24x24.svg"
                              alt="verticon_Two"
                            />
                          </div>
                          <Text
                            className="leading-[30.00px] text-lg text-white-A700 w-full"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Create sparring tutorial video for the weekly class.
                          </Text>
                          <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                            <div className="h-[7px] overflow-hidden relative w-full">
                              <div className="w-full h-full absolute bg-blue_gray_900 rounded-[3px]"></div>
                              <div
                                className="h-full absolute bg-light_blue_300  rounded-[4px]"
                                style={{ width: "82%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex flex-row font-opensans items-end justify-between mt-6 w-full">
                            <Img
                              className="h-8"
                              src="images/img_ticket_gray_400.svg"
                              alt="ticket"
                            />
                            <div className="flex flex-row gap-[9px] items-start justify-start mb-1 mt-[7px]">
                              <Img
                                className="h-4 w-4"
                                src="images/img_clock11.svg"
                                alt="clockEleven_One"
                              />
                              <Text
                                className="text-gray-500_01 text-right text-sm"
                                size="txtOpenSansRomanSemiBold14Gray50001"
                              >
                                Due in 4 days
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-black-900 bottom-[0] h-[229px] inset-x-[0] mx-auto rounded-[14px] w-full"></div>
                  </div>
                  <div className="absolute bg-gray-900_02 bottom-[0] font-opensans h-[257px] md:h-[84px] p-8 sm:px-5 right-[0] rotate-[-5deg] rounded-[14px] shadow-bs7 w-[94%]">
                    <div className="absolute bottom-[12%] flex flex-row gap-2 items-start justify-center right-[12%] w-[33%]">
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_clock11_gray_500_01.svg"
                        alt="clockEleven_Two"
                      />
                      <Text
                        className="text-gray-500_01 text-right text-sm"
                        size="txtOpenSansRomanSemiBold14Gray50001"
                      >
                        Due in 4 days
                      </Text>
                    </div>
                    <div className="absolute font-cairo h-[174px] md:h-[84px] inset-[0] justify-center m-auto w-[82%]">
                      <div className="absolute bottom-[0] h-[154px] md:h-[84px] inset-x-[0] mx-auto w-full">
                        <div className="absolute bottom-[0] md:h-[41px] h-[72px] inset-x-[0] mx-auto w-[98%]">
                          <Img
                            className="absolute bottom-[0] h-[41px] left-[0]"
                            src="images/img_people_gray_400.svg"
                            alt="people_One"
                          />
                          <Img
                            className="absolute h-[31px] inset-x-[0] mx-auto top-[0]"
                            src="images/img_progressbar_blue_gray_900.svg"
                            alt="progressbar_Three"
                          />
                        </div>
                        <Text
                          className="absolute inset-x-[0] leading-[30.00px] mx-auto text-lg text-white-A700 top-[0] w-[98%] sm:w-full"
                          size="txtCairoSemiBold18WhiteA700"
                        >
                          Payment gateway needs reauthorization.
                        </Text>
                      </div>
                      <Img
                        className="absolute h-[26px] right-[0] top-[10%] w-[26px]"
                        src="images/img_verticon_gray_500_01_26x26.svg"
                        alt="verticon_Three"
                      />
                      <div className="absolute flex flex-row font-opensans gap-2.5 items-start justify-start left-[4%] top-[0] w-[37%]">
                        <div className="bg-red-A200 h-2.5 mb-[9px] rounded-[50%] w-2.5"></div>
                        <Text
                          className="text-red-A200 text-sm"
                          size="txtOpenSansRomanSemiBold14RedA200"
                        >
                          BUGS FIXING
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 flex md:flex-1 flex-col gap-5 items-center justify-start mb-[632px] pb-4 rounded-[20px] w-[19%] md:w-full">
                <div className="bg-gray-900 flex flex-row font-cairo items-center justify-between p-4 rounded-tl-[14px] rounded-tr-[14px] w-full">
                  <Text
                    className="ml-3.5 text-white-A700 text-xl"
                    size="txtCairoBold20"
                  >
                    Revised (0)
                  </Text>
                  <Button className="bg-gray-900_02 flex h-[49px] items-center justify-center mr-3.5 p-[15px] rounded-[14px] w-[49px]">
                    <Img
                      className="h-[17px]"
                      src="images/img_plus.svg"
                      alt="plus_Two"
                    />
                  </Button>
                </div>
                <Button className="bg-gray-900_02 cursor-pointer font-opensans font-semibold leading-[normal] min-w-[339px] py-[35px] rounded-[14px] text-base text-blue_gray-700 text-center">
                  Move card here
                </Button>
              </div>
              <div className="h-[856px] relative w-[19%] md:w-full">
                <div className="absolute bg-gray-900 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[775px] rounded-[20px] w-full">
                  <div className="bg-gray-900 flex flex-row items-center justify-between p-4 rounded-tl-[14px] rounded-tr-[14px] w-full">
                    <div className="flex flex-col items-center justify-start ml-3.5">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        Completed (2)
                      </Text>
                    </div>
                    <Button className="bg-gray-900_02 flex h-[49px] items-center justify-center mr-3.5 p-[15px] rounded-[14px] w-[49px]">
                      <Img
                        className="h-[17px]"
                        src="images/img_plus.svg"
                        alt="plus_Three"
                      />
                    </Button>
                  </div>
                </div>
                <div className="absolute bg-gray-900_02 bottom-[5%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                  <div className="flex flex-col items-center justify-start mt-0.5 w-[99%] md:w-full">
                    <div className="flex flex-row font-opensans items-start justify-between w-full">
                      <Radio
                        value="Important"
                        className="font-semibold leading-[normal] mb-[5px] text-left text-sm text-white-A700"
                        inputClassName="bg-white-A700 h-2.5 mr-[5px] w-2.5"
                        checked={false}
                        name="important"
                        label="Important"
                        id="Important"
                      ></Radio>
                      <Img
                        className="h-6 w-6"
                        src="images/img_verticon_24x24.svg"
                        alt="verticon_Four"
                      />
                    </div>
                    <Text
                      className="leading-[30.00px] text-lg text-white-A700 w-full"
                      size="txtCairoSemiBold18WhiteA700"
                    >
                      Visual Graphic for Presentation to Client
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                      <div className="h-[7px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-gray_100 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-white_A700  rounded-[3px]"
                          style={{ width: "24%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-row font-opensans items-center justify-between mt-6 w-full">
                      <Img
                        className="h-8"
                        src="images/img_people.svg"
                        alt="people_Two"
                      />
                      <div className="flex flex-row gap-2 items-start justify-start">
                        <Img
                          className="h-4 mt-0.5 w-4"
                          src="images/img_clock11.svg"
                          alt="clockEleven_Three"
                        />
                        <Text
                          className="text-gray-500_01 text-right text-sm"
                          size="txtOpenSansRomanSemiBold14Gray50001"
                        >
                          Due in 4 days
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gray-900_02 flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-[14px] shadow-bs4 top-[10%] w-full">
                  <div className="flex flex-col items-center justify-start mt-0.5 w-[99%] md:w-full">
                    <div className="flex flex-row font-opensans items-start justify-between w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start">
                        <div className="bg-pink-400 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                        <Text
                          className="text-pink-400 text-sm"
                          size="txtOpenSansRomanSemiBold14Pink400"
                        >
                          Design
                        </Text>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_verticon_24x24.svg"
                        alt="verticon_Five"
                      />
                    </div>
                    <Text
                      className="leading-[30.00px] text-lg text-white-A700 w-full"
                      size="txtCairoSemiBold18WhiteA700"
                    >
                      Create wireframe for landing page phase 1
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                      <div className="h-[7px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-gray_100 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-pink_400  rounded-[3px]"
                          style={{ width: "38%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-row font-opensans items-center justify-between mt-6 w-full">
                      <Img
                        className="h-8"
                        src="images/img_ticket_gray_400.svg"
                        alt="ticket_One"
                      />
                      <div className="flex flex-row gap-2 items-start justify-start">
                        <Img
                          className="h-4 mt-0.5 w-4"
                          src="images/img_clock11.svg"
                          alt="clockEleven_Four"
                        />
                        <Text
                          className="text-gray-500_01 text-right text-sm"
                          size="txtOpenSansRomanSemiBold14Gray50001"
                        >
                          Due in 4 days
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gray-900_02 bottom-[34%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                  <div className="flex flex-col items-center justify-start mt-0.5 w-[99%] md:w-full">
                    <div className="flex flex-row font-opensans items-start justify-between w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start">
                        <div className="bg-green-500 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                        <Text
                          className="text-green-500 text-sm"
                          size="txtOpenSansRomanSemiBold14Green500"
                        >
                          Databse
                        </Text>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_verticon_24x24.svg"
                        alt="verticon_Six"
                      />
                    </div>
                    <Text
                      className="leading-[30.00px] text-lg text-white-A700 w-full"
                      size="txtCairoSemiBold18WhiteA700"
                    >
                      Setup database for create API connection
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                      <div className="h-[7px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-gray_100 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-green_500  rounded-[3px]"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-row font-opensans items-center justify-between mt-6 w-full">
                      <Img
                        className="h-8"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <div className="flex flex-row gap-2 items-start justify-start">
                        <Img
                          className="h-4 mt-0.5 w-4"
                          src="images/img_clock11.svg"
                          alt="clockEleven_Five"
                        />
                        <Text
                          className="text-gray-500_01 text-right text-sm"
                          size="txtOpenSansRomanSemiBold14Gray50001"
                        >
                          Due in 4 days
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1">
          <div className="h-[120px] relative w-full">
            <div className="bg-gray-900_01 flex flex-col h-full items-start justify-center m-auto p-[43px] md:px-10 sm:px-5 w-full">
              <div className="bg-blue_gray-700 h-[3px] md:ml-[0] ml-[233px] mt-2 rounded-[1px] w-[11%]"></div>
              <div className="bg-blue_gray-700 h-[3px] md:ml-[0] ml-[233px] mt-[5px] rounded-[1px] w-[11%]"></div>
              <div className="bg-blue_gray-700 h-[3px] md:ml-[0] ml-[233px] my-1.5 rounded-[1px] w-[11%]"></div>
            </div>
            <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center left-[10%] my-auto w-[59%]">
              <Img
                className="h-[90px] md:h-auto object-cover w-[90px]"
                src="images/img_logo2transparent.png"
                alt="logo2transparen"
              />
              <Img
                className="h-7"
                src="images/img_martialme.svg"
                alt="martialme"
              />
            </div>
          </div>
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
                  color: "#6418c3",
                  fontWeight: "700 !important",
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
                <Img
                  className="h-7 w-7"
                  src="images/img_grid_deep_purple_600.svg"
                  alt="grid"
                />
              }
              label={
                <>
                  <Text>Kanban</Text>
                  <Line className="bg-deep_purple-600 h-[50px] rounded-[3px] w-1.5" />
                </>
              }
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
                  src="images/img_user.svg"
                  alt="user_Two"
                />
              }
              label={<Text>Courses</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_computer.svg"
                  alt="computer"
                />
              }
            >
              <Text>Shop</Text>
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
          <div className="font-cairo h-[203px] md:h-[328px] ml-12 md:ml-[0] mr-[52px] mt-[125px] relative w-[72%]">
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
                    alt="arrowright_Three"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] mt-[46px] mx-12 text-base text-blue_gray-700 w-[73%] sm:w-full"
            size="txtCairoBold16Bluegray700"
          >
            Kleon Clean Admin Dashboard
          </Text>
          <Text
            className="mb-[73px] ml-12 md:ml-[0] mr-[52px] mt-1.5 text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default BoardPagePage;
