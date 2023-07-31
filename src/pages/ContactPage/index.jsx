import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C01DashboardNav from "components/C01DashboardNav";
import Sidebar4 from "components/Sidebar4";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1535px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-11 w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                      size="txtCairoBold34"
                    >
                      Contacts
                    </Text>
                    <Text
                      className="text-lg text-white-A700"
                      size="txtOpenSans18"
                    >
                      Lorem ipsum dolor sit amet{" "}
                    </Text>
                  </div>
                  <Input
                    name="searchbox_One"
                    placeholder="Search here"
                    className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                    wrapClassName="bg-gray-900_01 flex md:flex-1 mb-[11px] md:ml-[0] ml-[361px] md:mt-0 mt-2 pb-[15px] pt-5 px-[34px] rounded-[14px] shadow-bs4 w-[34%] md:w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-1 h-7 mr-6"
                        src="images/img_search2.svg"
                        alt="search 2"
                      />
                    }
                  ></Input>
                  <Button className="bg-gray-900_01 flex h-[68px] items-center justify-center mb-[11px] md:ml-[0] ml-[26px] md:mt-0 mt-2 p-[22px] sm:px-5 rounded-[14px] shadow-bs4 w-[68px]">
                    <Img
                      className="h-6"
                      src="images/img_menu_blue_gray_700.svg"
                      alt="menu"
                    />
                  </Button>
                  <Button className="bg-gray-900_01 flex h-[68px] items-center justify-center mb-[11px] ml-4 md:ml-[0] md:mt-0 mt-2 p-[22px] sm:px-5 rounded-[14px] shadow-bs4 w-[68px]">
                    <Img
                      className="h-6"
                      src="images/img_grid_deep_purple_600.svg"
                      alt="grid"
                    />
                  </Button>
                  <Button
                    className="bg-deep_purple-600 cursor-pointer flex items-center justify-center mb-[11px] min-w-[181px] md:ml-[0] ml-[26px] md:mt-0 mt-2 pl-6 pr-[18px] py-[17px] rounded-[14px] shadow-bs4"
                    leftIcon={
                      <Img
                        className="h-6 mt-1 mb-[5px] mr-[7px]"
                        src="images/img_addfriend1.svg"
                        alt="add-friend 1"
                      />
                    }
                  >
                    <div className="font-bold leading-[normal] sm:pl-5 text-left text-lg text-white-A700">
                      New Contacts
                    </div>
                  </Button>
                </div>
              </div>
              <div className="font-opensans md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] mt-7 w-full">
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-teal-400 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-4 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Angela Moss
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[73%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          angelamoss@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <Button className="absolute bg-blue-700 bottom-[0] cursor-pointer font-extrabold h-[42px] leading-[normal] py-[11px] right-[0] rounded-[12px] text-center text-sm text-white-A700 w-[42px]">
                          AV
                        </Button>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-4 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Ahmad Zayn
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          <>
                            Photographer at
                            <br />
                          </>
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Audio Video Teams
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[85%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[74%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          ahmadzayn@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <Button className="absolute bg-pink-400_01 bottom-[0] cursor-pointer font-extrabold h-[42px] leading-[normal] py-[11px] right-[0] rounded-[12px] text-center text-sm text-white-A700 w-[42px]">
                          Cz
                        </Button>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Brian Connor
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          <>
                            Designer at <br />
                          </>
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Crimzon Guards Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[73%] md:w-full">
                        <Button className="bg-deep_purple-600 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1_white_a700.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-deep_purple-600 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_white_a700.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          brianconnor@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-gray-800 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-4">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Courtney Hawkins
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Programmer at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mr-4 mt-5 w-[94%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[68%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          courtneyhawk@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-purple-200 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-4 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Chyntia Smilee
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[73%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          angelamoss@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-teal-100 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        David Here
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[81%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[78%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          davidhere@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-light_blue-A700 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Dennise Lee
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[83%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[77%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          denisselee@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-teal-900 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Erbatov Axie
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[73%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          erbatovaxie@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-teal-200 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Evan Khan
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[73%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          angelamoss@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-blue-400 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-4 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Fanny Humble
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[91%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[70%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          fannyhumble@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-deep_orange-600 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[15px] mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Franklin Jr.
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[79%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-4/5 md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          franklinjr@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-indigo-900 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Gandalf Hoos
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[73%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          gandalfhoss@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-green-600 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Gabriella
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[77%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[83%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          gabriella@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-pink-600 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-4 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Hanny Shella
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[87%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[73%] md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          hannyshella@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                  <div className="flex flex-col justify-start mb-2.5 w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[66px] w-[73%] md:w-full">
                      <div className="h-[105px] md:h-[115px] mt-2.5 relative w-[73%]">
                        <Img
                          className="absolute h-[105px] inset-y-[0] left-[0] my-auto w-[105px]"
                          src="images/img_profilepicture_gray_400.svg"
                          alt="profilepicture"
                        />
                        <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                          <Button className="bg-purple-A700 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                            <Img src="images/img_settings.svg" alt="settings" />
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[77px] p-[7px] rounded-[12px] w-[38px]">
                        <Img
                          className="h-6"
                          src="images/img_verticon_blue_gray_700.svg"
                          alt="verticon"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 mx-auto">
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtCairoBold18"
                      >
                        Ivankov
                      </Text>
                      <Text
                        className="leading-[20.00px] text-blue_gray-700 text-center text-sm w-full"
                        size="txtOpenSans14"
                      >
                        <span className="text-blue_gray-700 font-opensans font-normal">
                          Marketing Manager at{" "}
                        </span>
                        <span className="text-deep_purple-600 font-opensans font-semibold">
                          Highspeed Studios
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-5 w-[84%] md:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-3/4 md:w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_phone1.svg"
                            alt="phoneOne"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          +12 345 6789 0
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Button className="bg-gray-900_02 flex h-9 items-center justify-center p-2 rounded-[12px] w-9">
                          <Img
                            className="h-5"
                            src="images/img_mail_deep_purple_600.svg"
                            alt="mail"
                          />
                        </Button>
                        <Text
                          className="text-sm text-white-A700"
                          size="txtOpenSansRomanSemiBold14WhiteA700"
                        >
                          ivankov123@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-poppins md:gap-10 items-center justify-between mt-12 w-full">
                <Text
                  className="text-base text-blue_gray-700"
                  size="txtPoppinsMedium16"
                >
                  <span className="text-blue_gray-700 font-opensans text-left font-normal">
                    Showing{" "}
                  </span>
                  <span className="text-blue_gray-700 font-opensans text-left font-bold">
                    1-10
                  </span>
                  <span className="text-blue_gray-700 font-opensans text-left font-normal">
                    {" "}
                    from{" "}
                  </span>
                  <span className="text-blue_gray-700 font-opensans text-left font-bold">
                    46
                  </span>
                  <span className="text-blue_gray-700 font-opensans text-left font-normal">
                    {" "}
                    data
                  </span>
                </Text>
                <div className="flex sm:flex-1 flex-row gap-2.5 items-center justify-between w-[24%] sm:w-full">
                  <Button className="border border-blue_gray-700 border-solid flex h-[50px] items-center justify-center p-[13px] rounded-[14px] w-[50px]">
                    <Img
                      className="h-6"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  </Button>
                  <div className="bg-gray-900_02 flex flex-row items-center justify-start sm:pr-5 pr-[25px] rounded-[14px]">
                    <Button className="bg-deep_purple-600 cursor-pointer font-bold h-[51px] leading-[normal] py-3 rounded-[14px] shadow-bs6 text-center text-lg text-white-A700 w-[51px]">
                      1
                    </Button>
                    <Text
                      className="ml-[22px] text-lg text-white-A700"
                      size="txtPoppinsMedium18"
                    >
                      2
                    </Text>
                    <Text
                      className="ml-11 text-lg text-white-A700"
                      size="txtPoppinsMedium18"
                    >
                      3
                    </Text>
                    <Text
                      className="ml-11 text-lg text-white-A700"
                      size="txtPoppinsMedium18"
                    >
                      4
                    </Text>
                  </div>
                  <Button className="border border-blue_gray-700 border-solid flex h-[50px] items-center justify-center p-[13px] rounded-[14px] w-[50px]">
                    <Img
                      className="h-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar4 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1" />
      </div>
    </>
  );
};

export default ContactPagePage;
