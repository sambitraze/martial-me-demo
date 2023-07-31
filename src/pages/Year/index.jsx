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

const YearPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[2090px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[31px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="bg-gray-900_01 flex flex-col gap-[39px] items-center justify-start md:ml-[0] ml-[395px] mr-[50px] p-[30px] md:px-5 rounded-[14px] shadow-bs4 w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between w-[13%] md:w-full">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtCairoBold34"
                  >
                    2020
                  </Text>
                  <Img
                    className="h-[34px]"
                    src="images/img_sort.svg"
                    alt="sort"
                  />
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[334px] w-[28%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[87%] md:w-full">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
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
                        className="h-[34px] text-deep_purple-600 text-lg"
                        size="txtCairoBold18Deeppurple600"
                      >
                        Year
                      </Text>
                    </div>
                    <div className="h-1 relative w-full">
                      <Line className="absolute bg-blue_gray-700 h-px inset-x-[0] mx-auto rounded-[1px] top-[0] w-[98%]" />
                      <Line className="absolute bg-deep_purple-600 h-1 inset-y-[0] my-auto right-[0] rounded-sm w-1/5" />
                    </div>
                  </div>
                </div>
                <Button className="bg-blue_gray-700 cursor-pointer font-bold min-w-[129px] md:ml-[0] ml-[181px] md:mt-0 my-2 py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                  Today (25)
                </Button>
                <Input
                  name="btnadd"
                  placeholder="+ New Event"
                  className="font-bold p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg text-white-A700 w-full"
                  wrapClassName="bg-deep_purple-600 md:ml-[0] ml-[23px] md:mt-0 my-2 pl-[25px] pr-[35px] py-1.5 rounded-[14px] w-[13%] md:w-full"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start mb-4 w-[90%] md:w-full">
                <div className="md:gap-5 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-2.5 items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-[9px]">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        JANUARY
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col gap-[7px] h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="h-[170px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              M
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              T
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              W
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              T
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              F
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              S
                            </Text>
                            <Text
                              className="text-center text-lg text-red-A200"
                              size="txtCairoRegular18RedA200"
                            >
                              S
                            </Text>
                          </div>
                          <Img
                            className="h-[133px] mt-[3px]"
                            src="images/img_event.svg"
                            alt="event"
                          />
                        </div>
                        <div className="absolute bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-col gap-2 items-center justify-start w-[99%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="text-center text-gray-900_01 text-xl"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700_aa text-xl"
                                  size="txtCairoSemiBold20WhiteA700aa"
                                >
                                  8
                                </Text>
                                <Text
                                  className="text-center text-white-A700_aa text-xl"
                                  size="txtCairoSemiBold20WhiteA700aa"
                                >
                                  9
                                </Text>
                                <Text
                                  className="text-center text-white-A700_aa text-xl"
                                  size="txtCairoSemiBold20WhiteA700aa"
                                >
                                  10
                                </Text>
                                <Text
                                  className="text-center text-white-A700_aa text-xl"
                                  size="txtCairoSemiBold20WhiteA700aa"
                                >
                                  11
                                </Text>
                                <Text
                                  className="text-center text-white-A700_aa text-xl"
                                  size="txtCairoSemiBold20WhiteA700aa"
                                >
                                  12
                                </Text>
                                <Text
                                  className="text-center text-white-A700_aa text-xl"
                                  size="txtCairoSemiBold20WhiteA700aa"
                                >
                                  13
                                </Text>
                                <Text
                                  className="text-center text-red-A200_aa text-xl"
                                  size="txtCairoSemiBold20RedA200aa"
                                >
                                  14
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-center text-white-A700 text-xl"
                                size="txtCairoSemiBold20WhiteA700"
                              >
                                15
                              </Text>
                              <Text
                                className="text-center text-white-A700 text-xl"
                                size="txtCairoSemiBold20WhiteA700"
                              >
                                16
                              </Text>
                              <Text
                                className="text-center text-gray-900_01 text-xl"
                                size="txtCairoBold20Gray90001"
                              >
                                17
                              </Text>
                              <Text
                                className="text-center text-white-A700 text-xl"
                                size="txtCairoSemiBold20WhiteA700"
                              >
                                18
                              </Text>
                              <Text
                                className="text-center text-white-A700 text-xl"
                                size="txtCairoSemiBold20WhiteA700"
                              >
                                19
                              </Text>
                              <Text
                                className="text-center text-white-A700 text-xl"
                                size="txtCairoSemiBold20WhiteA700"
                              >
                                20
                              </Text>
                              <Text
                                className="text-center text-red-A200 text-xl"
                                size="txtCairoSemiBold20RedA200"
                              >
                                21
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        FEBRUARY
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        MARCH
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        APRIL
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        MAY
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-2.5 items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-[9px]">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        JUNE
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-2.5 items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-[9px] w-[46px] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        JULY
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        AUGUST
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        SEPTEMBER
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        OCTOBER
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        NOVEMBER
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-blue_gray-700 border-solid flex flex-1 flex-col gap-[11px] items-center justify-center p-3.5 rounded-[14px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        DECEMBER
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-72 items-center justify-start mb-1.5 p-[11px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group307.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-500_01 text-lg"
                          size="txtCairoRegular18"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-lg text-red-A200"
                          size="txtCairoRegular18RedA200"
                        >
                          S
                        </Text>
                      </div>
                      <div className="h-[131px] md:h-[136px] mt-[5px] relative w-[99%]">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[53px] justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  2
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  3
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  4
                                </Text>
                                <Text
                                  className="bg-deep_purple-600 flex h-[39px] items-center justify-center rounded-[14px] text-center text-gray-900_01 text-xl w-[39px]"
                                  size="txtCairoBold20Gray90001"
                                >
                                  5
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  6
                                </Text>
                                <Text
                                  className="text-center text-red-A200 text-xl"
                                  size="txtCairoSemiBold20RedA200"
                                >
                                  7
                                </Text>
                              </div>
                              <div className="bg-deep_purple-600 h-[39px] md:ml-[0] ml-[88px] mr-[188px] rounded-[14px] w-[39px]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              8
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              9
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              10
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              11
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              12
                            </Text>
                            <Text
                              className="text-center text-white-A700_aa text-xl"
                              size="txtCairoSemiBold20WhiteA700aa"
                            >
                              13
                            </Text>
                            <Text
                              className="text-center text-red-A200_aa text-xl"
                              size="txtCairoSemiBold20RedA200aa"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              15
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              16
                            </Text>
                            <Text
                              className="text-center text-gray-900_01 text-xl"
                              size="txtCairoBold20Gray90001"
                            >
                              17
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              19
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              20
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              21
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start mb-0.5 mt-[7px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              22
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              23
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              24
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              25
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              26
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              27
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-xl"
                              size="txtCairoSemiBold20RedA200"
                            >
                              28
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              29
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              30
                            </Text>
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              31
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              1
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              2
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
                            >
                              3
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-center text-xl"
                              size="txtCairoSemiBold20Bluegray900"
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
            </div>
          </div>
        </div>
        <Sidebar3 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1" />
      </div>
    </>
  );
};

export default YearPage;
