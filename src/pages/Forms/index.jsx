import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Switch,
  Text,
  TextArea,
} from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FormsPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[2055px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col gap-8 justify-start w-full">
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
            <div className="bg-gray-900_01 flex flex-col items-center justify-start md:ml-[0] ml-[392px] mr-[53px] p-[29px] md:px-5 rounded-[14px] shadow-bs4 w-[77%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[30px] w-[95%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtCairoBold38"
                  >
                    Form Elements
                  </Text>
                  <Text
                    className="text-gray-500_01 text-lg"
                    size="txtOpenSans18Gray50001"
                  >
                    Lorem ipsum dolor sit amet{" "}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[38px] w-[76%] md:w-full">
                  <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Basic Input Forms
                    </Text>
                    <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[32%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            INPUT BOX
                          </Text>
                          <Input
                            name="group172"
                            placeholder="Placeholder"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:px-5 text-gray-500_01 text-left text-xl w-full"
                            wrapClassName="border border-blue_gray-700 border-solid pl-[22px] pr-[35px] py-2.5 rounded-[14px] w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            TEXTAREA
                          </Text>
                          <TextArea
                            className="border border-blue_gray-700 border-solid flex pb-[22px] pt-2.5 px-[22px] rounded-[14px] w-full"
                            name="group173"
                            placeholder="Placeholder"
                            name="group173"
                            placeholder="Placeholder"
                          ></TextArea>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[32%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            INPUT BOX
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
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            TEXTAREA
                          </Text>
                          <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex flex-col font-cairo gap-8 justify-start p-[13px] rounded-[14px] w-full">
                            <div className="flex flex-row items-start justify-start md:ml-[0] ml-[9px] mr-[194px] w-[30%] md:w-full">
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtCairoSemiBold20WhiteA700"
                              >
                                Input here
                              </Text>
                              <Line className="bg-deep_purple-600 h-[27px] mb-[7px] mt-[3px] w-px" />
                            </div>
                            <Img
                              className="h-[17px] mb-[9px] md:ml-[0] ml-[263px] w-[17px]"
                              src="images/img_airplane_deep_purple_600.svg"
                              alt="airplane"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[32%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            INPUT BOX
                          </Text>
                          <Input
                            name="group176"
                            placeholder="Readonly/disable"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-blue_gray-700 sm:px-5 text-blue_gray-700 text-left text-xl w-full"
                            wrapClassName="bg-gray-900_02 border-2 border-gray-900_02 border-solid pb-2 pl-[22px] pr-[35px] pt-[13px] rounded-[14px] w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            TEXTAREA
                          </Text>
                          <TextArea
                            className="bg-gray-900_02 border-2 border-gray-900_02 border-solid font-cairo font-semibold leading-[normal] pb-[35px] pl-[22px] pr-[35px] pt-[13px] sm:px-5 rounded-[14px] placeholder:text-blue_gray-700 text-blue_gray-700 text-left text-xl w-full"
                            name="group177"
                            placeholder="Readonly/disable"
                            name="group177"
                            placeholder="Readonly/disable"
                          ></TextArea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[42px] w-[76%] md:w-full">
                  <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Validation Input Forms
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[32%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          INPUT BOX
                        </Text>
                        <Input
                          name="group185"
                          placeholder="Text"
                          className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pl-5 text-left text-white-A700 text-xl w-full"
                          wrapClassName="border-2 border-red-A200 border-solid flex pl-[22px] pr-[15px] py-2.5 rounded-[14px] w-full"
                          suffix={
                            <Img
                              className="mt-1.5 mb-[7px] h-6 ml-[35px]"
                              src="images/img_close_2.svg"
                              alt="close 2"
                            />
                          }
                        ></Input>
                        <Text
                          className="text-red-A200 text-sm"
                          size="txtOpenSansRomanSemiBold14RedA200"
                        >
                          Please provide valid text
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[32%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          INPUT BOX
                        </Text>
                        <Input
                          name="group186"
                          placeholder="Text"
                          className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pl-5 text-left text-white-A700 text-xl w-full"
                          wrapClassName="border-2 border-orange-400 border-solid flex pl-[22px] pr-[15px] py-2.5 rounded-[14px] w-full"
                          suffix={
                            <Img
                              className="mt-[5px] mb-2 h-6 ml-[35px]"
                              src="images/img_info24px_1_orange_400.svg"
                              alt="info-24px 1"
                            />
                          }
                        ></Input>
                        <Text
                          className="text-orange-400 text-sm"
                          size="txtOpenSansRomanSemiBold14"
                        >
                          Please provide valid text
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[32%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          INPUT BOX
                        </Text>
                        <Input
                          name="group187"
                          placeholder="Text"
                          className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pl-5 text-left text-white-A700 text-xl w-full"
                          wrapClassName="border-2 border-green-500 border-solid flex pl-[22px] pr-[15px] py-2.5 rounded-[14px] w-full"
                          suffix={
                            <Img
                              className="mt-1.5 mb-[7px] h-6 ml-[35px]"
                              src="images/img_checked_1.svg"
                              alt="checked 2"
                            />
                          }
                        ></Input>
                        <Text
                          className="text-green-500 text-sm"
                          size="txtOpenSansRomanSemiBold14Green500"
                        >
                          Thats it!
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[37px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Date Picker
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between mt-[21px] w-full">
                        <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            SELECT TIME
                          </Text>
                          <Input
                            name="language_Two"
                            placeholder="09  :  42"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pl-5 text-left text-white-A700 text-xl w-full"
                            wrapClassName="border border-blue_gray-700 border-solid flex pl-[22px] pr-[17px] py-2.5 rounded-[14px] w-full"
                            suffix={
                              <Img
                                className="mt-1.5 mb-[7px] h-6 ml-[35px]"
                                src="images/img_clock_3.svg"
                                alt="clock 3"
                              />
                            }
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            SELECT DATE
                          </Text>
                          <Input
                            name="group189"
                            placeholder="5/10/2020"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pl-5 text-left text-white-A700 text-xl w-full"
                            wrapClassName="border border-blue_gray-700 border-solid flex pl-[22px] pr-[15px] py-2.5 rounded-[14px] w-full"
                            suffix={
                              <Img
                                className="mt-1 mb-[5px] h-7 ml-[35px]"
                                src="images/img_calendarsilhouette_deep_purple_600.svg"
                                alt="calendar-silhouette 1"
                              />
                            }
                          ></Input>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[11px] w-full">
                        <div className="md:h-[179px] h-[189px] relative w-[21%] sm:w-full">
                          <div className="absolute bg-gray-900_02 bottom-[0] flex flex-row gap-[33px] inset-x-[0] items-center justify-between mx-auto p-[13px] rounded-[14px] shadow-bs8 w-full">
                            <div className="flex flex-col items-center justify-start ml-3">
                              <Text
                                className="text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                07
                              </Text>
                              <Text
                                className="text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                08
                              </Text>
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtCairoBold20"
                              >
                                09
                              </Text>
                              <Text
                                className="text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                10
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start mr-[17px] mt-0.5">
                              <Text
                                className="text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                41
                              </Text>
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtCairoBold20"
                              >
                                42
                              </Text>
                              <Text
                                className="text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                43
                              </Text>
                              <Text
                                className="text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                44
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-6 left-[11%] top-[0] w-6"
                            src="images/img_offer_gray_900_02.svg"
                            alt="offer"
                          />
                        </div>
                        <div className="md:h-[382px] h-[397px] relative w-[58%] sm:w-full">
                          <div className="absolute bg-gray-900_02 flex flex-col gap-4 h-max inset-[0] items-center justify-center m-auto pt-3.5 px-3.5 rounded-[14px] shadow-bs8 w-full">
                            <div className="flex flex-row gap-7 items-center justify-center mt-2.5 w-[68%] md:w-full">
                              <Img
                                className="h-[34px] w-[33px]"
                                src="images/img_icchevron_deep_purple_600_34x33.svg"
                                alt="icchevron"
                              />
                              <Text
                                className="text-center text-white-A700 text-xl"
                                size="txtCairoSemiBold20WhiteA700"
                              >
                                October 2020
                              </Text>
                              <Img
                                className="h-[34px] w-[33px]"
                                src="images/img_icchevron_34x33.svg"
                                alt="icchevron_One"
                              />
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[308px] items-center justify-start p-[11px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group196.svg')",
                              }}
                            >
                              <div className="flex flex-col items-center justify-start mb-[22px] w-[99%] md:w-full">
                                <List
                                  className="flex flex-col gap-[7px] items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex md:flex-1 flex-row items-center justify-between mx-auto my-0 w-[97%] md:w-full">
                                    <Text
                                      className="text-center text-lg text-white-A700"
                                      size="txtCairoSemiBold18WhiteA700"
                                    >
                                      M
                                    </Text>
                                    <Text
                                      className="text-center text-lg text-white-A700"
                                      size="txtCairoSemiBold18WhiteA700"
                                    >
                                      T
                                    </Text>
                                    <Text
                                      className="text-center text-lg text-white-A700"
                                      size="txtCairoSemiBold18WhiteA700"
                                    >
                                      W
                                    </Text>
                                    <Text
                                      className="text-center text-lg text-white-A700"
                                      size="txtCairoSemiBold18WhiteA700"
                                    >
                                      T
                                    </Text>
                                    <Text
                                      className="text-center text-lg text-white-A700"
                                      size="txtCairoSemiBold18WhiteA700"
                                    >
                                      F
                                    </Text>
                                    <Text
                                      className="text-center text-lg text-white-A700"
                                      size="txtCairoSemiBold18WhiteA700"
                                    >
                                      S
                                    </Text>
                                    <Text
                                      className="text-center text-lg text-red-A200"
                                      size="txtCairoSemiBold18RedA200"
                                    >
                                      S
                                    </Text>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start mx-auto my-0 w-[97%] md:w-full">
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        1
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        4
                                      </Text>
                                      <Text
                                        className="bg-white-A700 flex h-[39px] items-center justify-center rounded-[14px] text-center text-deep_purple-600 text-xl w-[39px]"
                                        size="txtCairoBold20Deeppurple600"
                                      >
                                        5
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        6
                                      </Text>
                                      <Text
                                        className="text-center text-red-A200 text-xl"
                                        size="txtCairoBold20RedA200"
                                      >
                                        7
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start ml-1.5 my-0 w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <Text
                                        className="text-center text-white-A700_aa text-xl"
                                        size="txtCairoBold20WhiteA700aa"
                                      >
                                        8
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700_aa text-xl"
                                        size="txtCairoBold20WhiteA700aa"
                                      >
                                        9
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700_aa text-xl"
                                        size="txtCairoBold20WhiteA700aa"
                                      >
                                        10
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700_aa text-xl"
                                        size="txtCairoBold20WhiteA700aa"
                                      >
                                        11
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700_aa text-xl"
                                        size="txtCairoBold20WhiteA700aa"
                                      >
                                        12
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700_aa text-xl"
                                        size="txtCairoBold20WhiteA700aa"
                                      >
                                        13
                                      </Text>
                                      <Text
                                        className="text-center text-red-A200_aa text-xl"
                                        size="txtCairoBold20RedA200aa"
                                      >
                                        14
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        15
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        16
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        17
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        18
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        19
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        20
                                      </Text>
                                      <Text
                                        className="text-center text-red-A200 text-xl"
                                        size="txtCairoBold20RedA200"
                                      >
                                        21
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        22
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        23
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        24
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        25
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        26
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        27
                                      </Text>
                                      <Text
                                        className="text-center text-red-A200 text-xl"
                                        size="txtCairoBold20RedA200"
                                      >
                                        28
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex md:flex-1 flex-col items-center justify-start mr-[5px] my-0 w-[99%] md:w-full">
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        29
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        30
                                      </Text>
                                      <Text
                                        className="text-center text-white-A700 text-xl"
                                        size="txtCairoBold20"
                                      >
                                        31
                                      </Text>
                                      <Text
                                        className="text-blue_gray-900 text-center text-xl"
                                        size="txtCairoBold20Bluegray900"
                                      >
                                        1
                                      </Text>
                                      <Text
                                        className="text-blue_gray-900 text-center text-xl"
                                        size="txtCairoBold20Bluegray900"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="text-blue_gray-900 text-center text-xl"
                                        size="txtCairoBold20Bluegray900"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="text-blue_gray-900 text-center text-xl"
                                        size="txtCairoBold20Bluegray900"
                                      >
                                        4
                                      </Text>
                                    </div>
                                  </div>
                                </List>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="absolute h-6 right-[8%] top-[0] w-6"
                            src="images/img_offer_gray_900_02_24x24.svg"
                            alt="offer_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[51px] items-start justify-start w-[46%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtCairoBold24"
                        >
                          Checkboxes & Radios Button
                        </Text>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-[29px] w-full">
                          <div className="flex flex-row gap-3 items-center justify-start">
                            <Img
                              className="h-6 w-6"
                              src="images/img_iccheck_gray_500_01.svg"
                              alt="iccheck"
                            />
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoSemiBold18WhiteA700"
                            >
                              Unchecked
                            </Text>
                          </div>
                          <CheckBox
                            className="font-semibold leading-[normal] text-left text-lg text-white-A700"
                            inputClassName="mr-[5px]"
                            name="checkedbox"
                            id="checkedbox"
                            label="Checked Box"
                          ></CheckBox>
                          <CheckBox
                            className="font-semibold leading-[normal] text-left text-lg text-white-A700"
                            inputClassName="mr-[5px]"
                            name="checkedboxdisab_One"
                            id="checkedboxdisab_One"
                            label="Checked Box (disable)"
                          ></CheckBox>
                        </div>
                        <RadioGroup
                          className="flex md:ml-[0] ml-[3px] mt-[19px] w-full"
                          name="radiogroupuncheckedOne"
                        >
                          <Radio
                            value="Unchecked"
                            className="font-semibold leading-[normal] text-left text-lg text-white-A700"
                            inputClassName="mr-[5px]"
                            checked={false}
                            name="radiogroupuncheckedOne"
                            label="Unchecked"
                            id="Unchecked"
                          ></Radio>
                          <Radio
                            value="CheckedBox"
                            className="font-semibold leading-[normal] ml-[73px] text-left text-lg text-white-A700"
                            inputClassName="mr-[5px]"
                            checked={false}
                            name="radiogroupuncheckedOne"
                            label="Checked Box"
                            id="CheckedBox"
                          ></Radio>
                          <Radio
                            value="CheckedBoxdisable"
                            className="font-semibold leading-[normal] ml-[72px] text-left text-lg text-white-A700"
                            inputClassName="mr-[5px]"
                            checked={false}
                            name="radiogroupuncheckedOne"
                            label="Checked Box disable"
                            id="CheckedBoxdisable"
                          ></Radio>
                        </RadioGroup>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[34px] items-start justify-start w-[87%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtCairoBold24"
                      >
                        Toggle Switches
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[3px] w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Switch
                            onColor="#1e1b3a"
                            offColor="#1e1b3a"
                            onHandleColor="#a4a4a4"
                            offHandleColor="#a4a4a4"
                            value={false}
                            className="w-full"
                          />
                        </div>
                        <Img
                          className="h-10"
                          src="images/img_switchoption.svg"
                          alt="switchoption"
                        />
                        <Img
                          className="h-10"
                          src="images/img_switchoption_blue_gray_900.svg"
                          alt="switchoption_One"
                        />
                        <Img
                          className="h-10"
                          src="images/img_switchoption_blue_gray_900_40x82.svg"
                          alt="switchoption_Two"
                        />
                        <Img
                          className="h-10"
                          src="images/img_switchoption_40x82.svg"
                          alt="switchoption_Three"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[42px] w-[76%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtCairoBold24"
                    >
                      Input Group, Dropdown & Browser
                    </Text>
                    <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between mt-[18px] w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            SELECT BOX
                          </Text>
                          <Input
                            name="group178"
                            placeholder="Placeholder"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-gray-500_01 sm:px-5 text-gray-500_01 text-left text-xl w-full"
                            wrapClassName="border border-blue_gray-700 border-solid flex px-[22px] py-2.5 rounded-[14px] w-full"
                            suffix={
                              <div className="mt-4 mb-[15px] ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-deep_purple-600">
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
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            INPUT BOX
                          </Text>
                          <Input
                            name="group182"
                            placeholder="Write Here"
                            className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-left text-white-A700 text-xl w-full"
                            wrapClassName="border border-blue_gray-700 border-solid flex pr-[35px] rounded-[14px] w-full"
                            prefix={
                              <div className="mr-[18px] rounded-tl-[14px] rounded-bl-[14px] sm:w-full sm:mx-0 sm:px-5 w-[21%] border-blue_gray-700 border border-solid bg-blue_gray-700 py-[18px] px-[21px] flex justify-center items-center">
                                <Img
                                  className="h-6 my-auto"
                                  src="images/img_addfriend1.svg"
                                  alt="add-friend (1) 1"
                                />
                              </div>
                            }
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            INPUT BOX
                          </Text>
                          <div className="font-cairo h-[60px] relative w-full">
                            <div className="absolute border border-deep_purple-600 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-2.5 rounded-[14px] w-full">
                              <Text
                                className="ml-3 md:ml-[0] text-gray-500_01 text-xl"
                                size="txtCairoSemiBold20"
                              >
                                Choose file
                              </Text>
                            </div>
                            <Button className="absolute bg-deep_purple-600 border border-deep_purple-600 border-solid cursor-pointer font-bold h-full inset-y-[0] leading-[normal] min-w-[121px] my-auto py-[11px] right-[0] rounded-bl-[14px] rounded-tl-[14px] text-center text-white-A700 text-xl">
                              Browse
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="font-cairo md:h-[217px] h-[222px] md:ml-[0] ml-[22px] mt-2 relative w-[28%]">
                      <div className="absolute bg-gray-900_02 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto py-[18px] rounded-[14px] shadow-bs8 w-full">
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[27px]">
                          <Text
                            className="text-gray-500_01 text-xl"
                            size="txtCairoSemiBold20"
                          >
                            Lorem ipsum
                          </Text>
                          <Text
                            className="mt-[3px] text-gray-500_01 text-xl"
                            size="txtCairoSemiBold20"
                          >
                            Dolor sit amet
                          </Text>
                        </div>
                        <div className="bg-blue_gray-700 flex flex-col items-start justify-end p-[3px] w-full">
                          <Text
                            className="md:ml-[0] ml-[23px] mt-[5px] text-white-A700 text-xl"
                            size="txtCairoBold20"
                          >
                            Consectetur adipiscing
                          </Text>
                        </div>
                        <Text
                          className="mb-[7px] md:ml-[0] ml-[27px] text-gray-500_01 text-xl"
                          size="txtCairoSemiBold20"
                        >
                          sed do eiusmod
                        </Text>
                      </div>
                      <Img
                        className="absolute h-6 right-[6%] top-[0] w-6"
                        src="images/img_offer_gray_900_02.svg"
                        alt="offer_Three"
                      />
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
                  alt="calendarsilhoue_One"
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
                  src="images/img_invoice1.svg"
                  alt="invoiceOne"
                />
              }
              label={<Text>Invoices</Text>}
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
            className="mb-[1016px] md:ml-[0] mt-1.5 mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default FormsPage;
