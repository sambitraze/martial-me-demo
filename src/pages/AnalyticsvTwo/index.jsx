import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Switch,
  Text,
} from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const iconOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const zipcodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const iconOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AnalyticsvTwoPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[2086px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col gap-[33px] justify-start w-full">
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
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="md:h-[62px] h-[85px] relative w-[17%] md:w-full">
                    <Text
                      className="absolute left-[0] sm:text-3xl md:text-[32px] text-[34px] text-white-A700 top-[0]"
                      size="txtCairoBold34"
                    >
                      Analytics
                    </Text>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-gray-500_01 text-lg w-max"
                      size="txtOpenSans18Gray50001"
                    >
                      Lorem ipsum dolor sit amet{" "}
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-end mb-2.5 md:ml-[0] ml-[632px] md:mt-0 mt-1.5 p-[5px] rounded-[14px] shadow-bs4 w-[23%] md:w-full">
                    <div className="flex flex-row gap-6 items-center justify-between w-[89%] md:w-full">
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
                            Change Periode
                          </Text>
                          <Img
                            className="h-2 mt-[22px]"
                            src="images/img_arrow_gray_400.svg"
                            alt="arrow_One"
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
                  <Button
                    className="bg-deep_purple-600 cursor-pointer flex items-center justify-center mb-2.5 min-w-[243px] ml-6 md:ml-[0] md:mt-0 mt-1.5 px-[31px] py-[17px] rounded-[14px] shadow-bs4"
                    leftIcon={
                      <Img
                        className="h-7 mt-px mb-[5px] mr-[17px]"
                        src="images/img_piechart_1.svg"
                        alt="pie-chart 1"
                      />
                    }
                  >
                    <div className="font-bold leading-[normal] sm:px-5 text-left text-lg text-white-A700">
                      Download Report
                    </div>
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row gap-[39px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start md:mt-0 mt-1.5 w-[49%] md:w-full">
                    <div className="h-[172px] md:h-[272px] relative w-full">
                      <div className="bg-gray-900_01 h-[172px] my-auto rounded-[14px] shadow-bs4 w-[48%]"></div>
                      <div className="absolute bg-gray-900_01 sm:h-[100px] h-[172px] md:h-[272px] inset-[0] justify-center m-auto p-[26px] sm:px-5 rounded-[14px] w-full">
                        <Text
                          className="absolute left-[24%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[17%]"
                          size="txtCairoBold24"
                        >
                          Total Balance
                        </Text>
                        <div className="absolute bottom-[16%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[93%]">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Img
                              className="h-[86px] mb-3.5"
                              src="images/img_checkmark_deep_purple_600_86x93.svg"
                              alt="checkmark"
                            />
                            <Text
                              className="md:ml-[0] ml-[51px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                              size="txtCairoBold38"
                            >
                              $21,560.57
                            </Text>
                            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[138px] w-[29%] md:w-full">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Average from last month
                              </Text>
                              <div className="flex flex-row font-opensans gap-[13px] items-start justify-start mt-0.5 w-[97%] md:w-full">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_arrows1.svg"
                                  alt="arrowsOne"
                                />
                                <Text
                                  className="mt-0.5 text-base text-gray-500_01"
                                  size="txtOpenSans16Gray50001"
                                >
                                  <span className="text-green-500 font-opensans text-left font-bold">
                                    +0,5%
                                  </span>
                                  <span className="text-gray-500_01 font-opensans text-left font-normal">
                                    {" "}
                                  </span>
                                  <span className="text-gray-500_01 font-opensans text-left font-normal">
                                    invoices sent
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[38px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-900_01 flex flex-1 flex-col items-start justify-end p-7 sm:px-5 rounded-[14px] w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          Invoice Sent
                        </Text>
                        <div className="flex flex-row gap-6 items-center justify-start w-[68%] md:w-full">
                          <Text
                            className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                            size="txtCairoBold38"
                          >
                            421
                          </Text>
                          <Button
                            className="bg-gray-900_05 cursor-pointer flex items-center justify-center min-w-[109px] my-4 pl-3 pr-[15px] py-[7px] rounded-[14px]"
                            leftIcon={
                              <Img
                                className="h-6 mb-px mr-[11px]"
                                src="images/img_arrows1.svg"
                                alt="arrows 1"
                              />
                            }
                          >
                            <div className="font-bold font-opensans leading-[normal] text-base text-green-500 text-left">
                              +0,5%
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 h-[172px] md:h-[72px] p-7 sm:px-5 relative rounded-[14px] w-full">
                        <Text
                          className="absolute left-[16%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[19%]"
                          size="txtCairoBold24"
                        >
                          Invoice Completed
                        </Text>
                        <div className="absolute bottom-[16%] flex flex-row gap-5 items-center justify-start left-[16%] w-[57%]">
                          <Text
                            className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                            size="txtCairoBold38"
                          >
                            874
                          </Text>
                          <Button
                            className="bg-gray-900_08 cursor-pointer flex items-center justify-center min-w-[109px] my-4 pl-3 pr-[19px] py-[7px] rounded-[14px]"
                            leftIcon={
                              <Img
                                className="h-6 mb-px mr-[11px]"
                                src="images/img_arrows_1_red_a200.svg"
                                alt="arrows 1"
                              />
                            }
                          >
                            <div className="font-bold font-opensans leading-[normal] text-base text-left text-red-A200">
                              -6,4%
                            </div>
                          </Button>
                        </div>
                      </div>
                    </List>
                    <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-full">
                      <div className="bg-gray-900_01 flex md:flex-1 flex-row items-center justify-start p-7 sm:px-5 rounded-[14px] w-[48%] md:w-full">
                        <div className="flex flex-col relative w-[46%]">
                          <Text
                            className="mx-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Total Clients
                          </Text>
                          <div className="flex flex-col items-center justify-start mt-[-3.7px] w-[87%] z-[1]">
                            <div className="flex flex-row gap-[21px] items-center justify-between w-full">
                              <Text
                                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                                size="txtCairoBold38"
                              >
                                68
                              </Text>
                              <div className="flex flex-col font-opensans gap-[9px] items-start justify-start">
                                <Img
                                  className="h-[11px] rounded-[1px]"
                                  src="images/img_arrow_green_500.svg"
                                  alt="arrow_Two"
                                />
                                <Text
                                  className="text-base text-green-500"
                                  size="txtOpenSansBold16Green500"
                                >
                                  +0,5%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue_gray-900 flex flex-col items-center justify-end mb-0.5 ml-[63px] mt-3 pt-[58px] rotate-[180deg] rounded-[5px] w-[4%]">
                          <div className="bg-deep_purple-600 h-[41px] rounded-[5px] w-full"></div>
                        </div>
                        <Img
                          className="h-[111px] ml-4"
                          src="images/img_bar14.svg"
                          alt="barFourteen"
                        />
                        <Img
                          className="h-[111px] ml-4"
                          src="images/img_bar14.svg"
                          alt="barThirteen"
                        />
                        <div className="bg-blue_gray-900 flex flex-col items-center justify-end ml-4 pt-[60px] rotate-[180deg] rounded-[5px] w-[4%]">
                          <div className="bg-deep_purple-600 h-[49px] rounded-[5px] w-full"></div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 h-[172px] md:h-[72px] p-7 sm:px-5 relative rounded-[14px] w-[48%] md:w-full">
                        <Text
                          className="absolute left-[16%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[19%]"
                          size="txtCairoBold24"
                        >
                          Invoice Remaining
                        </Text>
                        <div className="absolute bottom-[16%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[83%]">
                          <div className="flex flex-row gap-8 items-start justify-between w-full">
                            <div className="flex flex-col font-opensans gap-2.5 items-start justify-start mt-5">
                              <div className="h-2.5 overflow-hidden relative rotate-[-90deg] w-full">
                                <div className="w-full h-full absolute bg-blue_gray_900 rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-deep_purple_600  rounded-[5px]"
                                  style={{ width: "44%" }}
                                ></div>
                              </div>
                              <Text
                                className="text-base text-gray-500_01"
                                size="txtOpenSans16Gray50001"
                              >
                                <span className="text-red-A200 font-opensans text-left font-bold">
                                  -0,8%
                                </span>
                                <span className="text-gray-500_01 font-opensans text-left font-normal">
                                  {" "}
                                </span>
                                <span className="text-gray-500_01 font-opensans text-left font-normal">
                                  from last month
                                </span>
                              </Text>
                            </div>
                            <Text
                              className="md:text-4xl sm:text-[34px] text-[38px] text-right text-white-A700"
                              size="txtCairoBold38"
                            >
                              24
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-10 items-center justify-start mb-[13px] mt-[7px] w-[99%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Pie Chart
                          </Text>
                          <div className="flex md:flex-1 flex-row gap-3 items-center justify-center md:ml-[0] ml-[261px] md:mt-0 mt-0.5 w-[12%] md:w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_iccheck_gray_500_01.svg"
                              alt="iccheck"
                            />
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Chart
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-3 items-center justify-center md:ml-[0] ml-[27px] md:mt-0 mt-0.5 w-[19%] md:w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_iccheck.svg"
                              alt="iccheck_One"
                            />
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Show Value
                            </Text>
                          </div>
                          <Button className="bg-gray-900_01 border border-gray-900_01 border-solid flex h-[38px] items-center justify-center mb-[7px] md:ml-[0] ml-[41px] p-[7px] rounded-[12px] w-[38px]">
                            <Img
                              className="h-6"
                              src="images/img_verticon_gray_500_01.svg"
                              alt="verticon"
                            />
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[93%] md:w-full">
                          <div className="flex flex-col gap-[25px] items-center justify-start w-1/4 sm:w-full">
                            <div className="bg-blue_gray-900 flex flex-col font-opensans h-[153px] items-center justify-start rounded-[76px] w-[153px]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[152px] items-center justify-start p-[35px] sm:px-5 w-[153px] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group126.svg')",
                                }}
                              >
                                <Text
                                  className="bg-gray-900_01 h-[82px] justify-center pb-[25px] sm:pl-5 pl-[23px] pr-[17px] pt-7 rounded-[50%] text-shadow-ts text-white-A700 text-xl w-[82px]"
                                  size="txtOpenSansRomanSemiBold20"
                                >
                                  81%
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-center text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Invoices Made
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[25px] items-center justify-start w-1/4 sm:w-full">
                            <div className="bg-blue_gray-900 font-opensans h-[153px] md:h-[82px] relative rounded-[76px] w-[153px]">
                              <Img
                                className="absolute h-[73px] right-[0] top-[0]"
                                src="images/img_eye_pink_400.svg"
                                alt="eye"
                              />
                              <Text
                                className="absolute bg-gray-900_01 h-max inset-[0] justify-center m-auto pb-[25px] sm:pl-5 pl-[23px] pr-[17px] pt-7 rounded-[50%] text-shadow-ts text-white-A700 text-xl w-max"
                                size="txtOpenSansRomanSemiBold20"
                              >
                                22%
                              </Text>
                            </div>
                            <Text
                              className="text-center text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Clients Growth
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[27px] items-center justify-start w-1/4 sm:w-full">
                            <div className="bg-blue_gray-900 flex flex-col font-opensans h-[153px] items-end justify-start sm:pl-5 pl-[23px] rounded-[76px] w-[153px]">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[152px] items-start justify-start p-3"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group127.svg')",
                                }}
                              >
                                <Text
                                  className="bg-gray-900_01 h-[82px] justify-center my-[23px] pb-[25px] sm:pl-5 pl-[23px] pr-[17px] pt-7 rounded-[50%] text-shadow-ts text-white-A700 text-xl w-[82px]"
                                  size="txtOpenSansRomanSemiBold20"
                                >
                                  62%
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-center text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Projects Done
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                            <Line className="bg-blue_gray-700 h-0.5 rounded-[1px] w-full" />
                            <div className="flex md:flex-col flex-row gap-[51px] items-start justify-start w-[96%] md:w-full">
                              <div className="flex flex-col font-opensans gap-2 items-start justify-start mb-[7px]">
                                <Text
                                  className="text-white-A700 text-xl"
                                  size="txtOpenSansBold20"
                                >
                                  Best tips increase management
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-sm w-full"
                                  size="txtOpenSans14Gray50001"
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna
                                </Text>
                              </div>
                              <Button className="bg-gray-900_05 cursor-pointer font-bold font-cairo leading-[normal] min-w-[161px] md:mt-0 mt-[25px] py-[11px] rounded-[14px] text-center text-green-500 text-lg">
                                Learn More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 md:h-[501px] h-[591px] sm:h-[727px] p-[30px] sm:px-5 relative rounded-[14px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col items-center justify-start left-[5%] top-[5%] w-[26%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Projects Calendar
                          </Text>
                          <Text
                            className="mt-[3px] text-base text-blue_gray-700"
                            size="txtOpenSans16Bluegray700"
                          >
                            <span className="text-blue_gray-700 font-opensans text-left font-normal">
                              You have{" "}
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-bold">
                              245
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-normal">
                              {" "}
                              clients
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[89%]">
                        <div className="flex flex-col gap-10 items-end justify-start w-full">
                          <div className="flex flex-row gap-[9px] items-center justify-end w-[45%] md:w-full">
                            <SelectBox
                              className="bg-blue_gray-900 font-semibold leading-[normal] sm:pl-5 pl-[29px] pr-[17px] rounded-[12px] text-left text-lg text-white-A700 w-[49%] sm:w-full"
                              placeholderClassName="text-white-A700"
                              indicator={
                                <Img
                                  className="h-2 mr-[0] w-[15px] rounded-[1px]"
                                  src="images/img_arrow_deep_purple_600.svg"
                                  alt="arrow"
                                />
                              }
                              isMulti={false}
                              name="icon"
                              options={iconOptionsList}
                              isSearchable={false}
                              placeholder="October"
                            />
                            <SelectBox
                              className="bg-blue_gray-900 font-semibold leading-[normal] sm:pl-5 pl-[29px] pr-[17px] rounded-[12px] text-left text-lg text-white-A700 w-[49%] sm:w-full"
                              placeholderClassName="text-white-A700"
                              indicator={
                                <Img
                                  className="h-2 mr-[0] w-[15px] rounded-[1px]"
                                  src="images/img_arrow_deep_purple_600.svg"
                                  alt="arrow"
                                />
                              }
                              isMulti={false}
                              name="zipcode"
                              options={zipcodeOptionsList}
                              isSearchable={false}
                              placeholder="2020"
                            />
                          </div>
                          <div className="font-poppins h-[417px] md:h-[423px] sm:h-[649px] relative w-full">
                            <div className="md:h-[392px] h-[417px] sm:h-[649px] m-auto w-full">
                              <div className="absolute md:h-[392px] h-[405px] inset-[0] justify-center m-auto w-full">
                                <Img
                                  className="absolute h-[46px] inset-x-[0] mx-auto top-[0]"
                                  src="images/img_group307.svg"
                                  alt="guide"
                                />
                                <Img
                                  className="absolute h-[392px] inset-[0] justify-center m-auto"
                                  src="images/img_lines_blue_gray_900.svg"
                                  alt="lines"
                                />
                              </div>
                              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[92%]">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-end justify-start w-full">
                                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end w-[96%] md:w-full">
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtPoppinsMedium20"
                                      >
                                        1
                                      </Text>
                                      <Text
                                        className="sm:ml-[0] ml-[82px] text-center text-white-A700 text-xl"
                                        size="txtPoppinsMedium20"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="sm:ml-[0] ml-[79px] text-center text-white-A700 text-xl"
                                        size="txtPoppinsMedium20"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="sm:ml-[0] ml-[78px] text-center text-white-A700 text-xl"
                                        size="txtPoppinsMedium20"
                                      >
                                        4
                                      </Text>
                                      <Text
                                        className="sm:ml-[0] ml-[78px] text-center text-white-A700 text-xl"
                                        size="txtPoppinsMedium20"
                                      >
                                        5
                                      </Text>
                                      <Text
                                        className="sm:ml-[0] ml-[78px] text-center text-white-A700 text-xl"
                                        size="txtPoppinsMedium20"
                                      >
                                        6
                                      </Text>
                                      <Text
                                        className="sm:ml-[0] ml-[79px] text-center text-red-A200 text-xl"
                                        size="txtPoppinsMedium20RedA200"
                                      >
                                        7
                                      </Text>
                                    </div>
                                    <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start mt-3 w-[72%] md:w-full">
                                      <div className="flex flex-row items-center justify-between w-full">
                                        <Img
                                          className="h-1.5"
                                          src="images/img_car.svg"
                                          alt="car"
                                        />
                                        <Img
                                          className="h-1.5"
                                          src="images/img_menu_pink_400.svg"
                                          alt="menu"
                                        />
                                      </div>
                                      <div className="flex flex-row items-center justify-between w-[53%] md:w-full">
                                        <Img
                                          className="h-1.5"
                                          src="images/img_ticket_light_blue_300.svg"
                                          alt="ticket"
                                        />
                                        <Img
                                          className="h-1.5"
                                          src="images/img_volume_green_500.svg"
                                          alt="volume"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start mt-[66px] w-full">
                                      <div className="flex flex-row items-center justify-between w-[56%] md:w-full">
                                        <Img
                                          className="h-1.5"
                                          src="images/img_ticket_light_blue_300_6x51.svg"
                                          alt="ticket_One"
                                        />
                                        <Img
                                          className="h-1.5"
                                          src="images/img_ticket_green_500.svg"
                                          alt="ticket_Two"
                                        />
                                      </div>
                                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[87px] mt-[67px] w-[56%] md:w-full">
                                        <Img
                                          className="h-1.5"
                                          src="images/img_car_light_blue_300.svg"
                                          alt="car_One"
                                        />
                                        <Img
                                          className="h-1.5"
                                          src="images/img_ticket_light_blue_300.svg"
                                          alt="ticket_Three"
                                        />
                                      </div>
                                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[17px] mt-10 w-[98%] md:w-full">
                                        <div className="flex flex-row items-center justify-between w-full">
                                          <Text
                                            className="text-center text-white-A700 text-xl"
                                            size="txtPoppinsMedium20"
                                          >
                                            29
                                          </Text>
                                          <Text
                                            className="text-center text-white-A700 text-xl"
                                            size="txtPoppinsMedium20"
                                          >
                                            30
                                          </Text>
                                          <Text
                                            className="text-center text-white-A700 text-xl"
                                            size="txtPoppinsMedium20"
                                          >
                                            31
                                          </Text>
                                          <Text
                                            className="text-blue_gray-900 text-center text-xl"
                                            size="txtPoppinsMedium20Bluegray900"
                                          >
                                            1
                                          </Text>
                                          <Text
                                            className="text-blue_gray-900 text-center text-xl"
                                            size="txtPoppinsMedium20Bluegray900"
                                          >
                                            2
                                          </Text>
                                          <Text
                                            className="text-blue_gray-900 text-center text-xl"
                                            size="txtPoppinsMedium20Bluegray900"
                                          >
                                            3
                                          </Text>
                                          <Text
                                            className="text-blue_gray-900 text-center text-xl"
                                            size="txtPoppinsMedium20Bluegray900"
                                          >
                                            4
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="bg-pink-400 h-1.5 mt-1.5 rounded-[3px] w-[3%]"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <List
                              className="absolute flex flex-col font-cairo gap-[101px] inset-x-[0] items-center mx-auto top-[3%] w-[90%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-base text-blue_gray-700 text-center"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  Mon
                                </Text>
                                <Text
                                  className="text-base text-blue_gray-700 text-center"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  Tue
                                </Text>
                                <Text
                                  className="text-base text-blue_gray-700 text-center"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  Wed
                                </Text>
                                <Text
                                  className="text-base text-blue_gray-700 text-center"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  Thu
                                </Text>
                                <Text
                                  className="text-base text-blue_gray-700 text-center"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  Fri
                                </Text>
                                <Text
                                  className="text-base text-blue_gray-700 text-center"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  Sat
                                </Text>
                                <Text
                                  className="text-base text-center text-red-A200"
                                  size="txtCairoSemiBold16RedA200"
                                >
                                  Sun
                                </Text>
                              </div>
                              <div className="flex flex-col font-poppins items-center justify-start w-[99%] md:w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Text
                                    className="text-center text-white-A700_aa text-xl"
                                    size="txtPoppinsMedium20WhiteA700aa"
                                  >
                                    8
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700_aa text-xl"
                                    size="txtPoppinsMedium20WhiteA700aa"
                                  >
                                    9
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700_aa text-xl"
                                    size="txtPoppinsMedium20WhiteA700aa"
                                  >
                                    10
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700_aa text-xl"
                                    size="txtPoppinsMedium20WhiteA700aa"
                                  >
                                    11
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700_aa text-xl"
                                    size="txtPoppinsMedium20WhiteA700aa"
                                  >
                                    12
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700_aa text-xl"
                                    size="txtPoppinsMedium20WhiteA700aa"
                                  >
                                    13
                                  </Text>
                                  <Text
                                    className="text-center text-red-A200_aa text-xl"
                                    size="txtPoppinsMedium20RedA200aa"
                                  >
                                    14
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col font-poppins items-center justify-start w-[99%] md:w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    15
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    16
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    17
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    18
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    19
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    20
                                  </Text>
                                  <Text
                                    className="text-center text-red-A200 text-xl"
                                    size="txtPoppinsMedium20RedA200"
                                  >
                                    21
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col font-poppins items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    22
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    23
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    24
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    25
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    26
                                  </Text>
                                  <Text
                                    className="text-center text-white-A700 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    27
                                  </Text>
                                  <Text
                                    className="text-center text-red-A200 text-xl"
                                    size="txtPoppinsMedium20RedA200"
                                  >
                                    28
                                  </Text>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start w-[49%] md:w-full">
                    <div className="bg-gray-900_01 flex flex-col items-center justify-start p-6 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start my-[5px] w-full">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Invoices Statistic
                            </Text>
                            <SelectBox
                              className="bg-gray-900_02 md:flex-1 font-semibold leading-[normal] mb-[7px] md:ml-[0] ml-[300px] sm:pl-5 pl-[25px] pr-[17px] py-0.5 rounded-[12px] text-left text-lg text-white-A700 w-[21%] md:w-full"
                              placeholderClassName="text-white-A700"
                              indicator={
                                <Img
                                  className="h-2 mr-[0] w-[15px] rounded-[1px]"
                                  src="images/img_arrow_deep_purple_600.svg"
                                  alt="arrow"
                                />
                              }
                              isMulti={false}
                              name="icon_One"
                              options={iconOneOptionsList}
                              isSearchable={false}
                              placeholder="Monthly"
                            />
                            <Button className="bg-gray-900_01 border border-gray-900_01 border-solid flex h-[38px] items-center justify-center mb-[7px] ml-2.5 md:ml-[0] p-[7px] rounded-[12px] w-[38px]">
                              <Img
                                className="h-6"
                                src="images/img_verticon_gray_500_01.svg"
                                alt="verticon_One"
                              />
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                            <div className="flex sm:flex-1 flex-col items-center justify-start w-[36%] sm:w-full">
                              <div className="flex flex-row items-start justify-start w-full">
                                <div className="bg-green-500 h-[13px] mb-3.5 mt-2.5 rounded-md w-[13px]"></div>
                                <Text
                                  className="ml-3 mt-1.5 text-base text-white-A700"
                                  size="txtOpenSans16"
                                >
                                  Total Paid
                                </Text>
                                <Text
                                  className="ml-[81px] text-white-A700 text-xl"
                                  size="txtCairoBold20"
                                >
                                  1,567
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-1 flex-row items-start justify-between w-[42%] sm:w-full">
                              <div className="flex flex-row gap-5 items-end justify-between w-[44%]">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtCairoSemiBold16"
                                >
                                  Number
                                </Text>
                                <Switch
                                  onColor="#1e1b3a"
                                  offColor="#1e1b3a"
                                  onHandleColor="#6418c3"
                                  offHandleColor="#a4a4a4"
                                  value={true}
                                  className="my-1"
                                />
                              </div>
                              <div className="flex flex-row gap-4 items-start justify-between w-[43%]">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtCairoSemiBold16"
                                >
                                  Analytics
                                </Text>
                                <Switch
                                  onColor="#1e1b3a"
                                  offColor="#1e1b3a"
                                  onHandleColor="#6418c3"
                                  offHandleColor="#a4a4a4"
                                  value={false}
                                  className="mt-[3px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[3px] w-[35%] md:w-full">
                          <div className="flex flex-row items-start justify-start w-full">
                            <div className="bg-light_blue-300 h-[13px] my-3 rounded-md w-[13px]"></div>
                            <Text
                              className="ml-3 mt-[9px] text-base text-white-A700"
                              size="txtOpenSans16"
                            >
                              Total Unpaid
                            </Text>
                            <Text
                              className="ml-[76px] text-right text-white-A700 text-xl"
                              size="txtCairoBold20"
                            >
                              569
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between mt-[17px] w-full">
                          <div className="flex flex-col items-start justify-start md:mt-0 mt-[49px]">
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              100
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] mt-[23px] text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              80
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] mt-6 text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              60
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] mt-[23px] text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              40
                            </Text>
                            <Text
                              className="ml-1.5 md:ml-[0] mt-[23px] text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              20
                            </Text>
                            <Text
                              className="ml-3.5 md:ml-[0] mt-[26px] text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              0
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                            <div className="sm:h-[1409px] md:h-[317px] h-[327px] relative w-full">
                              <Img
                                className="absolute bottom-[0] h-64 inset-x-[0] mx-auto"
                                src="images/img_group308.svg"
                                alt="lines_One"
                              />
                              <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-[0] items-end justify-between m-auto w-[98%]">
                                <Img
                                  className="h-[285px] md:h-auto sm:mt-0 mt-[31px] object-cover"
                                  src="images/img_bar04.png"
                                  alt="barFour"
                                />
                                <Img
                                  className="h-[143px] md:h-auto sm:mt-0 mt-[173px] object-cover"
                                  src="images/img_bar04.png"
                                  alt="barThree"
                                />
                                <Img
                                  className="h-[252px] md:h-auto sm:mt-0 mt-16 object-cover"
                                  src="images/img_bar06_green_500.png"
                                  alt="barSix"
                                />
                                <div className="flex relative w-[35%] sm:w-full">
                                  <Img
                                    className="h-[317px] my-auto object-cover"
                                    src="images/img_bar04.png"
                                    alt="barTwo"
                                  />
                                  <Img
                                    className="h-[132px] ml-[undefinedpx] mr-[11px] mt-auto object-cover z-[1]"
                                    src="images/img_bar05.png"
                                    alt="barFive"
                                  />
                                  <div className="flex flex-col items-center justify-start ml-[-42px] mt-[89px] w-[85%] z-[1]">
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[84px] items-center justify-start p-2.5 w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_dots_blue_gray_700.svg')",
                                      }}
                                    >
                                      <div className="flex flex-col items-center justify-start mb-[9px]">
                                        <Text
                                          className="text-lg text-white-A700"
                                          size="txtCairoSemiBold18WhiteA700"
                                        >
                                          <span className="text-white-A700 font-cairo text-left font-bold">
                                            56
                                          </span>
                                          <span className="text-white-A700 font-cairo text-left font-semibold">
                                            {" "}
                                          </span>
                                          <span className="text-white-A700 font-cairo text-left font-semibold">
                                            Paid Invoices
                                          </span>
                                        </Text>
                                        <Text
                                          className="text-gray-500_01 text-xs"
                                          size="txtOpenSans12Gray50001"
                                        >
                                          May 21th, 2020
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="h-[252px] md:h-auto sm:mt-0 mt-[65px] object-cover"
                                  src="images/img_bar04_252x9.png"
                                  alt="barFour_One"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-between mt-1 w-[98%] md:w-full">
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                January
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                February
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                March
                              </Text>
                              <Text
                                className="h-[27px] text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                April
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                May
                              </Text>
                              <Text
                                className="h-[27px] text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                June
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-center justify-end py-[19px] rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[33px] items-center justify-start mt-[11px] w-full">
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-[92%] md:w-full">
                          <Text
                            className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Latest Invoice Payment
                          </Text>
                          <Button className="bg-gray-900_01 border border-gray-900_01 border-solid flex h-[38px] items-center justify-center mb-[9px] p-[7px] rounded-[12px] w-[38px]">
                            <Img
                              className="h-6"
                              src="images/img_verticon_gray_500_01.svg"
                              alt="verticon_Two"
                            />
                          </Button>
                        </div>
                        <List
                          className="flex flex-col font-opensans gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <div className="bg-gray-900_01 flex flex-1 flex-col gap-5 items-center justify-end pt-[21px] rounded-[14px] w-full">
                            <div className="md:h-[120px] h-[61px] relative w-[92%] md:w-full">
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[27%] w-1/4">
                                <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                                  <Img
                                    className="h-[25px] w-[25px]"
                                    src="images/img_volume_gray_500_01.svg"
                                    alt="volume"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtOpenSansRomanSemiBold14WhiteA700"
                                    >
                                      Amount
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-white-A700 text-xl"
                                      size="txtCairoBold20"
                                    >
                                      $ 650,036.34
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                                <div className="bg-gradient4  h-[49px] rounded-[14px] w-[49px]"></div>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-deep_purple-600 text-sm"
                                      size="txtOpenSansRomanSemiBold14Deeppurple600"
                                    >
                                      #INV-0001234
                                    </Text>
                                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-1 w-full">
                                      <Text
                                        className="mt-2.5 text-base text-white-A700"
                                        size="txtOpenSansRomanSemiBold16"
                                      >
                                        Jean Graphic Inc.
                                      </Text>
                                      <Text
                                        className="text-gray-500_01 text-right text-sm"
                                        size="txtOpenSans14Gray50001"
                                      >
                                        2m ago
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                          <div className="bg-gray-900_01 flex flex-1 flex-col gap-5 items-center justify-end pt-[21px] rounded-[14px] w-full">
                            <div className="md:h-[122px] h-[61px] relative w-[92%] md:w-full">
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[33%] w-[19%]">
                                <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                                  <Img
                                    className="h-[25px] w-[25px]"
                                    src="images/img_volume_gray_500_01.svg"
                                    alt="volume"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtOpenSansRomanSemiBold14WhiteA700"
                                    >
                                      Amount
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-white-A700 text-xl"
                                      size="txtCairoBold20"
                                    >
                                      $ 245.75
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex md:flex-col flex-row gap-[17px] inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                                <div className="bg-gradient3  h-[49px] rounded-[14px] w-[49px]"></div>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-deep_purple-600 text-sm"
                                      size="txtOpenSansRomanSemiBold14Deeppurple600"
                                    >
                                      #INV-0001234
                                    </Text>
                                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-1 w-full">
                                      <Text
                                        className="mt-2.5 text-base text-white-A700"
                                        size="txtOpenSansRomanSemiBold16"
                                      >
                                        Highspeed Studios
                                      </Text>
                                      <Text
                                        className="text-gray-500_01 text-right text-sm"
                                        size="txtOpenSans14Gray50001"
                                      >
                                        12m ago
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                          <div className="bg-gray-900_01 flex flex-1 flex-col gap-5 items-center justify-end pt-[21px] rounded-[14px] w-full">
                            <div className="md:h-[129px] h-[61px] relative w-[92%] md:w-full">
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[31%] w-[22%]">
                                <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                                  <Img
                                    className="h-[25px] w-[25px]"
                                    src="images/img_volume_gray_500_01.svg"
                                    alt="volume"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtOpenSansRomanSemiBold14WhiteA700"
                                    >
                                      Amount
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-white-A700 text-xl"
                                      size="txtCairoBold20"
                                    >
                                      $ 1,500.00
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex md:flex-col flex-row gap-[17px] inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                                <Button className="bg-indigo-100 flex h-[50px] items-center justify-center mb-1.5 p-[13px] rounded-[14px] w-[50px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_energy1.svg"
                                    alt="energyOne"
                                  />
                                </Button>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-deep_purple-600 text-sm"
                                      size="txtOpenSansRomanSemiBold14Deeppurple600"
                                    >
                                      #INV-0001234
                                    </Text>
                                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-1 w-full">
                                      <Text
                                        className="mt-2.5 text-base text-white-A700"
                                        size="txtOpenSansRomanSemiBold16"
                                      >
                                        Fullspeedo Crew
                                      </Text>
                                      <Text
                                        className="text-gray-500_01 text-right text-sm"
                                        size="txtOpenSans14Gray50001"
                                      >
                                        6h ago
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                          <div className="bg-gray-900_01 flex flex-1 flex-col gap-5 items-center justify-end pt-[21px] rounded-[14px] w-full">
                            <div className="md:h-[129px] h-[61px] relative w-[92%] md:w-full">
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[33%] w-[19%]">
                                <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                                  <Img
                                    className="h-[25px] w-[25px]"
                                    src="images/img_volume_gray_500_01.svg"
                                    alt="volume"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtOpenSansRomanSemiBold14WhiteA700"
                                    >
                                      Amount
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-white-A700 text-xl"
                                      size="txtCairoBold20"
                                    >
                                      $ 845.21
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex md:flex-col flex-row gap-[17px] inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                                <Button className="bg-green-300 flex h-[50px] items-center justify-center mb-1.5 p-2.5 rounded-[14px] w-[50px]">
                                  <Img
                                    src="images/img_arrowright_white_a700_60x60.svg"
                                    alt="arrowright"
                                  />
                                </Button>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-deep_purple-600 text-sm"
                                      size="txtOpenSansRomanSemiBold14Deeppurple600"
                                    >
                                      #INV-0001234
                                    </Text>
                                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-1 w-full">
                                      <Text
                                        className="mt-2.5 text-base text-white-A700"
                                        size="txtOpenSansRomanSemiBold16"
                                      >
                                        Wedeloper Team
                                      </Text>
                                      <Text
                                        className="text-gray-500_01 text-right text-sm"
                                        size="txtOpenSans14Gray50001"
                                      >
                                        18h ago
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                          <div className="bg-gray-900_01 flex flex-1 flex-col gap-5 items-center justify-end pt-[21px] rounded-[14px] w-full">
                            <div className="md:h-[129px] h-[61px] relative w-[92%] md:w-full">
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[35%] w-[17%]">
                                <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                                  <Img
                                    className="h-[25px] w-[25px]"
                                    src="images/img_volume_gray_500_01.svg"
                                    alt="volume"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtOpenSansRomanSemiBold14WhiteA700"
                                    >
                                      Amount
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-white-A700 text-xl"
                                      size="txtCairoBold20"
                                    >
                                      $ 94.55
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex md:flex-col flex-row gap-[17px] inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
                                <Button className="bg-indigo-500 flex h-[50px] items-center justify-center mb-1.5 p-[11px] rounded-[14px] w-[50px]">
                                  <Img src="images/img_hh.svg" alt="hh" />
                                </Button>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-deep_purple-600 text-sm"
                                      size="txtOpenSansRomanSemiBold14Deeppurple600"
                                    >
                                      #INV-0001234
                                    </Text>
                                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-1 w-full">
                                      <Text
                                        className="mt-2.5 text-base text-white-A700"
                                        size="txtOpenSansRomanSemiBold16"
                                      >
                                        Humbly Humble
                                      </Text>
                                      <Text
                                        className="text-gray-500_01 text-right text-sm"
                                        size="txtOpenSans14Gray50001"
                                      >
                                        Yesterday, 07:03 AM
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 sm:h-[211px] h-[318px] md:h-[417px] p-[30px] sm:px-5 relative rounded-[14px] shadow-bs4 w-full">
                      <div className="absolute bottom-[13%] sm:h-[211px] h-[223px] md:h-[417px] inset-x-[0] mx-auto w-[92%] md:w-full">
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[30px] inset-x-[0] items-start justify-between mx-auto w-full">
                          <div className="flex flex-col items-start justify-start md:mt-0 mt-[30px]">
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              60
                            </Text>
                            <Text
                              className="mt-[23px] text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              40
                            </Text>
                            <Text
                              className="mt-[23px] text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              20
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[9px] mt-[26px] text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              0
                            </Text>
                          </div>
                          <div className="h-[199px] md:h-[207px] mb-3 relative w-[93%] md:w-full">
                            <Img
                              className="absolute bottom-[0] h-[166px] inset-x-[0] mx-auto"
                              src="images/img_group151.svg"
                              alt="lines_Two"
                            />
                            <Img
                              className="absolute h-[195px] inset-[0] justify-center m-auto"
                              src="images/img_graph_blue_gray_700.svg"
                              alt="graph"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute h-[190px] right-[0] top-[0]"
                          src="images/img_dots_deep_purple_600.svg"
                          alt="dots"
                        />
                      </div>
                      <Text
                        className="absolute left-[9%] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[9%]"
                        size="txtCairoBold24"
                      >
                        Other Chart
                      </Text>
                      <Button className="absolute bg-gray-900_01 border border-gray-900_01 border-solid flex h-[38px] items-center justify-center p-[7px] right-[9%] rounded-[12px] top-[9%] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_gray_500_01.svg"
                          alt="verticon_Three"
                        />
                      </Button>
                    </div>
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
            className="flex flex-col font-cairo items-center justify-start mt-4 pt-2 w-full"
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
            className="mb-[1047px] md:ml-[0] mt-1.5 mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default AnalyticsvTwoPage;
