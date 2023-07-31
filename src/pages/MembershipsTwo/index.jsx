import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Datepicker, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

const MembershipsTwoPage = () => {
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
              <Sidebar1 className="!sticky !w-[162px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs1 top-[0]" />
              <div className="flex flex-1 flex-col gap-[30px] justify-start w-full">
                <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
                <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[51px] md:px-5 w-[87%] md:w-full">
                  <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col gap-2 justify-start mb-[123px] w-[98%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[33px] items-start justify-start md:mt-0 mt-2.5 w-[72%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                              size="txtCairoBold34"
                            >
                              Membership
                            </Text>
                            <Text
                              className="text-lg text-white-A700"
                              size="txtOpenSans18"
                            >
                              Customize your membership here.
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[29%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Membership Name
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
                            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-0.5 w-[15%] md:w-full">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Category
                                </Text>
                                <Input
                                  name="group165"
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
                            <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
                              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Limits
                                </Text>
                                <Input
                                  name="group166"
                                  placeholder="Unlimited"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                                  wrapClassName="border border-gray-400_02 border-solid flex pl-[22px] pr-[17px] py-2.5 rounded-[14px] w-full"
                                  suffix={
                                    <div className="mt-4 mb-3.5 ml-[30px] sm:w-full sm:mx-0 w-[8%] bg-deep_purple-600">
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
                            <div className="flex md:flex-1 flex-row font-cairo gap-3 items-start justify-center md:mt-0 mt-[50px] w-[16%] md:w-full">
                              <Img
                                className="h-6 mt-0.5 w-6"
                                src="images/img_iccheck_gray_500_01.svg"
                                alt="iccheck"
                              />
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                Trial Membership
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[25px] justify-start">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Trial Length
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[21px] text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                Not Applicable
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-start justify-start w-[90%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-[17%] md:w-full">
                              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Occurance
                                </Text>
                                <Input
                                  name="group157"
                                  placeholder="Time Period"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                                  wrapClassName="border border-gray-400_02 border-solid flex pl-[22px] pr-[17px] py-2.5 rounded-[14px] w-full"
                                  suffix={
                                    <div className="mt-4 mb-3.5 ml-[11px] sm:w-full sm:mx-0 w-[8%] bg-deep_purple-600">
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
                            <div className="flex flex-col gap-3 items-start justify-start ml-10 md:ml-[0] w-[9%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Rate ($)
                              </Text>
                              <Input
                                name="group160"
                                placeholder="220"
                                className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                                wrapClassName="border border-gray-400_02 border-solid pl-[35px] pr-[11px] py-2.5 rounded-[14px] w-full"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-3.5 items-center justify-start ml-10 md:ml-[0] w-[15%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                # of Occurances
                              </Text>
                              <Button className="border border-gray-400_02 border-solid cursor-pointer font-cairo font-semibold leading-[normal] min-w-[143px] py-[11px] rounded-[14px] text-center text-gray-500_01 text-xl">
                                Input Here
                              </Button>
                            </div>
                            <div className="flex flex-col gap-3 items-start justify-start ml-10 md:ml-[0] w-[13%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Signup Fee ($)
                              </Text>
                              <Input
                                name="group161"
                                placeholder="0"
                                className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                                wrapClassName="border border-gray-400_02 border-solid pl-[35px] pr-2.5 py-2.5 rounded-[14px] w-[73%]"
                              ></Input>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-center md:ml-[0] ml-[5px] md:mt-0 mt-12 w-[14%] md:w-full">
                              <Img
                                className="h-6 mt-1 w-6"
                                src="images/img_checkmark_deep_purple_600.svg"
                                alt="checkmark"
                              />
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                Auto-Renew
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-start ml-10 md:ml-[0] md:mt-0 mt-[49px] w-[19%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_iccheck_gray_500_01.svg"
                                alt="iccheck_One"
                              />
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                First Month Prorate
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col font-cairo gap-[22px] items-start justify-start w-[17%] md:w-full">
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
                              New Membership Type
                            </Text>
                          </div>
                          <div className="flex flex-row font-opensans gap-6 items-center justify-start w-[93%] md:w-full">
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
                      <div className="flex md:flex-col flex-row font-cairo md:gap-10 items-start justify-between md:ml-[0] ml-[9px] w-[65%] md:w-full">
                        <div className="md:h-[212px] h-[222px] relative w-[16%] md:w-full">
                          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto py-[18px] rounded-[14px] shadow-bs8 w-full">
                            <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[27px]">
                              <Text
                                className="text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                Weekly
                              </Text>
                              <Text
                                className="text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                Monthly
                              </Text>
                            </div>
                            <div className="bg-gray-100_01 flex flex-col items-start justify-end p-[3px] w-full">
                              <Text
                                className="md:ml-[0] ml-[23px] mt-[5px] text-deep_purple-600 text-xl"
                                size="txtCairoBold20Deeppurple600"
                              >
                                Yearly
                              </Text>
                            </div>
                            <Text
                              className="mb-[7px] md:ml-[0] ml-[27px] text-gray-500_01 text-xl"
                              size="txtCairoSemiBold20"
                            >
                              One Time
                            </Text>
                          </div>
                          <Img
                            className="absolute h-6 right-[5%] top-[0] w-6"
                            src="images/img_offer_white_a700.svg"
                            alt="offer_Three"
                          />
                        </div>
                        <div className="flex flex-col gap-[35px] items-start justify-start md:mt-0 mt-[27px] w-[72%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[71%] md:w-full">
                              <div className="flex flex-col gap-[13px] items-start justify-start w-[61%] sm:w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Start Date
                                </Text>
                                <Datepicker
                                  className="group167"
                                  placeholder="lbl_10_05_2022"
                                ></Datepicker>
                              </div>
                              <div className="flex flex-row gap-3 items-start justify-start sm:mt-0 mt-[50px] w-[32%] sm:w-full">
                                <Img
                                  className="h-6 mt-0.5 w-6"
                                  src="images/img_iccheck_gray_500_01.svg"
                                  alt="iccheck_Two"
                                />
                                <Text
                                  className="text-gray-500_01 text-lg"
                                  size="txtCairoSemiBold18Gray50001"
                                >
                                  Apply Retail Tax
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-row gap-3 items-start justify-start md:mt-0 mt-[50px] w-[24%] md:w-full">
                              <Img
                                className="h-6 mt-0.5 w-6"
                                src="images/img_iccheck_gray_500_01.svg"
                                alt="iccheck_Three"
                              />
                              <Text
                                className="text-gray-500_01 text-lg"
                                size="txtCairoSemiBold18Gray50001"
                              >
                                Apply Service Tax
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row font-opensans gap-[35px] items-center justify-start w-[82%] md:w-full">
                            <div className="flex flex-col gap-[21px] items-start justify-start w-[53%] sm:w-full">
                              <div className="flex flex-col gap-3 items-start justify-start w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Privileges
                                </Text>
                                <Input
                                  name="group163"
                                  placeholder="Adult Beginner’s Class"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                                  wrapClassName="border border-gray-400_02 border-solid flex pb-2 pl-[22px] pr-[17px] pt-[13px] rounded-[14px] w-full"
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
                              <Button className="bg-deep_purple-600 flex h-[49px] items-center justify-center p-[15px] rounded-[14px] shadow-bs3 w-[49px]">
                                <Img
                                  className="h-[17px]"
                                  src="images/img_minimize.svg"
                                  alt="minimize"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-col gap-3.5 justify-start w-[42%] sm:w-full">
                              <Text
                                className="md:ml-[0] ml-[5px] text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Schedule
                              </Text>
                              <div className="border border-gray-400_02 border-solid flex flex-row font-cairo gap-[35px] items-center justify-between p-[5px] rounded-[14px] w-full">
                                <Text
                                  className="mb-[3px] ml-4 text-gray-500_01 text-xl"
                                  size="txtCairoSemiBold20"
                                >
                                  <>
                                    Tuesday
                                    <br />
                                    Thursday
                                    <br />
                                    Saturday
                                  </>
                                </Text>
                                <Text
                                  className="mb-[3px] mr-[17px] text-gray-500_01 text-xl"
                                  size="txtCairoSemiBold20"
                                >
                                  <>
                                    6:00 PM
                                    <br />
                                    6:00 PM
                                    <br />
                                    12:00 PM
                                  </>
                                </Text>
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
        </div>
      </div>
    </>
  );
};

export default MembershipsTwoPage;
