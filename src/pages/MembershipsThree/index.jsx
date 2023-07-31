import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Header from "components/Header";

const MembershipsThreePage = () => {
  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_dashboard1.svg"
          alt="dashboardOne"
        />
      ),
    },
    { label: <Img className="h-7 w-7" src="images/img_mail.svg" alt="mail" /> },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_comment1.svg"
          alt="commentOne"
        />
      ),
    },
    { label: <Img className="h-7 w-7" src="images/img_grid.svg" alt="grid" /> },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_contact1.svg"
          alt="contactOne"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_calendarsilhouette.svg"
          alt="calendarsilhoue"
        />
      ),
    },
    { label: <Img className="h-7 w-7" src="images/img_user.svg" alt="user" /> },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_invoice1.svg"
          alt="invoiceOne"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_setting1.svg"
          alt="settingOne"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-7 text-blue_gray-700 w-7"
          src="images/img_setting1_deep_purple_600.svg"
          alt="settingOne_One"
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col font-cairo items-center justify-start mx-auto w-full">
        <div className="bg-gray-900 flex flex-col items-center justify-start w-full">
          <div className="overflow-x-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
              <Sidebar className="!sticky !w-[162px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs1 top-[0]">
                <Img
                  className="h-[100px] md:h-auto mt-1 mx-auto object-cover w-[100px]"
                  src="images/img_logo2transparent.png"
                  alt="logo2transparen"
                />
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: 0,
                      paddingTop: "22px",
                      flexDirection: "column",
                      backgroundColor: "#15132b",
                      paddingLeft: "22px",
                      paddingRight: "22px",
                      [`&:hover, &.ps-active`]: {
                        color: "#6418c3",
                        backgroundColor: "#15132bff !important",
                      },
                    },
                  }}
                  className="flex flex-col items-center justify-start mt-9 pt-[11px] w-full"
                >
                  <div className="flex flex-col gap-[39px] items-center justify-start pb-[11px] w-full">
                    {sideBarMenu?.map((menu, i) => (
                      <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                        {menu.label}
                      </MenuItem>
                    ))}
                  </div>
                  <Img
                    className="h-[50px] mt-[39px]"
                    src="images/img_settings_gray_900_01.svg"
                    alt="settings"
                  />
                  <div className="flex flex-col gap-[-50px] items-center justify-start mt-[39px] pb-[11px] w-full">
                    {sideBarMenu1?.map((menu, i) => (
                      <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                        {menu.label}
                      </MenuItem>
                    ))}
                  </div>
                </Menu>
                <div className="h-[74px] mb-[997px] overflow-hidden relative w-full">
                  <div className="w-full h-full absolute bg-undefined"></div>
                  <div
                    className="h-full absolute bg-deep_purple_600  rounded-[3px]"
                    style={{ width: "4%" }}
                  ></div>
                </div>
              </Sidebar>
              <div className="flex flex-1 flex-col gap-[13px] justify-start w-full">
                <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
                <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[34px] md:px-5 w-[87%] md:w-full">
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[204px] mt-[17px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[33px] items-start justify-start md:mt-0 mt-2.5 w-[57%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                            size="txtCairoBold34"
                          >
                            Appointment
                          </Text>
                          <Text
                            className="text-lg text-white-A700"
                            size="txtOpenSans18"
                          >
                            Customize your Appointment here.
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[36%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Appointment Name
                            </Text>
                            <div className="border-2 border-deep_purple-600 border-solid flex flex-col font-cairo items-start justify-end p-2 rounded-[14px] w-full">
                              <div className="flex flex-row items-start justify-start md:ml-[0] ml-[13px] mt-1 w-[30%] md:w-full">
                                <Text
                                  className="text-white-A700 text-xl"
                                  size="txtCairoSemiBold20WhiteA700"
                                >
                                  Input Here
                                </Text>
                                <Line className="bg-deep_purple-600 h-[27px] mb-2 mt-0.5 w-px" />
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[36%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Staff Member
                            </Text>
                            <Input
                              name="group256"
                              placeholder="Instructor Day"
                              className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex pb-2 pl-[22px] pr-4 pt-[13px] rounded-[14px] w-full"
                              suffix={
                                <div className="mt-[13px] mb-[17px] ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-deep_purple-600">
                                  <Img
                                    className="my-auto"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                </div>
                              }
                            ></Input>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[21%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Appointment Fee ($)
                            </Text>
                            <Input
                              name="group246"
                              placeholder="0"
                              className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                              wrapClassName="border border-gray-400_02 border-solid pl-[35px] pr-2.5 py-2.5 rounded-[14px] w-1/2"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-start justify-start w-[99%] md:w-full">
                          <div className="flex flex-row items-end justify-between w-1/4 md:w-full">
                            <div className="flex flex-col items-center justify-start w-[38%]">
                              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Duration
                                </Text>
                                <Input
                                  name="hrsCounter"
                                  placeholder="1 hrs"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-gray-500_01 text-left text-xl w-full"
                                  wrapClassName="border border-gray-400_02 border-solid flex px-[9px] py-2.5 rounded-[14px] w-full"
                                  suffix={
                                    <div className="mt-4 mb-3.5 ml-[7px] sm:w-full sm:mx-0 w-[15%] bg-deep_purple-600">
                                      <Img
                                        className="my-auto"
                                        src="images/img_offer.svg"
                                        alt="offer"
                                      />
                                    </div>
                                  }
                                ></Input>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-9 w-[45%]">
                              <Button
                                className="border border-gray-400_02 border-solid cursor-pointer flex items-center justify-center min-w-[95px] px-2 py-[11px] rounded-[14px]"
                                rightIcon={
                                  <div className="ml-[7px] bg-deep_purple-600 my-[15px]">
                                    <Img
                                      src="images/img_offer.svg"
                                      alt="offer"
                                    />
                                  </div>
                                }
                              >
                                <div className="font-semibold leading-[normal] text-gray-500_01 text-left text-xl">
                                  0 mins
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[142px] w-1/5 md:w-full">
                            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Start Times
                              </Text>
                              <Input
                                name="group255"
                                placeholder="On The Hour"
                                className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 text-gray-500_01 text-left text-xl w-full"
                                wrapClassName="border border-gray-400_02 border-solid flex pl-[9px] pr-4 py-2.5 rounded-[14px] w-full"
                                suffix={
                                  <div className="mt-4 mb-3.5 ml-[30px] sm:w-full sm:mx-0 w-[7%] bg-deep_purple-600">
                                    <Img
                                      className="my-auto"
                                      src="images/img_offer.svg"
                                      alt="offer"
                                    />
                                  </div>
                                }
                              ></Input>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[183px] md:mt-0 mt-2 w-1/5 md:w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-[94%] md:w-full">
                              <Img
                                className="h-6 mt-0.5 w-6"
                                src="images/img_iccheck_gray_500_01.svg"
                                alt="iccheck"
                              />
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                Apply Retail Tax
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <Img
                                className="h-6 mt-0.5 w-6"
                                src="images/img_iccheck_gray_500_01.svg"
                                alt="iccheck_One"
                              />
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                Apply Service Tax
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-opensans items-center justify-start w-[96%] md:w-full">
                          <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Location
                            </Text>
                            <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-center justify-start w-full">
                              <Img
                                className="h-10 w-10"
                                src="images/img_computer_green_a700.svg"
                                alt="computer"
                              />
                              <Button className="bg-blue-900 border border-gray-400_02 border-solid cursor-pointer font-semibold leading-[normal] min-w-[360px] md:ml-[0] ml-[29px] py-[11px] rounded-[14px] text-center text-white-A700 text-xl">
                                Add Google Meet Video Conferencing
                              </Button>
                              <Button className="bg-gradient6  flex h-10 items-center justify-center ml-16 md:ml-[0] p-[9px] rounded-[50%] w-10">
                                <Img
                                  src="images/img_videocamera.svg"
                                  alt="videocamera"
                                />
                              </Button>
                              <Button className="bg-blue-900 border border-gray-400_02 border-solid cursor-pointer font-semibold leading-[normal] min-w-[301px] md:ml-[0] ml-[19px] py-[11px] rounded-[14px] text-center text-white-A700 text-xl">
                                Add Zoom Video Conferencing
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-[52%] md:w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            Location
                          </Text>
                          <Input
                            name="group258"
                            placeholder="Sunnyvale North"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                            wrapClassName="border border-gray-400_02 border-solid flex pb-2 pl-[22px] pr-[19px] pt-[13px] rounded-[14px] w-full"
                            suffix={
                              <div className="mt-[13px] mb-[17px] ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-deep_purple-600">
                                <Img
                                  className="my-auto"
                                  src="images/img_offer.svg"
                                  alt="offer"
                                />
                              </div>
                            }
                          ></Input>
                        </div>
                        <div className="flex flex-col font-opensans gap-3 items-start justify-start ml-0.5 md:ml-[0] w-[27%] md:w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            Alert Before Appointment
                          </Text>
                          <Input
                            name="group248"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="border border-gray-400_02 border-solid flex pb-[35px] pr-[13px] pt-[27px] rounded-[14px] w-full"
                            suffix={
                              <div className="ml-[35px] sm:w-full sm:mx-0 w-[5%] bg-deep_purple-600">
                                <Img
                                  className="my-auto"
                                  src="images/img_offer.svg"
                                  alt="offer"
                                />
                              </div>
                            }
                          ></Input>
                        </div>
                        <div className="flex sm:flex-col flex-row font-cairo gap-10 items-start justify-start ml-0.5 md:ml-[0] w-[64%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-[68%] sm:w-full">
                            <div className="flex flex-col items-center justify-start w-[53%]">
                              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Calendar
                                </Text>
                                <Input
                                  name="group257"
                                  placeholder="Closed Mat"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                                  wrapClassName="border border-gray-400_02 border-solid flex pl-[22px] pr-2.5 py-2.5 rounded-[14px] w-full"
                                  suffix={
                                    <div className="mt-4 mb-3.5 ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-deep_purple-600">
                                      <Img
                                        className="my-auto"
                                        src="images/img_offer.svg"
                                        alt="offer"
                                      />
                                    </div>
                                  }
                                ></Input>
                              </div>
                            </div>
                            <div className="flex flex-col gap-3.5 items-start justify-start">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Calendar Color
                              </Text>
                              <Text
                                className="border border-gray-400_02 border-solid pl-[22px] pr-[35px] sm:px-5 py-2.5 rounded-[14px] text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                #A5A5A5
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-start justify-start sm:mt-0 mt-12 w-[26%] sm:w-full">
                            <Img
                              className="h-6 mt-0.5 w-6"
                              src="images/img_checkmark_deep_purple_600.svg"
                              alt="checkmark"
                            />
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoSemiBold18Gray50001"
                            >
                              Students Only
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-opensans gap-[37px] items-start justify-start w-[46%] md:w-full">
                          <div className="flex flex-col gap-3 items-start justify-start ml-0.5 md:ml-[0] w-[59%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Show Busy
                            </Text>
                            <Input
                              name="group247"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex pb-[35px] pr-[13px] pt-[27px] rounded-[14px] w-full"
                              suffix={
                                <div className="ml-[35px] sm:w-full sm:mx-0 w-[5%] bg-deep_purple-600">
                                  <Img
                                    className="my-auto"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                </div>
                              }
                            ></Input>
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col items-center justify-start w-1/2">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Program
                                </Text>
                                <Input
                                  name="group245"
                                  placeholder="Personal Training"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                                  wrapClassName="border border-gray-400_02 border-solid flex pb-2 pl-[22px] pr-2.5 pt-[13px] rounded-[14px] w-full"
                                  suffix={
                                    <div className="mt-[13px] mb-[17px] ml-[11px] sm:w-full sm:mx-0 w-[6%] bg-deep_purple-600">
                                      <Img
                                        className="my-auto"
                                        src="images/img_offer.svg"
                                        alt="offer"
                                      />
                                    </div>
                                  }
                                ></Input>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[41%]">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Category
                                </Text>
                                <Input
                                  name="group250"
                                  placeholder=""
                                  className="p-0 w-full"
                                  wrapClassName="border border-gray-400_02 border-solid flex pr-[17px] py-[26px] rounded-[14px] w-full"
                                  suffix={
                                    <div className="ml-[35px] sm:w-full sm:mx-0 w-[8%] bg-deep_purple-600">
                                      <Img
                                        className="my-auto"
                                        src="images/img_offer.svg"
                                        alt="offer"
                                      />
                                    </div>
                                  }
                                ></Input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 justify-start w-full">
                          <Text
                            className="ml-1.5 md:ml-[0] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            Description
                          </Text>
                          <TextArea
                            className="border border-gray-400_02 border-solid flex pb-[22px] pt-[13px] px-[21px] rounded-[14px] w-full"
                            name="group251"
                            placeholder="Add Description"
                            name="group251"
                            placeholder="Add Description"
                          ></TextArea>
                        </div>
                      </div>
                      <div className="flex flex-col font-cairo md:gap-10 gap-[329px] justify-start w-[30%] md:w-full">
                        <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[201px] w-[58%] md:w-full">
                          <div className="flex flex-row gap-[17px] items-end justify-start ml-0.5 md:ml-[0] w-full">
                            <Button className="bg-gray-100_01 flex h-[49px] items-center justify-center p-[15px] rounded-[14px] w-[49px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            </Button>
                            <Text
                              className="mb-0.5 mt-2 text-white-A700 text-xl"
                              size="txtCairoSemiBold20WhiteA700"
                            >
                              New Appointment Type
                            </Text>
                          </div>
                          <div className="flex flex-row font-opensans gap-6 items-center justify-start w-[91%] md:w-full">
                            <Button
                              className="bg-deep_purple-600 cursor-pointer flex items-center justify-center min-w-[103px] px-3.5 py-3 rounded-[14px]"
                              leftIcon={
                                <Img
                                  className="h-6 mr-[13px]"
                                  src="images/img_save_white_a700_24x24.svg"
                                  alt="save"
                                />
                              }
                            >
                              <div className="font-bold leading-[normal] text-base text-right text-white-A700">
                                Save
                              </div>
                            </Button>
                            <Button
                              className="bg-gray-100_03 cursor-pointer flex items-center justify-center min-w-[117px] p-[11px] rounded-[14px]"
                              leftIcon={
                                <Img
                                  className="h-[26px] mr-[13px]"
                                  src="images/img_cancel_1.svg"
                                  alt="cancel 1"
                                />
                              }
                            >
                              <div className="font-bold leading-[normal] text-base text-deep_purple-600 text-right">
                                Cancel
                              </div>
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start mr-[154px] w-[68%] md:w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            Notify Staff Member
                          </Text>
                          <Input
                            name="group259"
                            placeholder="Add Staff"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:px-5 text-gray-500_01 text-left text-xl w-full"
                            wrapClassName="border border-gray-400_02 border-solid pl-[22px] pr-[35px] py-2.5 rounded-[14px] w-full"
                          ></Input>
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
    </>
  );
};

export default MembershipsThreePage;
