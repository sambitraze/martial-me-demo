import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

const btnchangedateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MembershipsOnePage = () => {
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
                  <div className="bg-gray-900_01 flex flex-col items-start justify-start p-[33px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[498px] md:ml-[0] ml-[15px] w-[90%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[69%] md:w-full">
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
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] w-full">
                          <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[33%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Membership Name
                            </Text>
                            <Input
                              name="group222"
                              placeholder="Membership Type 1"
                              className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                              wrapClassName="border border-gray-400_02 border-solid pb-2 pl-[22px] pr-[35px] pt-[13px] rounded-[14px] w-full"
                            ></Input>
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[18%] md:w-full">
                            <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Category
                              </Text>
                              <Input
                                name="background"
                                placeholder=""
                                className="p-0 w-full"
                                wrapClassName="border border-gray-400_02 border-solid flex h-[60px] rounded-[14px] w-full"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[10%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Rate ($)
                            </Text>
                            <Input
                              name="group223"
                              placeholder="220"
                              className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:pl-5 text-gray-500_01 text-left text-xl w-full"
                              wrapClassName="border border-gray-400_02 border-solid pl-[35px] pr-[11px] py-2.5 rounded-[14px] w-full"
                            ></Input>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-[15%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              # of Occurances
                            </Text>
                            <Input
                              name="background_One"
                              placeholder=""
                              className="p-0 w-full"
                              wrapClassName="border border-gray-400_02 border-solid flex h-[60px] rounded-[14px] w-full"
                            ></Input>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[10%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              Status
                            </Text>
                            <Button className="border border-gray-400_02 border-solid cursor-pointer font-cairo font-semibold leading-[normal] min-w-[93px] py-[11px] rounded-[14px] text-center text-green-500 text-xl">
                              Active
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-row font-cairo gap-[19px] items-end justify-start mt-7 w-[32%] md:w-full">
                          <Button className="bg-deep_purple-600 flex h-[49px] items-center justify-center p-[15px] rounded-[14px] shadow-bs3 w-[49px]">
                            <Img
                              className="h-[17px]"
                              src="images/img_minimize.svg"
                              alt="minimize"
                            />
                          </Button>
                          <Text
                            className="mb-0.5 mt-2 text-white-A700 text-xl"
                            size="txtCairoSemiBold20WhiteA700"
                          >
                            Add New Membership Type
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col font-cairo gap-[43px] items-end justify-start w-[13%] md:w-full">
                        <div className="flex flex-row gap-[11px] items-center justify-between w-full">
                          <Button className="bg-gray-100 cursor-pointer font-bold leading-[normal] min-w-[78px] py-1.5 rounded-[14px] text-base text-center text-gray-900_07">
                            Edit
                          </Button>
                          <SelectBox
                            className="bg-white-A700 sm:flex-1 font-bold leading-[normal] px-[13px] py-1.5 rounded-[14px] shadow-bs4 text-base text-gray-900_07 text-left w-[49%] sm:w-full"
                            placeholderClassName="text-gray-900_07"
                            indicator={
                              <Img
                                className="h-2 mr-[0] w-[15px]"
                                src="images/img_arrow.svg"
                                alt="arrow"
                              />
                            }
                            isMulti={false}
                            name="btnchangedate"
                            options={btnchangedateOptionsList}
                            isSearchable={false}
                            placeholder="Sort"
                          />
                        </div>
                        <Img
                          className="h-[46px] w-[46px]"
                          src="images/img_menu_gray_100_03.svg"
                          alt="menu_One"
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
    </>
  );
};

export default MembershipsOnePage;
