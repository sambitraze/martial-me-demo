import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const EventDetailModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[51%]"
      overlayClassName="bg-black-900_7f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-900_01 flex flex-col items-center justify-start p-10 md:px-5 rounded-[14px] w-full">
          <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row font-cairo sm:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                  size="txtCairoBold34"
                >
                  Event Details
                </Text>
                <Img
                  className="h-6 mt-[31px] w-6"
                  src="images/img_close2_gray_500_01.svg"
                  alt="closeTwo"
                />
              </div>
              <Text
                className="text-gray-500_01 text-lg"
                size="txtOpenSans18Gray50001"
              >
                Lorem ipsum dolor sit amet{" "}
              </Text>
            </div>
          </div>
          <div className="bg-gray-900_02 flex flex-col items-center justify-start mt-[17px] p-[30px] sm:px-5 rounded-[14px] w-[98%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[27px] items-start justify-start mb-1.5 mt-0.5 w-[99%] md:w-full">
              <Button className="bg-light_blue-300 flex h-[51px] items-center justify-center mb-[154px] p-[11px] rounded-[14px] w-[51px]">
                <Img
                  className="h-7"
                  src="images/img_calendarsilhouette_white_a700.svg"
                  alt="calendarsilhoue"
                />
              </Button>
              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-start justify-start w-[99%] md:w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtCairoBold20"
                  >
                    Weekly Meeting Projects
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[366px] w-6"
                    src="images/img_close_2.svg"
                    alt="closeTwo_One"
                  />
                  <Img
                    className="h-6 md:ml-[0] ml-[19px] w-6"
                    src="images/img_checked_1.svg"
                    alt="checkedTwo"
                  />
                  <Img
                    className="h-6 ml-7 md:ml-[0] w-6"
                    src="images/img_verticon_2.svg"
                    alt="verticon"
                  />
                </div>
                <Text
                  className="leading-[24.00px] mt-[9px] text-sm text-white-A700 w-full"
                  size="txtOpenSans14WhiteA700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur
                </Text>
                <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-center justify-start mt-[19px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
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
                        className="bg-deep_purple-600 flex h-10 items-center justify-center ml-[-8px] my-auto outline outline-[2px] outline-gray-900_01 rounded-[50%] text-center text-lg text-white-A700 w-10 z-[1]"
                        size="txtCairoBold18"
                      >
                        5+
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row font-opensans gap-[15px] items-start justify-center md:ml-[0] ml-[95px] w-[26%] md:w-full">
                    <Img
                      className="h-6 mt-[5px] w-6"
                      src="images/img_clock_3.svg"
                      alt="clockThree"
                    />
                    <Text
                      className="text-base text-white-A700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      <>
                        Monday, 10:24 AM
                        <br />
                        October 31th 2020
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row font-opensans gap-[15px] items-start justify-start md:ml-[0] ml-[39px] w-[33%] md:w-full">
                    <Img
                      className="h-6 mt-1 w-6"
                      src="images/img_icmap.svg"
                      alt="icmap"
                    />
                    <Text
                      className="text-base text-white-A700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      <>
                        Corner Rounded St
                        <br />
                        London, United Kingdom
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_02 flex flex-col items-center justify-start mb-3 mt-[30px] p-[30px] sm:px-5 rounded-[14px] w-[98%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[27px] items-start justify-start mb-1.5 mt-0.5 w-[99%] md:w-full">
              <Button className="bg-pink-400 flex h-[51px] items-center justify-center mb-[154px] p-[11px] rounded-[14px] w-[51px]">
                <Img
                  className="h-7"
                  src="images/img_calendarsilhouette_white_a700.svg"
                  alt="calendarsilhoue_One"
                />
              </Button>
              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                <div className="flex md:flex-col flex-row font-cairo md:gap-5 items-start justify-start w-[99%] md:w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtCairoBold20"
                  >
                    International Kleon Workshops
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[314px] w-6"
                    src="images/img_close_2.svg"
                    alt="closeTwo_Two"
                  />
                  <Img
                    className="h-6 md:ml-[0] ml-[19px] w-6"
                    src="images/img_checked_1.svg"
                    alt="checkedTwo_One"
                  />
                  <Img
                    className="h-6 ml-7 md:ml-[0] w-6"
                    src="images/img_verticon_2.svg"
                    alt="verticon_One"
                  />
                </div>
                <Text
                  className="leading-[24.00px] mt-[9px] text-sm text-white-A700 w-full"
                  size="txtOpenSans14WhiteA700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur
                </Text>
                <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-center justify-start mt-[19px] w-full">
                  <Img
                    className="h-10"
                    src="images/img_people_gray_400_40x104.svg"
                    alt="people"
                  />
                  <div className="flex md:flex-1 flex-row gap-[15px] items-start justify-center md:ml-[0] ml-[159px] w-[26%] md:w-full">
                    <Img
                      className="h-6 mt-[5px] w-6"
                      src="images/img_clock_3.svg"
                      alt="clockThree_One"
                    />
                    <Text
                      className="text-base text-white-A700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      <>
                        Monday, 10:24 AM
                        <br />
                        October 31th 2020
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[39px] w-[33%] md:w-full">
                    <Img
                      className="h-6 mt-1 w-6"
                      src="images/img_icmap.svg"
                      alt="icmap_One"
                    />
                    <Text
                      className="text-base text-white-A700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      <>
                        Corner Rounded St
                        <br />
                        London, United Kingdom
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default EventDetailModal;
