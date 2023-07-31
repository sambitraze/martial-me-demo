import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import {
  Button,
  CheckBox,
  Datepicker,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Switch,
  Text,
} from "components";
import Sidebar11 from "components/Sidebar11";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PreferencesPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1080px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
      >
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="flex flex-col gap-[29px] justify-start w-full">
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
            <div className="flex flex-col gap-[29px] items-center justify-start md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="md:h-[63px] h-[88px] relative w-[17%] md:w-full">
                  <Text
                    className="absolute left-[0] sm:text-3xl md:text-[32px] text-[34px] text-white-A700 top-[0]"
                    size="txtCairoBold34"
                  >
                    Preferences
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-gray-500_01 text-lg w-max"
                    size="txtOpenSans18Gray50001"
                  >
                    Lorem ipsum dolor sit amet{" "}
                  </Text>
                </div>
                <Input
                  name="searchbox_One"
                  placeholder="Search here"
                  className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 sm:px-5 text-base text-gray-500 text-left w-full"
                  wrapClassName="bg-gray-900_01 flex md:flex-1 md:mt-0 my-2.5 pb-[15px] pt-5 px-[34px] rounded-[14px] shadow-bs4 md:w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-1 h-7 mr-6"
                      src="images/img_search2.svg"
                      alt="search 2"
                    />
                  }
                ></Input>
              </div>
              <div className="bg-gray-900_01 flex flex-col font-opensans items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[14px] shadow-bs4 w-full">
                <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between mb-2.5 w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[78%] md:w-full">
                    <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          NAME
                        </Text>
                        <Input
                          name="groupFiftyNine"
                          placeholder="Samuel"
                          className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                          wrapClassName="border border-blue_gray-700 border-solid pl-[23px] pr-[35px] py-2.5 rounded-[14px] w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
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
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          PASSWORD
                        </Text>
                        <Input
                          name="password_One"
                          placeholder="*********"
                          className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                          wrapClassName="border border-blue_gray-700 border-solid pb-3.5 pl-[23px] pr-[35px] pt-[7px] rounded-[14px] w-full"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[30px] w-full">
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[32%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          PHONE NUMBER
                        </Text>
                        <Input
                          name="groupSixtyFour"
                          placeholder="+12 33456 7256"
                          className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                          wrapClassName="border border-blue_gray-700 border-solid pl-[23px] pr-[35px] py-2.5 rounded-[14px] w-full"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[32%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          BIRTHDAY
                        </Text>
                        <Datepicker
                          className="groupSixty"
                          placeholder="lbl_24_june_1992"
                        ></Datepicker>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[32%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          LANGUAGE
                        </Text>
                        <SelectBox
                          className="border border-blue_gray-700 border-solid font-cairo font-semibold leading-[normal] pl-[23px] pr-[30px] sm:px-5 py-2.5 rounded-[14px] text-left text-white-A700 text-xl w-full"
                          placeholderClassName="text-white-A700"
                          indicator={
                            <Img
                              className="h-2 mr-[0] w-[15px]"
                              src="images/img_arrow.svg"
                              alt="arrow"
                            />
                          }
                          isMulti={false}
                          name="language_Two"
                          options={languageTwoOptionsList}
                          isSearchable={false}
                          placeholder="ENGLISH"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[30px] w-[95%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[22%] md:w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            LOCATION
                          </Text>
                          <div className="flex flex-row gap-[23px] items-start justify-start w-full">
                            <Switch
                              onColor="#1e1b3a"
                              offColor="#1e1b3a"
                              onHandleColor="#37e25d"
                              offHandleColor="#37e25d"
                              value={true}
                              className="w-[23%]"
                            />
                            <Text
                              className="text-lg text-white-A700"
                              size="txtOpenSansRomanSemiBold18"
                            >
                              Location History
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[153px] w-[24%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text
                            className="ml-0.5 md:ml-[0] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            AVAILABILITY
                          </Text>
                          <RadioGroup
                            className="flex w-full"
                            name="radiogrouponline"
                          >
                            <Radio
                              value="Online"
                              className="font-semibold leading-[normal] text-left text-lg text-white-A700"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="radiogrouponline"
                              label="Online"
                              id="Online"
                            ></Radio>
                            <Radio
                              value="Offline"
                              className="font-semibold leading-[normal] ml-12 text-left text-lg text-white-A700"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="radiogrouponline"
                              label="Offline"
                              id="Offline"
                            ></Radio>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start ml-32 md:ml-[0] w-[28%] md:w-full">
                        <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                          <Text
                            className="md:ml-[0] ml-[3px] text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            NOTIFICATIONS
                          </Text>
                          <div className="flex flex-row font-cairo gap-[87px] items-center justify-start w-[91%] md:w-full">
                            <div className="flex flex-row gap-3 items-center justify-start w-[32%]">
                              <Img
                                className="h-6 w-6"
                                src="images/img_iccheck_gray_500_01.svg"
                                alt="iccheck"
                              />
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Email
                              </Text>
                            </div>
                            <CheckBox
                              className="font-semibold leading-[normal] text-left text-lg text-white-A700"
                              inputClassName="mr-[5px]"
                              name="forum"
                              id="forum"
                              label="Forum"
                            ></CheckBox>
                          </div>
                          <div className="flex flex-row font-cairo items-center justify-between w-full">
                            <CheckBox
                              className="font-semibold leading-[normal] text-left text-lg text-white-A700"
                              inputClassName="mr-[5px]"
                              name="forum_One"
                              id="forum_One"
                              label="Forum"
                            ></CheckBox>
                            <CheckBox
                              className="font-semibold leading-[normal] text-left text-lg text-white-A700"
                              inputClassName="mr-[5px]"
                              name="reminder"
                              id="reminder"
                              label="Reminder"
                            ></CheckBox>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-cairo items-center justify-start mt-[47px] w-[24%] md:w-full">
                      <Input
                        name="price_One"
                        placeholder="SAVE SETTINGS"
                        className="font-bold p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg text-white-A700 w-full"
                        wrapClassName="bg-deep_purple-600 flex px-[34px] py-3 rounded-[14px] shadow-bs4 w-full"
                        prefix={
                          <Img
                            className="mt-1 mb-[5px] h-6 mr-[27px]"
                            src="images/img_save_white_a700.svg"
                            alt="save"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[19%] md:w-full">
                    <Text
                      className="text-base text-gray-400_01 tracking-[1.00px]"
                      size="txtOpenSansBold16"
                    >
                      PROFILE PICTURE
                    </Text>
                    <div className="bg-gray-400 h-[307px] mt-[13px] rounded-[14px] w-full"></div>
                    <div className="flex flex-col font-cairo items-center justify-start mt-[21px] w-full">
                      <Button
                        className="border border-deep_purple-600 border-solid cursor-pointer flex items-center justify-center min-w-[255px] px-[34px] py-4 rounded-[14px] shadow-bs4"
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

export default PreferencesPage;
