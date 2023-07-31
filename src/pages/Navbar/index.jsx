import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const enOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const NavbarPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-cairo h-[3401px] items-center justify-start mx-auto pb-[41px] w-full"
        style={{ backgroundImage: "url('images/img_30navbar.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
          <div className="md:h-[1079px] h-[1080px] md:px-5 relative w-full">
            <div className="absolute h-[1007px] md:h-[855px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[3%] w-[77%]">
                <div className="bg-gray-900_01 flex flex-col items-start justify-start p-[34px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                  <div className="flex flex-col items-start justify-start mb-[704px] md:ml-[0] ml-[15px]">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                      size="txtCairoBold34"
                    >
                      Blank Page
                    </Text>
                    <Text
                      className="text-lg text-white-A700"
                      size="txtOpenSans18"
                    >
                      Lorem ipsum dolor sit amet{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full">
                <header className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto w-full">
                  <div className="bg-gray-900_02 flex md:flex-1 sm:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[395px] md:mt-0 my-[26px] p-[18px] rounded-[34px] w-[26%] md:w-full">
                    <Img
                      className="h-7 sm:ml-[0] ml-[19px] w-7"
                      src="images/img_search_2_blue_gray_700.svg"
                      alt="searchTwo"
                    />
                    <Text
                      className="mr-[305px] text-base text-gray-500"
                      size="txtCairoSemiBold16Gray500"
                    >
                      Search here
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[79px] md:mt-0 my-11 text-base text-deep_purple-600 underline"
                    size="txtCairoBold16Deeppurple600"
                  >
                    OTHER MENUS
                  </Text>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[27px] grid grid-cols-4 mb-[46px] md:ml-[0] ml-[54px] md:mt-0 mt-[29px] w-[13%] md:w-full"
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
                  <div className="bg-gray-900_02 flex md:flex-1 flex-row gap-3.5 items-center justify-center md:ml-[0] ml-[54px] md:mt-0 my-[26px] p-[18px] rounded-[34px] w-[10%] md:w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_unitedstates_1.svg"
                      alt="unitedstatesOne"
                    />
                    <Text
                      className="text-base text-white-A700"
                      size="txtCairoBold16"
                    >
                      ENGLISH
                    </Text>
                    <Img
                      className="h-2 mr-[5px]"
                      src="images/img_arrow.svg"
                      alt="arrow"
                    />
                  </div>
                  <Line className="bg-blue_gray-900 h-14 md:h-px md:ml-[0] ml-[30px] md:mt-0 my-8 rounded-[1px] md:w-full w-px" />
                  <div className="flex md:flex-1 flex-row gap-6 items-center justify-center md:ml-[0] ml-[30px] mr-[50px] md:mt-0 my-[30px] w-[12%] md:w-full">
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
                          alt="arrow_One"
                        />
                      </div>
                    </div>
                  </div>
                </header>
                <div className="md:h-[506px] h-[559px] sm:h-[731px] ml-auto mr-[345px] mt-[-20px] w-[24%] sm:w-full z-[1]">
                  <div className="absolute bg-gray-900_02 flex flex-col h-max inset-[0] items-center justify-center m-auto py-[25px] rounded-[14px] shadow-bs8 w-full">
                    <div className="flex flex-col gap-[17px] items-center justify-start mt-[5px] w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start w-[87%] md:w-full">
                        <div className="flex flex-row items-end justify-between w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Notifications
                          </Text>
                          <a
                            href="javascript:"
                            className="mb-1 mt-2.5 text-base text-gray-500_01 text-right"
                          >
                            <Text size="txtCairoBold16Gray50001">View All</Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-[9px] items-end justify-start w-full">
                            <div className="flex sm:flex-col flex-row gap-6 items-start justify-between w-full">
                              <Button className="bg-deep_purple-600 flex h-[51px] items-center justify-center sm:mt-0 mt-1 p-[13px] rounded-[14px] w-[51px]">
                                <Img
                                  className="h-6"
                                  src="images/img_energy11.svg"
                                  alt="energyEleven"
                                />
                              </Button>
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                                  size="txtCairoSemiBold18WhiteA700"
                                >
                                  <span className="text-white-A700 font-cairo text-left font-bold">
                                    Jackie Kun
                                  </span>
                                  <span className="text-white-A700 font-cairo text-left font-semibold">
                                    {" "}
                                  </span>
                                  <span className="text-white-A700 font-cairo text-left font-normal">
                                    mentioned you at
                                  </span>
                                  <span className="text-deep_purple-600 font-cairo text-left font-bold">
                                    {" "}
                                    Kleon Projects
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row font-opensans items-start justify-between w-[82%] md:w-full">
                              <Text
                                className="mt-0.5 text-base text-blue_gray-700"
                                size="txtOpenSans16Bluegray700"
                              >
                                2m ago
                              </Text>
                              <Text
                                className="mb-0.5 text-base text-deep_purple-600 text-right"
                                size="txtOpenSansRomanSemiBold16Deeppurple600"
                              >
                                Mark as read
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-end pt-[21px] sm:px-5 px-[21px] w-full">
                        <List
                          className="flex flex-col gap-[19px] items-center w-[96%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-col items-center justify-start my-0 w-full">
                            <div className="flex flex-col gap-3 justify-start w-full">
                              <div className="flex sm:flex-col flex-row font-cairo gap-6 items-start justify-between w-full">
                                <Button className="bg-pink-400 flex h-[51px] items-center justify-center sm:mt-0 mt-1 p-[13px] rounded-[14px] w-[51px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_energy11.svg"
                                    alt="energyEleven"
                                  />
                                </Button>
                                <div className="flex flex-col items-center justify-start">
                                  <Text
                                    className="leading-[28.00px] text-lg text-white-A700 w-full"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    <span className="text-white-A700 font-cairo text-left font-bold">
                                      Olivia Johanna{" "}
                                    </span>
                                    <span className="text-white-A700 font-cairo text-left font-semibold">
                                      has created new task at
                                    </span>
                                    <span className="text-deep_purple-600 font-cairo text-left font-bold">
                                      {" "}
                                      Kleon Projects
                                    </span>
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[75px] text-base text-blue_gray-700"
                                size="txtOpenSans16Bluegray700"
                              >
                                2m ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-blue_gray-900 w-full rounded-[1px]" />
                          <div className="flex flex-col items-center justify-start my-0 w-full">
                            <div className="flex flex-col gap-3 justify-start w-full">
                              <div className="flex sm:flex-col flex-row font-cairo gap-6 items-start justify-between w-full">
                                <Button className="flex h-[51px] items-center justify-center sm:mt-0 mt-1 outline outline-[2px] outline-red-A200 p-[13px] rounded-[14px] w-[51px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_clock2_red_a200.svg"
                                    alt="clockTwo"
                                  />
                                </Button>
                                <div className="flex flex-col items-center justify-start">
                                  <Text
                                    className="leading-[28.00px] text-lg text-white-A700 w-full"
                                    size="txtCairoSemiBold18WhiteA700"
                                  >
                                    <span className="text-white-A700 font-cairo text-left font-semibold">
                                      [REMINDER] Due date of
                                    </span>
                                    <span className="text-deep_purple-600 font-cairo text-left font-bold">
                                      {" "}
                                      Highspeed Studios Projects{" "}
                                    </span>
                                    <span className="text-white-A700 font-cairo text-left font-semibold">
                                      te task will be coming
                                    </span>
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[75px] text-base text-blue_gray-700"
                                size="txtOpenSans16Bluegray700"
                              >
                                2m ago
                              </Text>
                            </div>
                          </div>
                        </List>
                        <Button className="border border-blue_gray-700 border-solid cursor-pointer font-bold leading-[normal] min-w-[371px] sm:min-w-full py-[13px] rounded-[14px] text-base text-center text-white-A700">
                          View All Notification
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-6 left-[3%] top-[0] w-6"
                    src="images/img_offer_blue_gray_900.svg"
                    alt="offer"
                  />
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[18%]">
              <div className="bg-gray-900_01 flex flex-col items-center justify-start pb-[41px] shadow-bs1 w-full">
                <Img
                  className="h-[120px] md:h-auto object-cover"
                  src="images/img_header.png"
                  alt="header"
                />
                <div className="flex flex-col font-opensans gap-6 justify-start mt-3 w-full">
                  <Text
                    className="md:ml-[0] ml-[50px] text-base text-gray-400_01 tracking-[1.00px]"
                    size="txtOpenSansBold16"
                  >
                    MAIN MENU
                  </Text>
                  <div className="flex flex-col font-cairo gap-3.5 items-center justify-start w-full">
                    <div className="bg-gray-900_01 flex flex-row items-center justify-end w-full">
                      <Img
                        className="h-7 w-7"
                        src="images/img_dashboard1_deep_purple_600.svg"
                        alt="dashboardOne"
                      />
                      <Text
                        className="ml-[26px] text-deep_purple-600 text-lg"
                        size="txtCairoBold18Deeppurple600"
                      >
                        Dashboard
                      </Text>
                      <Line className="bg-deep_purple-600 h-[49px] ml-[150px] rounded-[3px] w-1.5" />
                    </div>
                    <div className="bg-gray-900_01 flex flex-row items-center justify-end p-[7px] w-full">
                      <Img
                        className="h-7 w-7"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                      <Text
                        className="ml-[26px] text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        Email
                      </Text>
                      <Text
                        className="bg-light_blue-300 flex h-[29px] items-center justify-center ml-[82px] my-0.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]"
                        size="txtCairoBold14"
                      >
                        17
                      </Text>
                      <Img
                        className="h-6 ml-[15px] mr-10 w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[7px] w-full">
                      <Img
                        className="h-7 ml-[42px] w-7"
                        src="images/img_comment1.svg"
                        alt="commentOne"
                      />
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        Chat
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-row items-center justify-end p-[7px] w-full">
                      <Img
                        className="h-7 w-7"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="ml-[25px] text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        Kanban
                      </Text>
                      <Img
                        className="h-6 ml-[111px] mr-10 w-6"
                        src="images/img_arrowright_blue_gray_700.svg"
                        alt="arrowright"
                      />
                    </div>
                    <div className="bg-gray-900_01 flex flex-row items-center justify-start p-[7px] w-full">
                      <Img
                        className="h-7 ml-11 w-7"
                        src="images/img_contact1.svg"
                        alt="contactOne"
                      />
                      <Text
                        className="ml-[25px] text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        Contact
                      </Text>
                      <Button className="bg-pink-400 cursor-pointer font-bold leading-[normal] min-w-[63px] ml-[62px] py-1 rounded-[17px] text-center text-sm text-white-A700">
                        NEW
                      </Button>
                    </div>
                    <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[7px] w-full">
                      <Img
                        className="h-7 ml-[42px] w-7"
                        src="images/img_calendarsilhouette.svg"
                        alt="calendarsilhoue"
                      />
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        Calendar
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-row items-center justify-end p-[7px] w-full">
                      <Img
                        className="h-7 w-7"
                        src="images/img_invoice1.svg"
                        alt="invoiceOne"
                      />
                      <Text
                        className="ml-[26px] text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        Invoices
                      </Text>
                      <Img
                        className="h-6 ml-[107px] mr-10 w-6"
                        src="images/img_arrowright_blue_gray_700_24x24.svg"
                        alt="arrowright_One"
                      />
                    </div>
                    <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[5px] w-full">
                      <Img
                        className="h-7 ml-11 w-7"
                        src="images/img_setting1.svg"
                        alt="settingOne"
                      />
                      <Text
                        className="mt-[5px] text-blue_gray-700 text-lg"
                        size="txtCairoSemiBold18"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="font-cairo h-[203px] md:h-[254px] mt-[51px] relative w-[72%]">
                  <div className="bg-gradient  h-[203px] m-auto rounded-[32px] shadow-bs w-[63%]"></div>
                  <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[32px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[203px] items-center justify-start p-[21px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group77.png')",
                      }}
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
                  className="mt-[46px] text-base text-blue_gray-700 w-[73%] sm:w-full"
                  size="txtCairoBold16Bluegray700"
                >
                  Kleon Clean Admin Dashboard
                </Text>
                <Text
                  className="mt-1.5 text-blue_gray-700 text-sm w-[72%] sm:w-full"
                  size="txtCairoRegular14"
                >
                  Made with ♥ by Peterdraw
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-end mx-auto p-[26px] sm:px-5 w-full">
              <Img
                className="h-[46px] w-[46px]"
                src="images/img_menu.svg"
                alt="menu"
              />
              <Text
                className="md:ml-[0] ml-[46px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                size="txtCairoBold34"
              >
                Dashboard
              </Text>
              <Input
                name="searchbox"
                placeholder="Search here"
                className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                wrapClassName="bg-gray-900_01 flex md:flex-1 md:ml-[0] ml-[116px] px-[35px] py-[18px] rounded-[34px] w-[27%] md:w-full"
                prefix={
                  <Img
                    className="h-7 mr-5 my-px"
                    src="images/img_search2.svg"
                    alt="search 2"
                  />
                }
              ></Input>
              <Img
                className="h-[31px] md:ml-[0] ml-[197px]"
                src="images/img_icons_blue_gray_700.svg"
                alt="icons"
              />
              <div className="flex md:flex-1 flex-row gap-6 items-center justify-center md:ml-[0] ml-[60px] w-[12%] md:w-full">
                <Img
                  className="h-[57px] w-[57px]"
                  src="images/img_user_gray_400.svg"
                  alt="user_One"
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
                      alt="arrow_Two"
                    />
                  </div>
                </div>
              </div>
              <SelectBox
                className="md:flex-1 font-bold leading-[normal] md:ml-[0] ml-[50px] mr-6 text-base text-left text-white-A700 w-[3%] md:w-full"
                placeholderClassName="text-white-A700"
                indicator={
                  <Img
                    className="h-2 mr-[0] w-[15px]"
                    src="images/img_arrow.svg"
                    alt="arrow"
                  />
                }
                isMulti={false}
                name="groupTwo"
                options={enOptionsList}
                isSearchable={false}
                placeholder="EN"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[1080px] items-center justify-start mb-auto mt-[-120px] pb-[267px] w-[9%] z-[1]"
              style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
            >
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[33px] sm:px-5 w-full">
                  <Img
                    className="h-[54px] md:h-auto object-cover w-[54px]"
                    src="images/img_logo.png"
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[74px] md:h-auto object-cover"
                    src="images/img_dashboard.png"
                    alt="dashboard_Two"
                  />
                  <div className="h-[51px] md:h-[76px] mt-[26px] relative w-full">
                    <div className="absolute bg-gray-900_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[11px] w-full">
                      <Img
                        className="h-7 w-7"
                        src="images/img_mail.svg"
                        alt="mail_One"
                      />
                    </div>
                    <Text
                      className="absolute bg-light_blue-300 border-2 border-gray-900_01 border-solid flex h-[29px] items-center justify-center right-[30%] rounded-[14px] text-center text-gray-900_01 text-sm top-[0] w-[29px]"
                      size="txtCairoBold14Gray90001"
                    >
                      17
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[39px] p-[11px] w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_comment1.svg"
                      alt="commentOne_One"
                    />
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[39px] p-[11px] w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_grid.svg"
                      alt="grid_Two"
                    />
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[39px] p-[11px] w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_contact1.svg"
                      alt="contactOne_One"
                    />
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[39px] p-[11px] w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_calendarsilhouette.svg"
                      alt="calendarsilhoue_One"
                    />
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[39px] p-[11px] w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_invoice1.svg"
                      alt="invoiceOne_One"
                    />
                  </div>
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[39px] p-[11px] w-full">
                    <Img
                      className="h-7 w-7"
                      src="images/img_setting1.svg"
                      alt="settingOne_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-[73px] ml-auto mr-[50px] mt-[-NaNpx] w-[87%] z-[1]">
              <div className="bg-gray-900_01 flex flex-col items-start justify-start p-[34px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                <div className="flex flex-col items-start justify-start mb-[704px] md:ml-[0] ml-[15px]">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtCairoBold34"
                  >
                    Blank Page
                  </Text>
                  <Text
                    className="text-lg text-white-A700"
                    size="txtOpenSans18"
                  >
                    Lorem ipsum dolor sit amet{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="flex h-[1080px] md:h-[933px] justify-end relative w-full">
              <div className="flex flex-col h-full items-center justify-start mb-[73px] ml-auto mr-[50px] mt-auto w-[86%]">
                <div className="bg-gray-900_01 flex flex-col items-start justify-start p-[34px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                  <div className="flex flex-col items-start justify-start mb-[704px] md:ml-[0] ml-[15px]">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-gray-900_01"
                      size="txtCairoBold34Gray90001"
                    >
                      Blank Page
                    </Text>
                    <Text
                      className="text-gray-900_01 text-lg"
                      size="txtOpenSans18Gray90001"
                    >
                      Lorem ipsum dolor sit amet{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-start justify-end mx-auto pt-[26px] sm:px-5 px-[26px] w-full">
                  <Img
                    className="h-[46px] md:mt-0 mt-[11px] w-[46px]"
                    src="images/img_menu.svg"
                    alt="menu_One"
                  />
                  <div className="flex md:flex-1 flex-row font-poppins gap-[27px] items-center justify-center md:ml-[0] ml-[52px] md:mt-0 mt-1 w-[13%] md:w-full">
                    <div className="md:h-7 h-[43px] relative w-[17%]">
                      <Img
                        className="absolute bottom-[0] h-7 left-[0] w-7"
                        src="images/img_bell1.svg"
                        alt="bellOne"
                      />
                      <Text
                        className="absolute bg-light_blue-300 flex h-[26px] items-center justify-center outline outline-[3px] outline-gray-900_01 right-[0] rounded-[50%] text-center text-gray-900_01 text-sm top-[0] w-[26px]"
                        size="txtPoppinsSemiBold14"
                      >
                        12
                      </Text>
                    </div>
                    <div className="md:h-7 h-[43px] relative w-[16%]">
                      <Img
                        className="absolute bottom-[0] h-7 left-[0] w-7"
                        src="images/img_gift1.svg"
                        alt="giftOne"
                      />
                      <Text
                        className="absolute bg-light_blue-300 flex h-[26px] items-center justify-center outline outline-[3px] outline-gray-900_01 right-[0] rounded-[50%] text-center text-gray-900_01 text-sm top-[0] w-[26px]"
                        size="txtPoppinsSemiBold14"
                      >
                        5
                      </Text>
                    </div>
                    <div className="md:h-7 h-[43px] relative w-[17%]">
                      <Img
                        className="absolute bottom-[0] h-7 left-[0] w-7"
                        src="images/img_checkbox11.svg"
                        alt="checkboxEleven"
                      />
                      <Text
                        className="absolute bg-light_blue-300 flex h-[26px] items-center justify-center outline outline-[3px] outline-gray-900_01 right-[0] rounded-[50%] text-center text-gray-900_01 text-sm top-[0] w-[26px]"
                        size="txtPoppinsSemiBold14"
                      >
                        2
                      </Text>
                    </div>
                    <div className="h-11 md:h-7 relative w-[16%]">
                      <Img
                        className="absolute bottom-[0] h-7 left-[0] w-7"
                        src="images/img_office1.svg"
                        alt="officeOne"
                      />
                      <Text
                        className="absolute bg-pink-400 flex h-[26px] items-center justify-center outline outline-[3px] outline-gray-900_01 right-[0] rounded-[50%] text-center text-gray-900_01 text-sm top-[0] w-[26px]"
                        size="txtPoppinsSemiBold14"
                      >
                        !
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row font-cairo sm:gap-5 items-start justify-center md:ml-[0] ml-[136px] md:mt-0 mt-[17px] w-[23%] md:w-full">
                    <div className="flex flex-col gap-[34px] items-center justify-start sm:mt-0 mt-0.5 w-[29%] sm:w-full">
                      <Text
                        className="text-deep_purple-600 text-lg"
                        size="txtCairoBold18Deeppurple600"
                      >
                        Mega Menu
                      </Text>
                      <Line className="bg-deep_purple-600 h-1.5 rounded-[3px] w-full" />
                    </div>
                    <Text
                      className="sm:ml-[0] ml-[47px] text-blue_gray-700 text-lg"
                      size="txtCairoSemiBold18"
                    >
                      News
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[62px] text-blue_gray-700 text-lg"
                      size="txtCairoSemiBold18"
                    >
                      FAQ
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[61px] text-blue_gray-700 text-lg"
                      size="txtCairoSemiBold18"
                    >
                      About
                    </Text>
                  </div>
                  <Img
                    className="h-7 md:ml-[0] ml-[232px] md:mt-0 mt-5 w-7"
                    src="images/img_search2.svg"
                    alt="searchTwo_One"
                  />
                  <SelectBox
                    className="bg-gray-900_02 md:flex-1 font-bold leading-[normal] mb-[26px] md:ml-[0] ml-[43px] pl-5 sm:pr-5 pr-6 py-[18px] rounded-[34px] text-base text-left text-white-A700 w-[10%] md:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-2 mr-[0] w-[15px]"
                        src="images/img_arrow_gray_400.svg"
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
                    name="language_Four"
                    isMulti={false}
                    options={languageFourOptionsList}
                  />
                  <Line className="bg-blue_gray-900 h-14 md:h-px mb-8 md:ml-[0] ml-[30px] md:mt-0 mt-1.5 rounded-[1px] md:w-full w-px" />
                  <div className="flex md:flex-1 flex-row font-cairo gap-6 items-center justify-center md:ml-[0] ml-[30px] mr-6 md:mt-0 mt-[5px] w-[12%] md:w-full">
                    <Img
                      className="h-[57px] w-[57px]"
                      src="images/img_user_gray_400.svg"
                      alt="user_Two"
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
                          src="images/img_arrow_gray_400.svg"
                          alt="arrow_Four"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[1080px] items-center justify-start mb-auto mt-[-120px] pb-[107px] w-[10%] z-[1]"
                  style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
                >
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[33px] sm:px-5 w-full">
                      <Img
                        className="h-[54px] md:h-auto object-cover w-[54px]"
                        src="images/img_logo.png"
                        alt="logo_One"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <div className="bg-gray-900_04 flex flex-col gap-[7px] items-center justify-end p-1.5 rounded-[11px] w-[71%] md:w-full">
                        <Img
                          className="h-[34px] mt-2 w-[34px]"
                          src="images/img_dashboard1_deep_purple_600.svg"
                          alt="dashboardOne_One"
                        />
                        <Text
                          className="text-center text-deep_purple-600 text-lg"
                          size="txtCairoBold18Deeppurple600"
                        >
                          Dashboard
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <div className="bg-gray-900_01 flex flex-col gap-[7px] items-center justify-end p-1.5 w-full">
                          <div className="h-10 md:h-[31px] mt-0.5 relative w-[29%]">
                            <Img
                              className="absolute bottom-[0] h-7 left-[0] w-7"
                              src="images/img_mail.svg"
                              alt="mail_Two"
                            />
                            <Text
                              className="absolute bg-light_blue-300 border-2 border-gray-900_01 border-solid flex h-[29px] items-center justify-center right-[0] rounded-[14px] text-center text-gray-900_01 text-sm top-[0] w-[29px]"
                              size="txtCairoBold14Gray90001"
                            >
                              17
                            </Text>
                          </div>
                          <Text
                            className="text-blue_gray-700 text-center text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Email
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 flex flex-col gap-[7px] items-center justify-end p-1.5 w-full">
                          <Img
                            className="h-7 mt-3.5 w-7"
                            src="images/img_comment1.svg"
                            alt="commentOne_Two"
                          />
                          <Text
                            className="text-blue_gray-700 text-center text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Chat
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 flex flex-col gap-[7px] items-center justify-end p-1.5 w-full">
                          <Img
                            className="h-7 mt-3.5 w-7"
                            src="images/img_grid.svg"
                            alt="grid_Three"
                          />
                          <Text
                            className="text-blue_gray-700 text-center text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Kanban
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 flex flex-col gap-[7px] items-center justify-end p-1.5 w-full">
                          <Img
                            className="h-7 mt-3.5 w-7"
                            src="images/img_contact1.svg"
                            alt="contactOne_Two"
                          />
                          <Text
                            className="text-blue_gray-700 text-center text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Contacts
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 flex flex-col gap-[7px] items-center justify-end p-1.5 w-full">
                          <Img
                            className="h-7 mt-3.5 w-7"
                            src="images/img_calendarsilhouette.svg"
                            alt="calendarsilhoue_Two"
                          />
                          <Text
                            className="text-blue_gray-700 text-center text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Calendar
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 flex flex-col gap-[7px] items-center justify-end p-1.5 w-full">
                          <Img
                            className="h-7 mt-3.5 w-7"
                            src="images/img_invoice1.svg"
                            alt="invoiceOne_Two"
                          />
                          <Text
                            className="text-blue_gray-700 text-center text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Email
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 flex flex-col gap-[7px] items-center justify-end p-1.5 w-full">
                          <Img
                            className="h-7 mt-3.5 w-7"
                            src="images/img_setting1.svg"
                            alt="settingOne_Two"
                          />
                          <Text
                            className="text-blue_gray-700 text-center text-lg"
                            size="txtCairoSemiBold18"
                          >
                            Email
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
