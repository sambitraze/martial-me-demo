import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C01DashboardNav from "components/C01DashboardNav";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const centeredMartialArtsSunnyvaleCaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const studentPerformanceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const weekdayEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[2261px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="md:h-[63px] h-[88px] relative w-[24%] md:w-full">
                    <Text
                      className="absolute left-[0] sm:text-3xl md:text-[32px] text-[34px] text-white-A700 top-[0]"
                      size="txtCairoBold34"
                    >
                      Dashboard
                    </Text>
                    <SelectBox
                      className="absolute bottom-[0] font-opensans inset-x-[0] leading-[normal] mx-auto text-gray-500_01 text-left text-lg w-full"
                      placeholderClassName="text-gray-500_01"
                      indicator={
                        <Img
                          className="h-2 mr-[0] w-[15px] right-[0] absolute"
                          src="images/img_arrow.svg"
                          alt="arrow"
                        />
                      }
                      isMulti={false}
                      name="group387"
                      options={centeredMartialArtsSunnyvaleCaOptionsList}
                      isSearchable={false}
                      placeholder="Centered Martial Arts - Sunnyvale, Ca"
                    />
                  </div>
                  <Input
                    name="searchbox_One"
                    placeholder="Search here"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                    wrapClassName="bg-gray-900_01 flex md:flex-1 md:ml-[0] ml-[274px] md:mt-0 my-[9px] pb-[15px] pt-5 px-[34px] rounded-[14px] shadow-bs4 w-[34%] md:w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-1 h-7 mr-6"
                        src="images/img_search2.svg"
                        alt="search 2"
                      />
                    }
                  ></Input>
                  <div className="bg-gray-900_02 flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[30px] md:mt-0 my-[9px] p-[5px] rounded-[14px] shadow-bs4 w-[23%] md:w-full">
                    <div className="flex flex-row gap-6 items-center justify-between mt-0.5 w-[89%] md:w-full">
                      <Img
                        className="h-7 w-7"
                        src="images/img_calendarsilhouette_deep_purple_600.svg"
                        alt="calendarsilhoue"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-end justify-between w-full">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoBold18"
                          >
                            Date Range
                          </Text>
                          <Img
                            className="h-2 mt-[22px]"
                            src="images/img_arrow.svg"
                            alt="arrow_Two"
                          />
                        </div>
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtCairoRegular14"
                        >
                          August 28th - October 28th, 2020
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-gray-900_01 flex md:flex-1 flex-row items-start justify-end pl-[7px] py-[7px] rounded-[14px] shadow-bs4 w-[24%] md:w-full">
                    <div className="bg-blue_gray-900 flex flex-col h-[113px] items-end justify-start my-[22px] sm:pl-5 pl-[21px] rounded-[56px] w-[113px]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-28 items-start justify-start p-3.5"
                        style={{
                          backgroundImage: "url('images/img_group140.png')",
                        }}
                      >
                        <Text
                          className="my-[18px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          62%
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-[31px] mt-[23px]">
                      <Text
                        className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                        size="txtCairoBold38"
                      >
                        31
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        Prospects
                      </Text>
                    </div>
                    <Img
                      className="h-6 ml-[65px] w-6"
                      src="images/img_verticon.svg"
                      alt="verticon"
                    />
                  </div>
                  <div className="bg-gray-900_01 flex md:flex-1 flex-row items-start justify-center pl-[7px] py-[7px] rounded-[14px] shadow-bs4 w-[24%] md:w-full">
                    <div className="bg-blue_gray-900 h-[113px] md:h-[137px] ml-[23px] my-[22px] pb-[18px] pl-[18px] relative rounded-[56px] w-[113px]">
                      <Img
                        className="absolute h-[93px] object-cover right-[0] top-[0]"
                        src="images/img_ellipse7.png"
                        alt="ellipseSeven"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl w-max"
                        size="txtCairoBold24"
                      >
                        38%
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-[31px] mt-[23px]">
                      <Text
                        className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                        size="txtCairoBold38"
                      >
                        19
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        New Students
                      </Text>
                    </div>
                    <Img
                      className="h-6 ml-[33px] w-6"
                      src="images/img_verticon.svg"
                      alt="verticon_One"
                    />
                  </div>
                  <div className="h-[172px] relative w-[24%] md:w-full">
                    <div className="absolute bg-gray-900_01 flex flex-row gap-[39px] h-full inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                      <div className="md:h-20 h-[86px] relative w-[86px]">
                        <Img
                          className="absolute bottom-[0] h-20 left-[0] object-cover w-20"
                          src="images/img_email1.png"
                          alt="emailOne"
                        />
                        <div className="absolute bg-light_blue-300 flex flex-col h-[35px] items-center justify-start p-[9px] right-[0] rounded-[17px] shadow-bs3 top-[0] w-[35px]">
                          <Line className="bg-white-A700 h-4 w-1" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[11px] mr-[3px]">
                        <Text
                          className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                          size="txtCairoBold38"
                        >
                          59
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Important Emails
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-6 right-[0] top-[3%] w-6"
                      src="images/img_verticon.svg"
                      alt="verticon_Two"
                    />
                  </div>
                  <div className="md:h-[168px] h-[172px] relative w-[24%] md:w-full">
                    <div className="absolute bg-gray-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-row gap-[35px] items-center justify-start w-4/5 md:w-full">
                        <Img
                          className="h-28 md:h-auto object-cover"
                          src="images/img_barcharts.png"
                          alt="barcharts"
                        />
                        <div className="flex flex-col items-center justify-start w-[55%]">
                          <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                            <div className="flex flex-col justify-start w-full">
                              <div className="flex flex-row gap-[13px] items-center justify-start w-[65%] md:w-full">
                                <div className="bg-light_blue-300 h-3.5 mb-2.5 mt-4 rounded-[5px] w-3.5"></div>
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtCairoBold24"
                                >
                                  2,841
                                </Text>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[27px] text-blue_gray-700 text-lg"
                                size="txtCairoSemiBold18"
                              >
                                Google Views
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                            <div className="flex flex-col justify-start w-full">
                              <div className="flex flex-row gap-[13px] items-center justify-start w-[65%] md:w-full">
                                <div className="bg-teal-50 h-3.5 mb-2.5 mt-[15px] rounded-[5px] w-3.5"></div>
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtCairoBold24"
                                >
                                  1,456
                                </Text>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[27px] text-blue_gray-700 text-lg"
                                size="txtCairoSemiBold18"
                              >
                                Website Visits
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-6 right-[0] top-[3%] w-6"
                      src="images/img_verticon.svg"
                      alt="verticon_Three"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[19px] items-center justify-between w-full">
                  <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-end pt-3 px-3 rounded-[14px] shadow-bs4 w-[51%] md:w-full">
                    <div className="flex flex-col gap-1.5 items-center justify-start mt-2 w-[98%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[98%] md:w-full">
                        <div className="h-20 md:h-[49px] relative w-[32%] md:w-full">
                          <Text
                            className="absolute bottom-[0] left-[0] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                            size="txtCairoBold38"
                          >
                            $3,048
                          </Text>
                          <Text
                            className="absolute bottom-[0] right-[0] text-2xl md:text-[22px] text-green-500 sm:text-xl"
                            size="txtCairoBold24Green500"
                          >
                            +25%
                          </Text>
                          <Text
                            className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[0] w-max"
                            size="txtCairoBold24"
                          >
                            Sales Overview
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[223px] w-[30%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                              <Text
                                className="text-deep_purple-600 text-lg"
                                size="txtCairoSemiBold18Deeppurple600"
                              >
                                7d
                              </Text>
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                30d
                              </Text>
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                1Y
                              </Text>
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                All
                              </Text>
                            </div>
                            <div className="h-[3px] md:h-[7px] mt-1 relative w-full">
                              <Line className="absolute bg-gray-400_02 h-px inset-[0] justify-center m-auto rounded-[1px] w-[98%]" />
                              <div className="absolute bg-deep_purple-600 h-[3px] inset-y-[0] left-[0] my-auto rounded-[1px] w-[17%]"></div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-5 ml-5 md:ml-[0] md:mt-0 mt-1.5 w-5"
                          src="images/img_verticon_gray_500_01.svg"
                          alt="verticon_Four"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row font-opensans gap-[23px] items-start justify-between w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[7px] w-[88%] md:w-full">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[150px] items-center justify-start pt-1 px-1 w-full"
                            style={{
                              backgroundImage: "url('images/img_group134.svg')",
                            }}
                          >
                            <div
                              className="bg-cover bg-no-repeat h-[145px] md:h-[59px] p-[5px] relative w-[99%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group135.svg')",
                              }}
                            >
                              <div className="absolute bg-pink-400 border-[6px] border-gray-900_01 border-solid h-[21px] inset-[0] justify-center m-auto rounded-[14px] w-[5%]"></div>
                              <div className="absolute flex flex-col items-center justify-start left-[26%] top-[3%] w-[29%]">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-start p-3 w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_dots_blue_gray_700_01.svg')",
                                  }}
                                >
                                  <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtOpenSansSemiBold12"
                                    >
                                      Wednesday Sales
                                    </Text>
                                    <div className="flex flex-row gap-8 items-start justify-between w-full">
                                      <Text
                                        className="text-lg text-white-A700"
                                        size="txtCairoSemiBold18WhiteA700"
                                      >
                                        $321
                                      </Text>
                                      <Text
                                        className="mt-1 text-white-A700 text-xs"
                                        size="txtOpenSansSemiBold12"
                                      >
                                        +12%
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row font-cairo items-center justify-between w-[96%] md:w-full">
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              Sun
                            </Text>
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              Mon
                            </Text>
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              Tue
                            </Text>
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              Wed
                            </Text>
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              Thu
                            </Text>
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              Fri
                            </Text>
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoRegular18"
                            >
                              Sat
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-cairo gap-[11px] items-center justify-start">
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtCairoSemiBold14"
                          >
                            $600
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtCairoSemiBold14"
                          >
                            $500
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtCairoSemiBold14"
                          >
                            $400
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtCairoSemiBold14"
                          >
                            $300
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtCairoSemiBold14"
                          >
                            $200
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtCairoSemiBold14"
                          >
                            $100
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-[14px] shadow-bs4 w-[49%] md:w-full">
                    <div className="flex flex-col items-center justify-start mt-[17px] w-[96%] md:w-full">
                      <div className="flex md:flex-col flex-row gap-8 items-start justify-between w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Daily Attendence
                          </Text>
                          <Text
                            className="text-base text-blue_gray-700"
                            size="txtOpenSans16Bluegray700"
                          >
                            Your class attendence has gone up 23% in the last
                            month.{" "}
                          </Text>
                        </div>
                        <Button
                          className="bg-deep_purple-600 cursor-pointer flex items-center justify-center mb-[19px] min-w-[186px] md:mt-0 mt-[5px] px-[26px] py-1.5 rounded-[14px]"
                          leftIcon={
                            <Img
                              className="h-6 mt-0.5 mb-[7px] mr-4"
                              src="images/img_download_1.svg"
                              alt="download 1"
                            />
                          }
                        >
                          <div className="font-bold sm:px-5 text-left text-lg text-white-A700">
                            Save Report
                          </div>
                        </Button>
                      </div>
                      <div className="h-[127px] mt-[21px] relative w-[97%] md:w-full">
                        <Img
                          className="absolute bottom-[0] h-[106px] inset-x-[0] mx-auto rounded-[19px]"
                          src="images/img_vector7.svg"
                          alt="vectorSeven"
                        />
                        <div className="absolute flex flex-row gap-[13px] items-end justify-center left-[32%] top-[0] w-[27%]">
                          <div className="bg-deep_purple-600 border-[6px] border-gray-900_01 border-solid h-[31px] mt-[30px] rounded-[15px] w-[31px]"></div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[61px] items-end justify-start p-1.5 w-[74%]"
                            style={{
                              backgroundImage: "url('images/img_group139.svg')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-row font-cairo items-center justify-evenly ml-0.5 md:ml-[0] w-[98%] md:w-full">
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtCairoBold16"
                                  >
                                    106
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtCairoSemiBold16"
                                  >
                                    Students
                                  </Text>
                                </div>
                                <Text
                                  className="text-white-A700 text-xs"
                                  size="txtOpenSans12"
                                >
                                  Oct 18th, 2022
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-poppins gap-9 items-center justify-between mt-[23px] w-full">
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Sunday
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Monday
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Tuesday
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Wednesday
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Thursday
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Friday
                        </Text>
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Saturday
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[37px] items-center justify-start w-[24%] md:w-full">
                    <div className="bg-gray-900_01 flex flex-col items-center justify-end py-[26px] rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start mt-1 w-full">
                        <div className="flex flex-row gap-[11px] items-start justify-start w-[83%] md:w-full">
                          <div className="flex flex-col gap-[7px] items-start justify-start">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Extra Attention
                            </Text>
                            <Text
                              className="text-base text-blue_gray-700"
                              size="txtOpenSans16Bluegray700"
                            >
                              <span className="text-blue_gray-700 font-opensans text-left font-bold">
                                26
                              </span>
                              <span className="text-blue_gray-700 font-opensans text-left font-normal">
                                {" "}
                              </span>
                              <span className="text-blue_gray-700 font-opensans text-left font-normal">
                                Students Underpeforming
                              </span>
                            </Text>
                          </div>
                          <div className="bg-deep_purple-600 flex flex-col items-center justify-start mb-1.5 mt-5 p-[17px] rounded-[14px] shadow-bs3 w-[19%]">
                            <Img
                              className="h-3 w-3"
                              src="images/img_minimize.svg"
                              alt="minimize"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                          <List
                            className="flex flex-col gap-px items-center w-full"
                            orientation="vertical"
                          >
                            <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3.5 rounded-[14px] w-full">
                              <div className="bg-gray-400 h-[50px] rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Angela Moss
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-sm"
                                  size="txtOpenSans14"
                                >
                                  Yellow Belt
                                </Text>
                              </div>
                              <div className="flex flex-col h-6 items-center justify-start ml-[90px] mr-[15px] w-6">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_email21.svg"
                                  alt="emailTwentyOne"
                                />
                              </div>
                            </div>
                            <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3.5 rounded-[14px] w-full">
                              <div className="bg-gray-400 h-[50px] rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Andy Law
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-sm"
                                  size="txtOpenSans14"
                                >
                                  Green Belt
                                </Text>
                              </div>
                              <div className="flex flex-col h-6 items-center justify-start ml-[114px] mr-[15px] w-6">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_email21_deep_purple_600.svg"
                                  alt="emailTwentyOne"
                                />
                              </div>
                            </div>
                            <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3.5 rounded-[14px] w-full">
                              <div className="bg-gray-400 h-[50px] rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Benny Kenn
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-sm"
                                  size="txtOpenSans14"
                                >
                                  White Belt
                                </Text>
                              </div>
                              <div className="flex flex-col h-6 items-center justify-start ml-[97px] mr-[15px] w-6">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_email21.svg"
                                  alt="emailTwentyOne"
                                />
                              </div>
                            </div>
                            <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3.5 rounded-[14px] w-full">
                              <div className="bg-gray-400 h-[50px] rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-start justify-start ml-4 mt-0.5">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Chynthia Lawra
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-sm"
                                  size="txtOpenSans14"
                                >
                                  White Belt
                                </Text>
                              </div>
                              <div className="flex flex-col h-6 items-center justify-start ml-[70px] mr-[15px] w-6">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_email21.svg"
                                  alt="emailTwentyOne"
                                />
                              </div>
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
                                  className="text-blue_gray-700 text-sm"
                                  size="txtOpenSans14"
                                >
                                  Orange Belt
                                </Text>
                              </div>
                              <div className="flex flex-col h-6 items-center justify-start ml-[68px] mr-[17px] w-6">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_email21.svg"
                                  alt="emailTwentyOne"
                                />
                              </div>
                            </div>
                            <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-3.5 rounded-[14px] w-full">
                              <div className="bg-gray-400 h-[50px] rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-start justify-start ml-4">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Evans John
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-sm"
                                  size="txtOpenSans14"
                                >
                                  Yellow Belt
                                </Text>
                              </div>
                              <div className="flex flex-col h-6 items-center justify-start ml-[104px] mr-[15px] w-6">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_email21.svg"
                                  alt="emailTwentyOne"
                                />
                              </div>
                            </div>
                          </List>
                          <Button className="border border-blue_gray-700 border-solid cursor-pointer font-bold min-w-[279px] py-[13px] rounded-[14px] text-center text-lg text-white-A700">
                            View More
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start my-[5px] w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          Most Tag Used
                        </Text>
                        <Text
                          className="mt-[3px] text-base text-blue_gray-700"
                          size="txtOpenSans16Bluegray700"
                        >
                          #’s redirected to website
                        </Text>
                        <List
                          className="flex flex-col font-cairo gap-[25px] items-center mt-[38px] w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <div className="h-[11px] overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-blue_gray_900 rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-gradient-to-r from-[#6418c3] to-[#ab17c3]  rounded-[5px]"
                                  style={{ width: "62%" }}
                                ></div>
                              </div>
                              <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                                <Text
                                  className="text-deep_purple-600 text-lg"
                                  size="txtCairoBold18Deeppurple600"
                                >
                                  #SunnyvaleMartialArts
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-lg text-right"
                                  size="txtCairoSemiBold18"
                                >
                                  452 times
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <div className="h-[11px] overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-blue_gray_900 rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-gradient-to-r from-[#6418c3] to-[#ab17c3]  rounded-[5px]"
                                  style={{ width: "40%" }}
                                ></div>
                              </div>
                              <div className="flex flex-row items-start justify-between w-full">
                                <Text
                                  className="text-deep_purple-600 text-lg"
                                  size="txtCairoBold18Deeppurple600"
                                >
                                  #BayAreaSelfDefense
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-lg text-right"
                                  size="txtCairoSemiBold18"
                                >
                                  97 times
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <div className="h-[11px] overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-blue_gray_900 rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-gradient-to-r from-[#6418c3] to-[#ab17c3]  rounded-[5px]"
                                  style={{ width: "62%" }}
                                ></div>
                              </div>
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-deep_purple-600 text-lg"
                                  size="txtCairoBold18Deeppurple600"
                                >
                                  #ChildrensMartialArts
                                </Text>
                                <Text
                                  className="text-blue_gray-700 text-lg text-right"
                                  size="txtCairoSemiBold18"
                                >
                                  61 times
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                        <Text
                          className="mt-[29px] text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Others tag
                        </Text>
                        <div className="flex flex-row font-cairo gap-2.5 items-center justify-start mt-2 w-[79%] md:w-full">
                          <Button className="bg-blue_gray-900 cursor-pointer font-semibold leading-[normal] min-w-[119px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                            #KidsKarate
                          </Button>
                          <Button className="bg-blue_gray-900 cursor-pointer font-semibold leading-[normal] min-w-[92px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                            #TKDSJ
                          </Button>
                        </div>
                        <div className="flex flex-row font-cairo gap-2.5 items-center justify-between mt-3 w-full">
                          <Button className="bg-blue_gray-900 cursor-pointer font-semibold leading-[normal] min-w-[201px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                            #SelfDefenseClasses
                          </Button>
                          <Button className="bg-blue_gray-900 cursor-pointer font-semibold leading-[normal] min-w-[69px] py-1.5 rounded-[14px] text-center text-lg text-white-A700">
                            #MMA
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-3/4 md:w-full">
                    <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[15px] rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col justify-start my-[11px] w-[99%] md:w-full">
                        <div className="md:h-[169px] h-[182px] mr-[21px] relative w-[98%] md:w-full">
                          <div className="md:h-[169px] h-[182px] m-auto w-full">
                            <div className="md:h-[169px] h-[182px] m-auto w-full">
                              <div className="absolute flex flex-col gap-[34px] h-max inset-y-[0] justify-start my-auto right-[0] w-[58%]">
                                <Img
                                  className="h-6 md:ml-[0] ml-[561px] w-6"
                                  src="images/img_verticon_gray_500_01.svg"
                                  alt="verticon_Five"
                                />
                                <div className="bg-gray-400_67 h-[111px] mr-[488px] w-[17%]"></div>
                              </div>
                              <SelectBox
                                className="absolute font-bold inset-x-[0] leading-[normal] mx-auto text-2xl md:text-[22px] text-left text-white-A700 sm:text-xl top-[0] w-[98%] sm:w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-2 mr-[0] w-[15px] right-[0] absolute"
                                    src="images/img_arrow.svg"
                                    alt="arrow"
                                  />
                                }
                                isMulti={false}
                                name="group383"
                                options={studentPerformanceOptionsList}
                                isSearchable={false}
                                placeholder="Student Performance"
                              />
                              <div className="absolute bottom-[0] flex flex-col font-opensans gap-[11px] items-start justify-start left-[0]">
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  90
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  60
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  30
                                </Text>
                                <Text
                                  className="ml-2 md:ml-[0] text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  0
                                </Text>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[1%] h-[113px] right-[0] w-[96%] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group136.svg')",
                                }}
                              >
                                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Line className="bg-blue_gray-700_01 h-[113px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[111px] w-px" />
                                    <Line className="bg-blue_gray-700_01 h-[113px] w-px" />
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[75px] inset-x-[0] items-start justify-start mx-auto p-7 sm:px-5 top-[7%] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group137.svg')",
                                  }}
                                >
                                  <div className="bg-pink-400 h-3.5 mb-1 md:ml-[0] ml-[414px] outline outline-[4px] outline-white-A700 rounded-lg shadow-bs5 w-[2%]"></div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-row font-poppins items-start justify-between right-[16%] top-[6%] w-[51%]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[78px] items-center justify-start mt-[15px] p-[7px] w-[37%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_tooltiplargelight.svg')",
                                }}
                              >
                                <div className="flex flex-col items-start justify-start mb-4">
                                  <Text
                                    className="text-lg text-white-A700 w-full"
                                    size="txtCairoBold18"
                                  >
                                    58% Avg. Accuracy
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-500_01"
                                    size="txtPoppinsRegular10"
                                  >
                                    <span className="text-green-500 font-poppins text-left font-normal">
                                      +100%{" "}
                                    </span>
                                    <span className="text-gray-500_01 font-poppins text-left font-normal">
                                      from
                                    </span>
                                    <span className="text-gray-500_01 font-poppins text-left font-normal">
                                      {" "}
                                      last Month
                                    </span>
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-2 h-[18px] md:h-auto items-center justify-start w-[101px]">
                                <div className="bg-pink-400 h-3 rounded w-3"></div>
                                <Text
                                  className="text-white-A700 text-xs w-auto"
                                  size="txtPoppinsRegular12"
                                >
                                  All Classes
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-row font-poppins gap-2 h-[18px] md:h-auto items-center justify-center right-[5%] top-[7%] w-[119px]">
                            <div className="bg-deep_purple-600 h-3 rounded w-3"></div>
                            <Text
                              className="text-white-A700 text-xs w-auto"
                              size="txtPoppinsRegular12"
                            >
                              Beginners Class
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row font-opensans md:gap-10 gap-[69px] items-start justify-end md:ml-[0] ml-[47px] mt-[3px] w-[96%] md:w-full">
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSans14Gray50001"
                          >
                            Jan
                          </Text>
                          <div className="flex flex-row items-start justify-between w-[91%] md:w-full">
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Feb
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Mar
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Apr
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              May
                            </Text>
                            <Text
                              className="text-sm text-white-A700"
                              size="txtOpenSans14WhiteA700"
                            >
                              Jun
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Jul
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Aug
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Sep
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Oct
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Nov
                            </Text>
                            <Text
                              className="text-gray-500_01 text-sm"
                              size="txtOpenSans14Gray50001"
                            >
                              Dec
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-start justify-end mt-[25px] p-[18px] rounded-[14px] shadow-bs4 w-full">
                      <div className="md:h-[221px] sm:h-[259px] h-[260px] md:mt-0 mt-[18px] relative w-[29%] md:w-full">
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[73%]">
                          <div className="flex flex-col md:gap-10 gap-[78px] justify-start w-full">
                            <Text
                              className="mr-[37px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[83%] sm:w-full"
                              size="txtCairoBold24"
                            >
                              Progress
                            </Text>
                            <div className="bg-deep_purple-600 border-8 border-gray-900_01 border-solid flex flex-col h-[130px] items-center justify-start md:ml-[0] ml-[90px] p-[29px] sm:px-5 rounded-[50%] shadow-bs3 w-[130px]">
                              <Img
                                className="h-[71px] w-[71px]"
                                src="images/img_pointer.svg"
                                alt="pointer"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-pink-400 flex flex-col inset-x-[0] items-start justify-start mx-auto rounded-tl-[90px] rounded-tr-[90px] top-[17%] w-[99%]">
                          <Img
                            className="h-[150px]"
                            src="images/img_blue.svg"
                            alt="blue"
                          />
                        </div>
                      </div>
                      <div className="md:h-[159px] h-[206px] md:ml-[0] ml-[169px] md:mt-0 mt-3.5 relative w-[43%] md:w-full">
                        <div className="absolute bottom-[0] flex font-opensans h-40 md:h-[159px] justify-end left-[0] w-2/5">
                          <div className="flex flex-row gap-6 h-full items-start justify-start mb-12 mt-auto w-[72%]">
                            <div className="bg-deep_purple-600 h-[25px] mt-0.5 rounded-[12px] w-[25px]"></div>
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtOpenSans16Gray50001"
                            >
                              Completed
                            </Text>
                          </div>
                          <div className="absolute flex flex-col font-cairo h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col gap-[47px] items-start justify-start w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                size="txtCairoBold32"
                              >
                                8,832
                              </Text>
                              <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtCairoBold24"
                                >
                                  5,741
                                </Text>
                                <Text
                                  className="text-deep_purple-600 text-sm"
                                  size="txtOpenSans14Deeppurple600"
                                >
                                  65%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="absolute left-[0] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 top-[0]"
                          size="txtCairoBold36"
                        >
                          Courses Assigned
                        </Text>
                        <div className="absolute bottom-[0] flex flex-col font-opensans items-start justify-start right-[0] w-2/5">
                          <div className="flex flex-row gap-6 items-start justify-start w-[63%] md:w-full">
                            <div className="bg-pink-400 h-[25px] mt-0.5 rounded-[12px] w-[25px]"></div>
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtOpenSans16Gray50001"
                            >
                              Ongoing
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              3,091
                            </Text>
                            <Text
                              className="text-pink-400 text-sm"
                              size="txtOpenSans14Pink400"
                            >
                              35%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-6 md:ml-[0] ml-[42px] mr-[19px] md:mt-0 mt-1 w-6"
                        src="images/img_verticon_gray_500_01.svg"
                        alt="verticon_Six"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between mt-[29px] w-full">
                      <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 w-[32%] md:w-full">
                        <Text
                          className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          Marketing Efforts
                        </Text>
                        <Text
                          className="mt-[5px] text-base text-blue_gray-700"
                          size="txtOpenSans16Bluegray700"
                        >
                          Where are prospects finding you?
                        </Text>
                        <div className="font-cairo md:h-60 h-[212px] md:ml-[0] ml-[43px] mt-7 relative w-[82%]">
                          <div className="h-[212px] m-auto w-full">
                            <div className="h-[212px] m-auto w-full">
                              <div className="h-[212px] m-auto w-full">
                                <div className="absolute h-[212px] inset-y-[0] left-[0] my-auto w-[212px]">
                                  <div className="border-[5px] border-gray-100 border-solid h-[212px] m-auto rounded-[50%] w-[212px]"></div>
                                  <Img
                                    className="absolute h-[125px] right-[0] top-[0]"
                                    src="images/img_blue.svg"
                                    alt="ring"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col h-[89px] items-start justify-start p-[19px] right-[0] w-[90px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group138.svg')",
                                  }}
                                >
                                  <Text
                                    className="mb-[15px] md:ml-[0] ml-[7px] text-lg text-white-A700"
                                    size="txtCairoBold18"
                                  >
                                    11%
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[0] h-[58px] left-[15%]"
                                src="images/img_ring.svg"
                                alt="ring_One"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[12%] h-[95px] left-[0]"
                              src="images/img_eye.svg"
                              alt="eye"
                            />
                          </div>
                          <Img
                            className="absolute h-24 left-[0] top-[0]"
                            src="images/img_ring_red_a200.svg"
                            alt="ring_Two"
                          />
                        </div>
                        <Text
                          className="ml-0.5 md:ml-[0] mt-9 text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          Legend
                        </Text>
                        <div className="flex flex-row font-cairo items-center justify-start mt-[11px] w-full">
                          <div className="bg-deep_purple-600 h-5 my-3 rounded-md w-5"></div>
                          <Text
                            className="ml-5 text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            School Sign
                          </Text>
                          <Text
                            className="ml-[111px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            763
                          </Text>
                        </div>
                        <div className="flex flex-row font-cairo items-center justify-start mt-[3px] w-full">
                          <div className="bg-light_blue-300 h-5 my-3 rounded-md w-5"></div>
                          <Text
                            className="ml-5 text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Google Maps
                          </Text>
                          <Text
                            className="ml-[99px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            321
                          </Text>
                        </div>
                        <div className="flex flex-row font-cairo items-center justify-start mt-1 w-full">
                          <div className="bg-pink-400 h-5 my-3 rounded-md w-5"></div>
                          <Text
                            className="ml-5 text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Word of Mouth
                          </Text>
                          <Text
                            className="ml-[97px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            69
                          </Text>
                        </div>
                        <div className="flex flex-row font-cairo items-center justify-start mt-1 w-full">
                          <div className="bg-orange-400 h-5 my-3 rounded-md w-5"></div>
                          <Text
                            className="ml-5 text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Yelp!
                          </Text>
                          <Text
                            className="ml-[161px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            154
                          </Text>
                        </div>
                        <div className="flex flex-row font-cairo items-center justify-start my-[3px] w-full">
                          <div className="bg-red-A200 h-5 my-3 rounded-md w-5"></div>
                          <Text
                            className="ml-5 text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Other (Combined)
                          </Text>
                          <Text
                            className="ml-[65px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            696
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start p-[34px] sm:px-5 rounded-[14px] shadow-bs3 w-[67%] md:w-full">
                        <div className="flex flex-col gap-[19px] justify-start mb-[19px] w-[97%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                            <div className="flex md:flex-1 flex-row items-start justify-between w-[68%] md:w-full">
                              <Text
                                className="mb-3 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                                size="txtCairoBold32"
                              >
                                Class Size & Capacity
                              </Text>
                              <div className="flex flex-row font-opensans items-start justify-evenly mt-[27px]">
                                <div className="bg-green-500 h-5 rounded-md w-5"></div>
                                <Text
                                  className="text-right text-sm text-white-A700"
                                  size="txtOpenSans14WhiteA700"
                                >
                                  1-10
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-row font-opensans items-start justify-center md:ml-[0] ml-[15px] md:mt-0 mt-[27px] w-[10%] md:w-full">
                              <div className="bg-orange-400_01 h-5 rounded-md w-5"></div>
                              <Text
                                className="ml-0.5 text-right text-sm text-white-A700"
                                size="txtOpenSans14WhiteA700"
                              >
                                11-20
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-row font-opensans items-start justify-center ml-3.5 md:ml-[0] md:mt-0 mt-[27px] w-[8%] md:w-full">
                              <div className="bg-red-A200 h-5 rounded-md w-5"></div>
                              <Text
                                className="ml-1 text-right text-sm text-white-A700"
                                size="txtOpenSans14WhiteA700"
                              >
                                20+
                              </Text>
                            </div>
                            <Img
                              className="h-6 mb-[18px] ml-12 md:ml-[0] md:mt-0 mt-1.5 w-6"
                              src="images/img_verticon_gray_500_01_24x24.svg"
                              alt="verticon_Seven"
                            />
                          </div>
                          <SelectBox
                            className="font-semibold leading-[normal] md:ml-[0] ml-[90px] text-left text-lg text-white-A700 w-[14%] sm:w-full"
                            placeholderClassName="text-white-A700"
                            indicator={
                              <Img
                                className="h-2 mr-[0] w-[15px]"
                                src="images/img_arrow.svg"
                                alt="arrow"
                              />
                            }
                            isMulti={false}
                            name="weekday_Eight"
                            options={weekdayEightOptionsList}
                            isSearchable={false}
                            placeholder="Tuesday"
                          />
                          <div className="flex sm:flex-col flex-row font-opensans gap-[30px] items-center justify-start md:ml-[0] ml-[19px] w-[86%] md:w-full">
                            <div className="flex flex-col gap-[57px] items-end justify-start w-[8%] sm:w-full">
                              <Text
                                className="text-gray-500_01 text-right text-sm"
                                size="txtOpenSans14Gray50001"
                              >
                                12 PM
                              </Text>
                              <div className="flex flex-col gap-[57px] items-center justify-start">
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  4 PM
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  5 PM
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  6 PM
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  7 PM
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  8 PM
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSans14Gray50001"
                                >
                                  9 PM
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-[489px] sm:mt-0 mt-1.5"
                              src="images/img_bar.svg"
                              alt="bar"
                            />
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
        <Sidebar
          className="!sticky !w-[345px] bg-cover bg-no-repeat flex font-opensans h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
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
                padding: "8px",
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
            className="flex flex-col font-cairo items-center justify-start mb-[1464px] mt-4 pt-2 w-full"
          >
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_dashboard1_deep_purple_600.svg"
                  alt="dashboardOne"
                />
              }
              active={window.location.pathname === "/dashboard"}
              href="/dashboard"
            >
              <Text>Dashboard</Text>
              <Line className="bg-deep_purple-600 h-[49px] rounded-[3px] w-1.5" />
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
                  alt="calendarsilhoue_One"
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
        </Sidebar>
      </div>
    </>
  );
};

export default DashboardPage;
