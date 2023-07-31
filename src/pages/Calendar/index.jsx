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

const CalendarPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1176px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[47px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="flex md:ml-[0] ml-[393px] md:px-5 relative w-[77%] md:w-full">
              <div className="bg-gray-900_01 flex flex-col items-center justify-start my-auto p-[30px] sm:px-5 rounded-[14px] shadow-bs4 w-3/4">
                <div className="flex flex-col items-center justify-start mb-7 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                        size="txtCairoBold34"
                      >
                        Invoice Calendar
                      </Text>
                      <Text
                        className="text-lg text-white-A700"
                        size="txtOpenSans18"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between md:mt-0 mt-[29px] w-[49%] md:w-full">
                      <div className="bg-blue_gray-900 flex flex-row gap-[31px] items-center justify-between p-1.5 rounded-[14px] w-[30%] sm:w-full">
                        <Text
                          className="ml-[15px] text-lg text-white-A700"
                          size="txtCairoBold18"
                        >
                          October
                        </Text>
                        <Img
                          className="h-1.5 mr-4"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                      </div>
                      <div className="bg-blue_gray-900 flex flex-row gap-9 items-center justify-center p-[5px] rounded-[14px]">
                        <Text
                          className="ml-[19px] text-lg text-white-A700"
                          size="txtCairoBold18"
                        >
                          2020
                        </Text>
                        <Img
                          className="h-1.5 mr-[17px]"
                          src="images/img_offer.svg"
                          alt="offer_One"
                        />
                      </div>
                      <Button className="bg-deep_purple-600 cursor-pointer font-bold min-w-[170px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                        + New Schedule
                      </Button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[50px] w-[94%] md:w-full">
                    <Text
                      className="text-gray-500_01 text-xl"
                      size="txtCairoSemiBold20"
                    >
                      Monday
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xl"
                      size="txtCairoSemiBold20"
                    >
                      Tuesday
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xl"
                      size="txtCairoSemiBold20"
                    >
                      Wednesday
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xl"
                      size="txtCairoSemiBold20"
                    >
                      Thursday
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xl"
                      size="txtCairoSemiBold20"
                    >
                      Friday
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xl"
                      size="txtCairoSemiBold20"
                    >
                      Saturday
                    </Text>
                    <Text
                      className="text-gray-500_01 text-xl"
                      size="txtCairoSemiBold20"
                    >
                      Sunday
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-full">
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[18px] grid grid-cols-2 w-[28%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-gray-900 flex flex-col items-start justify-start sm:ml-[0] p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                            size="txtCairoBold24Gray50001"
                          >
                            31
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start sm:ml-[0] p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            1
                          </Text>
                        </div>
                      </List>
                      <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex md:flex-1 flex-col gap-[31px] items-start justify-start p-2.5 rounded-[14px] w-[13%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          2
                        </Text>
                        <Img
                          className="h-4 mb-2.5 md:ml-[0] ml-[9px]"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 grid-cols-3 w-[42%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start sm:ml-[0] p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            3
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start sm:ml-[0] p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            4
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex flex-col items-start justify-start sm:ml-[0] p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            5
                          </Text>
                        </div>
                      </List>
                      <div className="bg-light_blue-300 border-2 border-gray-900_01 border-solid flex md:flex-1 flex-col items-center justify-start p-2.5 rounded-[14px] w-[13%] md:w-full">
                        <div className="flex flex-col gap-[21px] items-start justify-start mb-1.5 w-[83%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            6
                          </Text>
                          <div className="flex flex-row gap-2 items-start justify-between w-full">
                            <div className="flex relative w-[72%]">
                              <div className="flex my-auto w-[70%]">
                                <div className="bg-gray-400 h-[26px] my-auto outline outline-[1px] outline-light_blue-300 rounded-[50%] w-[26px]"></div>
                                <div className="bg-gray-400 h-[26px] ml-[-6px] my-auto outline outline-[1px] outline-light_blue-300 rounded-[50%] w-[26px] z-[1]"></div>
                              </div>
                              <div className="bg-gray-400 h-[26px] ml-[-6px] my-auto outline outline-[1px] outline-light_blue-300 rounded-[50%] w-[26px] z-[1]"></div>
                            </div>
                            <Text
                              className="text-base text-white-A700"
                              size="txtCairoBold16"
                            >
                              7+
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[15px] w-full">
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 grid-cols-3 w-[42%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            7
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            8
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            9
                          </Text>
                        </div>
                      </List>
                      <div className="md:h-32 h-[130px] relative w-[14%] md:w-full">
                        <div className="bg-deep_purple-600 border-2 border-gray-900_01 border-solid h-[124px] m-auto rounded-[14px] w-[96%]"></div>
                        <div className="absolute border-2 border-deep_purple-600 border-solid flex flex-col gap-[11px] h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[14px] w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            10
                          </Text>
                          <div className="flex flex-col font-opensans items-center justify-start mb-2 w-[79%] md:w-full">
                            <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                              <Line className="bg-light_blue-300 h-[35px] rounded-[1px] w-[3px]" />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtOpenSansRomanSemiBold16"
                                >
                                  Supply, 2+
                                </Text>
                                <Text
                                  className="text-gray-400_02 text-xs"
                                  size="txtOpenSans12Gray40002"
                                >
                                  $600.00
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 grid-cols-3 w-[42%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            11
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[58px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            12
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            13
                          </Text>
                        </div>
                      </List>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-[15px] w-full">
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[14px]">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          14
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex md:flex-1 flex-col items-center justify-start p-2.5 rounded-[14px] w-[13%] md:w-full">
                        <div className="flex flex-col gap-5 items-start justify-start mb-1.5 w-[83%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            15
                          </Text>
                          <div className="flex flex-row gap-2 items-start justify-between w-full">
                            <div className="flex relative w-[72%]">
                              <div className="flex my-auto w-[70%]">
                                <div className="bg-gray-400 h-[26px] my-auto outline outline-[1px] outline-gray-900_01 rounded-[50%] w-[26px]"></div>
                                <div className="bg-gray-400 h-[26px] ml-[-6px] my-auto outline outline-[1px] outline-gray-900_01 rounded-[50%] w-[26px] z-[1]"></div>
                              </div>
                              <div className="bg-gray-400 h-[26px] ml-[-6px] my-auto outline outline-[1px] outline-gray-900_01 rounded-[50%] w-[26px] z-[1]"></div>
                            </div>
                            <Text
                              className="text-base text-white-A700"
                              size="txtCairoBold16"
                            >
                              2+
                            </Text>
                          </div>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[18px] grid grid-cols-2 w-[28%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start sm:ml-[0] p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            16
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start sm:ml-[0] p-2.5 rounded-[14px] w-full">
                          <Text
                            className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            17
                          </Text>
                        </div>
                      </List>
                      <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex md:flex-1 flex-col gap-[13px] justify-start p-2.5 rounded-[14px] w-[13%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          18
                        </Text>
                        <div className="flex flex-col font-opensans items-center justify-start mb-1.5 ml-0.5 md:ml-[0] mr-4 w-[83%] md:w-full">
                          <div className="flex flex-row gap-1.5 items-center justify-between w-full">
                            <Line className="bg-pink-400 h-[35px] rounded-[1px] w-[3px]" />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-white-A700"
                                size="txtOpenSansRomanSemiBold16"
                              >
                                Testing, 2+
                              </Text>
                              <Text
                                className="text-white-A700 text-xs"
                                size="txtOpenSans12"
                              >
                                $600.00
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-col items-start justify-start p-2.5 rounded-[14px]">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          19
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-orange-400 border-solid flex md:flex-1 flex-col gap-[30px] items-start justify-start p-2.5 rounded-[14px] w-[13%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          20
                        </Text>
                        <Img
                          className="h-4 mb-[11px] md:ml-[0] ml-[9px]"
                          src="images/img_arrowdown_green_500.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                    <div className="md:gap-5 gap-[18px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center min-h-[auto] mt-[18px] w-full">
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[58px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          21
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[58px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          22
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          23
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          24
                        </Text>
                        <Img
                          className="h-4 mb-[11px] md:ml-[0] ml-[9px]"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          25
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          26
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          27
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          28
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex flex-1 flex-col gap-[11px] items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          28
                        </Text>
                        <div className="flex flex-col font-opensans items-center justify-start mb-1.5 md:ml-[0] ml-[5px] w-[62%] md:w-full">
                          <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                            <Line className="bg-light_blue-300 h-[35px] mt-1 rounded-[1px] w-[3px]" />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-white-A700"
                                size="txtOpenSansRomanSemiBold16"
                              >
                                Utilities
                              </Text>
                              <Text
                                className="text-white-A700 text-xs"
                                size="txtOpenSans12"
                              >
                                $680.00
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-900 border-solid flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          30
                        </Text>
                      </div>
                      <div className="bg-gray-900 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                          size="txtCairoBold24Gray50001"
                        >
                          1
                        </Text>
                      </div>
                      <div className="bg-gray-900 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[58px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                          size="txtCairoBold24Gray50001"
                        >
                          2
                        </Text>
                      </div>
                      <div className="bg-gray-900 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                          size="txtCairoBold24Gray50001"
                        >
                          3
                        </Text>
                      </div>
                      <div className="bg-gray-900 flex flex-1 flex-col items-start justify-start p-2.5 rounded-[14px] w-full">
                        <Text
                          className="mb-[57px] md:ml-[0] ml-[9px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                          size="txtCairoBold24Gray50001"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-opensans md:h-[844px] h-[845px] ml-[-43px] w-[29%] sm:w-full z-[1]">
                <div className="absolute bg-gray-900_01 flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-[30px] sm:px-5 right-[0] rounded-[14px] shadow-bs4 w-[81%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start mb-[710px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Invoice Details
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Thursday October 10th, 2020
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[3%] flex flex-col inset-x-[0] items-end justify-start mx-auto w-full">
                  <div className="h-[522px] relative w-full">
                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[81%]">
                      <List
                        className="flex flex-col gap-[174px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 pt-5 w-full">
                          <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                            <div className="flex flex-row gap-[26px] items-center justify-start w-[92%] md:w-full">
                              <Line className="bg-orange-400 h-[134px] rounded-sm w-1" />
                              <div className="flex flex-col gap-6 items-center justify-start w-[91%]">
                                <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                  <Img
                                    className="h-[60px] md:h-auto object-cover w-[60px]"
                                    src="images/img_profilepicture.png"
                                    alt="profilepicture"
                                  />
                                  <div className="flex flex-col items-center justify-start">
                                    <div className="flex flex-row items-start justify-between w-full">
                                      <Text
                                        className="text-deep_purple-600 text-sm"
                                        size="txtOpenSans14Deeppurple600"
                                      >
                                        #INV-00001245
                                      </Text>
                                      <Img
                                        className="h-6 w-6"
                                        src="images/img_verticon_1.svg"
                                        alt="verticon"
                                      />
                                    </div>
                                    <div className="flex flex-row items-end justify-between mt-[3px] w-[99%] md:w-full">
                                      <div className="flex flex-col items-start justify-start mb-0.5">
                                        <Text
                                          className="text-base text-white-A700"
                                          size="txtOpenSansBold16WhiteA700"
                                        >
                                          Rent
                                        </Text>
                                        <Text
                                          className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                                          size="txtOpenSans24"
                                        >
                                          $7,000.00
                                        </Text>
                                      </div>
                                      <Img
                                        className="h-10 mt-[18px] w-10"
                                        src="images/img_clock_red_a200.svg"
                                        alt="clock"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between w-full">
                                  <div className="flex flex-row gap-1.5 items-start justify-start">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_clock2.svg"
                                      alt="clockTwo"
                                    />
                                    <Text
                                      className="mt-0.5 text-sm text-white-A700"
                                      size="txtOpenSans14WhiteA700"
                                    >
                                      Due Date 5d left
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-1 text-orange-400 text-sm"
                                    size="txtOpenSansBold14"
                                  >
                                    PENDING
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px w-full" />
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end my-0 pt-5 w-full">
                          <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                            <div className="flex flex-row gap-[26px] items-center justify-start w-[92%] md:w-full">
                              <Line className="bg-light_blue-300 h-[134px] rounded-sm w-1" />
                              <div className="flex flex-col gap-[19px] items-center justify-start w-[91%]">
                                <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                  <Button className="bg-purple-900 flex h-[60px] items-center justify-center mb-[31px] p-3.5 rounded-[14px] w-[60px]">
                                    <Img
                                      src="images/img_volume.svg"
                                      alt="volume"
                                    />
                                  </Button>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="flex flex-row items-start justify-between w-full">
                                      <Text
                                        className="text-deep_purple-600 text-sm"
                                        size="txtOpenSans14Deeppurple600"
                                      >
                                        #INV-00001245
                                      </Text>
                                      <Img
                                        className="h-6 w-6"
                                        src="images/img_verticon_1.svg"
                                        alt="verticon"
                                      />
                                    </div>
                                    <Text
                                      className="mt-0.5 text-base text-white-A700"
                                      size="txtOpenSansBold16WhiteA700"
                                    >
                                      Student Tuition
                                    </Text>
                                    <Text
                                      className="mt-[9px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                      size="txtOpenSans24"
                                    >
                                      $7,000.00
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row gap-[30px] items-start justify-between w-full">
                                  <div className="flex flex-row gap-1.5 items-start justify-start">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_clock2.svg"
                                      alt="clockTwo"
                                    />
                                    <Text
                                      className="mt-0.5 text-sm text-white-A700"
                                      size="txtOpenSans14WhiteA700"
                                    >
                                      Due Date 12d left
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-[5px] text-light_blue-300 text-right text-sm"
                                    size="txtOpenSansBold14Lightblue300"
                                  >
                                    INVOICES SENT
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px w-full" />
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="absolute bottom-[11%] md:h-[303px] sm:h-[357px] h-[358px] inset-x-[0] mx-auto w-full">
                      <div className="absolute bg-black-900_01 flex flex-col items-end justify-start p-[34px] sm:px-5 right-[0] top-[20%] w-[81%]">
                        <Img
                          className="h-6 my-[41px] w-6"
                          src="images/img_email1_blue_gray_700.svg"
                          alt="emailOne"
                        />
                      </div>
                      <div className="absolute md:h-[303px] sm:h-[357px] h-[358px] inset-y-[0] left-[0] my-auto w-[93%] sm:w-full">
                        <div className="absolute bg-gray-900_01 flex flex-col items-start justify-start left-[0] pr-5 py-5 rounded-[14px] shadow-bs7 top-[19%] w-[87%]">
                          <Line className="bg-orange-400 h-[134px] rounded-sm w-1" />
                        </div>
                        <div className="absolute flex flex-col md:gap-10 gap-[94px] h-full inset-y-[0] justify-start my-auto right-[0] w-[94%]">
                          <div className="flex flex-col gap-2 items-center justify-start mr-[90px] w-[76%] md:w-full">
                            <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                              <Button className="bg-green-300 flex h-[60px] items-center justify-center mb-[41px] mt-[89px] p-3 rounded-[14px] w-[60px]">
                                <Img
                                  src="images/img_arrowright_white_a700_60x60.svg"
                                  alt="arrowright"
                                />
                              </Button>
                              <div className="flex flex-col md:gap-10 gap-[69px] justify-start">
                                <Text
                                  className="md:ml-[0] ml-[94px] text-light_blue-300_01 text-sm"
                                  size="txtOpenSansRomanLight14"
                                >
                                  AutoPay-On
                                </Text>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-deep_purple-600 text-sm"
                                      size="txtOpenSans14Deeppurple600"
                                    >
                                      #INV-00001245
                                    </Text>
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_verticon_1.svg"
                                      alt="verticon"
                                    />
                                  </div>
                                  <div className="flex flex-row items-center justify-between mt-0.5 w-[99%] md:w-full">
                                    <div className="flex flex-col items-start justify-start w-[75px]">
                                      <Text
                                        className="text-base text-white-A700"
                                        size="txtOpenSansBold16WhiteA700"
                                      >
                                        Wi-Fi
                                      </Text>
                                      <Text
                                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                        size="txtOpenSans24"
                                      >
                                        $68.45
                                      </Text>
                                      <Text
                                        className="text-light_blue-300_01 text-sm"
                                        size="txtOpenSansRomanLight14"
                                      >
                                        AutoPay-On
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-10 w-10"
                                      src="images/img_clock_red_a200.svg"
                                      alt="clock"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="flex flex-row gap-1.5 items-start justify-start">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_clock2.svg"
                                  alt="clockTwo"
                                />
                                <Text
                                  className="mt-0.5 text-sm text-white-A700"
                                  size="txtOpenSans14WhiteA700"
                                >
                                  Due Date 12d left
                                </Text>
                              </div>
                              <Text
                                className="mt-1 text-orange-400 text-right text-sm"
                                size="txtOpenSansBold14"
                              >
                                PENDING
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-10 md:ml-[0] ml-[329px] w-10"
                            src="images/img_plus_green_500.svg"
                            alt="plus"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-end pt-5 w-[81%] md:w-full">
                    <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                      <div className="flex flex-row gap-[26px] items-center justify-start w-[92%] md:w-full">
                        <Line className="bg-green-500 h-[134px] rounded-sm w-1" />
                        <div className="flex flex-col items-center justify-start w-[91%]">
                          <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                            <Button className="bg-indigo-100 flex h-[60px] items-center justify-center mb-[47px] p-[15px] rounded-[14px] w-[60px]">
                              <Img
                                className="h-7"
                                src="images/img_energy1.svg"
                                alt="energyOne"
                              />
                            </Button>
                            <div className="flex flex-col items-start justify-start">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Text
                                  className="text-deep_purple-600 text-sm"
                                  size="txtOpenSans14Deeppurple600"
                                >
                                  #INV-00001245
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_verticon_1.svg"
                                  alt="verticon_One"
                                />
                              </div>
                              <Text
                                className="mt-0.5 text-base text-white-A700"
                                size="txtOpenSansBold16WhiteA700"
                              >
                                Utilities
                              </Text>
                              <div className="flex flex-row items-start justify-between mt-[5px] w-full">
                                <div className="flex flex-col items-start justify-start mt-1">
                                  <Text
                                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                    size="txtOpenSans24"
                                  >
                                    $680.00
                                  </Text>
                                  <Text
                                    className="text-light_blue-300_01 text-sm"
                                    size="txtOpenSansRomanLight14"
                                  >
                                    AutoPay-On
                                  </Text>
                                </div>
                                <Img
                                  className="h-10 w-10"
                                  src="images/img_clock_red_a200.svg"
                                  alt="clock_One"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                            <div className="flex flex-row gap-1.5 items-start justify-start">
                              <Img
                                className="h-6 w-6"
                                src="images/img_clock2.svg"
                                alt="clockTwo_One"
                              />
                              <Text
                                className="mt-0.5 text-sm text-white-A700"
                                size="txtOpenSans14WhiteA700"
                              >
                                Due Date 12d left
                              </Text>
                            </div>
                            <Text
                              className="mt-[5px] text-green-500 text-right text-sm"
                              size="txtOpenSansBold14Green500"
                            >
                              COMPLETED
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-900 h-px w-full" />
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

export default CalendarPage;
