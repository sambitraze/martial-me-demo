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
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const yrsCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sizeCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sizeCounterOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const NewContactFormPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1139px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[23px] w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="flex flex-col font-opensans items-center justify-start md:ml-[0] ml-[385px] md:px-5 w-[78%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-7 justify-start w-[22%] md:w-full">
                  <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0]">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                      size="txtCairoBold34"
                    >
                      Contact
                    </Text>
                    <Text
                      className="text-lg text-white-A700"
                      size="txtOpenSans18"
                    >
                      Lorem ipsum dolor sit amet{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row gap-5 items-start justify-between w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-[93%]">
                        <List
                          className="flex flex-col gap-6 items-center w-[94%]"
                          orientation="vertical"
                        >
                          <div className="bg-gray-900_01 flex flex-col items-center justify-start my-0 p-5 rounded-[14px] shadow-bs4 w-full">
                            <div className="flex flex-col gap-[21px] items-center justify-start mb-[15px] w-full">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Img
                                  className="h-[62px] mt-1.5 w-[62px]"
                                  src="images/img_user_gray_400.svg"
                                  alt="user"
                                />
                                <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[30px] p-[7px] rounded-[12px] w-[38px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_verticon_gray_500_01.svg"
                                    alt="verticon"
                                  />
                                </Button>
                              </div>
                              <div className="md:h-[72px] h-[73px] relative w-full">
                                <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoBold18"
                                  >
                                    Angela Moss
                                  </Text>
                                  <Text
                                    className="leading-[20.00px] text-gray-500_01 text-sm w-full"
                                    size="txtOpenSans14Gray50001"
                                  >
                                    <span className="text-gray-500_01 font-opensans text-left font-normal">
                                      Marketing Manager at{" "}
                                    </span>
                                    <span className="text-deep_purple-600 font-opensans text-left font-semibold">
                                      Highspeed Studios
                                    </span>
                                  </Text>
                                </div>
                                <div className="absolute bg-gray-400 bottom-[0] flex flex-col h-[42px] items-center justify-start right-[0] rounded-[12px] w-[42px]">
                                  <Button className="bg-teal-400 flex h-[42px] items-center justify-center p-2.5 rounded-[12px] w-[42px]">
                                    <Img
                                      src="images/img_settings.svg"
                                      alt="settings"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-900_01 flex flex-col items-center justify-start my-0 p-5 rounded-[14px] shadow-bs4 w-full">
                            <div className="flex flex-col gap-[21px] items-center justify-start mb-[15px] w-full">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Img
                                  className="h-[62px] mt-1.5 w-[62px]"
                                  src="images/img_user_gray_400.svg"
                                  alt="user"
                                />
                                <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[30px] p-[7px] rounded-[12px] w-[38px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_verticon_gray_500_01.svg"
                                    alt="verticon"
                                  />
                                </Button>
                              </div>
                              <div className="md:h-[72px] h-[73px] relative w-full">
                                <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoBold18"
                                  >
                                    Ahmad Zayn
                                  </Text>
                                  <Text
                                    className="leading-[20.00px] text-gray-500_01 text-sm"
                                    size="txtOpenSans14Gray50001"
                                  >
                                    <span className="text-gray-500_01 font-opensans text-left font-normal">
                                      <>
                                        Photographer at
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-deep_purple-600 font-opensans text-left font-semibold">
                                      Audio Video Teams
                                    </span>
                                  </Text>
                                </div>
                                <Button className="absolute bg-blue-700 bottom-[0] cursor-pointer font-extrabold h-[42px] leading-[normal] py-[11px] right-[0] rounded-[12px] text-center text-sm text-white-A700 w-[42px]">
                                  AV
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-900_01 flex flex-col items-center justify-start my-0 p-5 rounded-[14px] shadow-bs4 w-full">
                            <div className="flex flex-col gap-[19px] items-center justify-start mb-[15px] w-full">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Img
                                  className="h-[62px] mt-1.5 w-[62px]"
                                  src="images/img_user_gray_400.svg"
                                  alt="user"
                                />
                                <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center mb-[30px] p-[7px] rounded-[12px] w-[38px]">
                                  <Img
                                    className="h-6"
                                    src="images/img_verticon_gray_500_01.svg"
                                    alt="verticon"
                                  />
                                </Button>
                              </div>
                              <div className="md:h-[74px] h-[75px] relative w-full">
                                <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto">
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoBold18"
                                  >
                                    Brian Connor
                                  </Text>
                                  <Text
                                    className="leading-[20.00px] text-gray-500_01 text-sm"
                                    size="txtOpenSans14Gray50001"
                                  >
                                    <span className="text-gray-500_01 font-opensans text-left font-normal">
                                      <>
                                        Designer at <br />
                                      </>
                                    </span>
                                    <span className="text-deep_purple-600 font-opensans text-left font-semibold">
                                      Crimzon Guards Studios
                                    </span>
                                  </Text>
                                </div>
                                <Button className="absolute bg-pink-400_01 bottom-[0] cursor-pointer font-extrabold h-[42px] leading-[normal] py-[11px] right-[0] rounded-[12px] text-center text-sm text-white-A700 w-[42px]">
                                  Cz
                                </Button>
                              </div>
                            </div>
                          </div>
                        </List>
                        <Img
                          className="h-[113px] md:h-auto object-cover"
                          src="images/img_maskgroup.png"
                          alt="maskgroup"
                        />
                      </div>
                      <div className="h-[697px] relative w-[2%]">
                        <Line className="bg-blue_gray-700 h-[697px] m-auto rounded-sm w-1" />
                        <Line className="absolute bg-gray-900_02 h-[354px] inset-x-[0] mx-auto rounded-sm top-[0] w-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 flex md:flex-1 flex-col font-cairo items-center justify-start py-[23px] rounded-[14px] shadow-bs4 w-[74%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
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
                        Add New Contact
                      </Text>
                    </div>
                    <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center md:ml-[0] ml-[736px] md:mt-0 my-[5px] p-[7px] rounded-[12px] w-[38px]">
                      <Img
                        className="h-6"
                        src="images/img_verticon_gray_500_01.svg"
                        alt="verticon"
                      />
                    </Button>
                  </div>
                  <Line className="bg-blue_gray-900 h-px mt-3 rounded-[1px] w-full" />
                  <div className="flex flex-col font-opensans md:gap-10 gap-[75px] items-start justify-start mb-[9px] mt-[30px] w-[93%] md:w-full">
                    <div className="flex flex-col relative w-full">
                      <div className="sm:h-[560px] h-[562px] md:h-[936px] mx-auto w-full">
                        <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[0] w-[26%]">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            PROFILE PICTURE
                          </Text>
                          <div className="bg-gray-400 h-[307px] mt-[13px] rounded-[14px] w-full"></div>
                          <div className="flex flex-col font-cairo items-center justify-start mt-[21px] w-full">
                            <Button
                              className="bg-gray-900_04 cursor-pointer flex items-center justify-center min-w-[255px] px-[35px] py-4 rounded-[14px] shadow-bs4"
                              leftIcon={
                                <Img
                                  className="h-7 mr-[15px]"
                                  src="images/img_camera_1.svg"
                                  alt="camera 1"
                                />
                              }
                            >
                              <div className="font-bold sm:px-5 text-deep_purple-600 text-left text-lg">
                                CHANGE PHOTOS
                              </div>
                            </Button>
                          </div>
                        </div>
                        <div className="absolute flex flex-col font-cairo gap-[39px] h-full inset-y-[0] justify-start left-[0] my-auto w-[94%]">
                          <div className="flex flex-col items-start justify-start mr-[245px] w-3/4 md:w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtCairoBold24"
                            >
                              General Info
                            </Text>
                            <div className="flex md:flex-col flex-row font-opensans gap-[31px] items-center justify-between mt-[21px] w-full">
                              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  FIRST NAME
                                </Text>
                                <Input
                                  name="group198"
                                  placeholder="Samuel"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                                  wrapClassName="border border-blue_gray-700 border-solid pl-[23px] pr-[35px] py-2.5 rounded-[14px] w-full"
                                ></Input>
                              </div>
                              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  LAST NAME
                                </Text>
                                <div className="border border-blue_gray-700 border-solid flex flex-col font-cairo items-start justify-start p-[11px] rounded-[14px] w-full">
                                  <Text
                                    className="ml-3 md:ml-[0] text-white-A700 text-xl w-[14%] sm:w-full"
                                    size="txtCairoSemiBold20WhiteA700"
                                  >
                                    Chen
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between mt-[30px] w-full">
                              <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[48%] md:w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Rank
                                </Text>
                                <Input
                                  name="group199"
                                  placeholder="White Belt"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                                  wrapClassName="border border-blue_gray-700 border-solid pl-[23px] pr-[35px] py-2.5 rounded-[14px] w-full"
                                ></Input>
                              </div>
                              <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[48%] md:w-full">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px]"
                                  size="txtOpenSansBold16"
                                >
                                  Membership Plan
                                </Text>
                                <Input
                                  name="bronzeCounter"
                                  placeholder="Bronze 3"
                                  className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-deep_purple-600 sm:px-5 text-deep_purple-600 text-left text-xl w-full"
                                  wrapClassName="bg-gray-900_01 border-2 border-deep_purple-600 border-solid pl-[23px] pr-[35px] py-2.5 rounded-[14px] w-full"
                                ></Input>
                              </div>
                            </div>
                            <div className="flex flex-col font-cairo items-center justify-start mt-10 w-full">
                              <div className="flex flex-col gap-5 items-start justify-start w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtCairoBold24"
                                >
                                  Contacts
                                </Text>
                                <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between w-full">
                                  <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                                    <Text
                                      className="text-base text-gray-400_01 tracking-[1.00px]"
                                      size="txtOpenSansBold16"
                                    >
                                      EMAIL ADDRESS
                                    </Text>
                                    <Input
                                      name="email"
                                      placeholder="samuelchen002@mail.com"
                                      className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                                      wrapClassName="border border-blue_gray-700 border-solid pb-[9px] pl-[23px] pr-[35px] pt-3 rounded-[14px] w-full"
                                      type="email"
                                    ></Input>
                                  </div>
                                  <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                                    <Text
                                      className="text-base text-gray-400_01 tracking-[1.00px]"
                                      size="txtOpenSansBold16"
                                    >
                                      PHONE NUMBER
                                    </Text>
                                    <Input
                                      name="group203"
                                      placeholder="+12 33456 7256"
                                      className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                                      wrapClassName="border border-blue_gray-700 border-solid pl-[23px] pr-[35px] py-2.5 rounded-[14px] w-full"
                                    ></Input>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-end md:ml-[0] ml-[761px] w-1/5 md:w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_iccheck_gray_500_01.svg"
                              alt="iccheck"
                            />
                            <Text
                              className="text-gray-400_01 text-lg"
                              size="txtCairoSemiBold18Gray40001"
                            >
                              Convert To Student
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-cairo items-center justify-start ml-0.5 mt-[-34.36px] w-[74%] z-[1]">
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Stats
                          </Text>
                          <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-end justify-between w-full">
                            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start md:mt-0 mt-[11px] w-[19%] md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Height
                              </Text>
                              <div className="border border-blue_gray-700 border-solid flex flex-col font-cairo items-end justify-start p-[11px] rounded-[14px] w-full">
                                <SelectBox
                                  className="font-semibold leading-[normal] mr-[3px] text-left text-white-A700 text-xl w-[88%] sm:w-full"
                                  placeholderClassName="text-white-A700"
                                  isSearchable={false}
                                  placeholder="6’ 0”"
                                  isMulti={false}
                                  options={optionsList}
                                  name="group211"
                                />
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start md:mt-0 mt-[11px] w-1/5 md:w-full">
                              <Text
                                className="text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                Weight
                              </Text>
                              <Input
                                name="lbsCounter"
                                placeholder="175 lbs"
                                className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:pl-5 text-left text-white-A700 text-xl w-full"
                                wrapClassName="border border-blue_gray-700 border-solid flex pl-[23px] pr-[15px] py-2.5 rounded-[14px] w-full"
                                suffix={
                                  <div className="mt-[15px] mb-3.5 ml-[26px] sm:w-full sm:mx-0 w-[11%] bg-gray-400">
                                    <Img
                                      className="my-auto"
                                      src="images/img_arrow_gray_400.svg"
                                      alt="arrow"
                                    />
                                  </div>
                                }
                              ></Input>
                            </div>
                            <div className="flex md:flex-1 flex-col justify-start w-[21%] md:w-full">
                              <div className="flex flex-col font-opensans items-start justify-start p-2.5 w-12">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px] w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  Age
                                </Text>
                              </div>
                              <SelectBox
                                className="border border-blue_gray-700 border-solid font-cairo font-semibold leading-[normal] ml-2 md:ml-[0] mt-1 sm:pl-5 pl-[30px] pr-3.5 py-[11px] rounded-[14px] text-left text-white-A700 text-xl w-[95%] sm:w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-2 mr-[0] w-3.5"
                                    src="images/img_arrow_gray_400.svg"
                                    alt="arrow"
                                  />
                                }
                                isMulti={false}
                                name="yrsCounter"
                                options={yrsCounterOptionsList}
                                isSearchable={false}
                                placeholder="34 yrs"
                              />
                            </div>
                            <div className="flex md:flex-1 flex-col justify-start w-[21%] md:w-full">
                              <div className="flex flex-col font-opensans items-start justify-start p-2.5 w-[113px]">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px] w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  Uniform Size
                                </Text>
                              </div>
                              <SelectBox
                                className="border border-blue_gray-700 border-solid font-cairo font-semibold leading-[normal] md:ml-[0] ml-[9px] mt-1 sm:pl-5 pl-[30px] pr-[13px] py-[11px] rounded-[14px] text-left text-white-A700 text-xl w-[94%] sm:w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-2 mr-[0] w-[13px]"
                                    src="images/img_arrow_gray_400.svg"
                                    alt="arrow"
                                  />
                                }
                                isMulti={false}
                                name="sizeCounter"
                                options={sizeCounterOptionsList}
                                isSearchable={false}
                                placeholder="Size 5"
                              />
                            </div>
                            <div className="flex md:flex-1 flex-col justify-start w-[21%] md:w-full">
                              <div className="flex flex-col font-opensans items-start justify-start p-2.5 w-[76px]">
                                <Text
                                  className="text-base text-gray-400_01 tracking-[1.00px] w-auto"
                                  size="txtOpenSansBold16"
                                >
                                  Belt Size
                                </Text>
                              </div>
                              <SelectBox
                                className="border border-blue_gray-700 border-solid font-cairo font-semibold leading-[normal] md:ml-[0] ml-[9px] mt-1 sm:pl-5 pl-[30px] pr-3.5 py-[11px] rounded-[14px] text-left text-white-A700 text-xl w-[94%] sm:w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-2 mr-[0] w-3.5"
                                    src="images/img_arrow_gray_400.svg"
                                    alt="arrow"
                                  />
                                }
                                isMulti={false}
                                name="sizeCounter_One"
                                options={sizeCounterOneOptionsList}
                                isSearchable={false}
                                placeholder="Size 5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-cairo items-center justify-start w-[24%] md:w-full">
                      <Button
                        className="bg-deep_purple-600 cursor-pointer flex items-center justify-center min-w-[237px] pl-[34px] pr-[31px] py-[9px] rounded-[14px] shadow-bs4"
                        leftIcon={
                          <Img
                            className="h-6 mt-1 mb-[5px] mr-[19px]"
                            src="images/img_save_white_a700.svg"
                            alt="save"
                          />
                        }
                      >
                        <div className="font-bold sm:px-5 text-left text-lg text-white-A700">
                          SAVE CONTACTS
                        </div>
                      </Button>
                    </div>
                  </div>
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

export default NewContactFormPage;
