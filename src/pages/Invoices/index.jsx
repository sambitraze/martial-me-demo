import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const InvoicesPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1198px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
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
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                      size="txtCairoBold34"
                    >
                      Invoices List
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
                    wrapClassName="bg-gray-900_01 flex md:flex-1 md:ml-[0] ml-[479px] md:mt-0 my-[9px] pb-[15px] pt-5 px-[34px] rounded-[14px] shadow-bs4 w-[34%] md:w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-1 h-7 mr-6"
                        src="images/img_search2.svg"
                        alt="search 2"
                      />
                    }
                  ></Input>
                  <Input
                    name="btnchangedate"
                    placeholder="+ New Invoices"
                    className="font-bold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg text-white-A700 w-full"
                    wrapClassName="bg-deep_purple-600 flex md:flex-1 ml-6 md:ml-[0] md:mt-0 my-[9px] pl-[31px] pr-[35px] py-4 rounded-[14px] shadow-bs4 w-[17%] md:w-full"
                    prefix={
                      <Img
                        className="mt-0.5 mb-[3px] h-7 mr-[17px]"
                        src="images/img_invoice_1_white_a700.svg"
                        alt="invoice 1"
                      />
                    }
                  ></Input>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-7 rounded-[30px] shadow-bs4 w-full">
                <div className="bg-gray-900_01 flex flex-col items-center justify-start pt-[31px] rounded-tl-[14px] rounded-tr-[14px] w-full">
                  <div className="flex flex-col gap-[18px] justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-10 md:ml-[0] w-[84%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_icuncheck.svg"
                        alt="icuncheck"
                      />
                      <Text
                        className="md:ml-[0] ml-[30px] text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        ID Invoice
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[66px] text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        Due Date
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[152px] text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        Client
                      </Text>
                      <Text
                        className="ml-52 md:ml-[0] text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        Contact
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[182px] text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        Amount
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[157px] text-white-A700 text-xl"
                        size="txtCairoBold20"
                      >
                        Status
                      </Text>
                    </div>
                    <Line className="bg-blue_gray-900 h-0.5 rounded-[1px] w-full" />
                  </div>
                </div>
                <List
                  className="flex flex-col font-opensans gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 pt-5 rounded-[1px] hover:shadow-bs8 w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icuncheck.svg"
                          alt="icuncheck"
                        />
                        <Text
                          className="md:ml-[0] ml-[30px] text-base text-white-A700"
                          size="txtOpenSansRomanSemiBold16"
                        >
                          #INV-0001234
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[42px] text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                        <div className="flex flex-row gap-[17px] items-center justify-center md:ml-[0] ml-[62px] w-[15%] md:w-full">
                          <div className="bg-gradient3  h-[49px] rounded-[14px] w-[49px]"></div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              Higspeed Studios
                            </Text>
                            <Text
                              className="mt-1 text-blue_gray-700 text-sm"
                              size="txtOpenSans14"
                            >
                              Creative Agency
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center md:ml-[0] ml-[55px] w-[14%] md:w-full">
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
                            highspeed@mail.com
                          </Text>
                        </div>
                        <Text
                          className="ml-14 md:ml-[0] text-base text-deep_purple-600"
                          size="txtOpenSansBold16Deeppurple600"
                        >
                          $ 650,036.34
                        </Text>
                        <Button
                          className="bg-gray-900_05 cursor-pointer flex items-center justify-center min-w-[163px] md:ml-[0] ml-[91px] pl-5 pr-[25px] py-3 rounded-[14px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-[7px]"
                              src="images/img_checked_1.svg"
                              alt="checked 1"
                            />
                          }
                        >
                          <div className="font-bold leading-[normal] sm:pr-5 text-base text-green-500 text-right">
                            Completed
                          </div>
                        </Button>
                        <Img
                          className="h-6 md:ml-[0] ml-[63px] w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </div>
                      <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                    </div>
                  </div>
                  <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 pt-[19px] rounded-[1px] hover:shadow-bs8 shadow-bs8 w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_iccheck.svg"
                          alt="iccheck"
                        />
                        <Text
                          className="md:ml-[0] ml-[30px] text-base text-white-A700"
                          size="txtOpenSansRomanSemiBold16"
                        >
                          #INV-0001234
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[42px] text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-center md:ml-[0] ml-[62px] w-[13%] md:w-full">
                          <div className="bg-orange-200 flex flex-col h-[50px] items-center justify-start p-[13px] rounded-[14px] w-[50px]">
                            <div className="bg-lime-800 h-6 rounded-[50%] w-6"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              Portalio Inc.
                            </Text>
                            <Text
                              className="mt-1 text-blue_gray-700 text-sm"
                              size="txtOpenSans14"
                            >
                              Network Service
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center md:ml-[0] ml-[86px] w-[13%] md:w-full">
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
                            portalio@mail.com
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[73px] text-base text-deep_purple-600"
                          size="txtOpenSansBold16Deeppurple600"
                        >
                          $ 650,036.34
                        </Text>
                        <Button
                          className="bg-blue_gray-900_01 cursor-pointer flex items-center justify-center min-w-[174px] md:ml-[0] ml-[91px] md:mt-0 mt-0.5 px-5 py-[11px] rounded-[14px]"
                          leftIcon={
                            <Img
                              className="h-6 mt-px mr-[13px]"
                              src="images/img_read_1_1.svg"
                              alt="read (1) 1"
                            />
                          }
                        >
                          <div className="font-bold leading-[normal] text-base text-blue-400_01 text-right">
                            Invoice Sent
                          </div>
                        </Button>
                        <Img
                          className="h-6 md:ml-[0] ml-[52px] w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </div>
                      <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                    </div>
                  </div>
                  <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 pt-5 rounded-[1px] hover:shadow-bs8 w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icuncheck.svg"
                          alt="icuncheck"
                        />
                        <Text
                          className="md:ml-[0] ml-[30px] text-base text-white-A700"
                          size="txtOpenSansRomanSemiBold16"
                        >
                          #INV-0001234
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[42px] text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                        <div className="flex flex-row gap-[15px] items-center justify-center md:ml-[0] ml-[62px] w-[15%] md:w-full">
                          <div className="bg-gradient4  h-[49px] rounded-[14px] w-[49px]"></div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              Jean Graphic Inc.
                            </Text>
                            <Text
                              className="mt-1 text-blue_gray-700 text-sm"
                              size="txtOpenSans14"
                            >
                              Online Shop
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[11px] items-center justify-center md:ml-[0] ml-[57px] w-[15%] md:w-full">
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
                            jeangraphic@mail.com
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[47px] text-base text-deep_purple-600"
                          size="txtOpenSansBold16Deeppurple600"
                        >
                          $ 2,456,221.55
                        </Text>
                        <div className="bg-blue_gray-900_02 flex flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[77px] p-3 rounded-[14px] w-[12%] md:w-full">
                          <Img
                            className="h-6 ml-[7px] w-6"
                            src="images/img_clock_orange_400.svg"
                            alt="clock"
                          />
                          <Text
                            className="mr-[15px] text-base text-orange-400 text-right"
                            size="txtOpenSansBold16Orange400"
                          >
                            Pending
                          </Text>
                        </div>
                        <Img
                          className="h-6 md:ml-[0] ml-[73px] w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </div>
                      <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                    </div>
                  </div>
                  <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 pt-[19px] rounded-[1px] hover:shadow-bs8 w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icuncheck.svg"
                          alt="icuncheck"
                        />
                        <Text
                          className="md:ml-[0] ml-[30px] text-base text-white-A700"
                          size="txtOpenSansRomanSemiBold16"
                        >
                          #INV-0001234
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[42px] text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-center md:ml-[0] ml-[62px] w-[13%] md:w-full">
                          <Button className="bg-green-300 flex h-[50px] items-center justify-center p-2.5 rounded-[14px] w-[50px]">
                            <Img src="images/img_airplane.svg" alt="airplane" />
                          </Button>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              Wedepeloper
                            </Text>
                            <Text
                              className="mt-0.5 text-blue_gray-700 text-sm"
                              size="txtOpenSans14"
                            >
                              Software House
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center md:ml-[0] ml-[86px] w-[16%] md:w-full">
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
                            wedepeloper@mail.com
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[38px] text-base text-deep_purple-600"
                          size="txtOpenSansBold16Deeppurple600"
                        >
                          $ 1,672.45
                        </Text>
                        <Button
                          className="bg-gray-900_05 cursor-pointer flex items-center justify-center min-w-[163px] md:ml-[0] ml-[109px] md:mt-0 mt-0.5 pl-5 pr-[25px] py-3 rounded-[14px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-[7px]"
                              src="images/img_checked_1.svg"
                              alt="checked 1"
                            />
                          }
                        >
                          <div className="font-bold leading-[normal] sm:pr-5 text-base text-green-500 text-right">
                            Completed
                          </div>
                        </Button>
                        <Img
                          className="h-6 md:ml-[0] ml-[63px] w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </div>
                      <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                    </div>
                  </div>
                  <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 pt-[19px] rounded-[1px] hover:shadow-bs8 w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icuncheck.svg"
                          alt="icuncheck"
                        />
                        <Text
                          className="md:ml-[0] ml-[30px] text-base text-white-A700"
                          size="txtOpenSansRomanSemiBold16"
                        >
                          #INV-0001234
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[42px] text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-center md:ml-[0] ml-[62px] w-[13%] md:w-full">
                          <Button className="bg-gray-500_02 flex h-[50px] items-center justify-center p-[11px] rounded-[14px] w-[50px]">
                            <Img src="images/img_save.svg" alt="save" />
                          </Button>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              Fictiv Home
                            </Text>
                            <Text
                              className="mt-1 text-blue_gray-700 text-sm"
                              size="txtOpenSans14"
                            >
                              Software House
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center md:ml-[0] ml-[88px] w-[12%] md:w-full">
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
                            fictiv@mail.com
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[93px] text-base text-deep_purple-600"
                          size="txtOpenSansBold16Deeppurple600"
                        >
                          $ 800,561.00
                        </Text>
                        <div className="bg-blue_gray-900_02 flex flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[91px] md:mt-0 mt-0.5 p-3 rounded-[14px] w-[12%] md:w-full">
                          <Img
                            className="h-6 ml-[7px] w-6"
                            src="images/img_clock_orange_400.svg"
                            alt="clock"
                          />
                          <Text
                            className="mr-[15px] text-base text-orange-400 text-right"
                            size="txtOpenSansBold16Orange400"
                          >
                            Pending
                          </Text>
                        </div>
                        <Img
                          className="h-6 md:ml-[0] ml-[73px] w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </div>
                      <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                    </div>
                  </div>
                  <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 pt-[19px] rounded-[1px] hover:shadow-bs8 w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icuncheck.svg"
                          alt="icuncheck"
                        />
                        <Text
                          className="md:ml-[0] ml-[30px] text-base text-white-A700"
                          size="txtOpenSansRomanSemiBold16"
                        >
                          #INV-0001234
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[42px] text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-center md:ml-[0] ml-[62px] w-[16%] md:w-full">
                          <Button className="bg-indigo-500 flex h-[50px] items-center justify-center p-[11px] rounded-[14px] w-[50px]">
                            <Img src="images/img_hh.svg" alt="hh" />
                          </Button>
                          <div className="flex flex-col items-start justify-start mt-[3px]">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              Humbly Humble
                            </Text>
                            <Text
                              className="mt-1 text-blue_gray-700 text-sm"
                              size="txtOpenSans14"
                            >
                              Video Games Company
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center ml-10 md:ml-[0] w-[16%] md:w-full">
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
                            humblyhumb@mail.com
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[35px] text-base text-deep_purple-600"
                          size="txtOpenSansBold16Deeppurple600"
                        >
                          $ 245,662.32
                        </Text>
                        <Button
                          className="bg-blue_gray-900_01 cursor-pointer flex items-center justify-center min-w-[174px] md:ml-[0] ml-[91px] md:mt-0 mt-0.5 px-5 py-[11px] rounded-[14px]"
                          leftIcon={
                            <Img
                              className="h-6 mt-px mr-[13px]"
                              src="images/img_read_1_1.svg"
                              alt="read (1) 1"
                            />
                          }
                        >
                          <div className="font-bold leading-[normal] text-base text-blue-400_01 text-right">
                            Invoice Sent
                          </div>
                        </Button>
                        <Img
                          className="h-6 md:ml-[0] ml-[52px] w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </div>
                      <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                    </div>
                  </div>
                  <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:my-0 my-0 pt-[19px] rounded-[1px] hover:shadow-bs8 w-full">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_icuncheck.svg"
                          alt="icuncheck"
                        />
                        <Text
                          className="md:ml-[0] ml-[30px] text-base text-white-A700"
                          size="txtOpenSansRomanSemiBold16"
                        >
                          #INV-0001234
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[42px] text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-center md:ml-[0] ml-[62px] w-[15%] md:w-full">
                          <Button className="bg-indigo-100 flex h-[50px] items-center justify-center p-[13px] rounded-[14px] w-[50px]">
                            <Img
                              className="h-6"
                              src="images/img_energy1.svg"
                              alt="energyOne"
                            />
                          </Button>
                          <div className="flex flex-col items-center justify-start mt-[3px]">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansBold16WhiteA700"
                            >
                              Fullspeedo Crew
                            </Text>
                            <Text
                              className="mt-1 text-blue_gray-700 text-sm"
                              size="txtOpenSans14"
                            >
                              Photograph Agency
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center md:ml-[0] ml-[61px] w-[15%] md:w-full">
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
                            fullspeedo@mail.com
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[55px] text-base text-deep_purple-600"
                          size="txtOpenSansBold16Deeppurple600"
                        >
                          $ 998.45
                        </Text>
                        <div className="bg-blue_gray-900_02 flex flex-row gap-[18px] items-center justify-center md:ml-[0] ml-[123px] md:mt-0 mt-0.5 p-3 rounded-[14px] w-[12%] md:w-full">
                          <Img
                            className="h-6 ml-[7px] w-6"
                            src="images/img_clock_orange_400.svg"
                            alt="clock"
                          />
                          <Text
                            className="mr-[15px] text-base text-orange-400 text-right"
                            size="txtOpenSansBold16Orange400"
                          >
                            Pending
                          </Text>
                        </div>
                        <Img
                          className="h-6 md:ml-[0] ml-[73px] w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu"
                        />
                      </div>
                      <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                    </div>
                  </div>
                  <div className="bg-gray-900_01 hover:cursor-pointer flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start hover:my-0 my-0 p-5 rounded-bl-[14px] rounded-br-[14px] hover:shadow-bs8 w-full">
                    <Img
                      className="h-6 ml-5 md:ml-[0] w-6"
                      src="images/img_icuncheck.svg"
                      alt="icuncheck"
                    />
                    <Text
                      className="md:ml-[0] ml-[30px] text-base text-white-A700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      #INV-0001234
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[42px] text-base text-white-A700"
                      size="txtOpenSans16"
                    >
                      June 1, 2020, 08:22 AM
                    </Text>
                    <div className="flex md:flex-1 flex-row gap-4 items-start justify-center md:ml-[0] ml-[62px] w-[14%] md:w-full">
                      <Button className="bg-purple-900 flex h-[50px] items-center justify-center p-3 rounded-[14px] w-[50px]">
                        <Img src="images/img_volume.svg" alt="volume" />
                      </Button>
                      <div className="flex flex-col items-start justify-start mt-0.5">
                        <Text
                          className="text-base text-white-A700"
                          size="txtOpenSansBold16WhiteA700"
                        >
                          Ken Graphic Inc.
                        </Text>
                        <Text
                          className="mt-1 text-blue_gray-700 text-sm"
                          size="txtOpenSans14"
                        >
                          Creative Agency
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-row gap-3 items-center justify-center md:ml-[0] ml-[62px] w-[14%] md:w-full">
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
                        kengraphic@mail.com
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[51px] text-base text-deep_purple-600"
                      size="txtOpenSansBold16Deeppurple600"
                    >
                      $ 700.00
                    </Text>
                    <Button
                      className="bg-blue_gray-900_01 cursor-pointer flex items-center justify-center min-w-[174px] md:ml-[0] ml-[123px] px-5 py-[11px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-6 mt-px mr-[13px]"
                          src="images/img_read_1_1.svg"
                          alt="read (1) 1"
                        />
                      }
                    >
                      <div className="font-bold leading-[normal] text-base text-blue-400_01 text-right">
                        Invoice Sent
                      </div>
                    </Button>
                    <Img
                      className="h-6 md:ml-[0] ml-[52px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                </List>
              </div>
              <div className="flex sm:flex-col flex-row font-poppins md:gap-10 items-center justify-between mt-10 w-full">
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
                padding: "8px 8px 8px 50px",
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
                  src="images/img_invoice1_deep_purple_600.svg"
                  alt="invoiceOne"
                />
              }
              label={
                <>
                  <Text>Invoices</Text>
                  <Line className="bg-deep_purple-600 h-[49px] rounded-[3px] w-1.5" />
                </>
              }
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
            className="mb-[159px] md:ml-[0] mt-1.5 mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default InvoicesPage;
