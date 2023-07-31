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

const Calendar1Page = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1176px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[46px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[31px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="bg-gray-900_01 flex flex-col items-center justify-start md:ml-[0] ml-[395px] mr-[50px] p-10 md:px-5 rounded-[14px] shadow-bs4 w-[77%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[19px] mt-1.5 w-full">
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
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
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[205px] md:mt-0 mt-[3px] w-[28%] md:w-full">
                      <div className="flex flex-col gap-3.5 justify-start w-full">
                        <div className="flex flex-row items-center justify-end md:ml-[0] ml-[29px] w-[90%] md:w-full">
                          <Text
                            className="text-blue_gray-700 text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Date
                          </Text>
                          <Text
                            className="ml-[55px] text-blue_gray-700 text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Week
                          </Text>
                          <Text
                            className="ml-[54px] text-deep_purple-600 text-lg"
                            size="txtCairoBold18Deeppurple600"
                          >
                            Month
                          </Text>
                          <Text
                            className="ml-[54px] text-blue_gray-700 text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Year
                          </Text>
                        </div>
                        <div className="flex flex-col relative w-full">
                          <Line className="bg-blue_gray-700 h-px mx-auto rounded-[1px] w-full" />
                          <Line className="bg-deep_purple-600 h-1 mb-auto ml-auto mr-[89px] mt-[-1px] rounded-sm w-[21%] z-[1]" />
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue_gray-700 cursor-pointer font-bold mb-[11px] min-w-[130px] md:ml-[0] ml-[161px] md:mt-0 mt-[5px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                      Today (25)
                    </Button>
                    <Button className="bg-deep_purple-600 cursor-pointer font-bold mb-[11px] min-w-[144px] md:ml-[0] ml-[19px] md:mt-0 mt-[5px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                      + New Event
                    </Button>
                  </div>
                  <Img
                    className="h-10 w-10"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                </div>
                <div className="h-[47px] sm:h-[554px] md:h-[95px] mt-12 relative w-full">
                  <Img
                    className="absolute h-[47px] inset-[0] justify-center m-auto"
                    src="images/img_guide.svg"
                    alt="guide"
                  />
                  <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto w-[91%]">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtCairoSemiBold20WhiteA700"
                    >
                      Monday
                    </Text>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtCairoSemiBold20WhiteA700"
                    >
                      Tuesday
                    </Text>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtCairoSemiBold20WhiteA700"
                    >
                      Wednesday
                    </Text>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtCairoSemiBold20WhiteA700"
                    >
                      Thursday
                    </Text>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtCairoSemiBold20WhiteA700"
                    >
                      Friday
                    </Text>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtCairoSemiBold20WhiteA700"
                    >
                      Saturday
                    </Text>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtCairoSemiBold20WhiteA700"
                    >
                      Sunday
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[692px] items-center justify-start mt-[21px] p-2.5 w-full"
                  style={{ backgroundImage: "url('images/img_group227.svg')" }}
                >
                  <div className="flex flex-col items-start justify-start mb-[58px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-5 md:ml-[0] w-[91%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtCairoBold24Gray50001"
                      >
                        31
                      </Text>
                      <Text
                        className="ml-44 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        1
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[191px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        2
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        3
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[189px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        4
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        5
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[189px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        6
                      </Text>
                    </div>
                    <div className="flex flex-col font-opensans items-center justify-start mt-[27px] w-full">
                      <div className="h-[145px] md:h-[168px] relative w-[98%] md:w-full">
                        <div className="absolute flex flex-col md:gap-10 gap-[85px] h-full inset-[0] justify-center m-auto w-[73%]">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[206px] w-[79%] md:w-full">
                            <div className="flex flex-row items-center justify-between mb-1 w-[61%] md:w-full">
                              <Text
                                className="bg-orange-400 h-7 justify-center pl-[17px] sm:pr-5 pr-[31px] py-0.5 rounded-[10px] text-base text-white-A700 w-[93px]"
                                size="txtOpenSansBold16WhiteA700"
                              >
                                Event
                              </Text>
                              <Text
                                className="bg-red-A200 h-7 justify-center pl-[17px] sm:pr-5 pr-[35px] py-0.5 rounded-[10px] text-base text-white-A700 w-[252px]"
                                size="txtOpenSansBold16WhiteA700"
                              >
                                Event
                              </Text>
                            </div>
                            <div className="bg-light_blue-300 flex flex-row items-start justify-between md:mt-0 mt-1 p-0.5 rounded-[10px] w-1/5 md:w-full">
                              <Text
                                className="ml-3.5 text-base text-white-A700"
                                size="txtOpenSansBold16WhiteA700"
                              >
                                Event
                              </Text>
                              <Text
                                className="mr-2.5 text-sm text-white-A700"
                                size="txtOpenSans14WhiteA700"
                              >
                                Pass
                              </Text>
                            </div>
                          </div>
                          <div className="bg-light_blue-300 flex flex-row gap-28 items-start justify-start mr-[621px] p-0.5 rounded-[10px] w-[36%] md:w-full">
                            <Text
                              className="ml-3.5 text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              New Event
                            </Text>
                            <Text
                              className="text-sm text-white-A700"
                              size="txtOpenSans14WhiteA700"
                            >
                              08:04 - 10:23 AM
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[2%] md:h-[45px] h-[72px] inset-x-[0] mx-auto w-full">
                          <div className="absolute bg-green-500 bottom-[0] flex flex-row sm:gap-10 items-start justify-between p-0.5 right-[0] rounded-[10px] w-[41%]">
                            <Text
                              className="ml-3.5 text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              New Event
                            </Text>
                            <Text
                              className="mr-[23px] text-sm text-white-A700"
                              size="txtOpenSans14WhiteA700"
                            >
                              08:04 - 10:23 AM
                            </Text>
                          </div>
                          <div className="absolute flex flex-row font-cairo items-center justify-between left-[0] top-[0] w-[94%]">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              7
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              8
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              9
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              10
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              11
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              12
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              13
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start mt-1 w-full">
                        <div className="flex flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[205px] w-[85%] md:w-full">
                          <Text
                            className="bg-green-500 h-7 justify-center pl-[17px] pr-5 py-0.5 rounded-[10px] text-base text-white-A700 w-[93px]"
                            size="txtOpenSansBold16WhiteA700"
                          >
                            3 more
                          </Text>
                          <div className="bg-light_blue-300 flex flex-row items-start justify-between p-0.5 rounded-[10px] w-[13%]">
                            <Text
                              className="ml-3.5 text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              Event
                            </Text>
                            <Text
                              className="mr-2.5 text-sm text-white-A700"
                              size="txtOpenSans14WhiteA700"
                            >
                              Pass
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-center justify-start ml-5 md:ml-[0] mr-[101px] mt-[34px] w-[92%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            14
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[175px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            15
                          </Text>
                          <Text
                            className="ml-44 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            16
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[175px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            17
                          </Text>
                          <Text
                            className="ml-44 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            18
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[175px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            19
                          </Text>
                          <Text
                            className="ml-44 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            20
                          </Text>
                        </div>
                        <div className="bg-red-A200 flex flex-row font-opensans gap-[102px] items-start justify-start mr-[1026px] mt-[31px] p-0.5 rounded-[10px] w-1/4 md:w-full">
                          <Text
                            className="ml-3.5 text-base text-white-A700"
                            size="txtOpenSansBold16WhiteA700"
                          >
                            New Event
                          </Text>
                          <Text
                            className="text-sm text-white-A700"
                            size="txtOpenSans14WhiteA700"
                          >
                            08:04 - 10:23 AM
                          </Text>
                        </div>
                        <div className="font-opensans md:h-[472px] h-[72px] sm:h-[82px] ml-5 md:ml-[0] mr-[101px] mt-[37px] relative w-[92%] md:w-full">
                          <div className="absolute bg-pink-400 bottom-[0] flex flex-row gap-[113px] items-start justify-center left-[31%] p-0.5 rounded-[10px] w-[28%]">
                            <Text
                              className="ml-3.5 text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              New Event
                            </Text>
                            <Text
                              className="mr-4 text-sm text-white-A700"
                              size="txtOpenSans14WhiteA700"
                            >
                              08:04 - 10:23 AM
                            </Text>
                          </div>
                          <div className="absolute flex md:flex-col flex-row font-cairo md:gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              21
                            </Text>
                            <Text
                              className="ml-44 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              22
                            </Text>
                            <Text
                              className="ml-44 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              23
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[175px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              24
                            </Text>
                            <div className="h-[45px] md:ml-[0] ml-[146px] relative w-[7%] md:w-full">
                              <div className="absolute bg-deep_purple-600 h-[43px] inset-[0] justify-center m-auto rounded-br-[14px] rounded-tr-[14px] w-full"></div>
                              <Text
                                className="absolute h-full inset-y-[0] my-auto right-[27%] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                size="txtCairoBold24"
                              >
                                25
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[154px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              26
                            </Text>
                            <Text
                              className="ml-44 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              27
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="bg-orange-400 h-7 justify-center md:ml-[0] ml-[411px] mr-[859px] mt-1 pl-[17px] pr-5 py-0.5 rounded-[10px] text-base text-white-A700 w-[93px]"
                          size="txtOpenSansBold16WhiteA700"
                        >
                          3 more
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-center justify-start ml-5 md:ml-[0] mt-[37px] w-[91%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        28
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[175px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        28
                      </Text>
                      <Text
                        className="ml-44 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        30
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[175px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtCairoBold24Gray50001"
                      >
                        1
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[191px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtCairoBold24Gray50001"
                      >
                        2
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[188px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtCairoBold24Gray50001"
                      >
                        3
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[189px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                        size="txtCairoBold24Gray50001"
                      >
                        4
                      </Text>
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

export default Calendar1Page;
