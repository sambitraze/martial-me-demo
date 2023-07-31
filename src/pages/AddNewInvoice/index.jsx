import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C01DashboardNav from "components/C01DashboardNav";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddNewInvoicePage = () => {
  const sideBarMenu = [
    {
      label: (
        <div className="flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-1/5 sm:w-full">Email</Text>
        </div>
      ),
      href: "/emailpage",
      active: window.location.pathname === "/emailpage",
    },
    {
      label: (
        <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-[16%] sm:w-full">Chat</Text>
        </div>
      ),
      href: "/chatdiscussions",
      active: window.location.pathname === "/chatdiscussions",
    },
    {
      label: (
        <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-[26%] sm:w-full">Kanban</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-[26%] sm:w-full">Contact</Text>
        </div>
      ),
      href: "/contactpage",
      active: window.location.pathname === "/contactpage",
    },
    {
      label: (
        <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-[30%] sm:w-full">Calendar</Text>
        </div>
      ),
      href: "/calendar",
      active: window.location.pathname === "/calendar",
    },
    {
      label: (
        <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-[28%] sm:w-full">Courses</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-[18%] sm:w-full">Shop</Text>
        </div>
      ),
    },
    {
      label: (
        <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-[28%] sm:w-full">Invoices</Text>
        </div>
      ),
      href: "/invoices",
      active: window.location.pathname === "/invoices",
    },
    {
      label: (
        <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[54px] pr-[9px] py-[9px]">
          <Text className="w-[28%] sm:w-full">Settings</Text>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1116px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[108px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="bg-gray-900_01 flex flex-col items-center justify-start md:ml-[0] ml-[395px] mr-[50px] p-[21px] md:px-5 rounded-[14px] shadow-bs4 w-[77%] md:w-full">
              <div className="flex flex-col gap-[33px] items-center justify-start mb-[59px] w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_left1.svg"
                    alt="leftOne"
                  />
                  <div className="flex flex-col items-center justify-start ml-11 md:ml-[0]">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtCairoBold26"
                    >
                      New Invoices
                    </Text>
                  </div>
                  <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center md:ml-[0] ml-[1160px] md:mt-0 my-[5px] p-[7px] rounded-[12px] w-[38px]">
                    <Img
                      className="h-6"
                      src="images/img_verticon_gray_500_01.svg"
                      alt="verticon"
                    />
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between w-[98%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start w-[27%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        SELECT STUDENT
                      </Text>
                      <div className="bg-blue_gray-900 flex flex-row items-center justify-start mt-[13px] p-[13px] rounded-[14px] shadow-bs3 w-full">
                        <Img
                          className="h-[68px] ml-[7px] mt-[7px] w-[68px]"
                          src="images/img_forward.svg"
                          alt="forward"
                        />
                        <div className="flex flex-col items-start justify-start ml-[18px]">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
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
                        <Img
                          className="h-6 ml-11 w-6"
                          src="images/img_edit3.svg"
                          alt="editThree"
                        />
                        <Img
                          className="h-6 ml-[15px] w-6"
                          src="images/img_arrowdown_deep_purple_600_24x24.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start mt-10 w-[69%] md:w-full">
                        <div className="flex flex-row gap-5 items-start justify-between w-full">
                          <Button className="bg-gray-900_02 flex h-[50px] items-center justify-center mb-[50px] p-[13px] rounded-[50%] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_icmap.svg"
                              alt="icmap"
                            />
                          </Button>
                          <div className="flex flex-col gap-[11px] items-start justify-start">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              ADDRESS
                            </Text>
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansRomanSemiBold16"
                            >
                              <>
                                Franklin Avenue Street <br />
                                New York, ABC 5562
                                <br />
                                United State
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[39px] w-[70%] md:w-full">
                        <div className="flex flex-row gap-5 items-start justify-between w-full">
                          <Button className="bg-gray-900_02 flex h-[50px] items-center justify-center mb-1.5 p-[13px] rounded-[50%] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_email1_deep_purple_600.svg"
                              alt="emailOne"
                            />
                          </Button>
                          <div className="flex flex-col gap-3 items-start justify-start">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              EMAIL
                            </Text>
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansRomanSemiBold16"
                            >
                              dawudkhan5@mail.com
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[38px] w-1/2 md:w-full">
                        <div className="flex flex-row gap-5 items-start justify-between w-full">
                          <Button className="bg-gray-900_02 flex h-[50px] items-center justify-center mb-[7px] p-[13px] rounded-[50%] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_phone1.svg"
                              alt="phoneOne"
                            />
                          </Button>
                          <div className="flex flex-col gap-[13px] items-center justify-start">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              TELEPHONE
                            </Text>
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansRomanSemiBold16"
                            >
                              (012) 3456 789
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_gray-900 flex flex-col font-cairo items-center justify-end p-2.5 rounded-[14px] shadow-bs3 w-full">
                      <div className="flex flex-row items-center justify-start mt-0.5 w-[90%] md:w-full">
                        <Img
                          className="h-7 w-7"
                          src="images/img_calendarsilhouette_deep_purple_600.svg"
                          alt="calendarsilhoue"
                        />
                        <div className="flex flex-col items-start justify-start ml-[27px]">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtCairoBold20"
                          >
                            DUE DATE
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtCairoSemiBold20WhiteA700"
                          >
                            October 31th 2020
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-[67px] w-6"
                          src="images/img_arrowdown_deep_purple_600_24x24.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-1 w-[64%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          INVOICE NO
                        </Text>
                        <div className="border-2 border-blue_gray-700 border-solid flex flex-col font-cairo items-start justify-start p-[11px] rounded-[14px] w-full">
                          <Text
                            className="md:ml-[0] ml-[18px] text-white-A700 text-xl w-[33%] sm:w-full"
                            size="txtCairoSemiBold20WhiteA700"
                          >
                            #INV-0001234
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[48%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          AMOUNT (USD)
                        </Text>
                        <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex flex-col font-cairo items-start justify-start p-[11px] rounded-[14px] w-full">
                          <div className="h-[37px] md:ml-[0] ml-[18px] relative w-1/5">
                            <Text
                              className="m-auto text-white-A700 text-xl w-full"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              660.00
                            </Text>
                            <Line className="absolute bg-deep_purple-600 bottom-[11%] h-[27px] right-[12%] w-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-cairo gap-[26px] items-start justify-start mt-7 w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Item Desription
                      </Text>
                      <div className="flex flex-col font-opensans items-start justify-start ml-0.5 md:ml-[0] w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            ITEM DESCRIPTION
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[222px] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            QUANTITY
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[85px] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            RATE
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[193px] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            AMOUNT
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row font-cairo sm:gap-5 items-start justify-start mt-[17px] w-full">
                          <Text
                            className="capitalize sm:mt-0 mt-0.5 text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            Private Lessons Package
                          </Text>
                          <Text
                            className="capitalize mb-0.5 sm:ml-[0] ml-[197px] text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            10h
                          </Text>
                          <Text
                            className="capitalize sm:ml-[0] ml-[145px] text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            50.00
                          </Text>
                          <Text
                            className="capitalize sm:ml-[0] ml-[201px] text-lg text-right text-white-A700"
                            size="txtCairoBold18"
                          >
                            $ 500.00
                          </Text>
                        </div>
                        <div className="font-cairo sm:h-[200px] h-[51px] md:h-[55px] mt-1 relative w-full">
                          <Img
                            className="absolute h-[51px] inset-[0] justify-center m-auto"
                            src="images/img_border.svg"
                            alt="border"
                          />
                          <div className="absolute bottom-[10%] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto w-full">
                            <Text
                              className="capitalize text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Sparring Gear Set
                            </Text>
                            <Text
                              className="capitalize sm:ml-[0] ml-[252px] text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              1.0
                            </Text>
                            <Text
                              className="capitalize sm:ml-[0] ml-[150px] text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              160.00
                            </Text>
                            <Text
                              className="capitalize sm:ml-[0] ml-[191px] text-lg text-right text-white-A700"
                              size="txtCairoBold18"
                            >
                              $ 160.00
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-cairo items-center justify-start mt-2.5">
                          <Text
                            className="text-gray-500_01 text-lg"
                            size="txtCairoSemiBold18Gray50001"
                          >
                            Type description here...
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-cairo items-center justify-start mt-[39px] w-4/5 md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          Attach File
                        </Text>
                        <div className="flex md:flex-col flex-row font-opensans gap-[23px] items-end justify-between mt-0.5 w-full">
                          <div className="bg-gray-900_01 border-2 border-blue_gray-700 border-dashed flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[9px] p-[13px] rounded-[14px] w-[49%] md:w-full">
                            <div className="flex flex-row gap-[23px] items-center justify-start w-[78%] md:w-full">
                              <Button className="bg-gray-900_04 flex h-[54px] items-center justify-center p-[15px] rounded-[14px] w-[54px]">
                                <Img
                                  className="h-6"
                                  src="images/img_cloudupload1.svg"
                                  alt="clouduploadOne"
                                />
                              </Button>
                              <div className="flex flex-col gap-[7px] items-start justify-start">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtOpenSansRomanSemiBold16"
                                >
                                  Upload Files
                                </Text>
                                <Text
                                  className="text-gray-500_01 text-sm"
                                  size="txtOpenSansRomanSemiBold14Gray50001"
                                >
                                  PDF, DOC, PPT, JPG, PNG
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="md:h-[82px] h-[91px] relative w-[49%] md:w-full">
                            <div className="absolute border border-deep_purple-600 border-solid bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-3.5 rounded-[14px] w-[99%]">
                              <div className="flex flex-row gap-[19px] items-center justify-start md:ml-[0] ml-[3px] w-[67%] md:w-full">
                                <Button className="bg-deep_purple-600 flex h-[54px] items-center justify-center p-[15px] rounded-[14px] w-[54px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_blankpage11.svg"
                                    alt="blankpageEleven"
                                  />
                                </Button>
                                <div className="flex flex-col gap-1.5 items-start justify-start">
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtOpenSansRomanSemiBold16"
                                  >
                                    Contact_2020.pdf
                                  </Text>
                                  <Text
                                    className="text-base text-deep_purple-600"
                                    size="txtOpenSansRomanSemiBold16Deeppurple600"
                                  >
                                    456 KB
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Button className="absolute bg-red-A200 flex h-6 items-center justify-center p-1.5 right-[0] rounded-[50%] top-[0] w-6">
                              <Img
                                className="h-3"
                                src="images/img_close.svg"
                                alt="close"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row font-cairo gap-[21px] items-center justify-start mt-[66px] w-[49%] md:w-full">
                      <Input
                        name="btnsend"
                        placeholder="SEND INVOICE"
                        className="font-bold p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg text-white-A700 w-full"
                        wrapClassName="bg-deep_purple-600 flex px-[34px] py-2 rounded-[14px] shadow-bs4 w-[56%] sm:w-full"
                        prefix={
                          <Img
                            className="mt-1 mb-[5px] h-6 mr-[19px]"
                            src="images/img_save_white_a700.svg"
                            alt="save"
                          />
                        }
                      ></Input>
                      <Button className="bg-blue_gray-900 cursor-pointer font-bold min-w-[172px] py-[9px] rounded-[14px] shadow-bs4 text-center text-lg text-white-A700">
                        SAVE TO LATER
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar
          className="!sticky !w-[345px] bg-cover bg-no-repeat flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
          <Img
            className="h-[108px] md:h-auto mb-[1197px] object-cover"
            src="images/img_header.png"
            alt="header"
          />
          <Text
            className="mb-[1163px] ml-[50px] mr-[189px] mt-[120px] text-base text-gray-400_01 tracking-[1.00px]"
            size="txtOpenSansBold16"
          >
            MAIN MENU
          </Text>
          <div className="h-[120px] md:h-[1306px] mb-[1186px] relative w-full">
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
            className="mb-[1151px] ml-[50px] mr-[189px] mt-[132px] text-base text-gray-400_01 tracking-[1.00px]"
            size="txtOpenSansBold16"
          >
            MAIN MENU
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "4px 4px 4px 49px",
                backgroundColor: "#15132b",
                gap: "26px",
                marginTop: "13px",
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
                className="h-6 mt-[7px] w-6"
                src="images/img_arrowright_blue_gray_700.svg"
                alt="arrowright"
              />
            )}
            className="flex flex-col font-cairo items-center justify-end mb-[508px] mt-[155px] pt-[7px] w-full"
          >
            <SubMenu
              icon={
                <Img
                  className="h-[25px]"
                  src="images/img_signal_blue_gray_700.svg"
                  alt="signal"
                />
              }
              label={
                <Text className="sm:flex-1 w-[30%] sm:w-full">Dashboard</Text>
              }
            >
              <div className="flex flex-col gap-[0.07px] items-center justify-end mt-1.5 w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
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
              <Text className="mt-[3px]">Chat</Text>
            </MenuItem>
            <SubMenu
              icon={
                <Img
                  className="h-7 mt-[5px] w-7"
                  src="images/img_grid.svg"
                  alt="grid"
                />
              }
              label={<Text className="mt-[3px]">Kanban</Text>}
            >
              <MenuItem>
                <div className="md:pl-10 sm:pl-5 pl-[54px] pr-[9px] justify-start items-start flex flex-col py-[9px]">
                  Submenu Item
                </div>
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-7 mt-[5px] w-7"
                  src="images/img_contact1.svg"
                  alt="contactOne"
                />
              }
              active={window.location.pathname === "/contactpage"}
              href="/contactpage"
            >
              <Text className="mt-[3px]">Contact</Text>
              <Button className="bg-pink-400 cursor-pointer font-bold leading-[normal] min-w-[63px] mt-0.5 py-1 rounded-[17px] text-center text-sm text-white-A700">
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
              <Text className="mt-[3px]">Calendar</Text>
            </MenuItem>
            <SubMenu
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_user.svg"
                  alt="user_Two"
                />
              }
              label={<Text className="mt-[3px]">Courses</Text>}
            >
              <MenuItem>
                <div className="md:pl-10 sm:pl-5 pl-[54px] pr-[9px] justify-start items-start flex flex-col py-[9px]">
                  Submenu Item
                </div>
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-7 mt-[3px] w-7"
                  src="images/img_computer.svg"
                  alt="computer"
                />
              }
            >
              <Text className="mt-[3px]">Shop</Text>
            </MenuItem>
            <SubMenu
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_invoice1_deep_purple_600.svg"
                  alt="invoiceOne"
                />
              }
              label={<Text className="font-bold mt-[3px]">Invoices</Text>}
            >
              <MenuItem>
                <div className="md:pl-10 sm:pl-5 pl-[54px] pr-[9px] justify-start items-start flex flex-col py-[9px]">
                  Submenu Item
                </div>
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={
                <Img
                  className="h-7 mt-[9px] w-7"
                  src="images/img_mail.svg"
                  alt="mail"
                />
              }
              label={
                <>
                  <Text className="mt-[7px]">Email</Text>
                  <Line className="bg-deep_purple-600 h-[50px] rounded-[3px] w-1.5" />
                </>
              }
              suffix={
                <Text className="bg-light_blue-300 flex font-bold h-[29px] items-center justify-center my-[7px] rounded-[14px] text-center text-sm text-white-A700 w-[29px]">
                  17
                </Text>
              }
            >
              <MenuItem>
                <div className="md:pl-10 sm:pl-5 pl-[54px] pr-[9px] justify-start items-start flex flex-col py-[9px]">
                  Submenu Item
                </div>
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-7 mt-[3px] w-7"
                  src="images/img_setting1.svg"
                  alt="settingOne"
                />
              }
            >
              <Text className="mt-[3px]">Settings</Text>
            </MenuItem>
          </Menu>
          <div className="font-cairo md:h-[1306px] h-[203px] mb-[181px] ml-12 mr-[52px] mt-[922px] relative w-[72%]">
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
            className="mb-[105px] mt-[1171px] mx-12 text-base text-blue_gray-700 w-[73%] sm:w-full"
            size="txtCairoBold16Bluegray700"
          >
            Kleon Clean Admin Dashboard
          </Text>
          <Text
            className="mb-[73px] ml-12 mr-[52px] mt-[1207px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default AddNewInvoicePage;
