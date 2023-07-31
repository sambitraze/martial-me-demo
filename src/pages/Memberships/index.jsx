import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

const MembershipsPage = () => {
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
                <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[50px] md:px-5 w-[87%] md:w-full">
                  <div className="bg-gray-900_01 flex flex-col items-start justify-start p-[33px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col items-start justify-start mb-[345px] ml-4 md:ml-[0] w-[74%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                          size="txtCairoBold34"
                        >
                          Memberships
                        </Text>
                        <Text
                          className="text-lg text-white-A700"
                          size="txtOpenSans18"
                        >
                          Customize your memberships here.
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[33px] w-full">
                        <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[28%] md:w-full">
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
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Occurance
                            </Text>
                            <Input
                              name="group112"
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
                        <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[8%] md:w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            Rate ($)
                          </Text>
                          <Input
                            name="group115"
                            placeholder="220"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:px-5 text-gray-500_01 text-left text-xl w-full"
                            wrapClassName="border border-gray-400_02 border-solid pl-[22px] pr-8 py-2.5 rounded-[14px] w-full"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[28%] md:w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            INPUT BOX
                          </Text>
                          <Input
                            name="group116"
                            placeholder="Placeholder"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:px-5 text-gray-500_01 text-left text-xl w-full"
                            wrapClassName="border border-gray-400_02 border-solid pl-[22px] pr-[35px] py-2.5 rounded-[14px] w-full"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-row font-cairo gap-3 items-center justify-start md:mt-0 mt-12 w-[11%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_iccheck_gray_500_01.svg"
                            alt="iccheck"
                          />
                          <Text
                            className="text-gray-500_01 text-lg"
                            size="txtCairoSemiBold18Gray50001"
                          >
                            Auto-Debit
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-cairo sm:gap-5 items-end justify-start mt-2 w-[45%] md:w-full">
                        <Button className="bg-gray-100_01 flex h-[49px] items-center justify-center mb-[163px] sm:mt-0 mt-2.5 p-[15px] rounded-[14px] w-[49px]">
                          <Img
                            className="h-[17px]"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </Button>
                        <Text
                          className="mb-[165px] sm:ml-[0] ml-[17px] sm:mt-0 mt-[18px] text-white-A700 text-xl"
                          size="txtCairoSemiBold20WhiteA700"
                        >
                          New Membership Type
                        </Text>
                        <div className="md:h-[212px] h-[222px] sm:ml-[0] ml-[102px] relative w-[31%] sm:w-full">
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
                            alt="offer_One"
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

export default MembershipsPage;
