import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C01DashboardNav from "components/C01DashboardNav";
import Sidebar5 from "components/Sidebar5";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EmailPagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1306px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="flex md:flex-col flex-row gap-[39px] items-start justify-end md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="bg-gray-900_01 flex flex-col gap-[30px] items-center justify-start mb-[62px] py-[30px] rounded-[14px] shadow-bs4 w-[24%] md:w-full">
                <Button
                  className="bg-deep_purple-600 cursor-pointer flex items-center justify-center min-w-[280px] px-[35px] py-[9px] rounded-[14px] shadow-bs3"
                  leftIcon={
                    <Img
                      className="h-6 mt-0.5 mb-[7px] mr-[18px]"
                      src="images/img_edit_2.svg"
                      alt="edit 2"
                    />
                  }
                >
                  <div className="font-bold sm:px-5 text-left text-lg text-white-A700">
                    Compose Email
                  </div>
                </Button>
                <div className="flex flex-col font-opensans gap-10 items-start justify-start mb-2.5 w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-[85%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          FOLDERS
                        </Text>
                        <Img
                          className="h-7 w-7"
                          src="images/img_icchevron.svg"
                          alt="icchevron"
                        />
                      </div>
                      <div className="bg-blue_gray-700 flex flex-row font-cairo items-center justify-end p-[7px] rounded-[25px] w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_email41.svg"
                          alt="emailFortyOne"
                        />
                        <Text
                          className="ml-[30px] text-lg text-white-A700"
                          size="txtCairoBold18"
                        >
                          Inbox
                        </Text>
                        <Text
                          className="bg-light_blue-300 flex h-[29px] items-center justify-center ml-[123px] mr-1.5 my-0.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]"
                          size="txtCairoBold14"
                        >
                          17
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-cairo gap-1.5 items-center justify-start w-full">
                      <div className="bg-gray-900_01 flex flex-row gap-[30px] items-center justify-start p-[7px] w-full">
                        <Img
                          className="h-6 ml-[42px] w-6"
                          src="images/img_send1.svg"
                          alt="sendOne"
                        />
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Sent
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 flex flex-row items-center justify-end p-[7px] w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_inbox11.svg"
                          alt="inboxEleven"
                        />
                        <Text
                          className="ml-7 text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Draft
                        </Text>
                        <Text
                          className="bg-green-500 h-[29px] justify-center ml-[110px] mr-[31px] my-0.5 px-[11px] rounded-[14px] text-sm text-white-A700 w-[46px]"
                          size="txtCairoBold14"
                        >
                          87+
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[7px] w-full">
                        <Img
                          className="h-7 ml-[42px] w-7"
                          src="images/img_envelope1.svg"
                          alt="envelopeOne"
                        />
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Archived
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[7px] w-full">
                        <Img
                          className="h-7 ml-[42px] w-7"
                          src="images/img_star1.svg"
                          alt="starOne"
                        />
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Favourites
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[5px] w-full">
                        <Img
                          className="h-7 ml-11 w-7"
                          src="images/img_folder1.svg"
                          alt="folderOne"
                        />
                        <Text
                          className="mt-[5px] text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Spam
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3.5 justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[30px] text-base text-gray-400_01 tracking-[1.00px]"
                      size="txtOpenSansBold16"
                    >
                      RECENT CONTACTS
                    </Text>
                    <List
                      className="flex flex-col font-cairo gap-px items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start pt-[13px] rounded-[14px] w-full">
                        <div className="flex flex-col gap-3 justify-start w-full">
                          <div className="flex flex-row gap-[23px] items-end justify-start md:ml-[0] ml-[31px] w-1/2 md:w-full">
                            <Img
                              className="h-12"
                              src="images/img_computer_gray_400.svg"
                              alt="computer"
                            />
                            <div className="flex flex-col items-center justify-start mb-1 mt-[9px]">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Benny Kenn
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start pt-[13px] rounded-[14px] w-full">
                        <div className="flex flex-col gap-3 justify-start w-full">
                          <div className="flex flex-row gap-[23px] items-center justify-start md:ml-[0] ml-[31px] w-[56%] md:w-full">
                            <Img
                              className="h-12"
                              src="images/img_computer_gray_400_48x55.svg"
                              alt="computer"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                David Nothere
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end pt-[13px] rounded-[14px] w-full">
                        <div className="flex flex-col gap-3 justify-start w-full">
                          <div className="flex flex-row gap-[23px] items-center justify-start md:ml-[0] ml-[31px] w-[46%] md:w-full">
                            <Img
                              className="h-12"
                              src="images/img_computer_gray_400.svg"
                              alt="computer"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Francesca
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[30px] w-[65%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        TAGS
                      </Text>
                      <Button className="bg-blue_gray-900_01 cursor-pointer font-cairo font-semibold leading-[normal] min-w-[201px] mt-3.5 py-1.5 rounded-[14px] text-center text-lg text-light_blue-300">
                        #Coursefeedback
                      </Button>
                      <div className="flex flex-row font-cairo gap-2.5 items-center justify-between mt-3 w-full">
                        <Button className="bg-gray-900_03 cursor-pointer font-semibold leading-[normal] min-w-[119px] py-1.5 rounded-[14px] text-center text-lg text-pink-400">
                          #Shipment
                        </Button>
                        <Button className="bg-gray-900_04 cursor-pointer font-semibold leading-[normal] min-w-[92px] py-1.5 rounded-[14px] text-center text-deep_purple-600 text-lg">
                          #Class
                        </Button>
                      </div>
                      <Button className="bg-gray-900_05 cursor-pointer font-cairo font-semibold leading-[normal] min-w-[170px] mt-3 py-1.5 rounded-[14px] text-center text-green-500 text-lg">
                        #weeklymeetings
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col items-center justify-end py-6 rounded-[14px] shadow-bs4 w-3/4 md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1.5 w-[95%] md:w-full">
                  <div className="border-[3px] border-solid border-white-A700 h-6 md:mt-0 mt-[7px] rounded w-6"></div>
                  <Line className="bg-blue_gray-900 h-8 md:h-px mb-6 md:ml-[0] ml-[29px] md:mt-0 mt-[3px] rounded-[1px] md:w-full w-px" />
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] md:mt-0 mt-1.5 w-[41%] md:w-full">
                    <div className="flex flex-col gap-3 justify-start w-full">
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[9px] w-[98%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-[62%]">
                          <div className="flex flex-row gap-[15px] items-start justify-start mt-0.5 w-[45%]">
                            <Img
                              className="h-5 mt-[3px] w-5"
                              src="images/img_arrowdown_deep_purple_600.svg"
                              alt="arrowdown"
                            />
                            <Text
                              className="text-deep_purple-600 text-lg"
                              size="txtCairoSemiBold18Deeppurple600"
                            >
                              Important
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3.5 items-center justify-start mb-0.5 w-[36%]">
                            <Img
                              className="h-4"
                              src="images/img_user_blue_gray_700.svg"
                              alt="user_Two"
                            />
                            <Text
                              className="text-blue_gray-700 text-lg"
                              size="txtCairoSemiBold18"
                            >
                              Socials
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[13px] items-center justify-start w-[29%]">
                          <Img
                            className="h-4"
                            src="images/img_ticket.svg"
                            alt="ticket"
                          />
                          <Text
                            className="text-blue_gray-700 text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Promotion
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-deep_purple-600 h-1 mr-[289px] rounded-sm w-[31%]" />
                    </div>
                  </div>
                  <Img
                    className="h-[38px] md:ml-[0] ml-[290px]"
                    src="images/img_action.svg"
                    alt="action"
                  />
                </div>
                <div className="flex flex-col gap-[19px] items-center justify-end pt-[25px] w-full">
                  <List
                    className="flex flex-col gap-[0.5px] items-center pt-[154px] w-full"
                    orientation="vertical"
                  >
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 pt-[3px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
                          <Line className="bg-deep_purple-600 h-[148px] md:h-[5px] rounded-sm w-[5px] md:w-full" />
                          <Button className="bg-deep_purple-600 flex h-6 items-center justify-center mb-[98px] md:mt-0 mt-[26px] p-[5px] rounded w-6">
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Button className="bg-orange-400 flex h-[50px] items-center justify-center mb-[85px] md:mt-0 mt-[13px] p-[13px] rounded-[14px] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_star1_white_a700.svg"
                              alt="starOne"
                            />
                          </Button>
                          <Text
                            className="bg-blue_gray-900_01 flex h-[50px] items-center justify-center mb-[85px] md:mt-0 mt-[13px] rounded-[14px] text-2xl md:text-[22px] text-blue-A400 text-center sm:text-xl w-[50px]"
                            size="txtCairoBold24BlueA400"
                          >
                            A
                          </Text>
                          <div className="flex flex-col gap-2 items-start justify-start">
                            <div className="font-cairo h-[63px] relative w-[54%]">
                              <div className="flex flex-row items-center justify-between mb-[-0.61px] w-[77%] z-[1]">
                                <Text
                                  className="text-base text-blue_gray-700"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  allientstudios@mail.com
                                </Text>
                                <div className="bg-blue_gray-700 h-1 my-[13px] rounded-[50%] w-1"></div>
                                <Text
                                  className="text-base text-blue_gray-700"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  24 min ago
                                </Text>
                              </div>
                              <Text
                                className="mt-auto mx-auto text-lg text-white-A700"
                                size="txtCairoBold18"
                              >
                                Follow Up Progress from Ticket #0001241251
                              </Text>
                            </div>
                            <Text
                              className="text-sm text-white-A700 w-full"
                              size="txtOpenSans14WhiteA700"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ...
                            </Text>
                          </div>
                          <Button className="bg-gray-900_02 border border-gray-900_01 border-solid flex h-[38px] items-center justify-center mb-[58px] md:mt-0 mt-[52px] p-[7px] rounded-[12px] w-[38px]">
                            <Img
                              className="h-6"
                              src="images/img_inbox1.svg"
                              alt="inboxOne"
                            />
                          </Button>
                          <Button className="bg-gray-900_01 border border-gray-900_01 border-solid flex h-[38px] items-center justify-center mb-[58px] md:mt-0 mt-[52px] p-[7px] rounded-[12px] w-[38px]">
                            <Img
                              className="h-6"
                              src="images/img_clock1.svg"
                              alt="clockOne"
                            />
                          </Button>
                          <Button className="bg-gray-900_01 border border-gray-900_01 border-solid flex h-[38px] items-center justify-center mb-[58px] md:mt-0 mt-[52px] p-[7px] rounded-[12px] w-[38px]">
                            <Img
                              className="h-6"
                              src="images/img_attach1.svg"
                              alt="attachOne"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_gray-900 h-px mt-0.5 rounded-[1px] w-full" />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-900 w-full rounded-[1px]" />
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 pt-4 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-center justify-start w-[95%] md:w-full">
                          <div className="border-[3px] border-gray-400 border-solid h-6 rounded w-6"></div>
                          <Button className="bg-orange-400 flex h-[50px] items-center justify-center mb-5 md:ml-[0] ml-[26px] p-[13px] rounded-[14px] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_star1_white_a700.svg"
                              alt="starOne"
                            />
                          </Button>
                          <div className="bg-gray-400 h-[50px] mb-5 ml-3.5 md:ml-[0] rounded-[14px] w-[50px]"></div>
                          <div className="h-[63px] md:ml-[0] ml-[22px] md:mt-0 my-0.5 relative w-[39%] md:w-full">
                            <div className="flex flex-row items-center justify-between mb-[-0.58px] w-[62%] z-[1]">
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtCairoSemiBold16Bluegray700"
                              >
                                kevinhard@mail.com
                              </Text>
                              <div className="bg-blue_gray-700 h-1 my-[13px] rounded-[50%] w-1"></div>
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtCairoSemiBold16Bluegray700"
                              >
                                24 min ago
                              </Text>
                            </div>
                            <Text
                              className="mt-auto mx-auto text-lg text-white-A700"
                              size="txtCairoBold18"
                            >
                              How to manage your working time in this pandemic
                            </Text>
                          </div>
                          <Img
                            className="h-6 md:ml-[0] ml-[426px] w-6"
                            src="images/img_verticon_blue_gray_700.svg"
                            alt="verticon"
                          />
                        </div>
                        <Text
                          className="mt-1 text-sm text-white-A700 w-[69%] sm:w-full"
                          size="txtOpenSans14WhiteA700"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ...
                        </Text>
                        <Line className="bg-blue_gray-900 h-px mt-[25px] rounded-[1px] w-full" />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-900 w-full rounded-[1px]" />
                    <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-start my-0 pt-4 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-center justify-start w-[95%] md:w-full">
                          <div className="border-[3px] border-gray-400 border-solid h-6 rounded w-6"></div>
                          <Button className="border border-blue_gray-700 border-solid flex h-[50px] items-center justify-center md:ml-[0] ml-[26px] p-[13px] rounded-[14px] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                          </Button>
                          <div className="bg-gray-400 h-[50px] mb-5 ml-3.5 md:ml-[0] rounded-[14px] w-[50px]"></div>
                          <div className="h-[63px] md:ml-[0] ml-[22px] md:mt-0 my-0.5 relative w-[31%] md:w-full">
                            <div className="flex flex-row gap-3 items-center justify-between mb-[-0.81px] w-4/5 z-[1]">
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtCairoSemiBold16Bluegray700"
                              >
                                kevinhard@mail.com
                              </Text>
                              <div className="bg-blue_gray-700 h-1 my-[13px] rounded-[50%] w-1"></div>
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtCairoSemiBold16Bluegray700"
                              >
                                24 min ago
                              </Text>
                            </div>
                            <Text
                              className="mt-auto mx-auto text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Weekly Maintenance Service Information
                            </Text>
                          </div>
                          <Img
                            className="h-6 md:ml-[0] ml-[514px] w-6"
                            src="images/img_verticon_blue_gray_700.svg"
                            alt="verticon"
                          />
                        </div>
                        <Text
                          className="mt-1 text-sm text-white-A700 w-[65%] sm:w-full"
                          size="txtOpenSans14WhiteA700"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ...
                        </Text>
                        <Line className="bg-blue_gray-900 h-px mt-[25px] rounded-[1px] w-full" />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-900 w-full rounded-[1px]" />
                    <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-start my-0 pt-4 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-center justify-start w-[95%] md:w-full">
                          <div className="border-[3px] border-gray-400 border-solid h-6 rounded w-6"></div>
                          <Button className="bg-orange-400 flex h-[50px] items-center justify-center mb-5 md:ml-[0] ml-[26px] p-[13px] rounded-[14px] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_star1_white_a700.svg"
                              alt="starOne"
                            />
                          </Button>
                          <div className="bg-gray-400 h-[50px] mb-5 ml-3.5 md:ml-[0] rounded-[14px] w-[50px]"></div>
                          <div className="h-16 md:h-9 sm:h-[103px] md:ml-[0] ml-[22px] md:mt-0 my-0.5 relative w-[39%] md:w-full">
                            <Text
                              className="absolute bottom-[0] left-[0] text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Important Document from Goverment
                            </Text>
                            <div className="absolute flex sm:flex-col flex-row gap-3 inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtCairoSemiBold16Bluegray700"
                              >
                                machelgreen@mail.com
                              </Text>
                              <div className="bg-blue_gray-700 h-1 sm:mt-0 my-[13px] rounded-[50%] w-1"></div>
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtCairoSemiBold16Bluegray700"
                              >
                                October 25th, 2020 08:55 AM
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 md:ml-[0] ml-[427px] w-6"
                            src="images/img_verticon_blue_gray_700.svg"
                            alt="verticon"
                          />
                        </div>
                        <Text
                          className="mt-1 text-sm text-white-A700 w-[65%] sm:w-full"
                          size="txtOpenSans14WhiteA700"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ...
                        </Text>
                        <Line className="bg-blue_gray-900 h-px mt-[25px] rounded-[1px] w-full" />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-900 w-full rounded-[1px]" />
                    <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-start my-0 pt-[3px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                          <Line className="bg-deep_purple-600 h-[148px] md:h-[5px] rounded-sm w-[5px] md:w-full" />
                          <Button className="bg-deep_purple-600 flex h-6 items-center justify-center mb-[98px] md:ml-[0] ml-[25px] md:mt-0 mt-[26px] p-[5px] rounded w-6">
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Button className="border border-blue_gray-700 border-solid flex h-[50px] items-center justify-center md:ml-[0] ml-[26px] p-[13px] rounded-[14px] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                          </Button>
                          <div className="bg-gray-400 h-[50px] mb-[85px] ml-3.5 md:ml-[0] md:mt-0 mt-[13px] rounded-[14px] w-[50px]"></div>
                          <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[21px] w-[67%] md:w-full">
                            <div className="font-cairo md:h-[34px] h-[63px] relative w-[51%]">
                              <Text
                                className="absolute bottom-[0] left-[0] text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Dont forget to save your work after 10 min
                              </Text>
                              <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
                                <Text
                                  className="text-base text-blue_gray-700"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  joannahsitepu@mail.com
                                </Text>
                                <div className="bg-blue_gray-700 h-1 my-[13px] rounded-[50%] w-1"></div>
                                <Text
                                  className="text-base text-blue_gray-700"
                                  size="txtCairoSemiBold16Bluegray700"
                                >
                                  Yesterday, at 11:24 AM
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-sm text-white-A700 w-full"
                              size="txtOpenSans14WhiteA700"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ...
                            </Text>
                          </div>
                          <Img
                            className="h-[38px] w-[38px]"
                            src="images/img_file.svg"
                            alt="file"
                          />
                          <Img
                            className="h-[38px] ml-4 md:ml-[0] w-[38px]"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Img
                            className="h-[38px] md:ml-[0] ml-[11px] w-[38px]"
                            src="images/img_location.svg"
                            alt="location"
                          />
                        </div>
                        <Line className="bg-blue_gray-900 h-px mt-0.5 rounded-[1px] w-full" />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-900 w-full rounded-[1px]" />
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end my-0 pt-4 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-center justify-start w-[95%] md:w-full">
                          <div className="border-[3px] border-gray-400 border-solid h-6 rounded w-6"></div>
                          <Button className="border border-blue_gray-700 border-solid flex h-[50px] items-center justify-center md:ml-[0] ml-[26px] p-[13px] rounded-[14px] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                          </Button>
                          <Text
                            className="bg-gray-900_05 flex h-[50px] items-center justify-center mb-5 ml-3.5 md:ml-[0] rounded-[14px] text-2xl md:text-[22px] text-center text-green-500_01 sm:text-xl w-[50px]"
                            size="txtCairoBold24Green50001"
                          >
                            H
                          </Text>
                          <div className="h-16 md:h-9 sm:h-[102px] md:ml-[0] ml-[22px] md:mt-0 my-0.5 relative w-[39%] md:w-full">
                            <Text
                              className="absolute bottom-[0] left-[0] text-lg text-white-A700"
                              size="txtCairoBold18"
                            >
                              Paymen Received from AB Bank
                            </Text>
                            <div className="absolute flex sm:flex-col flex-row gap-3 inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtCairoSemiBold16Bluegray700"
                              >
                                hanzelqueen@mail.com
                              </Text>
                              <div className="bg-blue_gray-700 h-1 sm:mt-0 my-3 rounded-[50%] w-1"></div>
                              <Text
                                className="text-base text-blue_gray-700"
                                size="txtCairoSemiBold16Bluegray700"
                              >
                                October 25th, 2020 08:55 AM
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 md:ml-[0] ml-[427px] w-6"
                            src="images/img_verticon_blue_gray_700.svg"
                            alt="verticon"
                          />
                        </div>
                        <Text
                          className="mt-1 text-sm text-white-A700 w-[65%] sm:w-full"
                          size="txtOpenSans14WhiteA700"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ...
                        </Text>
                        <Line className="bg-blue_gray-900 h-px mt-[25px] rounded-[1px] w-full" />
                      </div>
                    </div>
                  </List>
                  <div className="flex sm:flex-col flex-row font-poppins md:gap-10 items-center justify-between w-[95%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-700"
                      size="txtPoppinsMedium16"
                    >
                      <span className="text-blue_gray-700 font-opensans text-left font-normal">
                        Showing{" "}
                      </span>
                      <span className="text-blue_gray-700 font-opensans text-left font-bold">
                        1-10
                      </span>
                      <span className="text-blue_gray-700 font-opensans text-left font-normal">
                        {" "}
                        from{" "}
                      </span>
                      <span className="text-blue_gray-700 font-opensans text-left font-bold">
                        46
                      </span>
                      <span className="text-blue_gray-700 font-opensans text-left font-normal">
                        {" "}
                        data
                      </span>
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[33%] sm:w-full">
                      <Button className="border border-blue_gray-700 border-solid flex h-[50px] items-center justify-center p-[13px] rounded-[14px] w-[50px]">
                        <Img
                          className="h-6"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                      </Button>
                      <div className="bg-gray-900_02 flex flex-row items-center justify-start sm:pr-5 pr-[25px] rounded-[14px]">
                        <Button className="bg-deep_purple-600 cursor-pointer font-bold h-[51px] leading-[normal] py-3 rounded-[14px] shadow-bs6 text-center text-lg text-white-A700 w-[51px]">
                          1
                        </Button>
                        <Text
                          className="ml-[22px] text-lg text-white-A700"
                          size="txtPoppinsMedium18"
                        >
                          2
                        </Text>
                        <Text
                          className="ml-11 text-lg text-white-A700"
                          size="txtPoppinsMedium18"
                        >
                          3
                        </Text>
                        <Text
                          className="ml-11 text-lg text-white-A700"
                          size="txtPoppinsMedium18"
                        >
                          4
                        </Text>
                      </div>
                      <Button className="border border-blue_gray-700 border-solid flex h-[50px] items-center justify-center p-[13px] rounded-[14px] w-[50px]">
                        <Img
                          className="h-6"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar5 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]" />
      </div>
    </>
  );
};

export default EmailPagePage;
