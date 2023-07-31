import React from "react";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import C01DashboardNav from "components/C01DashboardNav";
import Sidebar5 from "components/Sidebar5";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EmailPreviewPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-cairo h-[1264px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-12 w-full"
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
              <div className="bg-gray-900_01 flex flex-col items-center justify-end mb-[58px] pt-5 rounded-[14px] shadow-bs4 w-3/4 md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_left1.svg"
                    alt="leftOne"
                  />
                  <Button className="bg-orange-400 flex h-[50px] items-center justify-center mb-1.5 md:ml-[0] ml-[33px] md:mt-0 mt-[3px] p-[13px] rounded-[14px] w-[50px]">
                    <Img
                      className="h-6"
                      src="images/img_star1_white_a700.svg"
                      alt="starOne_One"
                    />
                  </Button>
                  <div className="bg-gray-400 h-[50px] ml-5 md:ml-[0] md:mt-0 my-1 rounded-[14px] w-[50px]"></div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[26px]">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtCairoBold18"
                    >
                      Kevin Hard
                    </Text>
                    <Text
                      className="text-base text-gray-500_01"
                      size="txtCairoSemiBold16Gray50001"
                    >
                      kevinhard@mail.com
                    </Text>
                  </div>
                  <Img
                    className="h-[38px] md:ml-[0] ml-[435px]"
                    src="images/img_action_gray_900_01.svg"
                    alt="action"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-1 w-full">
                  <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                  <div className="bg-gray-900_01 flex flex-col items-center justify-end py-[31px] rounded-[14px] shadow-bs4 w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[37px] w-[94%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[3px] text-blue_gray-700 text-lg"
                          size="txtCairoSemiBold18"
                        >
                          Oct 25th, 2020 02:54 AM
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[3px] mt-0.5 sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                          size="txtCairoSemiBold34"
                        >
                          How to manage your working time in this pandemic
                        </Text>
                        <div className="flex sm:flex-col flex-row font-cairo gap-[18px] items-center justify-start ml-0.5 md:ml-[0] mt-1.5 w-[44%] md:w-full">
                          <Button className="bg-blue_gray-900_01 cursor-pointer font-semibold leading-[normal] min-w-[201px] py-1.5 rounded-[14px] text-blue-700_01 text-center text-lg">
                            #projectmanagement
                          </Button>
                          <Button className="bg-gray-900_04 cursor-pointer font-semibold leading-[normal] min-w-[101px] py-1.5 rounded-[14px] text-center text-deep_purple-600 text-lg">
                            #working
                          </Button>
                          <Button className="bg-gray-900_03 cursor-pointer font-semibold leading-[normal] min-w-[105px] py-1.5 rounded-[14px] text-center text-lg text-pink-400">
                            #covid-19
                          </Button>
                        </div>
                        <Text
                          className="leading-[24.00px] md:ml-[0] ml-[3px] mt-10 text-base text-white-A700"
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
                            deserunt mollit anim id est laborum
                            <br />
                            <br />
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?
                          </>
                        </Text>
                        <div className="flex flex-col font-opensans items-center justify-start mt-[38px] w-full">
                          <div className="flex flex-col gap-6 items-center justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                              <div className="h-6 relative w-[3%] md:w-full">
                                <Img
                                  className="absolute h-6 inset-y-[0] left-[0] my-auto w-6"
                                  src="images/img_attach1.svg"
                                  alt="attachOne"
                                />
                                <Img
                                  className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                                  src="images/img_attach1.svg"
                                  alt="attachOne_One"
                                />
                              </div>
                              <Text
                                className="md:ml-[0] ml-[23px] md:mt-0 mt-[3px] text-base text-gray-400_01 tracking-[1.00px]"
                                size="txtOpenSansBold16"
                              >
                                ATTACHMENT FILES (3)
                              </Text>
                              <Img
                                className="h-6 md:ml-[0] ml-[617px] w-6"
                                src="images/img_download11.svg"
                                alt="downloadEleven"
                              />
                              <Text
                                className="ml-4 md:ml-[0] text-base text-deep_purple-600"
                                size="txtOpenSansBold16Deeppurple600"
                              >
                                Download All
                              </Text>
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                              orientation="horizontal"
                            >
                              <div className="border border-blue_gray-700 border-solid flex flex-1 flex-col items-start justify-start p-4 rounded-[14px] w-full">
                                <div className="flex flex-row gap-5 items-center justify-start ml-1 md:ml-[0] w-[91%] md:w-full">
                                  <div className="bg-blue_gray-900_01 flex flex-col h-[82px] items-center justify-start p-6 sm:px-5 rounded-[14px] w-[82px]">
                                    <Img
                                      className="h-[34px] w-[34px]"
                                      src="images/img_blankpage11_light_blue_300.svg"
                                      alt="blankpageEleven"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1.5 items-start justify-start">
                                    <Text
                                      className="text-base text-white-A700"
                                      size="txtOpenSansRomanSemiBold16"
                                    >
                                      Presentation_slide.ppt
                                    </Text>
                                    <Text
                                      className="text-base text-blue_gray-700"
                                      size="txtOpenSansRomanSemiBold16Bluegray700"
                                    >
                                      456 KB
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="border border-blue_gray-700 border-solid flex flex-1 flex-col items-center justify-start p-4 rounded-[14px] w-full">
                                <div className="flex flex-row gap-5 items-center justify-between w-[94%] md:w-full">
                                  <div className="bg-gray-900_03 flex flex-col h-[82px] items-center justify-start p-6 sm:px-5 rounded-[14px] w-[82px]">
                                    <Img
                                      className="h-[34px] w-[34px]"
                                      src="images/img_musicalnote1.svg"
                                      alt="musicalnoteOne"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1.5 items-start justify-start">
                                    <Text
                                      className="text-base text-white-A700"
                                      size="txtOpenSansRomanSemiBold16"
                                    >
                                      Voice_REC_00012.mp3
                                    </Text>
                                    <Text
                                      className="text-base text-blue_gray-700"
                                      size="txtOpenSansRomanSemiBold16Bluegray700"
                                    >
                                      163 MB
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="border border-blue_gray-700 border-solid flex flex-1 flex-col items-start justify-start p-4 rounded-[14px] w-full">
                                <div className="flex flex-row gap-5 items-center justify-start ml-1 md:ml-[0] w-[84%] md:w-full">
                                  <div className="bg-gray-900_05 flex flex-col h-[82px] items-center justify-start p-6 sm:px-5 rounded-[14px] w-[82px]">
                                    <Img
                                      className="h-[34px] w-[34px]"
                                      src="images/img_minimize_green_500.svg"
                                      alt="minimize"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1.5 items-start justify-start">
                                    <Text
                                      className="text-base text-white-A700"
                                      size="txtOpenSansRomanSemiBold16"
                                    >
                                      VIDEO_00345.mp4
                                    </Text>
                                    <Text
                                      className="text-base text-blue_gray-700"
                                      size="txtOpenSansRomanSemiBold16Bluegray700"
                                    >
                                      531 MB
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-900 h-px mt-[49px] rounded-[1px] w-full" />
                      <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start ml-10 md:ml-[0] mt-[27px] w-[42%] md:w-full">
                        <Input
                          name="btnreply"
                          placeholder="Reply this email"
                          className="font-bold p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg text-white-A700 w-full"
                          wrapClassName="bg-deep_purple-600 flex pb-1.5 pt-[11px] px-[35px] rounded-[14px] shadow-bs4 w-[54%] sm:w-full"
                          type="email"
                          prefix={
                            <Img
                              className="mt-[5px] mb-1 h-6 mr-4"
                              src="images/img_reply_1.svg"
                              alt="reply 1"
                            />
                          }
                        ></Input>
                        <Button
                          className="bg-light_blue-300 cursor-pointer flex items-center justify-center min-w-[181px] px-[35px] py-[9px] rounded-[14px] shadow-bs4"
                          leftIcon={
                            <Img
                              className="h-6 mt-[7px] mb-0.5 mr-4"
                              src="images/img_forward_white_a700.svg"
                              alt="forward"
                            />
                          }
                        >
                          <div className="font-bold sm:px-5 text-left text-lg text-white-A700">
                            Forward
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar5 className="!sticky !w-[345px] bg-gray-900_01 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 shadow-bs1 top-[0]" />
      </div>
    </>
  );
};

export default EmailPreviewPagePage;
