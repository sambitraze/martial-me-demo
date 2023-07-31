import React from "react";
import { default as ModalProvider } from "react-modal";

import {
  CheckBox,
  Img,
  Input,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";

const allRanksOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddNewEventModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[42%]"
      overlayClassName="bg-black-900_7f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-900_01 flex flex-col items-center justify-end mt-[131px] p-5 md:px-5 rounded-[14px] w-full">
          <div className="flex flex-col items-center justify-start mt-[21px] w-[93%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row font-cairo sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
                    size="txtCairoBold34"
                  >
                    Add New Event
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
                  SCHEDULE A CLASS{" "}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between mt-[23px] w-full">
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                <Text
                  className="text-base text-gray-400_01 tracking-[1.00px]"
                  size="txtOpenSansBold16"
                >
                  START DATE
                </Text>
                <Input
                  name="group264"
                  placeholder="November 4th, 2022"
                  className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                  wrapClassName="border border-blue_gray-700 border-solid flex px-[22px] py-[15px] rounded-[14px] w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-px h-7 ml-[35px]"
                      src="images/img_calendarsilhouette_deep_purple_600.svg"
                      alt="calendar-silhouette 1"
                    />
                  }
                ></Input>
              </div>
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                <Text
                  className="text-base text-gray-400_01 tracking-[1.00px]"
                  size="txtOpenSansBold16"
                >
                  END DATE
                </Text>
                <Input
                  name="group265"
                  placeholder="November 6th, 2023"
                  className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                  wrapClassName="border border-blue_gray-700 border-solid flex px-[22px] py-[15px] rounded-[14px] w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-px h-7 ml-[35px]"
                      src="images/img_calendarsilhouette_deep_purple_600.svg"
                      alt="calendar-silhouette 1"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div className="font-cairo md:h-[484px] h-[565px] mt-[30px] relative w-full">
              <div className="flex flex-col m-auto w-full">
                <div className="font-opensans md:h-[454px] h-[531px] mx-auto w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col gap-[30px] items-end justify-start w-full">
                      <div className="flex flex-col gap-[13px] items-start justify-start w-[48%] md:w-full">
                        <Text
                          className="text-base text-gray-400_01 tracking-[1.00px]"
                          size="txtOpenSansBold16"
                        >
                          END TIME
                        </Text>
                        <div className="bg-gray-900_01 border-2 border-deep_purple-600 border-solid flex flex-row items-center justify-between p-[15px] rounded-[14px] w-full">
                          <Text
                            className="ml-2 text-white-A700 text-xl"
                            size="txtOpenSansRomanSemiBold20"
                          >
                            8 : 00 PM
                          </Text>
                          <Img
                            className="h-6 mr-1.5 w-6"
                            src="images/img_clock_3.svg"
                            alt="clockThree"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-400_01 tracking-[1.00px]"
                            size="txtOpenSansBold16"
                          >
                            EVENT NAME
                          </Text>
                          <div className="border border-blue_gray-700 border-solid flex flex-col items-start justify-end mt-[13px] p-4 rounded-[14px] w-full">
                            <Text
                              className="md:ml-[0] ml-[7px] mt-0.5 text-lg text-white-A700"
                              size="txtOpenSansRomanSemiBold18"
                            >
                              Friday Night Cardio Kickboxing with Instructor
                              Juarez
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start mt-[30px] w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              DESCRIPTION
                            </Text>
                            <Input
                              name="description"
                              placeholder="Instructor Juarez teaches the fundamentals of Kickboxing, lots of heavy bag and mitt work. This class is all ranks and high intensity."
                              className="leading-[24.00px] p-0 placeholder:text-white-A700 sm:px-5 text-base text-center text-white-A700 w-full"
                              wrapClassName="border border-blue_gray-700 border-solid pb-[35px] pl-[23px] pr-7 pt-[11px] rounded-[14px] w-full"
                            ></Input>
                          </div>
                          <div className="flex flex-row items-start justify-between md:ml-[0] ml-[324px] mt-[30px] w-[54%] md:w-full">
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              INTENSITY
                            </Text>
                            <Text
                              className="text-base text-gray-400_01 tracking-[1.00px]"
                              size="txtOpenSansBold16"
                            >
                              EQUIPMENT NEEDED
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[13px] items-start justify-start left-[0] top-[0] w-[48%]">
                    <Text
                      className="text-base text-gray-400_01 tracking-[1.00px]"
                      size="txtOpenSansBold16"
                    >
                      START TIME
                    </Text>
                    <Input
                      name="time_One"
                      placeholder="7  :  15  PM"
                      className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                      wrapClassName="border border-blue_gray-700 border-solid flex px-[23px] py-[15px] rounded-[14px] w-full"
                      suffix={
                        <Img
                          className="mt-[3px] mb-px h-6 ml-[35px]"
                          src="images/img_clock_3.svg"
                          alt="clock 3"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col gap-3 items-start justify-start left-[0] w-[43%]">
                    <Text
                      className="text-base text-gray-400_01 tracking-[1.00px]"
                      size="txtOpenSansBold16"
                    >
                      Rank
                    </Text>
                    <SelectBox
                      className="border border-blue_gray-700 border-solid font-semibold leading-[normal] pl-[23px] pr-7 sm:px-5 py-[15px] rounded-[14px] text-left text-white-A700 text-xl w-full"
                      placeholderClassName="text-white-A700"
                      indicator={
                        <Img
                          className="h-2 mr-[0] w-[15px]"
                          src="images/img_arrow.svg"
                          alt="arrow"
                        />
                      }
                      isMulti={false}
                      name="group269"
                      options={allRanksOptionsList}
                      isSearchable={false}
                      placeholder="All Ranks"
                    />
                  </div>
                  <RadioGroup
                    className="absolute bottom-[0] flex flex-col font-cairo right-[39%] w-[15%]"
                    name="radiogrouplow"
                  >
                    <Radio
                      value="LOW"
                      className="font-semibold leading-[normal] mr-[30px] text-gray-400_01 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogrouplow"
                      label="LOW"
                      id="LOW"
                    ></Radio>
                    <Radio
                      value="MEDIUM"
                      className="font-semibold leading-[normal] text-gray-400_01 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogrouplow"
                      label="MEDIUM"
                      id="MEDIUM"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Radio
                  value="HIGH"
                  className="font-cairo font-semibold leading-[normal] mt-[-0.1px] mx-auto text-gray-400_01 text-left text-lg z-[1]"
                  inputClassName="mr-[5px] z-[1]"
                  checked={false}
                  name="high"
                  label="HIGH"
                  id="HIGH"
                ></Radio>
                <div className="flex flex-row font-cairo gap-3 items-start justify-center mb-[68px] ml-auto mr-[69px] mt-[-NaNpx] w-[16%] z-[1]">
                  <Img
                    className="h-6 mt-1 w-6"
                    src="images/img_iccheck_gray_500_01.svg"
                    alt="iccheck"
                  />
                  <Text
                    className="text-gray-400_01 text-lg"
                    size="txtCairoSemiBold18Gray40001"
                  >
                    UNIFORM
                  </Text>
                </div>
              </div>
              <CheckBox
                className="font-semibold leading-[normal] text-gray-400_01 text-left text-lg"
                inputClassName="absolute mr-[5px]"
                name="sparringgear"
                id="sparringgear"
                label="SPARRING GEAR"
              ></CheckBox>
              <div className="absolute md:h-[179px] h-[189px] right-[28%] top-[16%] w-1/5">
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
                      className="text-deep_purple-600 text-xl"
                      size="txtCairoBold20Deeppurple600"
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
                      className="text-deep_purple-600 text-xl"
                      size="txtCairoBold20Deeppurple600"
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
            </div>
            <div className="flex sm:flex-col flex-row font-cairo sm:gap-10 items-center justify-between mt-[81px] w-full">
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[31%] sm:w-full">
                <Input
                  name="btnreply"
                  placeholder="ADD VIDEO"
                  className="font-bold p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg text-white-A700 w-full"
                  wrapClassName="bg-light_blue-300 flex px-[35px] py-3 rounded-[14px] shadow-bs4 w-full"
                  prefix={
                    <Img
                      className="mt-px mb-[3px] h-[29px] mr-[25px]"
                      src="images/img_play_button_1.svg"
                      alt="play button 1"
                    />
                  }
                ></Input>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start w-[28%] sm:w-full">
                <Input
                  name="btnreply_One"
                  placeholder="SUBMIT"
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
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default AddNewEventModal;
