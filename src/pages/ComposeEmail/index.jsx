import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C01DashboardNav from "components/C01DashboardNav";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ComposeEmailPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1230px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-3.5 w-full"
          style={{ backgroundImage: "url('images/img_01dashboard.svg')" }}
        >
          <div className="flex flex-col gap-[30px] justify-start w-full">
            <C01DashboardNav className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[26px] sm:px-5 w-full" />
            <div className="flex md:flex-col flex-row gap-[39px] items-start justify-end md:ml-[0] ml-[395px] md:px-5 w-[77%] md:w-full">
              <div className="bg-gray-900_01 flex flex-col gap-[30px] items-center justify-start py-[30px] rounded-[14px] shadow-bs4 w-[24%] md:w-full">
                <Button
                  className="bg-deep_purple-600 cursor-pointer flex items-center justify-center min-w-[280px] px-[35px] py-[9px] rounded-[14px] shadow-bs3"
                  leftIcon={
                    <Img
                      className="h-6 mt-0.5 mb-[7px] mr-[18px]"
                      src="images/img_edit_2.svg"
                      alt="edit 2"
                    />
                  }
                >
                  <div className="font-bold sm:px-5 text-left text-lg text-white-A700">
                    Compose Email
                  </div>
                </Button>
                <div className="flex flex-col font-opensans gap-10 items-start justify-start mb-2.5 w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-[85%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          FOLDERS
                        </Text>
                        <Img
                          className="h-7 w-7"
                          src="images/img_icchevron.svg"
                          alt="icchevron"
                        />
                      </div>
                      <div className="bg-blue_gray-700 flex flex-row font-cairo items-center justify-end p-[7px] rounded-[25px] w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_email41.svg"
                          alt="emailFortyOne"
                        />
                        <Text
                          className="ml-[30px] text-lg text-white-A700"
                          size="txtCairoBold18"
                        >
                          Inbox
                        </Text>
                        <Text
                          className="bg-light_blue-300 flex h-[29px] items-center justify-center ml-[123px] mr-1.5 my-0.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]"
                          size="txtCairoBold14"
                        >
                          17
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-cairo gap-1.5 items-center justify-start w-full">
                      <div className="bg-gray-900_01 flex flex-row gap-[30px] items-center justify-start p-[7px] w-full">
                        <Img
                          className="h-6 ml-[42px] w-6"
                          src="images/img_send1.svg"
                          alt="sendOne"
                        />
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Sent
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 flex flex-row items-center justify-end p-[7px] w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_inbox11.svg"
                          alt="inboxEleven"
                        />
                        <Text
                          className="ml-7 text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Draft
                        </Text>
                        <Text
                          className="bg-green-500 h-[29px] justify-center ml-[110px] mr-[31px] my-0.5 px-[11px] rounded-[14px] text-sm text-white-A700 w-[46px]"
                          size="txtCairoBold14"
                        >
                          87+
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[7px] w-full">
                        <Img
                          className="h-7 ml-[42px] w-7"
                          src="images/img_envelope1.svg"
                          alt="envelopeOne"
                        />
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Archived
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[7px] w-full">
                        <Img
                          className="h-7 ml-[42px] w-7"
                          src="images/img_star1.svg"
                          alt="starOne"
                        />
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Favourites
                        </Text>
                      </div>
                      <div className="bg-gray-900_01 flex flex-row gap-[26px] items-center justify-start p-[5px] w-full">
                        <Img
                          className="h-7 ml-11 w-7"
                          src="images/img_folder1.svg"
                          alt="folderOne"
                        />
                        <Text
                          className="mt-[5px] text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Spam
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3.5 justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[30px] text-base text-gray-400_01 tracking-[1.00px]"
                      size="txtOpenSansBold16"
                    >
                      RECENT FRIENDS
                    </Text>
                    <List
                      className="flex flex-col font-cairo gap-px items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start pt-[13px] rounded-[14px] w-full">
                        <div className="flex flex-col gap-3 justify-start w-full">
                          <div className="flex flex-row gap-[23px] items-end justify-start md:ml-[0] ml-[31px] w-1/2 md:w-full">
                            <Img
                              className="h-12"
                              src="images/img_computer_gray_400.svg"
                              alt="computer"
                            />
                            <div className="flex flex-col items-center justify-start mb-1 mt-[9px]">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Benny Kenn
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start pt-[13px] rounded-[14px] w-full">
                        <div className="flex flex-col gap-3 justify-start w-full">
                          <div className="flex flex-row gap-[23px] items-center justify-start md:ml-[0] ml-[31px] w-[56%] md:w-full">
                            <Img
                              className="h-12"
                              src="images/img_computer_gray_400_48x55.svg"
                              alt="computer"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                David Nothere
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-end pt-[13px] rounded-[14px] w-full">
                        <div className="flex flex-col gap-3 justify-start w-full">
                          <div className="flex flex-row gap-[23px] items-center justify-start md:ml-[0] ml-[31px] w-[48%] md:w-full">
                            <Img
                              className="h-12"
                              src="images/img_computer_gray_400.svg"
                              alt="computer"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-lg text-white-A700"
                                size="txtCairoSemiBold18WhiteA700"
                              >
                                Vrancissca
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[30px] w-[65%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        TAGS
                      </Text>
                      <Button className="bg-blue_gray-900_01 cursor-pointer font-cairo font-semibold leading-[normal] min-w-[201px] mt-3.5 py-1.5 rounded-[14px] text-center text-lg text-light_blue-300">
                        #projectmanagement
                      </Button>
                      <div className="flex flex-row font-cairo gap-2.5 items-center justify-between mt-3 w-full">
                        <Button className="bg-gray-900_03 cursor-pointer font-semibold leading-[normal] min-w-[119px] py-1.5 rounded-[14px] text-center text-lg text-pink-400">
                          #teamwork
                        </Button>
                        <Button className="bg-gray-900_04 cursor-pointer font-semibold leading-[normal] min-w-[92px] py-1.5 rounded-[14px] text-center text-deep_purple-600 text-lg">
                          #design
                        </Button>
                      </div>
                      <Button className="bg-gray-900_05 cursor-pointer font-cairo font-semibold leading-[normal] min-w-[170px] mt-3 py-1.5 rounded-[14px] text-center text-green-500 text-lg">
                        #weeklymeetings
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col items-center justify-start mb-[185px] py-[26px] rounded-[14px] shadow-bs4 w-3/4 md:w-full">
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
                      Compose Email
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-between md:ml-[0] ml-[425px] w-[36%] md:w-full">
                    <Button
                      className="bg-deep_purple-600 cursor-pointer flex items-center justify-center min-w-[174px] pl-3.5 pr-5 py-0.5 rounded-[12px]"
                      leftIcon={
                        <Img
                          className="h-6 mt-[5px] mb-1 mr-3.5"
                          src="images/img_inbox_1_1_white_a700.svg"
                          alt="inbox (1) 1"
                        />
                      }
                    >
                      <div className="font-bold leading-[normal] text-left text-lg text-white-A700">
                        Save to Draft
                      </div>
                    </Button>
                    <Button
                      className="bg-red-A200 cursor-pointer flex items-center justify-center min-w-[119px] px-[15px] py-0.5 rounded-[12px]"
                      leftIcon={
                        <Img
                          className="h-6 mt-[5px] mb-1 mr-3.5"
                          src="images/img_delete_1.svg"
                          alt="delete 1"
                        />
                      }
                    >
                      <div className="font-bold leading-[normal] text-left text-lg text-white-A700">
                        Delete
                      </div>
                    </Button>
                    <Button className="bg-gray-900_02 flex h-[38px] items-center justify-center p-[7px] rounded-[12px] w-[38px]">
                      <Img
                        className="h-6"
                        src="images/img_verticon_gray_500_01.svg"
                        alt="verticon"
                      />
                    </Button>
                  </div>
                </div>
                <Line className="bg-blue_gray-900 h-px mt-[9px] rounded-[1px] w-full" />
                <div className="flex flex-col font-opensans items-start justify-start mb-2 mt-[30px] w-[94%] md:w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start ml-3 md:ml-[0] w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-[47px] items-start justify-start w-[71%] md:w-full">
                      <Text
                        className="md:mt-0 mt-1 text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        TO
                      </Text>
                      <List
                        className="sm:flex-col flex-row font-cairo gap-4 grid md:grid-cols-1 grid-cols-2 w-[91%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-2 rounded-[14px] w-full">
                          <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                            <Img
                              className="h-[52px] w-[52px]"
                              src="images/img_user_gray_400.svg"
                              alt="user"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-white-A700"
                                size="txtCairoBold16"
                              >
                                Olivia Johnson
                              </Text>
                              <Text
                                className="text-sm text-white-A700"
                                size="txtCairoRegular14WhiteA700"
                              >
                                oliviajohnson@mail.com
                              </Text>
                            </div>
                            <Img
                              className="h-6 w-6"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                        <div className="border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-2 rounded-[14px] w-full">
                          <div className="flex flex-row items-center justify-between w-[91%] md:w-full">
                            <Img
                              className="h-[52px] w-[52px]"
                              src="images/img_user_gray_400.svg"
                              alt="user"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-white-A700"
                                size="txtCairoBold16"
                              >
                                Marteens
                              </Text>
                              <Text
                                className="text-sm text-white-A700"
                                size="txtCairoRegular14WhiteA700"
                              >
                                marteens404@mail.com
                              </Text>
                            </div>
                            <Img
                              className="h-6 w-6"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[74%] md:w-full">
                      <Text
                        className="md:mt-0 mt-1 text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        BCC
                      </Text>
                      <div className="bg-gray-900_02 flex flex-row font-cairo gap-[22px] items-center justify-center ml-9 md:ml-[0] p-[9px] rounded-[14px] w-[29%] md:w-full">
                        <Text
                          className="ml-2.5 mt-0.5 text-sm text-white-A700"
                          size="txtCairoSemiBold14WhiteA700"
                        >
                          evanernest@mail.com
                        </Text>
                        <Img
                          className="h-6 mr-1 w-6"
                          src="images/img_arrowleft.svg"
                          alt="arrowleft"
                        />
                      </div>
                      <Button
                        className="bg-gray-900_02 cursor-pointer flex items-center justify-center min-w-[215px] md:ml-[0] ml-[18px] pl-5 pr-3.5 py-2.5 rounded-[14px]"
                        rightIcon={
                          <Img
                            className="h-6 mt-px mb-0.5 ml-[15px]"
                            src="images/img_arrowleft.svg"
                            alt="arrow_left"
                          />
                        }
                      >
                        <div className="font-cairo font-semibold leading-[normal] text-left text-sm text-white-A700">
                          claudiaxeme@mail.com
                        </div>
                      </Button>
                      <Button
                        className="bg-gray-900_02 cursor-pointer flex items-center justify-center min-w-[215px] md:ml-[0] ml-[18px] pl-5 pr-3.5 py-2.5 rounded-[14px]"
                        rightIcon={
                          <Img
                            className="h-6 mt-px mb-0.5 ml-5"
                            src="images/img_arrowleft.svg"
                            alt="arrow_left"
                          />
                        }
                      >
                        <div className="font-cairo font-semibold leading-[normal] text-left text-sm text-white-A700">
                          ricardoboiiy@mail.com
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        SUBJECT
                      </Text>
                      <div className="flex flex-col font-cairo items-start justify-start w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtCairoSemiBold20WhiteA700"
                        >
                          Weekly Report Progress Project “Almanax”
                        </Text>
                        <Line className="bg-blue_gray-700 h-px mt-1 rounded-[1px] w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[18px] items-center justify-start mt-[30px] w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        MESSAGE
                      </Text>
                      <div className="h-36 md:h-[157px] mt-[13px] relative w-full">
                        <Text
                          className="leading-[24.00px] m-auto text-base text-white-A700"
                          size="txtOpenSans16"
                        >
                          <>
                            Hello guys!
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est ?
                          </>
                        </Text>
                        <Line className="absolute bg-deep_purple-600 bottom-[1%] h-[19px] left-[34%] w-[3px]" />
                      </div>
                      <Img
                        className="h-[17px] md:ml-[0] ml-[961px] mt-[124px] w-[17px]"
                        src="images/img_signal_gray_400.svg"
                        alt="signal"
                      />
                    </div>
                    <Line className="bg-blue_gray-700 h-0.5 rounded-[1px] w-full" />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[13px] mt-10 w-[83%] md:w-full">
                    <Input
                      name="price"
                      placeholder="SEND EMAIL"
                      className="font-bold font-cairo p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg text-white-A700 w-full"
                      wrapClassName="bg-deep_purple-600 flex px-[35px] py-2 rounded-[14px] shadow-bs4 w-[27%] md:w-full"
                      type="email"
                      prefix={
                        <Img
                          className="mt-[7px] mb-0.5 h-6 mr-4"
                          src="images/img_send_1_white_a700.svg"
                          alt="send 1"
                        />
                      }
                    ></Input>
                    <Img
                      className="h-6 md:ml-[0] ml-[58px] w-6"
                      src="images/img_attach1.svg"
                      alt="attachOne"
                    />
                    <Line className="bg-blue_gray-900 h-8 md:h-px ml-8 md:ml-[0] md:mt-0 my-2.5 rounded-[1px] md:w-full w-px" />
                    <Img
                      className="h-6 md:ml-[0] ml-[37px] w-6"
                      src="images/img_undo.svg"
                      alt="undo"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[30px] w-6"
                      src="images/img_redo.svg"
                      alt="redo"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[30px] w-6"
                      src="images/img_text1.svg"
                      alt="textOne"
                    />
                    <Button
                      className="bg-blue_gray-900 cursor-pointer flex items-center justify-center mb-2.5 min-w-[128px] md:ml-[0] ml-[23px] md:mt-0 mt-1.5 px-[13px] py-1.5 rounded-[14px]"
                      rightIcon={
                        <Img
                          className="h-6 ml-[5px]"
                          src="images/img_icchevron_deep_purple_600.svg"
                          alt="ic_chevron"
                        />
                      }
                    >
                      <div className="font-opensans font-semibold leading-[normal] text-left text-sm text-white-A700">
                        Open Sans
                      </div>
                    </Button>
                    <Img
                      className="h-[17px] md:ml-[0] ml-[27px]"
                      src="images/img_file_blue_gray_700.svg"
                      alt="file"
                    />
                    <Img
                      className="h-[17px] md:ml-[0] ml-[34px]"
                      src="images/img_airplane_blue_gray_700.svg"
                      alt="airplane"
                    />
                    <Img
                      className="h-[17px] md:ml-[0] ml-[34px] w-4"
                      src="images/img_u.svg"
                      alt="u"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[34px] w-6"
                      src="images/img_volume_blue_gray_700.svg"
                      alt="volume"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar
          className="!sticky !w-[345px] bg-cover bg-no-repeat flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5"
          style={{ backgroundImage: "url('images/img_sidebar.svg')" }}
        >
          <Img
            className="h-[120px] md:h-auto mb-[1186px] object-cover"
            src="images/img_header.png"
            alt="header"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: "8px 8px 8px 50px",
                gap: "26px",
                backgroundColor: "#15132b",
                width: "100%",
                marginTop: "13px",
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
                className="h-6 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            )}
            className="flex flex-col font-opensans items-center justify-start mb-[509px] pt-2 w-full"
          >
            <div className="md:h-[119px] h-[120px] sm:h-[138px] relative w-full">
              <div className="bg-gray-900_01 flex flex-col h-full items-center justify-end m-auto py-[50px] w-full">
                <div className="bg-blue_gray-700 h-[3px] rounded-[1px] w-full"></div>
                <div className="bg-blue_gray-700 h-[3px] mt-[5px] rounded-[1px] w-full"></div>
                <div className="bg-blue_gray-700 h-[3px] mt-[5px] rounded-[1px] w-full"></div>
              </div>
              <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-center justify-center m-auto w-full">
                <Img
                  className="flex-1 h-[90px] sm:h-auto object-cover w-full"
                  src="images/img_logo2transparent.png"
                  alt="logo2transparen"
                />
                <Img
                  className="h-7"
                  src="images/img_martialme.svg"
                  alt="martialme"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-end mt-3 w-full">
              <Text
                className="text-base text-gray-400_01 tracking-[1.00px]"
                size="txtOpenSansBold16"
              >
                MAIN MENU
              </Text>
              <div className="flex flex-col font-cairo items-center justify-start w-full">
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
                      className="h-7 w-7"
                      src="images/img_mail_deep_purple_600.svg"
                      alt="mail"
                    />
                  }
                  label={
                    <>
                      <Text>Email</Text>
                      <div className="bg-light_blue-300 flex flex-col h-[29px] items-center justify-start my-2.5 rounded-[14px] w-[29px]">
                        <Text className="font-bold text-sm text-white-A700 w-4">
                          17
                        </Text>
                      </div>
                      <Line className="bg-deep_purple-600 h-[50px] rounded-[3px] w-1.5" />
                    </>
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
                      alt="grid"
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
                      src="images/img_contact1.svg"
                      alt="contactOne"
                    />
                  }
                  active={window.location.pathname === "/contactpage"}
                  href="/contactpage"
                >
                  <Text>Contact</Text>
                  <div className="bg-pink-400 flex flex-col items-center justify-start p-[3px] rounded-[17px]">
                    <Text className="font-bold text-sm text-white-A700 w-[30px]">
                      NEW
                    </Text>
                  </div>
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
                      src="images/img_user.svg"
                      alt="user_Two"
                    />
                  }
                  label={<Text>Courses</Text>}
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <MenuItem
                  icon={
                    <Img
                      className="h-7 w-7"
                      src="images/img_computer.svg"
                      alt="computer"
                    />
                  }
                >
                  <Text>Shop</Text>
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
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-base text-gray-400_01 tracking-[1.00px]"
                size="txtOpenSansBold16"
              >
                MAIN MENU
              </Text>
              <div className="flex flex-col font-cairo items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-7 w-7"
                      src="images/img_dashboard1.svg"
                      alt="dashboardOne_One"
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
                      className="h-7 w-7"
                      src="images/img_mail_deep_purple_600.svg"
                      alt="mail_One"
                    />
                  }
                  label={
                    <>
                      <Text className="font-bold text-deep_purple-600">
                        Email
                      </Text>
                      <Line className="bg-deep_purple-600 h-[50px] rounded-[3px] w-1.5" />
                    </>
                  }
                  suffix={
                    <Text className="bg-light_blue-300 flex font-bold h-[29px] items-center justify-center my-2.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]">
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
                      alt="commentOne_One"
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
                      src="images/img_contact1.svg"
                      alt="contactOne_One"
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
                      src="images/img_user.svg"
                      alt="user_Three"
                    />
                  }
                  label={<Text>Courses</Text>}
                >
                  <MenuItem>Submenu Item</MenuItem>
                </SubMenu>
                <MenuItem
                  icon={
                    <Img
                      className="h-7 w-7"
                      src="images/img_computer.svg"
                      alt="computer_One"
                    />
                  }
                >
                  <Text>Shop</Text>
                </MenuItem>
                <SubMenu
                  icon={
                    <Img
                      className="h-7 w-7"
                      src="images/img_invoice1.svg"
                      alt="invoiceOne_One"
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
                      alt="settingOne_One"
                    />
                  }
                >
                  <Text>Settings</Text>
                </MenuItem>
              </div>
            </div>
          </Menu>
          <div className="font-cairo md:h-[1306px] h-[203px] mb-[181px] ml-12 mr-[52px] mt-[922px] relative w-[72%]">
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
                    alt="arrowright_Six"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mb-[105px] mt-[1171px] mx-12 text-base text-blue_gray-700 w-[73%] sm:w-full"
            size="txtCairoBold16Bluegray700"
          >
            Kleon Clean Admin Dashboard
          </Text>
          <Text
            className="mb-[73px] ml-12 mr-[52px] mt-[1207px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default ComposeEmailPage;
