import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";
import Sidebar11 from "components/Sidebar11";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const NotificationLatestActivityvTwoPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1080px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
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
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[39px] items-start justify-between w-full">
                <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-end p-[30px] sm:px-5 rounded-[14px] shadow-bs4 w-3/4 md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[3px] w-[97%] md:w-full">
                    <div className="md:h-[62px] h-[85px] relative w-[24%] md:w-full">
                      <Text
                        className="absolute left-[0] sm:text-3xl md:text-[32px] text-[34px] text-white-A700 top-[0]"
                        size="txtCairoBold34"
                      >
                        Activity
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-gray-500_01 text-lg w-max"
                        size="txtOpenSans18Gray50001"
                      >
                        Lorem ipsum dolor sit amet{" "}
                      </Text>
                    </div>
                    <Button
                      className="bg-gray-900_02 cursor-pointer flex items-center justify-center mb-[26px] min-w-[172px] md:ml-[0] ml-[540px] md:mt-0 mt-4 pl-[25px] pr-[19px] py-1.5 rounded-[14px]"
                      rightIcon={
                        <div className="mt-2.5 mb-3 ml-[19px] bg-white-A700">
                          <Img
                            src="images/img_offer_white_a700_6x11.svg"
                            alt="offer"
                          />
                        </div>
                      }
                    >
                      <div className="font-bold leading-[normal] sm:pl-5 text-base text-left text-white-A700">
                        Activity Today
                      </div>
                    </Button>
                    <Img
                      className="h-6 md:ml-[0] ml-[23px] md:mt-0 mt-[30px] w-6"
                      src="images/img_verticon_gray_500_01.svg"
                      alt="verticon"
                    />
                  </div>
                  <div className="flex flex-col gap-[19px] items-center justify-start mt-[31px] w-[97%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        Today
                      </Text>
                      <Line className="bg-gray-400_02 h-px mb-[21px] sm:mt-0 mt-[15px] w-[93%]" />
                    </div>
                    <List
                      className="flex flex-col gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Text
                          className="md:mt-0 mt-2.5 text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          2m ago
                        </Text>
                        <div className="bg-deep_purple-600 h-[51px] mb-[5px] md:ml-[0] ml-[39px] rounded-[3px] w-[1%]"></div>
                        <Button className="bg-deep_purple-600 flex h-[51px] items-center justify-center mb-[5px] ml-5 md:ml-[0] p-[13px] rounded-[14px] w-[51px]">
                          <Img
                            className="h-6"
                            src="images/img_energy11.svg"
                            alt="energyEleven"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            <span className="text-white-A700 font-cairo text-left font-bold">
                              Jackie Kun
                            </span>
                            <span className="text-white-A700 font-cairo text-left font-semibold">
                              {" "}
                              mentioned you at
                            </span>
                            <span className="text-deep_purple-600 font-cairo text-left font-bold">
                              {" "}
                              Kleon Projects
                            </span>
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-gray-500_01"
                            size="txtOpenSans16Gray50001"
                          >
                            Monday, June 31 2020
                          </Text>
                        </div>
                        <Button className="bg-blue_gray-700 cursor-pointer font-bold font-cairo leading-[normal] mb-[9px] min-w-[133px] md:ml-[0] ml-[322px] md:mt-0 mt-1.5 py-1.5 rounded-[14px] text-base text-center text-white-A700">
                          Go to Board
                        </Button>
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Text
                          className="md:mt-0 mt-2.5 text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          6m ago
                        </Text>
                        <div className="bg-red-A200 h-[51px] mb-[5px] md:ml-[0] ml-[39px] rounded-[3px] w-[1%]"></div>
                        <Button className="bg-red-A200 flex h-[51px] items-center justify-center mb-[5px] ml-5 md:ml-[0] p-[13px] rounded-[14px] w-[51px]">
                          <Img
                            className="h-6"
                            src="images/img_clock2_white_a700.svg"
                            alt="clockTwo"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            <span className="text-white-A700 font-cairo text-left font-semibold">
                              [REMINDER] Due date of
                            </span>
                            <span className="text-deep_purple-600 font-cairo text-left font-bold">
                              {" "}
                              Highspeed Studios Projects{" "}
                            </span>
                            <span className="text-white-A700 font-cairo text-left font-semibold">
                              te task will be coming
                            </span>
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-gray-500_01"
                            size="txtOpenSans16Gray50001"
                          >
                            Monday, June 31 2020
                          </Text>
                        </div>
                        <Button className="bg-blue_gray-700 cursor-pointer font-bold font-cairo leading-[normal] mb-[9px] min-w-[133px] ml-20 md:ml-[0] md:mt-0 mt-1.5 py-1.5 rounded-[14px] text-base text-center text-white-A700">
                          Go to Board
                        </Button>
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Text
                          className="md:mt-0 mt-2.5 text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          16m ago
                        </Text>
                        <div className="bg-light_blue-300 h-[51px] mb-[5px] md:ml-[0] ml-[30px] rounded-[3px] w-[1%]"></div>
                        <Button className="bg-light_blue-300 flex h-[51px] items-center justify-center mb-[5px] ml-5 md:ml-[0] p-[13px] rounded-[14px] w-[51px]">
                          <Img
                            className="h-6"
                            src="images/img_energy11.svg"
                            alt="energyEleven"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            <span className="text-white-A700 font-cairo text-left font-bold">
                              Olivia Johanna{" "}
                            </span>
                            <span className="text-white-A700 font-cairo text-left font-semibold">
                              has created new task at
                            </span>
                            <span className="text-deep_purple-600 font-cairo text-left font-bold">
                              {" "}
                              Kleon Projects
                            </span>
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-gray-500_01"
                            size="txtOpenSans16Gray50001"
                          >
                            Monday, June 31 2020
                          </Text>
                        </div>
                        <Button className="bg-blue_gray-700 cursor-pointer font-bold font-cairo leading-[normal] mb-[9px] min-w-[133px] md:ml-[0] ml-[243px] md:mt-0 mt-1.5 py-1.5 rounded-[14px] text-base text-center text-white-A700">
                          Go to Board
                        </Button>
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Text
                          className="md:mt-0 mt-2.5 text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          4h ago
                        </Text>
                        <div className="bg-deep_purple-600 h-[51px] mb-[5px] ml-11 md:ml-[0] rounded-[3px] w-[1%]"></div>
                        <Button className="bg-deep_purple-600 flex h-[51px] items-center justify-center mb-[5px] ml-5 md:ml-[0] p-[13px] rounded-[14px] w-[51px]">
                          <Img
                            className="h-6"
                            src="images/img_energy11.svg"
                            alt="energyEleven"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            <span className="text-white-A700 font-cairo text-left font-bold">
                              Jackie Kun
                            </span>
                            <span className="text-white-A700 font-cairo text-left font-semibold">
                              {" "}
                              commented at
                            </span>
                            <span className="text-deep_purple-600 font-cairo text-left font-bold">
                              {" "}
                              Kleon Projects{" "}
                            </span>
                            <span className="text-white-A700 font-cairo text-left font-semibold">
                              “Hei, please update the progress gu..
                            </span>
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-gray-500_01"
                            size="txtOpenSans16Gray50001"
                          >
                            Monday, June 31 2020
                          </Text>
                        </div>
                        <Button className="bg-blue_gray-700 cursor-pointer font-bold font-cairo leading-[normal] mb-[9px] min-w-[133px] md:ml-[0] ml-[62px] md:mt-0 mt-1.5 py-1.5 rounded-[14px] text-base text-center text-white-A700">
                          Go to Board
                        </Button>
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Text
                          className="md:mt-0 mt-2 text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          12:31 AM
                        </Text>
                        <div className="bg-green-500 h-[51px] mb-[5px] md:ml-[0] ml-[25px] rounded-[3px] w-[1%]"></div>
                        <Button className="bg-green-500 flex h-[51px] items-center justify-center mb-[5px] ml-5 md:ml-[0] p-[13px] rounded-[14px] w-[51px]">
                          <Img
                            className="h-6"
                            src="images/img_energy11.svg"
                            alt="energyEleven"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtCairoSemiBold18WhiteA700"
                          >
                            <span className="text-white-A700 font-cairo text-left font-bold">
                              You{" "}
                            </span>
                            <span className="text-white-A700 font-cairo text-left font-semibold">
                              has moved{" "}
                            </span>
                            <span className="text-deep_purple-600 font-cairo text-left font-bold">
                              “Wireframing Landing Page”{" "}
                            </span>
                            <span className="text-white-A700 font-cairo text-left font-semibold">
                              task to Done
                            </span>
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-gray-500_01"
                            size="txtOpenSans16Gray50001"
                          >
                            Monday, June 31 2020
                          </Text>
                        </div>
                        <Button className="bg-blue_gray-700 cursor-pointer font-bold font-cairo leading-[normal] mb-[9px] min-w-[133px] md:ml-[0] ml-[213px] md:mt-0 mt-1.5 py-1.5 rounded-[14px] text-base text-center text-white-A700">
                          Go to Board
                        </Button>
                      </div>
                    </List>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[46px] items-center justify-between mt-10 w-[97%] md:w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtCairoBold20"
                    >
                      Yesterday
                    </Text>
                    <Line className="bg-gray-400_02 h-px mb-[21px] md:mt-0 mt-[15px] w-[87%]" />
                  </div>
                  <List
                    className="flex flex-col gap-5 items-center mt-[29px] w-[97%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtOpenSans16"
                      >
                        2m ago
                      </Text>
                      <div className="bg-pink-400 h-[51px] mb-[5px] md:ml-[0] ml-[39px] rounded-[3px] w-[1%]"></div>
                      <Button className="bg-pink-400 flex h-[51px] items-center justify-center mb-[5px] ml-5 md:ml-[0] p-[13px] rounded-[14px] w-[51px]">
                        <Img
                          className="h-6"
                          src="images/img_energy11.svg"
                          alt="energyEleven"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px]">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtCairoSemiBold18WhiteA700"
                        >
                          <span className="text-white-A700 font-cairo text-left font-bold">
                            Reny{" "}
                          </span>
                          <span className="text-white-A700 font-cairo text-left font-semibold">
                            mentioned you at
                          </span>
                          <span className="text-deep_purple-600 font-cairo text-left font-bold">
                            {" "}
                            Fullspeedoo Projects
                          </span>
                        </Text>
                        <Text
                          className="mt-0.5 text-base text-gray-500_01"
                          size="txtOpenSans16Gray50001"
                        >
                          Monday, June 31 2020
                        </Text>
                      </div>
                      <Button className="bg-blue_gray-700 cursor-pointer font-bold font-cairo leading-[normal] mb-[9px] min-w-[133px] md:ml-[0] ml-[313px] md:mt-0 mt-1.5 py-1.5 rounded-[14px] text-base text-center text-white-A700">
                        Go to Board
                      </Button>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtOpenSans16"
                      >
                        2m ago
                      </Text>
                      <div className="bg-deep_purple-600 h-[51px] mb-[5px] md:ml-[0] ml-[39px] rounded-[3px] w-[1%]"></div>
                      <Button className="bg-deep_purple-600 flex h-[51px] items-center justify-center mb-[5px] ml-5 md:ml-[0] p-[13px] rounded-[14px] w-[51px]">
                        <Img
                          className="h-6"
                          src="images/img_energy11.svg"
                          alt="energyEleven"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px]">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtCairoSemiBold18WhiteA700"
                        >
                          <span className="text-white-A700 font-cairo text-left font-bold">
                            Jackie Kun
                          </span>
                          <span className="text-white-A700 font-cairo text-left font-semibold">
                            {" "}
                            mentioned you at
                          </span>
                          <span className="text-deep_purple-600 font-cairo text-left font-bold">
                            {" "}
                            Kleon Projects
                          </span>
                        </Text>
                        <Text
                          className="mt-0.5 text-base text-gray-500_01"
                          size="txtOpenSans16Gray50001"
                        >
                          Monday, June 31 2020
                        </Text>
                      </div>
                      <Button className="bg-blue_gray-700 cursor-pointer font-bold font-cairo leading-[normal] mb-[9px] min-w-[133px] md:ml-[0] ml-[322px] md:mt-0 mt-1.5 py-1.5 rounded-[14px] text-base text-center text-white-A700">
                        Go to Board
                      </Button>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start w-[23%] md:w-full">
                  <div className="bg-gray-900_01 flex flex-col items-start justify-end p-[7px] rounded-[14px] shadow-bs4 w-full">
                    <RadioGroup
                      className="flex flex-col md:ml-[0] ml-[23px] mt-[23px] w-[86%]"
                      name="title"
                    >
                      <Radio
                        value="Newest"
                        className="font-bold leading-[normal] sm:pr-5 sm:text-3xl md:text-[32px] text-[34px] text-left text-white-A700"
                        inputClassName="mr-[5px]"
                        checked={false}
                        name="title"
                        label="Newest"
                        id="Newest"
                      ></Radio>
                      <Radio
                        value="2"
                        className="font-bold leading-[normal] mb-1.5 ml-[126px] sm:pr-5 text-2xl md:text-[22px] text-deep_purple-600 text-left sm:text-xl"
                        inputClassName="mr-[5px]"
                        checked={false}
                        name="title"
                        label="2"
                        id="2"
                      ></Radio>
                    </RadioGroup>
                    <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[23px] mt-[29px] w-[93%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-2 items-start justify-start ml-1 md:ml-[0] w-[99%] md:w-full">
                          <div className="bg-pink-400 h-[11px] mb-[27px] mt-1.5 rounded-[5px] w-[11px]"></div>
                          <Text
                            className="text-base text-white-A700 w-[94%] sm:w-full"
                            size="txtOpenSansRomanSemiBold16"
                          >
                            You has been invited to Kleon Project Phase 2
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-3 w-[93%] md:w-full">
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtOpenSans14"
                          >
                            24m ago
                          </Text>
                          <Text
                            className="text-deep_purple-600 text-sm"
                            size="txtOpenSansBold14Deeppurple600"
                          >
                            Mark as read
                          </Text>
                        </div>
                        <Line className="bg-blue_gray-900 h-px mt-[17px] w-[93%]" />
                      </div>
                    </div>
                    <div className="flex flex-col font-opensans items-center justify-start mb-1.5 md:ml-[0] ml-[23px] mt-5 w-[87%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-base text-white-A700 w-full"
                          size="txtOpenSans16"
                        >
                          Kevin removed you from the “Future Dream” task
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-[13px] w-full">
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtOpenSans14"
                          >
                            24m ago
                          </Text>
                          <Text
                            className="text-gray-500_01 text-sm"
                            size="txtOpenSansBold14Gray50001"
                          >
                            Remove
                          </Text>
                        </div>
                        <Line className="bg-blue_gray-900 h-px mt-[19px] w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[265px] h-[397px] relative w-full">
                    <div className="absolute bg-deep_purple-600 bottom-[0] flex flex-col gap-[21px] inset-x-[0] justify-center mx-auto p-4 rounded-[14px] shadow-bs4 w-full">
                      <div className="h-[151px] md:h-[162px] ml-3.5 md:ml-[0] mr-[31px] mt-[58px] relative w-[86%]">
                        <div className="absolute bg-white-A700_26 h-[104px] right-[0] rounded-[52px] top-[0] w-1/5"></div>
                        <div className="absolute bottom-[0] flex flex-col gap-[13px] inset-x-[0] items-center justify-start mx-auto">
                          <Text
                            className="leading-[34.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[97%] sm:w-full"
                            size="txtCairoBold24"
                          >
                            Get busy at the end of the month?
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtOpenSans16"
                          >
                            Know the basic managemnet here
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[50px] h-[55px] mb-2 mr-40 relative w-[48%]">
                        <Img
                          className="absolute bottom-[0] h-[22px] left-[0]"
                          src="images/img_clock_white_a700.svg"
                          alt="clock"
                        />
                        <Button className="absolute bg-gray-100_01 cursor-pointer font-bold leading-[normal] min-w-[133px] py-1.5 right-[0] rounded-[14px] text-base text-center text-deep_purple-600 top-[0]">
                          Learn More
                        </Button>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-[162px] inset-x-[0] items-center justify-start mx-auto top-[0] w-[162px]">
                      <div className="md:h-[124px] h-[162px] relative w-[162px]">
                        <div className="md:h-[124px] h-[162px] m-auto w-[162px]">
                          <div className="md:h-[124px] h-[162px] m-auto w-[162px]">
                            <div className="md:h-[124px] h-[162px] m-auto w-[162px]">
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[124px] items-center justify-start left-[0] pb-[9px] w-[78%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group215.svg')",
                                }}
                              >
                                <Img
                                  className="h-[115px]"
                                  src="images/img_vector.svg"
                                  alt="vector_One"
                                />
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-[76px] items-start justify-start pb-2 pr-2 right-[0] top-[0] w-[76px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group216.svg')",
                                }}
                              >
                                <Img
                                  className="h-[63px] mb-1"
                                  src="images/img_offer_blue_100_01.svg"
                                  alt="offer"
                                />
                              </div>
                            </div>
                            <Img
                              className="absolute h-[55px] right-[0] top-[4%]"
                              src="images/img_group.svg"
                              alt="group"
                            />
                          </div>
                          <Img
                            className="absolute h-[63px] right-[6%] top-[22%]"
                            src="images/img_group_orange_300.svg"
                            alt="group_One"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[49px] items-end justify-start p-1 right-[14%] top-[14%] w-[49px]"
                          style={{
                            backgroundImage: "url('images/img_group217.svg')",
                          }}
                        >
                          <Img
                            className="h-[27px] mb-3 w-[27px]"
                            src="images/img_call.svg"
                            alt="call"
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
        <Sidebar11 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]" />
      </div>
    </>
  );
};

export default NotificationLatestActivityvTwoPage;
