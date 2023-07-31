import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C01DashboardNav from "components/C01DashboardNav";
import Sidebar3 from "components/Sidebar3";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DayPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1198px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[73px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[26px] items-end justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="md:h-[2366px] sm:h-[975px] h-[979px] md:px-5 relative w-4/5 md:w-full">
              <div className="absolute bg-gray-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto sm:pl-5 pl-[34px] py-[34px] rounded-[14px] shadow-bs4 w-[97%]">
                <div className="flex flex-col items-center justify-start mt-[13px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                    <div className="flex flex-row gap-[17px] items-center justify-between w-[23%] md:w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                        size="txtCairoBold34"
                      >
                        October, 2020
                      </Text>
                      <Img
                        className="h-[34px]"
                        src="images/img_rewind_gray_900_06.svg"
                        alt="rewind"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[205px] md:mt-0 mt-[3px] w-[27%] md:w-full">
                      <div className="flex flex-col gap-3 justify-start w-full">
                        <div className="flex flex-row gap-[55px] items-center justify-end md:ml-[0] ml-[29px] w-[89%] md:w-full">
                          <Text
                            className="text-deep_purple-600 text-lg"
                            size="txtCairoBold18Deeppurple600"
                          >
                            Date
                          </Text>
                          <Text
                            className="text-blue_gray-700 text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Week
                          </Text>
                          <Text
                            className="text-blue_gray-700 text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Month
                          </Text>
                          <Text
                            className="h-[34px] text-blue_gray-700 text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Year
                          </Text>
                        </div>
                        <div className="h-1 relative w-full">
                          <Line className="absolute bg-blue_gray-700 bottom-[0] h-px inset-x-[0] mx-auto rounded-[1px] w-full" />
                          <Line className="absolute bg-deep_purple-600 h-1 inset-y-[0] left-[0] my-auto rounded-sm w-[23%]" />
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue_gray-700 cursor-pointer font-bold mb-[11px] min-w-[129px] md:ml-[0] ml-[193px] md:mt-0 mt-[5px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                      Today (14)
                    </Button>
                    <Button className="bg-deep_purple-600 cursor-pointer font-bold mb-[11px] min-w-[170px] ml-5 md:ml-[0] md:mt-0 mt-[5px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                      + New Schedule
                    </Button>
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[31px] p-[21px] sm:px-5 shadow-bs4 w-[98%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[11px] w-[86%] md:w-full">
                      <div className="bg-green-500 flex flex-col items-center justify-start p-[7px] rounded-[14px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtCairoSemiBold28"
                        >
                          13
                        </Text>
                        <Text
                          className="mb-0.5 text-blue_gray-700 text-xl"
                          size="txtCairoSemiBold20Bluegray700"
                        >
                          Sun
                        </Text>
                      </div>
                      <div className="bg-blue_gray-700 h-[102px] md:ml-[0] ml-[89px] p-2 relative rounded-[14px] w-[9%] md:w-full">
                        <Text
                          className="mb-[-7.05px] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-white-A700 z-[1]"
                          size="txtCairoBold28"
                        >
                          14
                        </Text>
                        <Text
                          className="mt-auto mx-auto text-white-A700 text-xl"
                          size="txtCairoSemiBold20WhiteA700"
                        >
                          Mon
                        </Text>
                      </div>
                      <div className="md:h-[49px] h-[83px] md:ml-[0] ml-[120px] relative w-[4%] md:w-full">
                        <div className="absolute md:h-[49px] h-[83px] inset-y-[0] left-[0] my-auto w-[79%]">
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-blue_gray-700 text-xl w-max"
                            size="txtCairoSemiBold20Bluegray700"
                          >
                            Tue
                          </Text>
                          <Text
                            className="absolute inset-x-[0] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-white-A700 top-[0] w-max"
                            size="txtCairoSemiBold28"
                          >
                            15
                          </Text>
                        </div>
                        <div className="absolute bg-pink-400 border-2 border-gray-900_01 border-solid h-[18px] right-[0] rounded-[50%] top-[8%] w-[18px]"></div>
                      </div>
                      <div className="bg-gray-900_04 h-[102px] md:ml-[0] ml-[110px] p-[7px] relative rounded-[14px] w-[9%] md:w-full">
                        <Text
                          className="mb-[-6.3px] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-white-A700 z-[1]"
                          size="txtCairoBold28"
                        >
                          16
                        </Text>
                        <Text
                          className="mb-0.5 mt-auto mx-auto text-white-A700 text-xl"
                          size="txtCairoSemiBold20WhiteA700"
                        >
                          Wed
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[118px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtCairoSemiBold28"
                        >
                          17
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-xl"
                          size="txtCairoSemiBold20Bluegray700"
                        >
                          Thu
                        </Text>
                      </div>
                      <div className="bg-gray-900_08 flex flex-col items-center justify-start md:ml-[0] ml-[119px] p-2 rounded-[14px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-pink-400"
                          size="txtCairoBold28Pink400"
                        >
                          18
                        </Text>
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtCairoSemiBold20WhiteA700"
                        >
                          Fri
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[119px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtCairoSemiBold28"
                        >
                          19
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-xl"
                          size="txtCairoSemiBold20Bluegray700"
                        >
                          Sat
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between mt-[25px] w-[96%] md:w-full">
                    <div className="flex flex-col gap-[59px] items-end justify-start">
                      <div className="flex flex-col gap-[59px] items-center justify-start">
                        <Text
                          className="text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          7 AM
                        </Text>
                        <Text
                          className="text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          8 AM
                        </Text>
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtCairoBold20"
                        >
                          9 AM
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[58px] items-start justify-start w-full">
                        <Text
                          className="text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          10 AM
                        </Text>
                        <Text
                          className="text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          11 AM
                        </Text>
                        <Text
                          className="text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          12 AM
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[11px] text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          1 PM
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[610px]"
                      src="images/img_lines.svg"
                      alt="lines"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[6%] flex flex-col items-center justify-start right-[0] w-[92%]">
                <div className="flex flex-col justify-start w-full">
                  <div className="bg-gray-900_04 flex flex-col items-center justify-start md:ml-[0] ml-[579px] mr-[373px] pb-[30px] rounded-[14px] w-[32%] md:w-full">
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Line className="bg-deep_purple-600 h-1 rounded-sm w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[90%] md:w-full">
                        <Button className="bg-deep_purple-600 flex h-[39px] items-center justify-center mb-1.5 p-2 rounded-[14px] w-[39px]">
                          <Img
                            className="h-[21px]"
                            src="images/img_calendarsilhouette_white_a700.svg"
                            alt="calendarsilhoue"
                          />
                        </Button>
                        <Text
                          className="leading-[28.00px] mb-1 sm:ml-[0] ml-[17px] text-lg text-white-A700 w-[30%] sm:w-full"
                          size="txtCairoBold18"
                        >
                          Maintenance Server
                        </Text>
                        <div className="flex flex-col font-opensans items-center justify-start sm:ml-[0] ml-[61px] sm:mt-0 mt-[18px] w-[41%] sm:w-full">
                          <div className="flex flex-row gap-3 items-start justify-start w-full">
                            <Img
                              className="h-[18px] mt-[3px] w-[18px]"
                              src="images/img_icmap_gray_500_01.svg"
                              alt="icmap"
                            />
                            <Text
                              className="text-sm text-white-A700"
                              size="txtOpenSansRomanSemiBold14WhiteA700"
                            >
                              <span className="text-white-A700 font-opensans text-left font-normal">
                                <>
                                  Corner Rounded St
                                  <br />
                                </>
                              </span>
                              <span className="text-white-A700 font-opensans text-left font-semibold">
                                London, United Kingdom
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[635px] mt-24 w-[55%] md:w-full">
                    <div className="md:h-[189px] h-[94px] sm:mt-0 mt-[95px] relative w-[28%] sm:w-full">
                      <div className="h-[94px] m-auto w-full">
                        <div className="absolute bg-gray-900_05 flex flex-col h-full inset-y-[0] justify-center my-auto pl-2 py-2 right-[0] rounded w-[85%]">
                          <Text
                            className="leading-[100.00%] md:ml-[0] ml-[46px] mt-[7px] text-sm text-white-A700 w-[74%] sm:w-full"
                            size="txtCairoBold14"
                          >
                            UI Design Weekly Wokrshop{" "}
                          </Text>
                          <div className="flex flex-col font-opensans items-center justify-start mb-[7px] mr-4 mt-1 w-[91%] md:w-full">
                            <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                              <Img
                                className="h-2.5 mt-[3px] w-2.5"
                                src="images/img_icmap_gray_500_01.svg"
                                alt="icmap_One"
                              />
                              <Text
                                className="text-white-A700 text-xs"
                                size="txtOpenSansRomanRegular12"
                              >
                                <>
                                  Corner Rounded St
                                  <br />
                                  London, United Kingdom
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[58px] items-end justify-start left-[0] p-2 top-[0] w-[37%]"
                          style={{
                            backgroundImage: "url('images/img_group296.svg')",
                          }}
                        >
                          <Img
                            className="h-[19px] mb-[13px] mt-2.5 w-5"
                            src="images/img_calendar_white_a700.svg"
                            alt="calendar"
                          />
                        </div>
                      </div>
                      <Line className="absolute bg-green-500 h-1.5 right-[0] rounded-sm top-[0] w-[85%]" />
                    </div>
                    <div className="bg-gray-900_04 flex flex-col items-center justify-start mb-[50px] pb-[17px] rounded-[14px] w-[24%] sm:w-full">
                      <div className="flex flex-col gap-[5px] justify-start w-full">
                        <div className="flex flex-col gap-[11px] items-end justify-start w-full">
                          <Line className="bg-deep_purple-600 h-[3px] rounded-[1px] w-full" />
                          <div className="flex flex-row gap-2.5 items-start justify-end w-[92%] md:w-full">
                            <Button className="bg-deep_purple-600 flex h-[34px] items-center justify-center mb-[3px] p-[7px] rounded-md w-[34px]">
                              <Img
                                className="h-[18px]"
                                src="images/img_calendarsilhouette_white_a700.svg"
                                alt="calendarsilhoue_One"
                              />
                            </Button>
                            <Text
                              className="leading-[100.00%] mt-[3px] text-sm text-white-A700 w-[74%] sm:w-full"
                              size="txtCairoBold14"
                            >
                              Weekly Meeting Projects
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-opensans gap-[15px] items-start justify-start md:ml-[0] ml-[15px] w-[71%] md:w-full">
                          <div className="flex flex-row gap-[9px] items-start justify-start w-full">
                            <Img
                              className="h-3.5 mt-0.5 w-3.5"
                              src="images/img_icmap_gray_500_01.svg"
                              alt="icmap_Two"
                            />
                            <Text
                              className="text-sm text-white-A700"
                              size="txtOpenSansRomanSemiBold14WhiteA700"
                            >
                              <span className="text-white-A700 font-opensans text-left font-normal">
                                <>
                                  Corner Rounded St
                                  <br />
                                </>
                              </span>
                              <span className="text-white-A700 font-opensans text-left font-semibold">
                                London, United Kingdom
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-cairo items-center justify-start w-[81%] md:w-full">
                            <div className="flex relative w-full">
                              <div className="flex my-auto w-[82%]">
                                <div className="flex my-auto w-[76%]">
                                  <div className="flex my-auto w-[69%]">
                                    <div className="bg-gray-400 h-6 my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-6"></div>
                                    <div className="bg-gray-400 h-6 ml-[-4.9px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-6 z-[1]"></div>
                                  </div>
                                  <div className="bg-gray-400 h-6 ml-[-4.88px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-6 z-[1]"></div>
                                </div>
                                <div className="bg-gray-400 h-6 ml-[-4.9px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-6 z-[1]"></div>
                              </div>
                              <Text
                                className="bg-deep_purple-600 h-6 justify-center ml-[-4.89px] my-auto outline outline-[2px] outline-gray-900_01 px-[5px] rounded-[50%] text-gray-900_01 text-lg w-6 z-[1]"
                                size="txtCairoBold18Gray90001"
                              >
                                5+
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 flex flex-col items-center justify-start md:ml-[0] ml-[940px] mt-[65px] pb-9 rounded-[14px] w-[33%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <Line className="bg-pink-400 h-1.5 rounded-[3px] w-full" />
                      <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-between w-[91%] md:w-full">
                        <Button className="bg-pink-400 flex h-[51px] items-center justify-center mb-4 sm:mt-0 mt-0.5 p-[11px] rounded-[14px] w-[51px]">
                          <Img
                            className="h-7"
                            src="images/img_calendarsilhouette_white_a700.svg"
                            alt="calendarsilhoue_Two"
                          />
                        </Button>
                        <div className="flex flex-col gap-[17px] items-start justify-start">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoBold18"
                          >
                            Meet Mr.Yuan in Airport
                          </Text>
                          <div className="flex flex-col font-opensans items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_icmap_gray_500_01.svg"
                                alt="icmap_Three"
                              />
                              <Text
                                className="mt-[3px] text-sm text-white-A700"
                                size="txtOpenSansRomanSemiBold14WhiteA700"
                              >
                                <span className="text-white-A700 font-opensans text-left font-normal">
                                  Corner Rounded St{" "}
                                </span>
                                <span className="text-white-A700 font-opensans text-left font-semibold">
                                  London, United Kingdom
                                </span>
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
        <Sidebar3 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1" />
      </div>
    </>
  );
};

export default DayPage;
