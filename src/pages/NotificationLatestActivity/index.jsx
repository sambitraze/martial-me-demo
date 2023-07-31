import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const btnchangedateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const NotificationLatestActivityPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1139px] mx-auto pb-[23px] relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
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
            <div className="flex flex-col gap-7 items-center justify-start md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="md:h-[62px] h-[85px] relative w-[17%] md:w-full">
                  <Text
                    className="absolute left-[0] sm:text-3xl md:text-[32px] text-[34px] text-white-A700 top-[0]"
                    size="txtCairoBold34"
                  >
                    Activity
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-lg text-white-A700 w-max"
                    size="txtOpenSans18"
                  >
                    Lorem ipsum dolor sit amet{" "}
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[679px] text-gray-500_01 text-lg"
                  size="txtCairoSemiBold18Gray50001"
                >
                  Activities:
                </Text>
                <SelectBox
                  className="bg-gray-900_01 md:flex-1 font-bold leading-[normal] mb-2.5 md:ml-[0] ml-[42px] md:mt-0 mt-1.5 pl-[35px] pr-6 sm:px-5 py-4 rounded-[14px] shadow-bs4 text-left text-lg text-white-A700 w-[12%] md:w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-2 mr-[0] w-[15px]"
                      src="images/img_arrow_gray_400.svg"
                      alt="arrow"
                    />
                  }
                  isMulti={false}
                  name="btnchangedate"
                  options={btnchangedateOptionsList}
                  isSearchable={false}
                  placeholder="Show All"
                />
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
              <div className="bg-gray-900_01 flex flex-col gap-[29px] items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                <div className="flex flex-row md:gap-10 items-end justify-between ml-5 md:ml-[0] w-[99%] md:w-full">
                  <Button className="bg-blue_gray-700 cursor-pointer font-bold leading-[normal] mb-1 min-w-[137px] py-1.5 rounded-[14px] text-base text-center text-white-A700">
                    Activity Today
                  </Button>
                  <Img
                    className="h-6 mt-[22px] w-6"
                    src="images/img_verticon_gray_500_01.svg"
                    alt="verticon"
                  />
                </div>
                <div className="md:h-[621px] h-[661px] mb-5 ml-5 md:ml-[0] relative w-[69%] md:w-full">
                  <Line className="absolute bg-blue_gray-700 h-[601px] left-[3%] top-[2%] w-px" />
                  <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[87%]">
                    <div className="flex flex-col gap-[18px] justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-between w-full">
                          <div className="flex flex-col h-[54px] items-center justify-start outline outline-[2px] outline-deep_purple-600 p-0.5 rounded-[14px] w-[54px]">
                            <div className="bg-gray-400 h-[50px] rounded-[14px] w-[50px]"></div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start sm:mt-0 mt-[3px]">
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtOpenSans16Gray50001"
                            >
                              June 31, 2020 11:23 AM
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              <span className="text-white-A700 font-cairo text-left font-bold">
                                Hans Brownlee
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                {" "}
                                has invite you to 2 new task in{" "}
                              </span>
                              <span className="text-deep_purple-600 font-cairo text-left font-bold">
                                Highspeed Projects
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 md:ml-[0] ml-[91px] w-[90%]"
                        orientation="horizontal"
                      >
                        <div className="bg-gray-900_02 flex flex-col items-center justify-end p-[15px] rounded-[14px] w-full">
                          <div className="flex flex-col items-start justify-start mt-[5px] w-[97%] md:w-full">
                            <div className="flex flex-row font-opensans items-center justify-between w-full">
                              <div className="flex flex-row gap-[11px] items-start justify-start w-[29%]">
                                <div className="bg-orange-400 h-2.5 mb-1.5 mt-[3px] rounded-[50%] w-2.5"></div>
                                <Text
                                  className="text-orange-400 text-sm"
                                  size="txtOpenSansRomanSemiBold14"
                                >
                                  Important
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[9px] items-start justify-start w-[36%]">
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_clock11.svg"
                                  alt="clockEleven"
                                />
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSansRomanSemiBold14Gray50001"
                                >
                                  Due in 4 days
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="mt-[3px] text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Visual Graphic for Presentation to Client
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-900_02 flex flex-col items-center justify-end p-[15px] rounded-[14px] w-full">
                          <div className="flex flex-col items-start justify-start mt-1 w-[97%] md:w-full">
                            <div className="flex flex-row font-opensans items-start justify-between w-full">
                              <div className="flex flex-row gap-[11px] items-center justify-start w-[27%]">
                                <div className="bg-green-500 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                                <Text
                                  className="text-green-500 text-sm"
                                  size="txtOpenSansRomanSemiBold14Green500"
                                >
                                  Database
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[9px] items-start justify-start w-[36%]">
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_clock11.svg"
                                  alt="clockEleven"
                                />
                                <Text
                                  className="text-gray-500_01 text-right text-sm"
                                  size="txtOpenSansRomanSemiBold14Gray50001"
                                >
                                  Due in 4 days
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="mt-1 text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Setup main database for API
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute bottom-[18%] flex flex-col gap-[26px] inset-x-[0] items-start justify-start mx-auto w-full">
                    <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-full">
                          <Img
                            className="h-[54px] w-[54px]"
                            src="images/img_television.svg"
                            alt="television"
                          />
                          <div className="flex flex-col gap-2 items-start justify-start md:mt-0 mt-[3px]">
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtOpenSans16Gray50001"
                            >
                              June 31, 2020 11:23 AM
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              <span className="text-white-A700 font-cairo text-left font-bold">
                                Chintya Kloe
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                {" "}
                                moved task “
                              </span>
                              <span className="text-green-500 font-cairo text-left font-bold">
                                Button Contact not working when clicked
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                ” from{" "}
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-bold">
                                On Progress{" "}
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                to{" "}
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-bold">
                                Done
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[22px] justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[64%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-between w-full">
                          <Img
                            className="h-[54px] w-[54px]"
                            src="images/img_lock.svg"
                            alt="lock"
                          />
                          <div className="flex flex-col gap-2 items-start justify-start sm:mt-0 mt-[3px]">
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtOpenSans16Gray50001"
                            >
                              June 31, 2020 11:23 AM
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              <span className="text-white-A700 font-cairo text-left font-bold">
                                Jimmie
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                {" "}
                                add attached in task “
                              </span>
                              <span className="text-deep_purple-600 font-cairo text-left font-bold">
                                Crete base HTML project landing page
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                ”
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-[152px] md:ml-[0] ml-[83px]"
                        src="images/img_card.svg"
                        alt="card"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[86%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-full">
                        <Img
                          className="h-[54px] w-[54px]"
                          src="images/img_lock.svg"
                          alt="lock_One"
                        />
                        <div className="flex flex-col gap-[13px] items-start justify-start md:mt-0 mt-[3px]">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-500_01"
                              size="txtOpenSans16Gray50001"
                            >
                              June 31, 2020 11:23 AM
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              <span className="text-white-A700 font-cairo text-left font-bold">
                                Ibrahim Lubis
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                {" "}
                                update progress task “
                              </span>
                              <span className="text-pink-400 font-cairo text-left font-bold">
                                Button Contact not working when clicked
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                ” from{" "}
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-bold">
                                20%{" "}
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-semibold">
                                to{" "}
                              </span>
                              <span className="text-white-A700 font-cairo text-left font-bold">
                                90%
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
                            <div className="h-[7px] overflow-hidden relative w-full">
                              <div className="w-full h-full absolute bg-blue_gray_900 rounded-[3px]"></div>
                              <div
                                className="h-full absolute bg-deep_purple_600  rounded-[3px]"
                                style={{ width: "38%" }}
                              ></div>
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
        </div>
        <Sidebar className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]">
          <Img
            className="h-[120px] md:h-auto mb-[996px] object-cover"
            src="images/img_header.png"
            alt="header"
          />
          <Text
            className="mb-[961px] ml-[50px] mr-[189px] mt-[132px] text-base text-gray-400_01 tracking-[1.00px]"
            size="txtOpenSansBold16"
          >
            MAIN MENU
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "8px 8px 8px 50px",
                backgroundColor: "#15132b",
                gap: "26px",
                marginTop: "14px",
                color: "#464365",
                fontWeight: 600,
                fontSize: "18px",
                [`&:hover, &.ps-active`]: {
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
            className="flex flex-col font-cairo items-center justify-start mb-[447px] mt-[171px] pt-2 w-full"
          >
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_dashboard1.svg"
                  alt="dashboardOne"
                />
              }
              active={window.location.pathname === "/dashboard"}
              href="/dashboard"
            >
              <Text>Dashboard</Text>
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
                  alt="calendarsilhoue"
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
          <div className="font-cairo md:h-[1116px] h-[203px] mb-[185px] mt-[728px] mx-[50px] relative w-[72%]">
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
            className="mb-[109px] ml-[50px] mr-[46px] mt-[977px] text-base text-blue_gray-700 w-[73%] sm:w-full"
            size="txtCairoBold16Bluegray700"
          >
            Kleon Clean Admin Dashboard
          </Text>
          <Text
            className="mb-[77px] mt-[1013px] mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default NotificationLatestActivityPage;
