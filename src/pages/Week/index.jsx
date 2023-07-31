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

const WeekPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1176px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[47px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="bg-gray-900_01 flex flex-col items-center justify-end md:ml-[0] ml-[395px] mr-[50px] pt-[47px] md:px-5 rounded-[14px] shadow-bs4 w-[77%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
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
                    <div className="flex flex-col gap-3.5 justify-start w-full">
                      <div className="flex flex-row items-center justify-end md:ml-[0] ml-[29px] w-[89%] md:w-full">
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Date
                        </Text>
                        <Text
                          className="ml-[55px] text-deep_purple-600 text-lg"
                          size="txtCairoBold18Deeppurple600"
                        >
                          Week
                        </Text>
                        <Text
                          className="ml-[53px] text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Month
                        </Text>
                        <Text
                          className="h-[34px] ml-[55px] text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Year
                        </Text>
                      </div>
                      <div className="flex flex-col relative w-full">
                        <Line className="bg-blue_gray-700 h-px mx-auto rounded-[1px] w-full" />
                        <Line className="bg-deep_purple-600 h-1 mb-auto ml-[101px] mt-[-1px] rounded-sm w-[23%] z-[1]" />
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
                <div className="bg-gray-900_01 flex flex-col items-center justify-end mt-[22px] p-[31px] sm:px-5 shadow-bs1 w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[3px] w-[90%] md:w-full">
                    <Text
                      className="text-blue_gray-700 text-xl"
                      size="txtCairoBold20Bluegray700"
                    >
                      Monday
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-xl"
                      size="txtCairoBold20Bluegray700"
                    >
                      Tuesday
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-xl"
                      size="txtCairoBold20Bluegray700"
                    >
                      Wednesday
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-xl"
                      size="txtCairoBold20Bluegray700"
                    >
                      Thursday
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-xl"
                      size="txtCairoBold20Bluegray700"
                    >
                      Friday
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-xl"
                      size="txtCairoBold20Bluegray700"
                    >
                      Saturday
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-xl"
                      size="txtCairoBold20Bluegray700"
                    >
                      Sunday
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[86%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCairoBold28"
                    >
                      14
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCairoSemiBold28"
                    >
                      15
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCairoSemiBold28"
                    >
                      16
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCairoSemiBold28"
                    >
                      17
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-deep_purple-600"
                      size="txtCairoBold28Deeppurple600"
                    >
                      18
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCairoSemiBold28"
                    >
                      19
                    </Text>
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtCairoSemiBold28"
                    >
                      20
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[57px] items-center justify-between mt-1 w-[95%] md:w-full">
                  <div className="flex flex-col gap-[59px] items-end justify-start w-[5%] md:w-full">
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
                        className="text-gray-500_01 text-xl"
                        size="txtCairoSemiBold20"
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
                  <div className="h-[686px] md:h-[968px] relative w-[92%] md:w-full">
                    <div className="h-[686px] m-auto w-full">
                      <Img
                        className="absolute h-[571px] inset-[0] justify-center m-auto"
                        src="images/img_lineshor.svg"
                        alt="lineshor"
                      />
                      <Img
                        className="absolute h-[686px] inset-[0] justify-center m-auto"
                        src="images/img_linesvert.svg"
                        alt="linesvert"
                      />
                    </div>
                    <div className="absolute flex flex-col items-center justify-start left-[1%] top-[5%] w-[83%]">
                      <div className="flex flex-col justify-start w-full">
                        <div className="bg-blue_gray-900 flex flex-col items-start justify-start mr-96 rounded-[14px] shadow-bs3 w-[64%] md:w-full">
                          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start w-[95%] md:w-full">
                            <div className="bg-deep_purple-600 h-[157px] rounded w-[2%]"></div>
                            <div className="flex flex-col gap-4 items-start justify-start w-[95%] md:w-full">
                              <Text
                                className="leading-[28.00px] text-lg text-white-A700 w-[57%] sm:w-full"
                                size="txtCairoBold18"
                              >
                                Annual Meeting Envatos Community with Kleon Team
                              </Text>
                              <div className="flex sm:flex-col flex-row font-opensans sm:gap-10 items-start justify-between w-full">
                                <div className="flex sm:flex-1 flex-row gap-[15px] items-start justify-start w-[35%] sm:w-full">
                                  <Img
                                    className="h-6 mt-1 w-6"
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
                                <div className="flex sm:flex-1 flex-col font-cairo items-center justify-start w-[29%] sm:w-full">
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
                                      className="bg-deep_purple-600 flex h-10 items-center justify-center ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] text-center text-lg text-white-A700 w-10 z-[1]"
                                      size="txtCairoBold18"
                                    >
                                      5+
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue_gray-900 flex flex-col items-start justify-start md:ml-[0] ml-[312px] mr-[72px] mt-[25px] rounded-[14px] shadow-bs8 w-[64%] md:w-full">
                          <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start w-[96%] md:w-full">
                            <div className="bg-green-500 h-[157px] rounded w-[2%]"></div>
                            <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                              <Text
                                className="leading-[28.00px] text-lg text-white-A700 w-[56%] sm:w-full"
                                size="txtCairoBold18"
                              >
                                Projects Meeting with Client from Indonesia
                              </Text>
                              <div className="flex sm:flex-col flex-row font-opensans gap-8 items-start justify-between mt-1 w-full">
                                <div className="flex sm:flex-1 flex-row sm:gap-10 items-end justify-between sm:mt-0 mt-[5px] w-[87%] sm:w-full">
                                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[7px]">
                                    <Img
                                      className="h-6 mt-1 w-6"
                                      src="images/img_icmap_gray_500_01.svg"
                                      alt="icmap_One"
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
                                  <Img
                                    className="h-10 mb-[5px]"
                                    src="images/img_people_gray_400_40x104.svg"
                                    alt="people"
                                  />
                                </div>
                                <Button className="bg-orange-400 flex h-[50px] items-center justify-center p-[13px] rounded-[14px] w-[50px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_star1_white_a700.svg"
                                    alt="starOne"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row md:gap-10 gap-[79px] grid md:grid-cols-1 grid-cols-2 md:ml-[0] ml-[118px] mt-[60px] w-[89%]"
                          orientation="horizontal"
                        >
                          <div className="bg-blue_gray-900 flex flex-col items-start justify-start rounded-[14px] shadow-bs3 w-full">
                            <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-start w-[93%] md:w-full">
                              <div className="bg-light_blue-300 h-[126px] rounded w-[3%]"></div>
                              <div className="flex flex-col items-start justify-start sm:mt-0 mt-[21px] w-[91%] sm:w-full">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoBold18"
                                >
                                  Server Maintenace
                                </Text>
                                <div className="flex flex-row font-opensans items-end justify-between mt-0.5 w-full">
                                  <div className="flex flex-row gap-3 items-center justify-start mt-4">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_clock2.svg"
                                      alt="clockThree"
                                    />
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtOpenSansRomanSemiBold14WhiteA700"
                                    >
                                      11 : 00 - 12 : 30 AM
                                    </Text>
                                  </div>
                                  <div className="bg-gray-400 h-10 outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-blue_gray-900 flex flex-col items-start justify-start rounded-[14px] shadow-bs3 w-full">
                            <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-start w-[94%] md:w-full">
                              <div className="bg-pink-400 h-[126px] rounded w-[3%]"></div>
                              <div className="flex flex-col items-start justify-start sm:mt-0 mt-[21px] w-[91%] sm:w-full">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoBold18"
                                >
                                  Weekly Meetins Project
                                </Text>
                                <div className="flex flex-row font-opensans items-end justify-between mt-0.5 w-full">
                                  <div className="flex flex-row gap-3 items-center justify-start mt-4">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_clock2.svg"
                                      alt="clockThree"
                                    />
                                    <Text
                                      className="text-sm text-white-A700"
                                      size="txtOpenSansRomanSemiBold14WhiteA700"
                                    >
                                      11 : 00 - 12 : 30 AM
                                    </Text>
                                  </div>
                                  <div className="bg-gray-400 h-10 outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10"></div>
                                </div>
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
        <Sidebar3 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1" />
      </div>
    </>
  );
};

export default WeekPage;
