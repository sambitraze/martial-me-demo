import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const InvoiceDetailPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1136px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col gap-[30px] justify-start w-full">
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
            <div className="bg-gray-900_01 flex flex-col font-opensans gap-8 items-center justify-start md:ml-[0] ml-[395px] mr-[50px] p-[21px] md:px-5 rounded-[14px] shadow-bs4 w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                <Img
                  className="h-[38px] md:mt-0 mt-[17px] w-[38px]"
                  src="images/img_btnback.svg"
                  alt="btnback"
                />
                <Text
                  className="md:ml-[0] ml-[31px] md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                  size="txtCairoBold38"
                >
                  Invoice
                </Text>
                <Text
                  className="md:ml-[0] ml-[23px] md:mt-0 mt-[18px] text-2xl md:text-[22px] text-gray-500_01 sm:text-xl"
                  size="txtCairoBold24Gray50001"
                >
                  #INV-00012456
                </Text>
                <Button
                  className="bg-blue_gray-900_01 cursor-pointer flex items-center justify-center min-w-[174px] md:ml-[0] ml-[569px] md:mt-0 my-[11px] px-5 py-[11px] rounded-[14px]"
                  leftIcon={
                    <Img
                      className="h-6 mt-px mr-[13px]"
                      src="images/img_read_1_1.svg"
                      alt="read (1) 1"
                    />
                  }
                >
                  <div className="font-bold font-opensans leading-[normal] text-base text-blue-400_01 text-right">
                    Invoice Sent
                  </div>
                </Button>
                <div className="bg-deep_purple-600 flex flex-row font-cairo gap-[21px] items-center justify-center md:ml-[0] ml-[19px] md:mt-0 my-[11px] p-1.5 rounded-[12px] w-[12%] md:w-full">
                  <Img
                    className="h-[25px] ml-[19px] w-[25px]"
                    src="images/img_download21.svg"
                    alt="downloadTwentyOne"
                  />
                  <Text
                    className="mr-3 text-lg text-white-A700"
                    size="txtCairoSemiBold18WhiteA700"
                  >
                    Download
                  </Text>
                </div>
                <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center md:ml-[0] ml-[18px] md:mt-0 my-4 p-[7px] rounded-[12px] w-[38px]">
                  <Img
                    className="h-6"
                    src="images/img_computerprinter.svg"
                    alt="computerprinter"
                  />
                </Button>
                <Img
                  className="h-6 md:ml-[0] ml-[27px] md:mt-0 mt-6 w-6"
                  src="images/img_verticon_gray_500_01.svg"
                  alt="verticon"
                />
              </div>
              <div className="flex flex-col gap-[54px] items-center justify-start mb-[30px] w-[92%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[58px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start mb-[18px] w-1/4 sm:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              FROM
                            </Text>
                            <Img
                              className="h-[122px] md:h-auto object-cover w-[122px]"
                              src="images/img_logo.png"
                              alt="logo"
                            />
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-0 mt-16 w-[68%] sm:w-full">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtCairoBold28"
                            >
                              Kleon Dashboard
                            </Text>
                            <Text
                              className="mt-0.5 text-base text-white-A700"
                              size="txtOpenSans16"
                            >
                              <span className="text-white-A700 font-opensans text-left font-normal">
                                <>
                                  18 Guild Street London, EC2V 5PX
                                  <br />
                                </>
                              </span>
                              <span className="text-white-A700 font-opensans text-left font-semibold">
                                United Kingdom
                              </span>
                            </Text>
                            <div className="flex flex-row font-opensans gap-[30px] items-center justify-between mt-4 w-full">
                              <Text
                                className="text-base text-white-A700"
                                size="txtOpenSans16"
                              >
                                kleonadmin@mail.com
                              </Text>
                              <Text
                                className="text-base text-white-A700"
                                size="txtOpenSans16"
                              >
                                tel:(012) 3456 789
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start mb-[18px] w-[24%] sm:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              CLIENT
                            </Text>
                            <div className="bg-white-A700 flex flex-col h-[122px] items-center justify-start p-[21px] sm:px-5 rounded-[14px] shadow-bs3 w-[122px]">
                              <div className="flex flex-col h-[78px] items-center justify-start w-[78px]">
                                <Img
                                  className="h-[75px] w-[75px]"
                                  src="images/img_brightness.svg"
                                  alt="brightness"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:mt-0 mt-16 w-[70%] sm:w-full">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtCairoBold28"
                            >
                              Circle Hunt Inc.
                            </Text>
                            <Text
                              className="mt-[3px] text-base text-white-A700"
                              size="txtOpenSans16"
                            >
                              <span className="text-white-A700 font-opensans text-left font-normal">
                                <>
                                  Franklin Avenue Street New York, ABC 5562
                                  <br />
                                </>
                              </span>
                              <span className="text-white-A700 font-opensans text-left font-semibold">
                                United State
                              </span>
                            </Text>
                            <div className="flex flex-row font-opensans gap-[30px] items-center justify-between mt-4 w-full">
                              <Text
                                className="text-base text-white-A700"
                                size="txtOpenSans16"
                              >
                                circlehuntadmin@mail.com
                              </Text>
                              <Text
                                className="text-base text-white-A700"
                                size="txtOpenSans16"
                              >
                                tel:(012) 3456 789
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient5  h-[7px] rounded-[3px] w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[46px] items-start justify-start w-[36%] md:w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            PROJECT NAME
                          </Text>
                          <Text
                            className="capitalize leading-[44.00px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                            size="txtCairoSemiBold28"
                          >
                            Redesign landing page website for company profile
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            DUE DATE
                          </Text>
                          <Text
                            className="capitalize text-deep_purple-600 text-lg"
                            size="txtCairoSemiBold18Deeppurple600"
                          >
                            Saturday October 24th, 2020
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[54%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            ITEM DESCRIPTION
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[113px] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            DURATION
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[50px] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            RATE
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[168px] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            AMOUNT
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row font-cairo sm:gap-5 items-start justify-start mt-[18px] w-full">
                          <Text
                            className="capitalize text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Wireframing
                          </Text>
                          <Text
                            className="capitalize sm:ml-[0] ml-[181px] text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            64h
                          </Text>
                          <Text
                            className="capitalize sm:ml-[0] ml-[113px] text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            60.00
                          </Text>
                          <Text
                            className="capitalize ml-44 sm:ml-[0] text-lg text-right text-white-A700"
                            size="txtCairoBold18"
                          >
                            $ 360.00
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col font-cairo h-[151px] items-center justify-end mt-1 py-[5px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group151.svg')",
                          }}
                        >
                          <List
                            className="flex flex-col gap-[13px] items-center mt-1 w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-0.5 text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                App UI Design Phase 1
                              </Text>
                              <Text
                                className="capitalize mb-0.5 sm:ml-[0] ml-[107px] text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                441h
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[103px] text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                35.00
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[151px] text-lg text-right text-white-A700"
                                size="txtCairoBold18"
                              >
                                $ 15,435.00
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-0.5 text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Desgin System
                              </Text>
                              <Text
                                className="capitalize mb-0.5 sm:ml-[0] ml-[163px] text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                12h
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[113px] text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                75.00
                              </Text>
                              <Text
                                className="capitalize ml-44 sm:ml-[0] text-lg text-right text-white-A700"
                                size="txtCairoBold18"
                              >
                                $ 900.00
                              </Text>
                            </div>
                            <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-0.5 text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                UX Writing
                              </Text>
                              <Text
                                className="capitalize mb-0.5 sm:ml-[0] ml-[195px] text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                54h
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[113px] text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                22.00
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[161px] text-lg text-right text-white-A700"
                                size="txtCairoBold18"
                              >
                                $ 1,188.00
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-700 h-px mt-[34px] rounded-[1px] w-full" />
                    <div className="flex flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[605px] mt-10 w-[54%] md:w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          SUBTOTAL
                        </Text>
                        <Text
                          className="capitalize text-lg text-right text-white-A700"
                          size="txtCairoRegular18WhiteA700"
                        >
                          $17,883.00
                        </Text>
                      </div>
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          TAX
                        </Text>
                        <Text
                          className="capitalize text-lg text-right text-white-A700"
                          size="txtCairoRegular18WhiteA700"
                        >
                          2%
                        </Text>
                      </div>
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="mt-[5px] text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          TOTAL
                        </Text>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          $ 17,883.00
                        </Text>
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
                padding: "8px 8px 8px 50px",
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
                  src="images/img_invoice1_deep_purple_600.svg"
                  alt="invoiceOne"
                />
              }
              label={
                <>
                  <Text>Invoices</Text>
                  <Line className="bg-deep_purple-600 h-[49px] rounded-[3px] w-1.5" />
                </>
              }
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
            className="mb-[97px] md:ml-[0] mt-1.5 mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default InvoiceDetailPage;
