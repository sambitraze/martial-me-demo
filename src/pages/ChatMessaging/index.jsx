import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C01DashboardNav from "components/C01DashboardNav";
import Sidebar2 from "components/Sidebar2";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ChatMessagingPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1176px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[99px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-center justify-end md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="bg-gray-900_04 flex flex-col items-center justify-end py-[5px] rounded-bl-[14px] rounded-tl-[14px] shadow-bs4 w-[26%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-[25px] w-full">
                  <div className="flex flex-col gap-8 items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-[85%] md:w-full">
                      <div className="flex flex-row font-opensans items-center justify-between w-full">
                        <Text
                          className="text-base text-white-A700 tracking-[1.00px]"
                          size="txtOpenSansBold16WhiteA700"
                        >
                          RECENT MESSAGE
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_verticon_white_a700.svg"
                          alt="verticon"
                        />
                      </div>
                      <Input
                        name="searchbox_One"
                        placeholder="Search here"
                        className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500 sm:pl-5 text-base text-gray-500 text-left w-full"
                        wrapClassName="bg-blue_gray-700 flex pl-[22px] pr-[18px] py-3.5 rounded-[14px] w-full"
                        suffix={
                          <Img
                            className="mt-0.5 mb-[3px] h-6 ml-[35px]"
                            src="images/img_search_2_gray_500_01.svg"
                            alt="search 2"
                          />
                        }
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-px items-center pt-[188px] w-full"
                        orientation="vertical"
                      >
                        <div className="bg-blue_gray-900_04 flex flex-1 flex-col items-center justify-start my-0 pt-2 w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                              <div className="bg-gray-400 h-[50px] mb-[17px] mt-[3px] rounded-[14px] w-[50px]"></div>
                              <div className="md:h-[37px] h-[70px] relative w-[78%]">
                                <Text
                                  className="absolute left-[0] text-lg text-white-A700 top-[0]"
                                  size="txtCairoBold18"
                                >
                                  Marissa Joana
                                </Text>
                                <div className="absolute bg-light_blue-300 h-[13px] right-[45%] rounded-md top-[13%] w-[13px]"></div>
                                <Text
                                  className="absolute bottom-[0] inset-x-[0] mx-auto text-sm text-white-A700 w-full"
                                  size="txtOpenSans14WhiteA700"
                                >
                                  Lorem ipsum dolor sit amet consectetur adipive
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900_05 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-gray-900_04 flex my-0 relative rounded-[14px] w-full">
                          <div className="bg-light_blue-300 h-[94px] my-auto rounded-[3px] w-[2%]"></div>
                          <Line className="bg-blue_gray-900_05 h-px ml-[-7px] mr-auto mt-auto rounded-[1px] w-full z-[1]" />
                          <div className="flex flex-row gap-5 items-start justify-start ml-[undefinedpx] mt-[7px] w-[65%] z-[1]">
                            <Button className="bg-white-A700 flex h-[50px] items-center justify-center mt-1 p-[13px] rounded-[14px] w-[50px]">
                              <Img
                                className="h-6"
                                src="images/img_group1.svg"
                                alt="groupOne"
                              />
                            </Button>
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Kleon Full Team
                              </Text>
                              <Text
                                className="text-sm text-white-A700"
                                size="txtOpenSans14WhiteA700"
                              >
                                Chloe Simatupang typing...
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900_04 flex flex-1 flex-col items-center justify-start my-0 pt-[9px] rounded-[14px] w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                              <div className="bg-gray-400 h-[50px] mb-[17px] mt-0.5 rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Margaretha
                                </Text>
                                <Text
                                  className="text-sm text-white-A700 w-full"
                                  size="txtOpenSans14WhiteA700"
                                >
                                  I remember that project due is tomorrow.
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900_05 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-blue_gray-900_04 flex flex-1 flex-col items-center justify-start my-0 pt-2 w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                              <div className="bg-gray-400 h-[50px] mb-[17px] mt-[3px] rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-center justify-start w-[78%]">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-row font-cairo gap-2 items-center justify-start w-[39%] md:w-full">
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtCairoBold18"
                                    >
                                      Juminten
                                    </Text>
                                    <div className="bg-light_blue-300 h-[13px] my-[9px] rounded-md w-[13px]"></div>
                                  </div>
                                  <Text
                                    className="text-sm text-white-A700 w-full"
                                    size="txtOpenSans14WhiteA700"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipive
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900_05 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-blue_gray-900_04 flex flex-1 flex-col items-center justify-start my-0 pt-[7px] w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                              <div className="bg-gray-400 h-[50px] mb-[17px] mt-1 rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-center justify-start w-[78%]">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-row font-cairo gap-2 items-center justify-start w-[62%] md:w-full">
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtCairoBold18"
                                    >
                                      Richard Hunters
                                    </Text>
                                    <div className="bg-light_blue-300 h-[13px] my-2.5 rounded-md w-[13px]"></div>
                                  </div>
                                  <Text
                                    className="text-sm text-white-A700 w-full"
                                    size="txtOpenSans14WhiteA700"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipive
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900_05 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-gray-900_04 flex flex-1 flex-col items-center justify-start my-0 pt-[7px] w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                              <Button className="bg-white-A700 flex h-[50px] items-center justify-center mb-[17px] mt-1 p-[13px] rounded-[14px] w-[50px]">
                                <Img
                                  className="h-6"
                                  src="images/img_group1_pink_400.svg"
                                  alt="groupOne"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Fathers Club
                                </Text>
                                <Text
                                  className="text-sm text-white-A700 w-full"
                                  size="txtOpenSans14WhiteA700"
                                >
                                  Lorem ipsum dolor sit amet consectetur adipive
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900_05 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-blue_gray-900_04 flex flex-1 flex-col items-center justify-start my-0 pt-[7px] w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                              <Button className="bg-white-A700 flex h-[50px] items-center justify-center mb-[17px] mt-1 p-[13px] rounded-[14px] w-[50px]">
                                <Img
                                  className="h-6"
                                  src="images/img_group1_light_blue_300.svg"
                                  alt="groupOne"
                                />
                              </Button>
                              <div className="flex flex-col items-center justify-start w-[78%]">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-row font-cairo gap-2.5 items-center justify-start w-4/5 md:w-full">
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtCairoBold18"
                                    >
                                      Kleon’s Finance Team
                                    </Text>
                                    <div className="bg-light_blue-300 h-[13px] my-2.5 rounded-md w-[13px]"></div>
                                  </div>
                                  <Text
                                    className="text-sm text-white-A700 w-full"
                                    size="txtOpenSans14WhiteA700"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipive
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900_05 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-gray-900_04 flex flex-1 flex-col items-center justify-end my-0 pt-2 w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-5 items-start justify-start w-[82%] md:w-full">
                              <div className="bg-gray-400 h-[50px] mb-[17px] mt-[3px] rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Peter John
                                </Text>
                                <Text
                                  className="text-sm text-white-A700 w-full"
                                  size="txtOpenSans14WhiteA700"
                                >
                                  Lorem ipsum dolor sit amet consectetur adipive
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900_05 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col items-center justify-start pb-7 rounded-br-[14px] rounded-tr-[14px] shadow-bs4 w-3/4 md:w-full">
                <div className="bg-gray-900_01 flex flex-col items-center justify-end p-[11px] rounded-tl-[14px] rounded-tr-[14px] shadow-bs1 w-full">
                  <div className="flex md:flex-col flex-row gap-9 items-start justify-between mt-2 w-[97%] md:w-full">
                    <Button className="bg-white-A700 flex h-[50px] items-center justify-center mb-[7px] p-[13px] rounded-[14px] shadow-bs3 w-[50px]">
                      <Img
                        className="h-6"
                        src="images/img_group1.svg"
                        alt="groupOne"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-end justify-start w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtCairoBold20"
                        >
                          Kleon Full Team
                        </Text>
                        <Img
                          className="h-6 md:ml-[0] ml-[705px] md:mt-0 mt-3 w-6"
                          src="images/img_star1_orange_400.svg"
                          alt="starOne"
                        />
                        <Img
                          className="h-6 md:ml-[0] ml-[19px] md:mt-0 mt-3 w-6"
                          src="images/img_info24px1.svg"
                          alt="info24pxOne"
                        />
                        <Img
                          className="h-6 md:ml-[0] ml-[19px] md:mt-0 mt-3 w-6"
                          src="images/img_verticon_2.svg"
                          alt="verticon_One"
                        />
                      </div>
                      <Text
                        className="text-gray-500_01 text-sm"
                        size="txtOpenSans14Gray50001"
                      >
                        985 Participants
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[34px] md:h-[52px] mt-[18px] relative w-full">
                  <Line className="absolute bg-blue_gray-900 h-px inset-[0] justify-center m-auto rounded-[1px] w-full" />
                  <Button className="absolute bg-gray-900_01 cursor-pointer font-semibold h-full inset-y-[0] leading-[normal] left-[38%] min-w-[185px] my-auto py-2 text-center text-white-A700 text-xs">
                    Today, October 25th 2020
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-[29px] items-center mt-2 w-[93%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-4/5 md:w-full">
                    <Img
                      className="h-[63px] w-16"
                      src="images/img_computer_gray_400_63x64.svg"
                      alt="computer"
                    />
                    <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start w-1/5 md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtCairoBold16"
                          >
                            Jean John
                          </Text>
                          <Text
                            className="text-blue_gray-700 text-xs"
                            size="txtOpenSans12Bluegray700"
                          >
                            at 4.30 AM
                          </Text>
                        </div>
                        <Text
                          className="leading-[20.00px] mt-1 text-sm text-white-A700 w-full"
                          size="txtOpenSans14WhiteA700"
                        >
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto b
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-900 w-full rounded-[1px]" />
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
                    <Img
                      className="h-[63px] md:mt-0 mt-0.5 w-16"
                      src="images/img_computer_gray_400_63x64.svg"
                      alt="computer"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[9px] items-center justify-start w-[17%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtCairoBold16"
                          >
                            Angela Moss
                          </Text>
                          <Text
                            className="text-blue_gray-700 text-xs"
                            size="txtOpenSans12Bluegray700"
                          >
                            at 4.34 AM
                          </Text>
                        </div>
                        <Text
                          className="leading-[20.00px] mt-0.5 text-sm text-white-A700 w-full"
                          size="txtOpenSans14WhiteA700"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-blue_gray-900 w-full rounded-[1px]" />
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-4/5 md:w-full">
                    <Img
                      className="h-[63px] w-16"
                      src="images/img_computer_gray_400_63x64.svg"
                      alt="computer"
                    />
                    <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start w-1/5 md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtCairoBold16"
                          >
                            Jean John
                          </Text>
                          <Text
                            className="text-blue_gray-700 text-xs"
                            size="txtOpenSans12Bluegray700"
                          >
                            at 4.30 AM
                          </Text>
                        </div>
                        <Text
                          className="leading-[20.00px] mt-1 text-sm text-white-A700 w-full"
                          size="txtOpenSans14WhiteA700"
                        >
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto b
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="h-[333px] sm:h-[386px] md:h-[526px] mt-[58px] relative w-[95%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                      <div className="md:h-[118px] h-[121px] relative w-[98%] md:w-full">
                        <div className="absolute flex flex-col gap-[35px] h-max inset-y-[0] justify-start left-[0] my-auto w-[19%]">
                          <Img
                            className="h-[63px] w-16"
                            src="images/img_computer_gray_400_63x64.svg"
                            alt="computer"
                          />
                          <div className="flex flex-row gap-[19px] items-end justify-end md:ml-[0] ml-[84px] w-[56%] md:w-full">
                            <Text
                              className="text-sm text-white-A700"
                              size="txtOpenSans14WhiteA700"
                            >
                              Typing
                            </Text>
                            <Img
                              className="h-[9px] my-[5px]"
                              src="images/img_grid_gray_500_01.svg"
                              alt="grid"
                            />
                          </div>
                        </div>
                        <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[92%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-3.5 items-start justify-start w-[22%] md:w-full">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtCairoBold16"
                                >
                                  Chloe Simatupang
                                </Text>
                                <Text
                                  className="mt-1 text-blue_gray-700 text-xs"
                                  size="txtOpenSans12Bluegray700"
                                >
                                  at 4.30 AM
                                </Text>
                              </div>
                              <Text
                                className="leading-[20.00px] text-sm text-white-A700 w-full"
                                size="txtOpenSans14WhiteA700"
                              >
                                dipisci velit, sed quia non numquam eius modi
                                tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem. Ut enim ad minima
                                veniam, quis no
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 border-2 border-blue_gray-700 border-solid flex flex-col justify-end p-0.5 rounded-[14px] w-full">
                        <div className="font-opensans h-6 md:h-[42px] md:ml-[0] ml-[18px] mr-[857px] mt-[18px] relative w-[16%]">
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-gray-400_02 w-max"
                            size="txtOpenSans16Gray40002"
                          >
                            Type message here...
                          </Text>
                          <Line className="absolute bg-deep_purple-600 h-6 inset-y-[0] left-[0] my-auto w-0.5" />
                        </div>
                        <Text
                          className="md:ml-[0] ml-[937px] mr-[54px] mt-3.5 text-base text-center text-gray-900_01"
                          size="txtPoppinsMedium16Gray90001"
                        >
                          SEND
                        </Text>
                        <div className="bg-gray-900_02 flex flex-col font-cairo items-center justify-end mt-[19px] p-3 rounded-bl-[14px] rounded-br-[14px] w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-[98%] md:w-full">
                            <Img
                              className="h-8 md:mt-0 mt-2.5"
                              src="images/img_left.svg"
                              alt="left"
                            />
                            <Img
                              className="h-6 md:ml-[0] ml-[427px] md:mt-0 mt-3 w-6"
                              src="images/img_location_deep_purple_600.svg"
                              alt="location"
                            />
                            <Img
                              className="h-6 md:ml-[0] ml-[34px] md:mt-0 mt-3 w-6"
                              src="images/img_attach1_deep_purple_600.svg"
                              alt="attachOne"
                            />
                            <Button
                              className="bg-deep_purple-600 cursor-pointer flex items-center justify-center min-w-[155px] md:ml-[0] ml-[33px] px-[34px] py-[9px] rounded-[14px] shadow-bs4"
                              leftIcon={
                                <Img
                                  className="h-6 mt-1 mb-[5px] mr-4"
                                  src="images/img_send_1_white_a700.svg"
                                  alt="send 1"
                                />
                              }
                            >
                              <div className="font-bold sm:px-5 text-left text-lg text-white-A700">
                                SEND
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[19%] md:h-[167px] h-[175px] right-[24%] w-[17%]">
                    <div className="absolute bg-gray-900_02 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[23px] sm:px-5 rounded-[14px] shadow-bs7 top-[0] w-full">
                      <List
                        className="flex flex-col gap-4 h-[116px] items-center mb-[5px] w-[116px]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            className="h-7 w-7"
                            src="images/img_059smile1.svg"
                            alt="059smileOne"
                          />
                          <Img
                            className="h-7 w-7"
                            src="images/img_060dizzy.svg"
                            alt="060dizzy"
                          />
                          <Img
                            className="h-7 w-7"
                            src="images/img_061happy.svg"
                            alt="061happy"
                          />
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            className="h-7 w-7"
                            src="images/img_062cool.svg"
                            alt="062cool"
                          />
                          <Img
                            className="h-7 w-7"
                            src="images/img_063joy.svg"
                            alt="063joy"
                          />
                          <Img
                            className="h-7 w-7"
                            src="images/img_064cry.svg"
                            alt="064cry"
                          />
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            className="h-7 w-7"
                            src="images/img_065astonished.svg"
                            alt="065astonished"
                          />
                          <Img
                            className="h-7 w-7"
                            src="images/img_info.svg"
                            alt="info"
                          />
                          <Img
                            className="h-7 w-7"
                            src="images/img_067angry.svg"
                            alt="067angry"
                          />
                        </div>
                      </List>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-6 right-[12%] w-6"
                      src="images/img_offer_gray_900_02.svg"
                      alt="offer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar2 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1" />
      </div>
    </>
  );
};

export default ChatMessagingPage;
