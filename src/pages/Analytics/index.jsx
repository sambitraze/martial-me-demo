import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Switch,
  Text,
} from "components";
import C01DashboardNav from "components/C01DashboardNav";

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

const AnalyticsPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[2316px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col gap-[33px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="md:h-[62px] h-[85px] relative w-[17%] md:w-full">
                    <Text
                      className="absolute left-[0] sm:text-3xl md:text-[32px] text-[34px] text-white-A700 top-[0]"
                      size="txtCairoBold34"
                    >
                      Analytics
                    </Text>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-lg text-white-A700 w-max"
                      size="txtOpenSans18"
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
                            Change Period
                          </Text>
                          <Img
                            className="h-2 mt-[22px]"
                            src="images/img_arrow.svg"
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
                  <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start w-[49%] md:w-full">
                    <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                      <div className="bg-gray-900_01 flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                        <div className="flex flex-col items-start justify-start mt-1.5 w-[99%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Text
                              className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Project Statistics
                            </Text>
                            <SelectBox
                              className="bg-gray-900_02 md:flex-1 font-semibold leading-[normal] mb-[9px] md:ml-[0] ml-[326px] px-[18px] py-0.5 rounded-[12px] text-left text-lg text-white-A700 w-[17%] md:w-full"
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
                              placeholder="Daily"
                            />
                            <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[9px] ml-2.5 md:ml-[0] p-[7px] rounded-[12px] w-[38px]">
                              <Img
                                className="h-6"
                                src="images/img_verticon_gray_500_01.svg"
                                alt="verticon"
                              />
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[17px] w-[98%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-[29%] sm:w-full">
                              <div className="flex flex-row gap-[23px] items-end justify-between w-full">
                                <div className="bg-blue_gray-900 flex flex-col h-14 items-end justify-start mt-2.5 pl-2 rounded-[50%] w-14">
                                  <Img
                                    className="h-14"
                                    src="images/img_refresh.svg"
                                    alt="refresh"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                    size="txtCairoBold24"
                                  >
                                    246
                                  </Text>
                                  <Text
                                    className="text-base text-blue_gray-700"
                                    size="txtOpenSans16Bluegray700"
                                  >
                                    Total Projects
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[39%] sm:w-full">
                              <div className="flex flex-col items-center justify-start w-[39%]">
                                <div className="flex flex-col justify-start w-full">
                                  <div className="flex flex-row font-cairo gap-3 items-center justify-start w-[69%] md:w-full">
                                    <div className="bg-pink-400 h-[13px] my-[15px] rounded-md w-[13px]"></div>
                                    <Text
                                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                      size="txtCairoBold24"
                                    >
                                      167
                                    </Text>
                                  </div>
                                  <Text
                                    className="md:ml-[0] ml-[25px] text-base text-blue_gray-700"
                                    size="txtOpenSans16Bluegray700"
                                  >
                                    On Going
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[42%]">
                                <div className="flex flex-col justify-start w-full">
                                  <div className="flex flex-row font-cairo gap-3 items-center justify-start w-1/2 md:w-full">
                                    <div className="bg-light_blue-300 h-[13px] my-[15px] rounded-md w-[13px]"></div>
                                    <Text
                                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                      size="txtCairoBold24"
                                    >
                                      28
                                    </Text>
                                  </div>
                                  <Text
                                    className="md:ml-[0] ml-[25px] text-base text-blue_gray-700"
                                    size="txtOpenSans16Bluegray700"
                                  >
                                    Unfinished
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between mt-[29px] w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoSemiBold14Bluegray700"
                              >
                                100
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[5px] mt-[22px] text-blue_gray-700 text-sm"
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
                                className="md:ml-[0] ml-[5px] mt-6 text-blue_gray-700 text-sm"
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
                            <div
                              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-64 items-center justify-end pt-1 px-1 w-[92%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group308.svg')",
                              }}
                            >
                              <div className="flex sm:flex-col flex-row sm:gap-[57px] items-center justify-between mt-5 w-[97%] md:w-full">
                                <div className="flex md:h-[206px] h-[232px] justify-end relative w-[38%] sm:w-full">
                                  <Img
                                    className="h-[103px] mt-auto mx-auto object-cover"
                                    src="images/img_bar03.png"
                                    alt="barThree"
                                  />
                                  <div className="absolute md:h-[206px] h-[232px] inset-[0] justify-center m-auto w-full">
                                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
                                      <div className="flex flex-row items-end justify-between w-full">
                                        <Img
                                          className="h-[206px] md:h-auto object-cover"
                                          src="images/img_bar03.png"
                                          alt="barFour"
                                        />
                                        <Img
                                          className="h-[183px] md:h-auto mt-[23px] object-cover"
                                          src="images/img_bar06.png"
                                          alt="barSix"
                                        />
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-col gap-[11px] inset-x-[0] justify-start mx-auto top-[0] w-[98%]">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[84px] items-center justify-start md:ml-[0] ml-[58px] p-3 w-[66%] md:w-full"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_dots_blue_gray_700.svg')",
                                        }}
                                      >
                                        <div className="flex flex-col items-center justify-start mb-2">
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
                                            <span className="text-white-A700 font-cairo text-left font-normal">
                                              Projects
                                            </span>
                                          </Text>
                                          <Text
                                            className="text-gray-500_01 text-xs"
                                            size="txtOpenSans12Gray50001"
                                          >
                                            Oct 24th, 2020
                                          </Text>
                                        </div>
                                      </div>
                                      <Line className="bg-white-A700 h-0.5 rotate-[-90deg] w-full" />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-between w-[53%] sm:w-full">
                                  <Img
                                    className="h-[230px] md:h-auto object-cover"
                                    src="images/img_bar03.png"
                                    alt="barTwo"
                                  />
                                  <Img
                                    className="h-24 md:h-auto mt-[133px] object-cover"
                                    src="images/img_bar03.png"
                                    alt="barFive"
                                  />
                                  <Img
                                    className="h-[183px] md:h-auto mt-[47px] object-cover"
                                    src="images/img_bar03.png"
                                    alt="barFour_One"
                                  />
                                  <Img
                                    className="h-[202px] md:h-auto mt-7 object-cover"
                                    src="images/img_bar03.png"
                                    alt="barThree_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[47px] w-[93%] md:w-full">
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtCairoRegular14"
                            >
                              Sunday
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[42px] text-blue_gray-700 text-sm"
                              size="txtCairoRegular14"
                            >
                              Monday
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[42px] text-blue_gray-700 text-sm"
                              size="txtCairoRegular14"
                            >
                              Tuesday
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[41px] text-blue_gray-700 text-sm"
                              size="txtCairoRegular14"
                            >
                              Wednesday
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[41px] text-blue_gray-700 text-sm"
                              size="txtCairoRegular14"
                            >
                              Thursday
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[42px] text-blue_gray-700 text-sm"
                              size="txtCairoRegular14"
                            >
                              Friday
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[41px] text-blue_gray-700 text-sm"
                              size="txtCairoRegular14"
                            >
                              Saturday
                            </Text>
                          </div>
                          <div className="flex flex-row gap-10 items-start justify-center md:ml-[0] ml-[193px] mt-7 w-[42%] md:w-full">
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
                      <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-full">
                        <div className="bg-gray-900_01 flex md:flex-1 flex-col gap-[13px] justify-end py-[29px] rounded-[14px] shadow-bs4 w-[48%] md:w-full">
                          <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[30px] mr-[103px] mt-[3px]">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Important Projects
                            </Text>
                            <Text
                              className="text-base text-blue_gray-700"
                              size="txtOpenSans16Bluegray700"
                            >
                              Lorem ipsum dolor sit amet
                            </Text>
                          </div>
                          <div className="flex flex-col gap-10 items-center justify-start w-full">
                            <List
                              className="flex flex-col gap-px items-center w-full"
                              orientation="vertical"
                            >
                              <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 pt-4 rounded-[14px] w-full">
                                <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                                  <div className="flex flex-col items-start justify-start w-[83%] md:w-full">
                                    <div className="flex flex-row items-end justify-start ml-0.5 md:ml-[0] w-full">
                                      <div className="bg-white-A700 flex flex-col h-[68px] items-center justify-start p-3 rounded-[14px] shadow-bs3 w-[68px]">
                                        <div className="flex flex-col h-11 items-center justify-start w-11">
                                          <Img
                                            className="h-[42px] w-[42px]"
                                            src="images/img_brightness.svg"
                                            alt="brightness"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-start justify-start mb-1 ml-[18px] mt-2">
                                        <Text
                                          className="text-lg text-white-A700"
                                          size="txtCairoBold18"
                                        >
                                          Circle Hunt
                                        </Text>
                                        <Text
                                          className="text-blue_gray-700 text-sm"
                                          size="txtOpenSans14"
                                        >
                                          Creative Agency
                                        </Text>
                                      </div>
                                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[23px] ml-[51px] mt-[7px] p-[7px] rounded-[12px] w-[38px]">
                                        <Img
                                          className="h-6"
                                          src="images/img_verticon_gray_500_01.svg"
                                          alt="verticon"
                                        />
                                      </Button>
                                    </div>
                                    <Text
                                      className="leading-[30.00px] mt-[15px] text-lg text-white-A700 w-full"
                                      size="txtCairoSemiBold18WhiteA700"
                                    >
                                      Redesign Landing Page Website for Company
                                      Profile
                                    </Text>
                                    <div className="flex flex-row font-opensans gap-3 items-center justify-start mt-[11px] w-[56%] md:w-full">
                                      <Button className="bg-blue_gray-900_01 cursor-pointer font-semibold leading-[normal] min-w-[62px] py-[5px] rounded-[14px] text-center text-light_blue-300 text-sm">
                                        UI/UX
                                      </Button>
                                      <Button className="bg-gray-900_03 cursor-pointer font-semibold leading-[normal] min-w-[82px] py-[5px] rounded-[14px] text-center text-pink-400 text-sm">
                                        WEBSITE
                                      </Button>
                                    </div>
                                    <div className="flex flex-col font-opensans items-center justify-start mt-6 w-full">
                                      <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                                        <div className="h-1.5 overflow-hidden relative w-full">
                                          <div className="w-full h-full absolute bg-blue_gray_900 rounded-[3px]"></div>
                                          <div
                                            className="h-full absolute bg-deep_purple_600  rounded-[3px]"
                                            style={{ width: "70%" }}
                                          ></div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                          <Text
                                            className="text-sm text-white-A700"
                                            size="txtOpenSansBold14WhiteA700"
                                          >
                                            28
                                          </Text>
                                          <Text
                                            className="ml-1.5 text-sm text-white-A700"
                                            size="txtOpenSans14WhiteA700"
                                          >
                                            Task Done
                                          </Text>
                                          <Text
                                            className="ml-[46px] text-gray-500_01 text-right text-sm"
                                            size="txtOpenSansRomanSemiBold14Gray50001"
                                          >
                                            Due date: 12/05/2020
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                                </div>
                              </div>
                              <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end my-0 pt-4 rounded-[14px] w-full">
                                <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                                  <div className="flex flex-col items-start justify-start w-[83%] md:w-full">
                                    <div className="flex flex-row items-end justify-start ml-0.5 md:ml-[0] w-full">
                                      <Button className="bg-white-A700 flex h-[68px] items-center justify-center p-4 rounded-[14px] shadow-bs3 w-[68px]">
                                        <Img
                                          className="h-9"
                                          src="images/img_logo11.png"
                                          alt="logoEleven"
                                        />
                                      </Button>
                                      <div className="flex flex-col items-start justify-start mb-1 ml-[18px] mt-2.5">
                                        <Text
                                          className="text-lg text-white-A700"
                                          size="txtCairoBold18"
                                        >
                                          Big Wind
                                        </Text>
                                        <Text
                                          className="text-blue_gray-700 text-sm"
                                          size="txtOpenSans14"
                                        >
                                          Creative Agency
                                        </Text>
                                      </div>
                                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[23px] ml-[51px] mt-[7px] p-[7px] rounded-[12px] w-[38px]">
                                        <Img
                                          className="h-6"
                                          src="images/img_verticon_gray_500_01.svg"
                                          alt="verticon"
                                        />
                                      </Button>
                                    </div>
                                    <Text
                                      className="leading-[30.00px] mt-[15px] text-lg text-white-A700 w-full"
                                      size="txtCairoSemiBold18WhiteA700"
                                    >
                                      Optimization Dashboard Page for indexing
                                      in Google
                                    </Text>
                                    <div className="flex flex-row font-opensans gap-3 items-center justify-start mt-[11px] w-3/5 md:w-full">
                                      <Button className="bg-blue_gray-900_02 cursor-pointer font-semibold leading-[normal] min-w-[50px] py-[5px] rounded-[14px] text-center text-orange-400 text-sm">
                                        SEO
                                      </Button>
                                      <Button className="bg-gray-900_08 cursor-pointer font-semibold leading-[normal] min-w-[105px] py-[5px] rounded-[14px] text-center text-red-A200 text-sm">
                                        MARKETING
                                      </Button>
                                    </div>
                                    <div className="flex flex-col font-opensans items-center justify-start mt-6 w-full">
                                      <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                                        <div className="h-1.5 overflow-hidden relative w-full">
                                          <div className="w-full h-full absolute bg-blue_gray_900 rounded-[3px]"></div>
                                          <div
                                            className="h-full absolute bg-deep_purple_600  rounded-[3px]"
                                            style={{ width: "15%" }}
                                          ></div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                          <Text
                                            className="text-sm text-white-A700"
                                            size="txtOpenSansBold14WhiteA700"
                                          >
                                            12
                                          </Text>
                                          <Text
                                            className="ml-1.5 text-sm text-white-A700"
                                            size="txtOpenSans14WhiteA700"
                                          >
                                            Task Done
                                          </Text>
                                          <Text
                                            className="ml-[46px] text-gray-500_01 text-right text-sm"
                                            size="txtOpenSansRomanSemiBold14Gray50001"
                                          >
                                            Due date: 12/05/2020
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                                </div>
                              </div>
                            </List>
                            <Button className="border border-blue_gray-700 border-solid cursor-pointer font-bold min-w-[279px] py-[13px] rounded-[14px] text-center text-lg text-white-A700">
                              Pin other projects
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex md:flex-1 flex-col gap-[15px] justify-end py-[29px] rounded-[14px] shadow-bs4 w-[48%] md:w-full">
                          <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[30px] mr-[158px]">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Clients
                            </Text>
                            <Text
                              className="text-base text-blue_gray-700"
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
                          <div className="flex flex-col gap-6 items-center justify-start w-full">
                            <List
                              className="flex flex-col gap-px items-center pt-[164px] w-full"
                              orientation="vertical"
                            >
                              <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-[15px] rounded-[14px] w-full">
                                <Button className="bg-red-200 flex h-[50px] items-center justify-center p-3 rounded-[14px] w-[50px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_fastforward1.svg"
                                    alt="fastforwardOne"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start ml-3.5">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    Highspeed Studios
                                  </Text>
                                  <Text
                                    className="text-blue_gray-700 text-sm"
                                    size="txtOpenSans14"
                                  >
                                    Network Service
                                  </Text>
                                </div>
                                <div className="md:h-9 h-[41px] ml-[35px] mr-3 relative w-[13%]">
                                  <Button className="absolute bg-deep_purple-600 bottom-[0] flex h-9 items-center justify-center left-[0] p-2 rounded-[12px] w-9">
                                    <Img
                                      className="h-5"
                                      src="images/img_mail_white_a700.svg"
                                      alt="mail"
                                    />
                                  </Button>
                                  <div className="absolute bg-pink-400 h-[13px] outline outline-[2px] outline-gray-900_01 right-[0] rounded-md top-[0] w-[13px]"></div>
                                </div>
                              </div>
                              <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-start my-0 p-[13px] rounded-[14px] w-full">
                                <Button className="bg-indigo-100 flex h-[50px] items-center justify-center ml-[17px] my-0.5 p-[13px] rounded-[14px] w-[50px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_energy1.svg"
                                    alt="energyOne"
                                  />
                                </Button>
                                <div className="flex flex-col items-center justify-start ml-3.5">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    Fullspeedo Crew
                                  </Text>
                                  <Text
                                    className="text-blue_gray-700 text-sm"
                                    size="txtOpenSans14"
                                  >
                                    Photograph Agency
                                  </Text>
                                </div>
                                <Button className="bg-gray-900_02 flex h-9 items-center justify-center ml-12 my-[9px] p-2 rounded-[12px] w-9">
                                  <Img
                                    className="h-5"
                                    src="images/img_mail_deep_purple_600.svg"
                                    alt="mail"
                                  />
                                </Button>
                              </div>
                              <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-[13px] rounded-[14px] w-full">
                                <Button className="bg-purple-900 flex h-[50px] items-center justify-center my-0.5 p-3 rounded-[14px] w-[50px]">
                                  <Img
                                    src="images/img_volume.svg"
                                    alt="volume"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start ml-3.5 mt-0.5">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    Ken Graphic Inc.
                                  </Text>
                                  <Text
                                    className="text-blue_gray-700 text-sm"
                                    size="txtOpenSans14"
                                  >
                                    Desgin Agency
                                  </Text>
                                </div>
                                <div className="md:h-9 h-[41px] ml-[57px] mr-[13px] relative w-[13%]">
                                  <Button className="absolute bg-gray-900_02 bottom-[0] flex h-9 items-center justify-center left-[0] p-2 rounded-[12px] w-9">
                                    <Img
                                      className="h-5"
                                      src="images/img_mail_deep_purple_600.svg"
                                      alt="mail"
                                    />
                                  </Button>
                                  <div className="absolute bg-pink-400 h-[13px] outline outline-[2px] outline-gray-900_01 right-[0] rounded-md top-[0] w-[13px]"></div>
                                </div>
                              </div>
                              <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-start my-0 p-[13px] rounded-[14px] w-full">
                                <Button className="bg-indigo-500 flex h-[50px] items-center justify-center ml-[17px] my-0.5 p-[11px] rounded-[14px] w-[50px]">
                                  <Img src="images/img_hh.svg" alt="hh" />
                                </Button>
                                <div className="flex flex-col items-start justify-start ml-3.5">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    Humbly Humble
                                  </Text>
                                  <Text
                                    className="text-blue_gray-700 text-sm"
                                    size="txtOpenSans14"
                                  >
                                    Video Games Company
                                  </Text>
                                </div>
                                <Button className="bg-gray-900_02 flex h-9 items-center justify-center ml-[27px] my-[9px] p-2 rounded-[12px] w-9">
                                  <Img
                                    className="h-5"
                                    src="images/img_mail_deep_purple_600.svg"
                                    alt="mail"
                                  />
                                </Button>
                              </div>
                              <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-[13px] rounded-[14px] w-full">
                                <Button className="bg-gray-500_02 flex h-[50px] items-center justify-center my-0.5 p-[11px] rounded-[14px] w-[50px]">
                                  <Img src="images/img_save.svg" alt="save" />
                                </Button>
                                <div className="flex flex-col items-start justify-start ml-3.5">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    Fictiv Home
                                  </Text>
                                  <Text
                                    className="text-blue_gray-700 text-sm"
                                    size="txtOpenSans14"
                                  >
                                    Software House
                                  </Text>
                                </div>
                                <Button className="bg-gray-900_02 flex h-9 items-center justify-center ml-[75px] mr-4 my-[9px] p-2 rounded-[12px] w-9">
                                  <Img
                                    className="h-5"
                                    src="images/img_mail_deep_purple_600.svg"
                                    alt="mail"
                                  />
                                </Button>
                              </div>
                              <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-[15px] rounded-[14px] w-full">
                                <Button className="bg-green-300 flex h-[50px] items-center justify-center p-2.5 rounded-[14px] w-[50px]">
                                  <Img
                                    src="images/img_airplane.svg"
                                    alt="airplane"
                                  />
                                </Button>
                                <div className="flex flex-col items-center justify-start ml-3.5">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    Wedepelover
                                  </Text>
                                  <Text
                                    className="text-blue_gray-700 text-sm"
                                    size="txtOpenSans14"
                                  >
                                    Software House
                                  </Text>
                                </div>
                                <div className="md:h-9 h-[41px] ml-[74px] mr-3 relative w-[13%]">
                                  <Button className="absolute bg-deep_purple-600 bottom-[0] flex h-9 items-center justify-center left-[0] p-2 rounded-[12px] w-9">
                                    <Img
                                      className="h-5"
                                      src="images/img_mail_white_a700.svg"
                                      alt="mail"
                                    />
                                  </Button>
                                  <div className="absolute bg-pink-400 h-[13px] outline outline-[2px] outline-gray-900_01 right-[0] rounded-md top-[0] w-[13px]"></div>
                                </div>
                              </div>
                              <div className="bg-gray-900_01 flex flex-1 flex-row items-center justify-end my-0 p-[13px] rounded-[14px] w-full">
                                <div className="bg-orange-200 flex flex-col h-[50px] items-center justify-start my-0.5 p-[13px] rounded-[14px] w-[50px]">
                                  <div className="bg-lime-800 h-6 rounded-[50%] w-6"></div>
                                </div>
                                <div className="flex flex-col items-start justify-start ml-3.5">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    Portalio Inc.
                                  </Text>
                                  <Text
                                    className="text-blue_gray-700 text-sm"
                                    size="txtOpenSans14"
                                  >
                                    Software House
                                  </Text>
                                </div>
                                <Button className="bg-gray-900_02 flex h-9 items-center justify-center ml-[75px] mr-4 my-[9px] p-2 rounded-[12px] w-9">
                                  <Img
                                    className="h-5"
                                    src="images/img_mail_deep_purple_600.svg"
                                    alt="mail"
                                  />
                                </Button>
                              </div>
                            </List>
                            <Button className="border border-blue_gray-700 border-solid cursor-pointer font-bold min-w-[279px] py-[13px] rounded-[14px] text-center text-lg text-white-A700">
                              View 240 More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col gap-[38px] items-center justify-center p-[30px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col items-center justify-start mt-[9px] w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-row font-cairo sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Clients Country
                            </Text>
                            <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[9px] p-[7px] rounded-[12px] w-[38px]">
                              <Img
                                className="h-6"
                                src="images/img_verticon_gray_500_01.svg"
                                alt="verticon_One"
                              />
                            </Button>
                          </div>
                          <Text
                            className="mt-[3px] text-base text-blue_gray-700"
                            size="txtOpenSans16Bluegray700"
                          >
                            <span className="text-blue_gray-700 font-opensans text-left font-normal">
                              You have{" "}
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-bold">
                              1
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-bold">
                              06
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-normal">
                              {" "}
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-normal">
                              students
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-80 items-end justify-start mb-[15px] p-[17px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group305.svg')",
                        }}
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[275px] items-end justify-start mb-[11px] mr-[68px] p-[33px] sm:px-5 w-[73%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group306.svg')",
                          }}
                        >
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[84px] items-end justify-start mb-[68px] mt-[57px] p-2.5 w-[36%] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_tootltip.svg')",
                            }}
                          >
                            <div className="flex flex-col items-center justify-start mb-[9px] mr-[7px]">
                              <Text
                                className="text-gray-900_07 text-lg"
                                size="txtCairoSemiBold18Gray90007"
                              >
                                <span className="text-gray-900_07 font-cairo text-left font-bold">
                                  45
                                </span>
                                <span className="text-gray-900_07 font-cairo text-left font-semibold">
                                  {" "}
                                </span>
                                <span className="text-gray-900_07 font-cairo text-left font-semibold">
                                  Students
                                </span>
                              </Text>
                              <Text
                                className="text-deep_purple-600 text-sm"
                                size="txtOpenSansRomanSemiBold14Deeppurple600"
                              >
                                Indonesia
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-full">
                      <div className="bg-gray-900_01 flex md:flex-1 flex-row items-start justify-start p-[23px] sm:px-5 rounded-[14px] w-[48%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-[5px] ml-1.5">
                          <Text
                            className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                            size="txtCairoBold38"
                          >
                            892
                          </Text>
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            New Projects
                          </Text>
                          <Text
                            className="text-base text-gray-500_01"
                            size="txtOpenSans16Gray50001"
                          >
                            <span className="text-green-500 font-opensans text-left font-bold">
                              +0,5%
                            </span>
                            <span className="text-gray-500_01 font-opensans text-left font-normal">
                              {" "}
                              than last month
                            </span>
                          </Text>
                        </div>
                        <Img
                          className="h-[74px] mt-[11px] rounded-[14px]"
                          src="images/img_vector9.svg"
                          alt="vectorNine"
                        />
                      </div>
                      <div className="bg-gray-900_01 flex md:flex-1 flex-row gap-5 items-start justify-center p-[23px] sm:px-5 rounded-[14px] w-[48%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-1.5 ml-1.5">
                          <Text
                            className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                            size="txtCairoBold38"
                          >
                            562
                          </Text>
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Total Clients
                          </Text>
                          <Text
                            className="text-base text-gray-500_01"
                            size="txtOpenSans16Gray50001"
                          >
                            <span className="text-red-A200 font-opensans text-left font-bold">
                              -2%
                            </span>
                            <span className="text-gray-500_01 font-opensans text-left font-normal">
                              {" "}
                              than last month
                            </span>
                          </Text>
                        </div>
                        <Img
                          className="h-[52px] mr-1.5 mt-[22px] rounded-[14px]"
                          src="images/img_vector9_deep_purple_600.svg"
                          alt="vectorNine_One"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-center justify-end mt-[39px] p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col items-start justify-start mt-1 w-[98%] md:w-full">
                        <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[5px] w-full">
                          <Text
                            className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Completion Project Rate
                          </Text>
                          <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[9px] p-[7px] rounded-[12px] w-[38px]">
                            <Img
                              className="h-6"
                              src="images/img_verticon_gray_500_01.svg"
                              alt="verticon_Two"
                            />
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[41px] w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtCairoSemiBold14Bluegray700"
                            >
                              60
                            </Text>
                            <Text
                              className="mt-6 text-blue_gray-700 text-sm"
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
                          <div className="h-[174px] relative w-[64%] sm:w-full">
                            <Img
                              className="absolute h-[174px] inset-[0] justify-center m-auto"
                              src="images/img_yinfo.svg"
                              alt="yinfo"
                            />
                            <Img
                              className="absolute h-[167px] inset-x-[0] mx-auto object-cover top-[0]"
                              src="images/img_graph.png"
                              alt="graph"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-[22%] sm:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start w-[66%] md:w-full">
                                <Text
                                  className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                                  size="txtCairoBold38"
                                >
                                  49
                                </Text>
                                <Img
                                  className="h-[38px] w-[38px]"
                                  src="images/img_uparrow1.svg"
                                  alt="uparrowOne"
                                />
                              </div>
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Total Task Closed
                              </Text>
                              <Text
                                className="mt-1 text-green-500 text-lg"
                                size="txtCairoBold18Green500"
                              >
                                <span className="text-green-500 font-cairo text-left font-bold">
                                  5.4%{" "}
                                </span>
                                <span className="text-gray-500_01 font-cairo text-left font-semibold">
                                  than last day
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[57px] mt-2 w-[64%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="border-2 border-gray-400_02 border-solid h-[11px] rounded-[5px] w-[11px]"></div>
                              <div className="border-2 border-gray-400_02 border-solid h-[11px] rounded-[5px] w-[11px]"></div>
                              <div className="bg-deep_purple-600 h-[11px] rounded-[5px] w-[11px]"></div>
                              <div className="border-2 border-gray-400_02 border-solid h-[11px] rounded-[5px] w-[11px]"></div>
                              <div className="border-2 border-gray-400_02 border-solid h-[11px] rounded-[5px] w-[11px]"></div>
                              <div className="border-2 border-gray-400_02 border-solid h-[11px] rounded-[5px] w-[11px]"></div>
                              <div className="border-2 border-gray-400_02 border-solid h-[11px] rounded-[5px] w-[11px]"></div>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-1 w-[99%] md:w-full">
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                S
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                M
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                T
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                W
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                T
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                F
                              </Text>
                              <Text
                                className="text-blue_gray-700 text-sm"
                                size="txtCairoRegular14"
                              >
                                S
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 sm:h-[1147px] md:h-[519px] h-[572px] mt-[34px] p-[26px] sm:px-5 relative rounded-[14px] shadow-bs4 w-full">
                      <div className="absolute flex flex-col items-center justify-start left-[4%] top-[6%] w-[26%]">
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
                      <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[5%] w-[91%]">
                        <Text
                          className="md:ml-[0] ml-[522px] text-center text-white-A700 text-xl"
                          size="txtCairoBold20"
                        >
                          October 2022
                        </Text>
                        <Img
                          className="h-[34px] md:ml-[0] ml-[585px] mt-2.5"
                          src="images/img_rewind_gray_900_06.svg"
                          alt="rewind"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex flex-col font-poppins h-[46px] items-center justify-start mr-3.5 mt-[18px] p-3 w-[98%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group307.svg')",
                          }}
                        >
                          <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                            <Text
                              className="text-blue_gray-700 text-center text-sm"
                              size="txtPoppinsMedium14"
                            >
                              Mon
                            </Text>
                            <Text
                              className="text-blue_gray-700 text-center text-sm"
                              size="txtPoppinsMedium14"
                            >
                              Tue
                            </Text>
                            <Text
                              className="text-blue_gray-700 text-center text-sm"
                              size="txtPoppinsMedium14"
                            >
                              Wed
                            </Text>
                            <Text
                              className="text-blue_gray-700 text-center text-sm"
                              size="txtPoppinsMedium14"
                            >
                              Thu
                            </Text>
                            <Text
                              className="text-blue_gray-700 text-center text-sm"
                              size="txtPoppinsMedium14"
                            >
                              Fri
                            </Text>
                            <Text
                              className="text-blue_gray-700 text-center text-sm"
                              size="txtPoppinsMedium14"
                            >
                              Sat
                            </Text>
                            <Text
                              className="text-center text-red-A200 text-sm"
                              size="txtPoppinsMedium14RedA200"
                            >
                              Sun
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-poppins gap-[31px] items-center justify-start md:ml-[0] ml-[34px] mt-1.5 w-[88%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
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
                              <Button className="bg-deep_purple-600 cursor-pointer font-medium h-[60px] leading-[normal] sm:ml-[0] ml-[54px] py-[15px] rounded-[14px] text-center text-gray-900_01 text-xl w-[60px]">
                                3
                              </Button>
                              <Text
                                className="sm:ml-[0] ml-[55px] text-center text-white-A700 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                4
                              </Text>
                              <Button className="bg-deep_purple-600 cursor-pointer font-medium h-[60px] leading-[normal] sm:ml-[0] ml-[53px] py-[15px] rounded-[14px] text-center text-gray-900_01 text-xl w-[60px]">
                                5
                              </Button>
                              <Text
                                className="ml-14 sm:ml-[0] text-center text-white-A700 text-xl"
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
                          </div>
                          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
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
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                              <Text
                                className="text-center text-white-A700 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                15
                              </Text>
                              <div className="md:h-[58px] h-[60px] sm:ml-[0] ml-[51px] relative w-[12%] sm:w-full">
                                <div className="absolute bg-deep_purple-600 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-3.5 rounded-[14px] w-[60px]">
                                  <Text
                                    className="text-center text-gray-900_01 text-xl"
                                    size="txtPoppinsMedium20Gray90001"
                                  >
                                    16
                                  </Text>
                                </div>
                                <div className="absolute bg-pink-400 h-4 outline outline-[3px] outline-gray-900_01 right-[0] rounded-[50%] top-[0] w-4"></div>
                              </div>
                              <Text
                                className="ml-12 sm:ml-[0] text-center text-white-A700 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                17
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[72px] text-center text-white-A700 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                18
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[71px] text-center text-white-A700 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                19
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[68px] text-center text-white-A700 text-xl"
                                size="txtPoppinsMedium20"
                              >
                                20
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[69px] text-center text-red-A200 text-xl"
                                size="txtPoppinsMedium20RedA200"
                              >
                                21
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
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
                        </div>
                        <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[33px] mt-[31px] w-[87%] md:w-full">
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
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col font-opensans items-center justify-end mt-[39px] py-[21px] rounded-[14px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start mt-[9px] w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[92%] md:w-full">
                          <div className="flex flex-row font-cairo sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              Student of The Week
                            </Text>
                            <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[7px] p-[7px] rounded-[12px] w-[38px]">
                              <Img
                                className="h-6"
                                src="images/img_verticon_gray_500_01.svg"
                                alt="verticon_Three"
                              />
                            </Button>
                          </div>
                          <Text
                            className="text-base text-blue_gray-700"
                            size="txtOpenSans16Bluegray700"
                          >
                            <span className="text-blue_gray-700 font-opensans text-left font-normal">
                              You have{" "}
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-bold">
                              106
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-normal">
                              {" "}
                            </span>
                            <span className="text-blue_gray-700 font-opensans text-left font-normal">
                              students
                            </span>
                          </Text>
                        </div>
                        <List
                          className="flex flex-col gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-2 rounded-[14px] w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_star1_orange_400.svg"
                              alt="starOne"
                            />
                            <Text
                              className="italic ml-3.5 md:ml-[0] text-white-A700 text-xl"
                              size="txtOpenSansBoldItalic20"
                            >
                              #1
                            </Text>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px]">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Dawud Khan
                              </Text>
                              <Text
                                className="text-gray-500_01 text-sm"
                                size="txtOpenSans14Gray50001"
                              >
                                Blue Belt
                              </Text>
                            </div>
                            <div className="md:h-[43px] h-[62px] md:ml-[0] ml-[148px] relative w-[30%] md:w-full">
                              <CheckBox
                                className="font-bold font-cairo leading-[normal] text-2xl md:text-[22px] text-left text-white-A700 sm:text-xl"
                                inputClassName="absolute mr-[5px]"
                                name="OneHundredSixtyFive"
                                id="OneHundredSixtyFive"
                                label="165"
                              ></CheckBox>
                              <Text
                                className="absolute bottom-[0] right-[0] text-gray-500_01 text-sm"
                                size="txtOpenSansRomanSemiBold14Gray50001"
                              >
                                Lessons Completed/Week
                              </Text>
                            </div>
                            <Img
                              className="h-16 md:ml-[0] ml-[37px] mr-[21px] md:mt-0 my-[5px] w-16"
                              src="images/img_user_gray_400.svg"
                              alt="user"
                            />
                          </div>
                          <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-2 rounded-[14px] w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_star1_orange_400.svg"
                              alt="starOne"
                            />
                            <Text
                              className="italic ml-3.5 md:ml-[0] text-white-A700 text-xl"
                              size="txtOpenSansBoldItalic20"
                            >
                              #2
                            </Text>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px]">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Helena Somes
                              </Text>
                              <Text
                                className="text-gray-500_01 text-sm"
                                size="txtOpenSans14Gray50001"
                              >
                                Orange Belt
                              </Text>
                            </div>
                            <div className="md:h-[43px] h-[62px] md:ml-[0] ml-[135px] relative w-[30%] md:w-full">
                              <CheckBox
                                className="font-bold font-cairo leading-[normal] text-2xl md:text-[22px] text-left text-white-A700 sm:text-xl"
                                inputClassName="absolute mr-[5px]"
                                name="OneHundredTwentyNine"
                                id="OneHundredTwentyNine"
                                label="129"
                              ></CheckBox>
                              <Text
                                className="absolute bottom-[0] right-[0] text-gray-500_01 text-sm"
                                size="txtOpenSansRomanSemiBold14Gray50001"
                              >
                                Lessons Completed/Week
                              </Text>
                            </div>
                            <Img
                              className="h-16 md:ml-[0] ml-[37px] mr-[21px] md:mt-0 my-[5px] w-16"
                              src="images/img_user_gray_400.svg"
                              alt="user"
                            />
                          </div>
                          <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-2 rounded-[14px] w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_star1_orange_400.svg"
                              alt="starOne"
                            />
                            <Text
                              className="italic ml-3.5 md:ml-[0] text-white-A700 text-xl"
                              size="txtOpenSansBoldItalic20"
                            >
                              #3
                            </Text>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px]">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Peter Jim
                              </Text>
                              <Text
                                className="text-gray-500_01 text-sm"
                                size="txtOpenSans14Gray50001"
                              >
                                Orange Belt
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[167px] w-[30%] md:w-full">
                              <CheckBox
                                className="font-bold font-cairo leading-[normal] text-2xl md:text-[22px] text-left text-white-A700 sm:text-xl"
                                inputClassName="mr-[5px]"
                                name="OneHundredTwentyOne"
                                id="OneHundredTwentyOne"
                                label="121"
                              ></CheckBox>
                              <Text
                                className="md:ml-[0] ml-[33px] text-gray-500_01 text-sm"
                                size="txtOpenSansRomanSemiBold14Gray50001"
                              >
                                Lessons Completed/Week
                              </Text>
                            </div>
                            <Img
                              className="h-16 md:ml-[0] ml-[37px] mr-[21px] md:mt-0 my-[5px] w-16"
                              src="images/img_user_gray_400.svg"
                              alt="user"
                            />
                          </div>
                          <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-2 rounded-[14px] w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                            <Text
                              className="italic ml-3.5 md:ml-[0] text-white-A700 text-xl"
                              size="txtOpenSansBoldItalic20"
                            >
                              #4
                            </Text>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px]">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Melinda Truth
                              </Text>
                              <Text
                                className="text-gray-500_01 text-sm"
                                size="txtOpenSans14Gray50001"
                              >
                                Green Belt
                              </Text>
                            </div>
                            <div className="md:h-[43px] h-[62px] md:ml-[0] ml-[139px] relative w-[30%] md:w-full">
                              <CheckBox
                                className="font-bold font-cairo leading-[normal] text-2xl md:text-[22px] text-left text-white-A700 sm:text-xl"
                                inputClassName="absolute mr-[5px]"
                                name="NinetyEight"
                                id="NinetyEight"
                                label="98"
                              ></CheckBox>
                              <Text
                                className="absolute bottom-[0] right-[0] text-gray-500_01 text-sm"
                                size="txtOpenSansRomanSemiBold14Gray50001"
                              >
                                Lessons Completed/Week
                              </Text>
                            </div>
                            <Img
                              className="h-16 md:ml-[0] ml-[37px] mr-[21px] md:mt-0 my-[5px] w-16"
                              src="images/img_user_gray_400.svg"
                              alt="user"
                            />
                          </div>
                          <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-2 rounded-[14px] w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                            <Text
                              className="italic ml-3.5 md:ml-[0] text-white-A700 text-xl"
                              size="txtOpenSansBoldItalic20"
                            >
                              #5
                            </Text>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px]">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Hawkins Jr.
                              </Text>
                              <Text
                                className="text-gray-500_01 text-sm"
                                size="txtOpenSans14Gray50001"
                              >
                                Brown Belt
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-col justify-start ml-40 md:ml-[0] w-[30%] md:w-full">
                              <CheckBox
                                className="font-bold font-cairo leading-[normal] text-2xl md:text-[22px] text-left text-white-A700 sm:text-xl"
                                inputClassName="mr-[5px]"
                                name="SeventyTwo"
                                id="SeventyTwo"
                                label="72"
                              ></CheckBox>
                              <Text
                                className="md:ml-[0] ml-[33px] text-gray-500_01 text-sm"
                                size="txtOpenSansRomanSemiBold14Gray50001"
                              >
                                Lessons Completed/Week
                              </Text>
                            </div>
                            <Img
                              className="h-16 md:ml-[0] ml-[37px] mr-[21px] md:mt-0 my-[5px] w-16"
                              src="images/img_user_gray_400.svg"
                              alt="user"
                            />
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
        <Sidebar className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]">
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
            className="mb-[1083px] ml-12 md:ml-[0] mr-[52px] mt-1.5 text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default AnalyticsPage;
