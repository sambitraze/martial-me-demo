import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProjectDetailPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-cairo h-[1648px] mx-auto relative w-full"
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
              <div className="bg-gray-900_01 flex flex-col items-center justify-start py-[41px] rounded-[14px] shadow-bs4 w-full">
                <div className="flex flex-col items-center justify-start mb-[11px] w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-[96%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-[38px] mb-[3px] w-[38px]"
                        src="images/img_btnback.svg"
                        alt="btnback"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[3px] text-gray-500_01 text-xl"
                        size="txtCairoBold20Gray50001"
                      >
                        Projects Detail
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[1209px] md:mt-0 mt-[11px] w-6"
                        src="images/img_verticon_gray_500_01.svg"
                        alt="verticon"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[66%] md:w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtCairoBold28"
                        >
                          Redesign landing page website for company profile
                        </Text>
                        <Text
                          className="mt-1 text-base text-gray-500_01 tracking-[1.00px]"
                          size="txtOpenSansBold16Gray50001"
                        >
                          MEMBER
                        </Text>
                        <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-start justify-start mt-[23px] w-4/5 md:w-full">
                          <div className="flex flex-col items-center justify-start w-[23%] md:w-full">
                            <div className="flex relative w-full">
                              <div className="flex my-auto w-[81%]">
                                <div className="flex my-auto w-[77%]">
                                  <div className="flex my-auto w-[70%]">
                                    <div className="bg-gray-400 h-10 my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10"></div>
                                    <div className="bg-gray-400 h-10 ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10 z-[1]"></div>
                                  </div>
                                  <div className="bg-gray-400 h-10 ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10 z-[1]"></div>
                                </div>
                                <div className="bg-gray-400 h-10 ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] w-10 z-[1]"></div>
                              </div>
                              <Text
                                className="bg-pink-400 flex h-10 items-center justify-center ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] text-center text-lg text-white-A700 w-10 z-[1]"
                                size="txtCairoBold18"
                              >
                                5+
                              </Text>
                            </div>
                          </div>
                          <div className="bg-deep_purple-600 flex flex-row gap-[11px] items-center justify-center md:ml-[0] ml-[21px] p-1 rounded-[14px] w-[23%] md:w-full">
                            <Img
                              className="h-6 ml-[9px] w-6"
                              src="images/img_addfriend1.svg"
                              alt="addfriendOne"
                            />
                            <Text
                              className="mr-[19px] mt-0.5 text-base text-white-A700"
                              size="txtCairoBold16"
                            >
                              Invite People
                            </Text>
                          </div>
                          <Button className="border border-blue_gray-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[89px] ml-5 md:ml-[0] py-1.5 rounded-[14px] text-base text-center text-white-A700">
                            Private
                          </Button>
                          <Button className="bg-blue_gray-700 cursor-pointer font-bold leading-[normal] min-w-[78px] ml-3 md:ml-[0] py-1.5 rounded-[14px] text-base text-center text-white-A700">
                            Edit
                          </Button>
                          <Button
                            className="border border-blue_gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[167px] ml-5 md:ml-[0] px-4 py-1.5 rounded-[14px]"
                            leftIcon={
                              <Img
                                className="h-6 mt-0.5 mb-[3px] mr-[13px]"
                                src="images/img_chat_1_1.svg"
                                alt="chat (1) 1"
                              />
                            }
                          >
                            <div className="font-semibold leading-[normal] text-base text-left text-white-A700">
                              45 Comments
                            </div>
                          </Button>
                        </div>
                        <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between ml-1 md:ml-[0] mt-[38px] w-full">
                          <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[29%] md:w-full">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansRomanSemiBold16"
                            >
                              Total Progress 60%
                            </Text>
                            <div className="h-3.5 overflow-hidden relative w-full">
                              <div className="w-full h-full absolute bg-gray_900_02 rounded-[7px]"></div>
                              <div
                                className="h-full absolute bg-deep_purple_600  rounded-[7px]"
                                style={{ width: "45%" }}
                              ></div>
                            </div>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[89px] grid sm:grid-cols-1 grid-cols-2 w-[59%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                              <div className="flex flex-col gap-[7px] justify-start w-full">
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[64%] md:w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_clock11_deep_purple_600.svg"
                                    alt="clockEleven"
                                  />
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtOpenSansRomanSemiBold16"
                                  >
                                    Project Create
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[33px] text-gray-500_01 text-right text-sm"
                                  size="txtOpenSansRomanSemiBold14Gray50001"
                                >
                                  Monday, October 31th, 2020
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                              <div className="flex flex-col gap-[7px] justify-start w-full">
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[47%] md:w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_clock11_deep_purple_600.svg"
                                    alt="clockEleven"
                                  />
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtOpenSansRomanSemiBold16"
                                  >
                                    Due date
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[33px] text-gray-500_01 text-right text-sm"
                                  size="txtOpenSansRomanSemiBold14Gray50001"
                                >
                                  Monday, October 31th, 2020
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[34px] items-end justify-between md:mt-0 mt-3.5 w-1/5 md:w-full">
                        <div className="flex flex-col items-center justify-start mt-[54px]">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtCairoBold24"
                          >
                            Circle Hunt
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-gray-500_01"
                            size="txtOpenSans16Gray50001"
                          >
                            Creative Agency
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 flex flex-col h-[122px] items-center justify-start mb-0.5 p-[21px] sm:px-5 rounded-[14px] shadow-bs3 w-[122px]">
                          <div className="flex flex-col h-[78px] items-center justify-start w-[78px]">
                            <Img
                              className="h-[75px] w-[75px]"
                              src="images/img_brightness.svg"
                              alt="brightness"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-opensans gap-[31px] items-center justify-start mt-[29px] w-full">
                    <Line className="bg-blue_gray-900 h-px rounded-[1px] w-full" />
                    <div className="flex flex-col gap-[22px] items-start justify-start">
                      <Text
                        className="text-base text-gray-400_01 tracking-[1.00px]"
                        size="txtOpenSansBold16"
                      >
                        PROJECT DESCRIPTION
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtOpenSans16"
                      >
                        <span className="text-white-A700 font-opensans text-left font-normal">
                          <>
                            &quot;Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est
                            laborum.&quot;
                            <br />
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-opensans text-left font-bold">
                          <>
                            Section 1.10.32 of &quot;de Finibus Bonorum et
                            Malorum&quot;, written by Cicero in 45 BC
                            <br />
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-opensans text-left font-normal">
                          <>
                            &quot;Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam
                            eius modi tempora incidunt ut labore et dolore
                            magnam aliquam quaerat voluptatem. Ut enim ad minima
                            veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliqui
                          </>
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-10 w-[96%] md:w-full">
                    <Text
                      className="text-base text-gray-400_01 tracking-[1.00px]"
                      size="txtOpenSansBold16"
                    >
                      COMMENT
                    </Text>
                    <div className="bg-gray-900_01 border-2 border-blue_gray-700 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start mt-6 p-5 rounded-[14px] w-full">
                      <Text
                        className="text-base text-gray-500_01"
                        size="txtOpenSans16Gray50001"
                      >
                        Type comment here...
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[756px] text-base text-center text-gray-900_01"
                        size="txtPoppinsMedium16Gray90001"
                      >
                        SEND
                      </Text>
                      <div className="flex md:flex-1 flex-row font-cairo items-start justify-between md:ml-[0] ml-[138px] w-1/5 md:w-full">
                        <Img
                          className="h-6 mt-3 w-6"
                          src="images/img_location_deep_purple_600.svg"
                          alt="location"
                        />
                        <Img
                          className="h-6 mt-3 w-6"
                          src="images/img_attach1_deep_purple_600.svg"
                          alt="attachOne"
                        />
                        <Button
                          className="bg-deep_purple-600 cursor-pointer flex items-center justify-center min-w-[155px] px-[34px] py-[9px] rounded-[14px] shadow-bs4"
                          leftIcon={
                            <Img
                              className="h-6 mt-1 mb-[5px] mr-4"
                              src="images/img_send_1_white_a700.svg"
                              alt="send 1"
                            />
                          }
                        >
                          <div className="font-bold sm:px-5 text-left text-lg text-white-A700">
                            SEND
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Input
                      name="btninvite"
                      placeholder="Newest Comment"
                      className="font-bold font-cairo leading-[normal] p-0 placeholder:text-white-A700 text-base text-left text-white-A700 w-full"
                      wrapClassName="bg-blue_gray-700 flex ml-1 md:ml-[0] mt-[30px] px-[18px] py-[5px] rounded-[14px] w-[15%]"
                      suffix={
                        <Img
                          className="mt-[3px] mb-0.5 h-6 ml-[25px]"
                          src="images/img_icchevron_white_a700.svg"
                          alt="ic_chevron"
                        />
                      }
                    ></Input>
                    <div className="bg-gray-900_01 flex flex-col font-cairo items-center justify-start mt-[13px] pt-[11px] w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[95%] md:w-full">
                          <div className="bg-gray-400 h-[50px] md:mt-0 my-1.5 rounded-[14px] w-[50px]"></div>
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px]">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtCairoBold20"
                            >
                              Kevin Sirait
                            </Text>
                            <Text
                              className="mt-[3px] text-sm text-white-A700"
                              size="txtPoppinsRegular14WhiteA700"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod{" "}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[13px] items-start justify-center mb-[9px] md:ml-[0] ml-[578px] md:mt-0 mt-[19px] w-[7%] md:w-full">
                            <Img
                              className="h-6 mt-[3px] w-6"
                              src="images/img_thumbsup1.svg"
                              alt="thumbsupOne"
                            />
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoBold18"
                            >
                              45 Like
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start mb-2 md:ml-[0] ml-[27px] md:mt-0 mt-5 w-[6%] md:w-full">
                            <Img
                              className="h-6 mt-0.5 w-6"
                              src="images/img_reply.svg"
                              alt="reply"
                            />
                            <Text
                              className="text-lg text-white-A700"
                              size="txtCairoBold18"
                            >
                              Reply
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-900 h-px w-full" />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col font-cairo items-center justify-start pt-3 w-full">
                      <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[17px] items-start justify-start w-[95%] md:w-full">
                          <div className="bg-gray-400 h-[50px] mb-[49px] md:mt-0 mt-1.5 rounded-[14px] w-[50px]"></div>
                          <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtCairoBold20"
                            >
                              Hendric Suneo
                            </Text>
                            <div className="flex md:flex-col flex-row font-opensans gap-[27px] items-start justify-between w-full">
                              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-[92%] md:w-full">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtOpenSans16"
                                >
                                  Nemo enim ipsam voluptatem quia voluptas sit
                                  aspernatur aut odit aut fugit, sed quia
                                  consequuntur magni dolores eos qui ratione
                                  voluptatem sequi nesciunt. Neque porro
                                  quisquam est, qui dolorem ipsum quia dolor sit
                                  amet, consectetur, adipisci velit, sed quia
                                  non numquam eius modi tempora incidunt ut
                                  labore et dolore magnam aliquam quaerat
                                  voluptatem. Ut enim ad minima ve
                                </Text>
                                <div className="flex flex-row font-cairo gap-[13px] items-start justify-start">
                                  <Img
                                    className="h-6 mt-1 w-6"
                                    src="images/img_thumbsup1.svg"
                                    alt="thumbsupOne_One"
                                  />
                                  <Text
                                    className="text-lg text-white-A700"
                                    size="txtCairoBold18"
                                  >
                                    45 Like
                                  </Text>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row font-cairo gap-2 items-start justify-start md:mt-0 mt-0.5 w-[6%] md:w-full">
                                <Img
                                  className="h-6 mt-0.5 w-6"
                                  src="images/img_reply.svg"
                                  alt="reply_Two"
                                />
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtCairoBold18"
                                >
                                  Reply
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-900 h-px w-full" />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-center justify-start pt-3 w-full">
                      <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[91%] md:w-full">
                          <div className="bg-gray-400 h-[50px] mb-[27px] md:mt-0 mt-1.5 rounded-[14px] w-[50px]"></div>
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px]">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtCairoBold20"
                            >
                              Kesha Jean
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-full"
                              size="txtOpenSans16"
                            >
                              m quia dolor sit amet, consectetur, adipisci
                              velit, sed quia non numquam eius modi tempora
                              incidunt ut labore et dolore magnam aliquam
                              quaerat voluptatem. Ut enim ad minima ve
                            </Text>
                          </div>
                          <Img
                            className="h-6 mb-[25px] md:ml-[0] ml-[281px] md:mt-0 mt-[34px] w-6"
                            src="images/img_star1_orange_400.svg"
                            alt="starTwo"
                          />
                          <Img
                            className="h-6 mb-[25px] ml-3 md:ml-[0] md:mt-0 mt-[34px] w-6"
                            src="images/img_star1_orange_400.svg"
                            alt="starOne"
                          />
                        </div>
                        <Line className="bg-blue_gray-900 h-px w-full" />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-center justify-end pt-3 w-full">
                      <div className="flex flex-col gap-[21px] justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[95px] w-[67%] md:w-full">
                          <div className="bg-gray-400 h-[50px] mb-[27px] md:mt-0 mt-1.5 rounded-[14px] w-[50px]"></div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtCairoBold20"
                            >
                              Lolita Humble
                            </Text>
                            <Text
                              className="text-base text-white-A700 w-full"
                              size="txtOpenSans16"
                            >
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt.
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-blue_gray-900 h-px w-full" />
                      </div>
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
                  src="images/img_grid_deep_purple_600.svg"
                  alt="grid"
                />
              }
              label={
                <>
                  <Text>Kanban</Text>
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
            className="mb-[609px] md:ml-[0] mt-1.5 mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
            size="txtCairoRegular14"
          >
            Made with ♥ by Peterdraw
          </Text>
        </Sidebar>
      </div>
    </>
  );
};

export default ProjectDetailPage;
