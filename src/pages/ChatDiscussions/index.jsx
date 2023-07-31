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

const ChatDiscussionsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-cairo mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1116px] items-center justify-start m-auto pb-[39px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[29px] justify-start w-full">
            <C01DashboardNav
              className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full"
              searchtwo="images/img_search_2_blue_gray_700.svg"
              searchhere="Search here"
            />
            <div className="flex md:flex-col flex-row font-opensans gap-[39px] items-center justify-end md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="bg-gray-900_01 flex flex-col gap-[30px] items-start justify-end py-7 rounded-[14px] shadow-bs4 w-[24%] md:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mt-0.5 w-[93%] md:w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[27px] w-[92%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                      <Text
                        className="text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        GROUP
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_add.svg"
                        alt="btnadd"
                      />
                    </div>
                    <div className="flex flex-row font-cairo items-center justify-between mt-[18px] w-[99%] md:w-full">
                      <Button className="bg-gray-900_01 flex h-[50px] items-center justify-center p-3 rounded-[50%] w-[50px]">
                        <Img
                          className="h-6"
                          src="images/img_group1.svg"
                          alt="groupOne"
                        />
                      </Button>
                      <Text
                        className="text-lg text-white-A700"
                        size="txtCairoSemiBold18WhiteA700"
                      >
                        MartialMe Team
                      </Text>
                      <Text
                        className="bg-deep_purple-600 flex h-[29px] items-center justify-center my-2.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]"
                        size="txtCairoBold14"
                      >
                        5
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_pin21.svg"
                        alt="pinTwentyOne"
                      />
                    </div>
                    <div className="bg-gray-900_01 flex flex-row font-cairo gap-5 items-center justify-start mt-2.5 md:pr-10 sm:pr-5 pr-[83px] rounded-[25px] w-full">
                      <div className="bg-gray-900_01 flex flex-col h-[50px] items-start justify-start p-3 rounded-[50%] w-[50px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_group1_orange_400.svg"
                          alt="groupOne_One"
                        />
                      </div>
                      <Text
                        className="text-lg text-white-A700"
                        size="txtCairoSemiBold18WhiteA700"
                      >
                        MMA Community
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-row font-cairo items-center justify-start mt-2.5 md:pr-10 sm:pr-5 pr-[76px] rounded-[25px] w-full">
                      <Button className="bg-gray-900_01 flex h-[50px] items-center justify-center p-3 rounded-[50%] w-[50px]">
                        <Img
                          className="h-6"
                          src="images/img_group1_green_500.svg"
                          alt="groupOne_Two"
                        />
                      </Button>
                      <Text
                        className="ml-5 text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Weekly Meet
                      </Text>
                      <Text
                        className="bg-deep_purple-600 flex h-[29px] items-center justify-center ml-2.5 my-2.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]"
                        size="txtCairoBold14"
                      >
                        6
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row font-cairo items-center justify-start w-[72%] md:w-full">
                    <Line className="bg-deep_purple-600 h-[50px] rounded-[3px] w-1.5" />
                    <Img
                      className="h-6 ml-[33px] w-6"
                      src="images/img_group1_light_blue_300.svg"
                      alt="groupOne_Three"
                    />
                    <Text
                      className="ml-[34px] text-lg text-white-A700"
                      size="txtCairoSemiBold18WhiteA700"
                    >
                      We Are Designer
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 flex flex-row font-cairo items-center justify-end md:ml-[0] ml-[27px] sm:pr-5 pr-[34px] rounded-[25px] w-[92%] md:w-full">
                    <Button className="bg-gray-900_01 flex h-[50px] items-center justify-center p-3 rounded-[50%] w-[50px]">
                      <Img
                        className="h-6"
                        src="images/img_group1_gray_600.svg"
                        alt="groupOne_Four"
                      />
                    </Button>
                    <Text
                      className="ml-5 text-lg text-white-A700"
                      size="txtCairoBold18"
                    >
                      Future Boss Grou..
                    </Text>
                    <Text
                      className="bg-deep_purple-600 flex h-[29px] items-center justify-center ml-2.5 my-2.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]"
                      size="txtCairoBold14"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[83%] md:w-full">
                      <Text
                        className="text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        RECENT MESSAGE
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_verticon_2.svg"
                        alt="verticon"
                      />
                    </div>
                    <div className="flex flex-col font-cairo items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-px items-center pt-[94px] w-full"
                        orientation="vertical"
                      >
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 pt-[9px] rounded-[14px] w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-8 items-start justify-between w-[84%] md:w-full">
                              <div className="bg-gray-400 h-[50px] mb-[17px] mt-0.5 rounded-[14px] w-[50px]"></div>
                              <div className="flex flex-col items-center justify-start">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    Margaretha
                                  </Text>
                                  <div className="flex flex-row font-opensans items-end justify-evenly w-full">
                                    <Text
                                      className="sm:flex-1 text-sm text-white-A700 w-[88%] sm:w-full"
                                      size="txtOpenSans14WhiteA700"
                                    >
                                      I remember that project due is tomorrow.
                                    </Text>
                                    <Img
                                      className="h-6 mt-3 w-6"
                                      src="images/img_read1.svg"
                                      alt="readOne"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 pt-[9px] w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-[23px] items-start justify-between w-[84%] md:w-full">
                              <Img
                                className="h-[50px] mt-0.5"
                                src="images/img_computer_gray_400.svg"
                                alt="computer"
                              />
                              <div className="flex flex-col items-center justify-start">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-row font-cairo items-start justify-between w-full">
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtCairoBold18"
                                    >
                                      Benny Kenn
                                    </Text>
                                    <Text
                                      className="bg-deep_purple-600 h-6 justify-center my-1 px-[9px] rounded-[12px] text-white-A700 text-xs w-[46px]"
                                      size="txtCairoBold12"
                                    >
                                      NEW
                                    </Text>
                                  </div>
                                  <Text
                                    className="text-sm text-white-A700 w-full"
                                    size="txtOpenSans14WhiteA700"
                                  >
                                    Hei, dont forget to clear server cache!
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 pt-[7px] rounded-[14px] w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-[23px] items-start justify-between w-[84%] md:w-full">
                              <Img
                                className="h-[50px] mt-1"
                                src="images/img_computer_gray_400.svg"
                                alt="computer"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Samsudin
                                </Text>
                                <Text
                                  className="text-sm text-white-A700 w-full"
                                  size="txtOpenSans14WhiteA700"
                                >
                                  Ok sir. I will fix it as soon as possible
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 pt-[7px] rounded-[14px] w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-[23px] items-start justify-between w-[84%] md:w-full">
                              <Img
                                className="h-[50px] mt-1"
                                src="images/img_computer_gray_400.svg"
                                alt="computer"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  Bella Poarch
                                </Text>
                                <Text
                                  className="text-sm text-white-A700 w-full"
                                  size="txtOpenSans14WhiteA700"
                                >
                                  I dont’t know where that files saved dude.
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end my-0 pt-2 w-full">
                          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-[23px] items-start justify-between w-[84%] md:w-full">
                              <Img
                                className="h-[50px] mt-[3px]"
                                src="images/img_computer_gray_400.svg"
                                alt="computer"
                              />
                              <div className="flex flex-col items-center justify-start">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-row font-cairo items-center justify-between w-full">
                                    <Text
                                      className="text-lg text-white-A700"
                                      size="txtCairoBold18"
                                    >
                                      Peter John
                                    </Text>
                                    <Text
                                      className="bg-deep_purple-600 h-6 justify-center my-1 px-[9px] rounded-[12px] text-white-A700 text-xs w-[46px]"
                                      size="txtCairoBold12"
                                    >
                                      NEW
                                    </Text>
                                  </div>
                                  <Text
                                    className="text-sm text-white-A700 w-full"
                                    size="txtOpenSans14WhiteA700"
                                  >
                                    Maybe we should schedule that meeting
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col font-cairo items-center justify-start pb-7 rounded-[14px] shadow-bs4 w-3/4 md:w-full">
                <div className="bg-gray-900_01 flex flex-col items-center justify-end p-[11px] rounded-[14px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-2.5 w-[97%] md:w-full">
                    <div className="flex flex-col justify-start w-[36%] md:w-full">
                      <div className="flex flex-row font-cairo gap-[22px] items-start justify-start w-[52%] md:w-full">
                        <Img
                          className="h-6 mt-[3px] w-6"
                          src="images/img_group1_light_blue_300.svg"
                          alt="groupOne_Five"
                        />
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtCairoBold20"
                        >
                          We Are Designer
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[46px] text-gray-500_01 text-sm"
                        size="txtOpenSans14Gray50001"
                      >
                        We share about daily life as designer in the world
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-96 md:ml-[0] md:mt-0 mt-0.5 w-[17%] md:w-full">
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
                    <Img
                      className="h-6 md:ml-[0] ml-[43px] md:mt-0 mt-2.5 w-6"
                      src="images/img_star1_orange_400.svg"
                      alt="starOne"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[26px] md:mt-0 mt-2.5 w-6"
                      src="images/img_verticon_2.svg"
                      alt="verticon_One"
                    />
                  </div>
                </div>
                <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                <div className="flex md:flex-col flex-row font-opensans gap-5 items-start justify-start mt-[42px] w-[78%] md:w-full">
                  <Img
                    className="h-[63px] w-16"
                    src="images/img_computer_gray_400_63x64.svg"
                    alt="computer"
                  />
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-900 flex flex-col items-start justify-start p-2 rounded-br-[14px] rounded-tl-[14px] rounded-tr-[14px] w-full">
                      <Text
                        className="ml-3 md:ml-[0] text-base text-white-A700"
                        size="txtCairoBold16"
                      >
                        Kevin Julios
                      </Text>
                      <Text
                        className="leading-[20.00px] ml-3 md:ml-[0] my-1 text-sm text-white-A700 w-[97%] sm:w-full"
                        size="txtOpenSans14WhiteA700"
                      >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto b
                      </Text>
                    </div>
                    <Text
                      className="text-gray-500_01 text-xs"
                      size="txtOpenSans12Gray50001"
                    >
                      Sunday, October 24th, 2020 at 4.30 AM
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-center justify-start mt-[27px] w-[42%] md:w-full">
                  <div className="flex flex-col gap-3 items-center justify-start w-full">
                    <Input
                      name="bubblechat"
                      placeholder="sed quia consequuntur magni dolores"
                      className="leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-sm text-white-A700 w-full"
                      wrapClassName="bg-gradient2  pb-[13px] pl-[35px] pr-[22px] pt-[17px] rounded-br-[14px] rounded-tl-[14px] rounded-tr-[14px] w-[68%]"
                    ></Input>
                    <div className="flex sm:flex-col flex-row gap-5 items-end justify-between w-full">
                      <div className="flex flex-col gap-[13px] items-end justify-start">
                        <div className="bg-gradient2  flex flex-col items-center justify-start p-4 rounded-br-[14px] rounded-tl-[14px] rounded-tr-[14px] w-full">
                          <Text
                            className="mb-[3px] text-sm text-white-A700 w-[99%] sm:w-full"
                            size="txtOpenSans14WhiteA700"
                          >
                            nisi ut aliquid ex ea commodi consequatur? Quis
                            autem vel eum iure reprehenderit qui in ea
                          </Text>
                        </div>
                        <Text
                          className="text-center text-gray-500_01 text-xs"
                          size="txtOpenSans12Gray50001"
                        >
                          Sunday, October 24th, 2020 at 4.30 AM
                        </Text>
                      </div>
                      <Img
                        className="h-[63px] mb-0.5 sm:mt-0 mt-[38px] w-16"
                        src="images/img_computer_gray_400_63x64.svg"
                        alt="computer_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans gap-3 justify-start mt-[27px] w-3/5 md:w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[84px] w-[88%] md:w-full">
                    <div className="bg-blue_gray-900 flex flex-col items-start justify-end p-[13px] rounded-br-[14px] rounded-tl-[14px] rounded-tr-[14px] w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] mt-1 text-base text-white-A700"
                        size="txtCairoBold16"
                      >
                        Chloe Simatupang
                      </Text>
                      <Text
                        className="ml-0.5 md:ml-[0] text-sm text-white-A700"
                        size="txtOpenSans14WhiteA700"
                      >
                        Hey, check my design update last night. Tell me what you
                        think and if that is OK
                      </Text>
                    </div>
                  </div>
                  <div className="h-[133px] md:h-[88px] relative w-[47%]">
                    <div className="absolute flex flex-col gap-[13px] items-start justify-start right-[0] top-[0]">
                      <Text
                        className="bg-blue_gray-900 h-[58px] justify-center pb-[17px] pl-4 sm:pr-5 pr-[35px] pt-5 rounded-br-[14px] rounded-tl-[14px] rounded-tr-[14px] text-sm text-white-A700 w-[198px]"
                        size="txtOpenSans14WhiteA700"
                      >
                        Remember that dude
                      </Text>
                      <Text
                        className="text-center text-gray-500_01 text-xs"
                        size="txtOpenSans12Gray50001"
                      >
                        Sunday, October 24th, 2020 at 4.30 AM
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-row gap-5 items-end justify-between left-[0] w-[62%]">
                      <Img
                        className="h-[63px] w-16"
                        src="images/img_computer_gray_400_63x64.svg"
                        alt="computer_Two"
                      />
                      <div className="flex flex-row gap-[19px] items-end justify-between mb-[3px] mt-[39px] w-[56%]">
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
                  </div>
                </div>
                <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[29px] p-5 rounded-[14px] w-[95%] md:w-full">
                  <Text
                    className="md:mt-0 mt-0.5 text-base text-white-A700"
                    size="txtOpenSans16"
                  >
                    I think we should get that project in this month
                  </Text>
                  <Line className="bg-deep_purple-600 md:h-0.5 h-6 mb-7 w-0.5 md:w-full" />
                  <Text
                    className="md:ml-[0] ml-[568px] md:mt-0 my-[13px] text-base text-center text-gray-900_01"
                    size="txtPoppinsMedium16Gray90001"
                  >
                    SEND
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-start justify-start mt-4 w-[95%] md:w-full">
                  <Img
                    className="h-8 md:mt-0 mt-2.5"
                    src="images/img_left.svg"
                    alt="left"
                  />
                  <Img
                    className="h-6 md:ml-[0] ml-[478px] md:mt-0 mt-3 w-6"
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
        <Sidebar2 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden justify-start mt-[-1116px] overflow-auto md:px-5 shadow-bs1 top-[0] z-[1]" />
      </div>
    </>
  );
};

export default ChatDiscussionsPage;
