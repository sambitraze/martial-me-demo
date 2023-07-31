import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const StudentListPagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1176px] mx-auto relative w-full"
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
                className="md:flex-1 sm:flex-col flex-row gap-[22px] grid grid-cols-4 md:ml-[0] ml-[54px] md:px-5 w-[13%] md:w-full"
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
                <div className="h-11 md:h-[29px] relative w-full">
                  <Img
                    className="absolute bottom-[0] h-[29px] left-[0]"
                    src="images/img_camera.svg"
                    alt="camera"
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
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                      size="txtCairoBold34"
                    >
                      Students
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
                    className="bg-deep_purple-600 cursor-pointer flex items-center justify-center mb-[11px] min-w-[181px] md:ml-[0] ml-[26px] md:mt-0 mt-2 px-6 py-[17px] rounded-[14px] shadow-bs4"
                    leftIcon={
                      <Img
                        className="h-6 mt-1 mb-[5px] mr-[7px]"
                        src="images/img_addfriend1.svg"
                        alt="add-friend 1"
                      />
                    }
                  >
                    <div className="font-bold leading-[normal] sm:px-5 text-left text-lg text-white-A700">
                      New Student
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-7 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-center justify-start w-[48%]">
                          <div className="flex flex-col items-end justify-start">
                            <Text
                              className="text-center text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Abdul Kean
                            </Text>
                            <Text
                              className="mr-[5px] text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-center justify-start mt-[3px] w-[49%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Angela Moss
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 border-2 hover:border-deep_purple-600 border-deep_purple-600 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[83%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-center justify-start w-[49%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Afiff Skunder
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700_24x108.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-center justify-start mt-0.5 w-[48%]">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Anita Queen
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[84%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-red-A200 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start mt-[3px] w-1/2">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Abigail Smurt
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-orange-400_01 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start mt-[3px] w-[48%]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Bella Syuqr
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start mt-[3px] w-[48%]">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Benny Gacu
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[48%]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Bella Poco
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[90%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start mt-[3px] w-[53%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Chloe Simatup..
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start mt-[3px] w-[48%]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Denny Juan
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[48%]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Franklin CS
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start mt-[3px] w-[48%]">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Freddy John
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[86%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start mt-[3px] w-[51%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Fanny Saragih
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[48%]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Hermanto
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[82%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[48%]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Lulu Salam
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 hover:border-2 hover:border-deep_purple-600 hover:border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[14px] shadow-bs4 hover:w-full w-full">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[89%] md:w-full">
                        <div className="bg-gray-400 flex flex-col h-[91px] items-end justify-end mb-3 pt-[3px] px-[3px] rounded-[45px] w-[91px]">
                          <div className="bg-green-500 border-4 border-gray-900_01 border-solid h-[18px] mt-[69px] rounded-[50%] w-[18px]"></div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[53%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-white-A700 text-xl tracking-[-0.24px]"
                              size="txtCairoBold20"
                            >
                              Linda Sukawati
                            </Text>
                            <Text
                              className="text-center text-gray-500_01 text-sm tracking-[-0.24px]"
                              size="txtPoppinsRegular14Gray50001"
                            >
                              Highspeed Inc.
                            </Text>
                          </div>
                          <Img
                            className="h-6"
                            src="images/img_action_blue_gray_700.svg"
                            alt="action"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-poppins md:gap-10 items-center justify-between mt-[39px] w-full">
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
                padding: "8px",
                backgroundColor: "#15132b",
                gap: "26px",
                marginTop: "14px",
                color: "#464365",
                fontWeight: 600,
                fontSize: "18px",
                [`&:hover, &.ps-active`]: {
                  color: "#6418c3",
                  fontWeight: "700 !important",
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
                <Img
                  className="h-7 w-7"
                  src="images/img_grid.svg"
                  alt="grid_One"
                />
              }
              label={<Text>Kanban</Text>}
            >
              <MenuItem>Submenu Item</MenuItem>
            </SubMenu>
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_contact1_deep_purple_600.svg"
                  alt="contactOne"
                />
              }
              active={window.location.pathname === "/contactpage"}
              href="/contactpage"
            >
              <Text>Contact</Text>
              <Button className="bg-pink-400 cursor-pointer font-bold leading-[normal] min-w-[63px] my-[7px] py-1 rounded-[17px] text-center text-sm text-white-A700">
                NEW
              </Button>
              <Line className="bg-deep_purple-600 h-[49px] rounded-[3px] w-1.5" />
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-7 w-7"
                  src="images/img_calendarsilhouette.svg"
                  alt="calendarsilhoue"
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
                    alt="grid_Two"
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
                    alt="arrowright_Three"
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
            className="mb-[137px] md:ml-[0] mt-1.5 mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default StudentListPagePage;
