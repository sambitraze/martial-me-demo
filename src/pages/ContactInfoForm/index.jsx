import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const ContactInfoFormPage = () => {
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
                <div className="h-[74px] mb-[1008px] overflow-hidden relative w-full">
                  <div className="w-full h-full absolute bg-undefined"></div>
                  <div
                    className="h-full absolute bg-deep_purple_600  rounded-[3px]"
                    style={{ width: "4%" }}
                  ></div>
                </div>
              </Sidebar>
              <div className="flex flex-1 flex-col gap-[46px] justify-start w-full">
                <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
                <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[17px] md:px-5 w-[87%] md:w-full">
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col items-start justify-start mb-[125px] w-[95%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[19px] w-[99%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-[69%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                              size="txtCairoBold34"
                            >
                              Personal Info
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtOpenSans18"
                            >
                              Fill out prospect info here.
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] w-full">
                            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[31%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                First Name
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
                            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[31%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Middle Name
                              </Text>
                              <Input
                                name="background"
                                placeholder=""
                                className="p-0 w-full"
                                wrapClassName="border border-gray-400_02 border-solid flex h-[60px] rounded-[14px] w-full"
                              ></Input>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[31%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Last Name
                              </Text>
                              <Input
                                name="background_One"
                                placeholder=""
                                className="p-0 w-full"
                                wrapClassName="border border-gray-400_02 border-solid flex h-[60px] rounded-[14px] w-full"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-10 items-center justify-start mt-[34px] w-[66%] md:w-full">
                            <div className="flex flex-col gap-3.5 items-start justify-start w-[48%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Date of Birth
                              </Text>
                              <Input
                                name="groupFortySeven"
                                placeholder=""
                                className="p-0 w-full"
                                wrapClassName="border border-gray-400_02 border-solid flex pb-[19px] pr-2.5 pt-[13px] rounded-[14px] w-full"
                                suffix={
                                  <Img
                                    className="h-7 ml-[35px] my-auto"
                                    src="images/img_calendarsilhouette_1.svg"
                                    alt="calendar-silhouette 1"
                                  />
                                }
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-3 items-start justify-start w-[47%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Gender Identity
                              </Text>
                              <Input
                                name="groupFortyEight"
                                placeholder="Not Specified"
                                className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                                wrapClassName="border border-gray-400_02 border-solid flex pb-[9px] pl-[22px] pr-[15px] pt-3 rounded-[14px] w-full"
                                suffix={
                                  <div className="mt-3.5 mb-4 ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-deep_purple-600">
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
                          <div className="flex sm:flex-col flex-row gap-10 items-start justify-start mt-[37px] w-[46%] md:w-full">
                            <div className="flex flex-col gap-[11px] items-start justify-start w-[69%] sm:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Company
                              </Text>
                              <Input
                                name="background_Two"
                                placeholder=""
                                className="p-0 w-full"
                                wrapClassName="border border-gray-400_02 border-solid flex h-[60px] rounded-[14px] w-full"
                              ></Input>
                            </div>
                            <div className="flex flex-row font-cairo gap-3 items-start justify-start sm:mt-0 mt-[49px] w-[24%] sm:w-full">
                              <Img
                                className="h-6 mt-0.5 w-6"
                                src="images/img_iccheck_gray_500_01.svg"
                                alt="iccheck"
                              />
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                Company
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-cairo gap-[22px] items-center justify-start w-[17%] md:w-full">
                          <div className="flex flex-row gap-[17px] items-end justify-start w-[97%] md:w-full">
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
                              New Prospect Form
                            </Text>
                          </div>
                          <div className="flex flex-row font-opensans gap-6 items-center justify-between w-full">
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
                      </div>
                      <div className="flex flex-col justify-start mt-[35px] w-[99%] md:w-full">
                        <Line className="bg-gray-400_02 h-px w-full" />
                        <div className="flex sm:flex-col flex-row gap-10 items-start justify-start md:ml-[0] ml-[19px] mt-[33px] w-[33%] md:w-full">
                          <div className="flex flex-col gap-3.5 items-start justify-start w-[65%] sm:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Phone Number
                            </Text>
                            <Input
                              name="background_Three"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex h-[60px] rounded-[14px] w-full"
                            ></Input>
                          </div>
                          <div className="flex flex-row font-cairo gap-3 items-start justify-start sm:mt-0 mt-[51px] w-[28%] sm:w-full">
                            <Img
                              className="h-6 mt-0.5 w-6"
                              src="images/img_iccheck_gray_500_01.svg"
                              alt="iccheck_One"
                            />
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoSemiBold18Gray50001"
                            >
                              SMS Capable
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-10 items-center justify-start md:ml-[0] ml-[19px] mt-[34px] w-[46%] md:w-full">
                          <div className="flex flex-col gap-3.5 items-start justify-start w-[48%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Email Address
                            </Text>
                            <Input
                              name="background_Four"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex h-[60px] ml-0.5 md:ml-[0] rounded-[14px] w-full"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-3.5 items-start justify-start w-[47%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Website
                            </Text>
                            <Input
                              name="background_Five"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex h-[60px] rounded-[14px] w-full"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[21px] mt-[38px] w-[22%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Mailing Address
                            </Text>
                          </div>
                          <div className="border border-gray-400_02 border-solid flex flex-col items-end justify-end p-[22px] sm:px-5 rounded-[14px] w-full">
                            <Img
                              className="h-[17px] mt-[61px] w-[17px]"
                              src="images/img_signal_gray_400_02.svg"
                              alt="signal"
                            />
                          </div>
                        </div>
                        <Line className="bg-gray-400_02 h-px mt-[35px] w-full" />
                        <div className="flex md:flex-col flex-row gap-[42px] items-center justify-start ml-5 md:ml-[0] mt-[35px] w-[45%] md:w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-[48%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Referred By
                            </Text>
                            <Input
                              name="background_Six"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex h-[60px] rounded-[14px] w-full"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-3 items-start justify-start w-[47%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Referral Type
                            </Text>
                            <Input
                              name="groupFortyNine"
                              placeholder="Not Specified"
                              className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex pb-[9px] pl-[22px] pr-[15px] pt-3 rounded-[14px] w-full"
                              suffix={
                                <div className="mt-3.5 mb-4 ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-deep_purple-600">
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
                        <div className="gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start ml-5 md:ml-[0] mt-[34px] w-[69%] md:w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Interest 1
                            </Text>
                            <Input
                              name="groupFifty"
                              placeholder="Not Specified"
                              className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex pb-[9px] pl-[22px] pr-[15px] pt-3 rounded-[14px] w-full"
                              suffix={
                                <div className="mt-3.5 mb-4 ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-deep_purple-600">
                                  <Img
                                    className="my-auto"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                </div>
                              }
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Interest 2
                            </Text>
                            <Input
                              name="groupFiftyOne"
                              placeholder="Not Specified"
                              className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex pb-[9px] pl-[22px] pr-[15px] pt-3 rounded-[14px] w-full"
                              suffix={
                                <div className="mt-3.5 mb-4 ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-deep_purple-600">
                                  <Img
                                    className="my-auto"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                </div>
                              }
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Interest 3
                            </Text>
                            <Input
                              name="groupFiftyTwo"
                              placeholder="Not Specified"
                              className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex pb-[9px] pl-[22px] pr-[15px] pt-3 rounded-[14px] w-full"
                              suffix={
                                <div className="mt-3.5 mb-4 ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-deep_purple-600">
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
                        <div className="flex sm:flex-col flex-row gap-10 items-start justify-start md:ml-[0] ml-[22px] mt-[34px] w-[32%] md:w-full">
                          <div className="flex flex-col gap-3.5 items-start justify-start w-[69%] sm:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Trial Class Date
                            </Text>
                            <div className="border border-gray-400_02 border-solid flex flex-row items-center justify-end px-2 rounded-[14px] w-full">
                              <Img
                                className="h-7 w-7"
                                src="images/img_calendarsilhouette_1.svg"
                                alt="calendarsilhoue_Two"
                              />
                              <Line className="bg-gray-400_02 h-[60px] ml-[7px] w-px" />
                              <Img
                                className="h-6 ml-[123px] w-6"
                                src="images/img_clock2.svg"
                                alt="clockOne"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row font-cairo gap-3 items-start justify-start sm:mt-0 mt-[49px] w-[24%] sm:w-full">
                            <Img
                              className="h-6 mt-1 w-6"
                              src="images/img_iccheck_gray_500_01.svg"
                              alt="iccheck_Two"
                            />
                            <Text
                              className="text-gray-500_01 text-lg"
                              size="txtCairoSemiBold18Gray50001"
                            >
                              Tentative
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[19px] mt-[53px] w-[21%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            Injuries
                          </Text>
                        </div>
                        <div className="border border-gray-400_02 border-solid flex flex-col items-end justify-end p-[22px] sm:px-5 rounded-[14px] w-full">
                          <Img
                            className="h-[17px] mt-[61px] w-[17px]"
                            src="images/img_signal_gray_400_02.svg"
                            alt="signal_One"
                          />
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

export default ContactInfoFormPage;
