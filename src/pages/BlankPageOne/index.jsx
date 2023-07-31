import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const BlankPageOnePage = () => {
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
                <header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
                  <Img
                    className="h-[46px] md:ml-[0] ml-[41px] md:mt-0 my-[37px] w-[46px]"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                  <div className="flex flex-col items-center justify-center ml-9 md:ml-[0] md:mt-0 my-[18px] p-2.5 w-auto">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 w-auto"
                      size="txtCairoBold34"
                    >
                      Attendance
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 flex md:flex-1 sm:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[97px] md:mt-0 my-[26px] p-[18px] rounded-[34px] w-[26%] md:w-full">
                    <Img
                      className="h-7 sm:ml-[0] ml-[19px] w-7"
                      src="images/img_search2.svg"
                      alt="searchTwo"
                    />
                    <Text
                      className="mr-[305px] text-base text-gray-500"
                      size="txtCairoSemiBold16Gray500"
                    >
                      Search here
                    </Text>
                  </div>
                  <Img
                    className="h-[31px] mb-[46px] md:ml-[0] ml-[197px] md:mt-0 mt-[43px]"
                    src="images/img_icons.svg"
                    alt="icons"
                  />
                  <div className="flex md:flex-1 flex-row gap-6 items-start justify-center md:ml-[0] ml-[60px] md:mt-0 my-[30px] w-[12%] md:w-full">
                    <Img
                      className="h-[57px] w-[57px]"
                      src="images/img_user_gray_400.svg"
                      alt="user_One"
                    />
                    <div className="flex flex-row gap-7 items-center justify-between mt-[3px] w-[64%]">
                      <div className="md:h-7 h-[54px] relative w-[70%]">
                        <Text
                          className="absolute inset-x-[0] mx-auto text-base text-white-A700 top-[0] w-max"
                          size="txtCairoBold16"
                        >
                          Instructor Day
                        </Text>
                        <Text
                          className="absolute bottom-[0] left-[0] text-blue_gray-700 text-right text-sm"
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
                  <div className="flex md:flex-1 flex-row gap-[19px] items-center justify-center md:ml-[0] ml-[50px] mr-[212px] md:mt-0 my-11 w-[3%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtCairoBold16"
                    >
                      EN
                    </Text>
                    <Img
                      className="h-2"
                      src="images/img_arrow.svg"
                      alt="arrow_One"
                    />
                  </div>
                </header>
                <Img
                  className="h-[857px] md:ml-[0] ml-[50px]"
                  src="images/img_content.svg"
                  alt="content"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlankPageOnePage;
