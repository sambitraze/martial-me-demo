import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[46px] md:ml-[0] ml-[41px] md:mt-0 my-[37px] w-[46px]"
          src="images/img_menu.svg"
          alt="menu"
        />
        <Text
          className="md:ml-[0] ml-[46px] md:mt-0 my-[27px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700"
          size="txtCairoBold34"
        >
          Dashboard
        </Text>
        <div className="bg-gray-900_01 flex sm:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[116px] md:mt-0 my-[26px] p-[18px] rounded-[34px] w-[26%] md:w-full">
          <Img
            className="h-7 sm:ml-[0] ml-[19px] w-7"
            src="images/img_search2.svg"
            alt="searchTwo"
          />
          <Text
            className="mr-[305px] text-base text-gray-500"
            size="txtCairoSemiBold16Gray500"
          >
            Search here
          </Text>
        </div>
        <Img
          className="h-[31px] mb-[46px] md:ml-[0] ml-[197px] md:mt-0 mt-[43px]"
          src="images/img_icons.svg"
          alt="icons"
        />
        <div className="flex flex-row gap-6 items-start justify-center md:ml-[0] ml-[60px] md:mt-0 my-[30px] w-[12%] md:w-full">
          <Img
            className="h-[57px] w-[57px]"
            src="images/img_user_gray_400.svg"
            alt="user_One"
          />
          <div className="flex flex-row gap-7 items-center justify-between mt-[3px] w-[64%]">
            <div className="md:h-7 h-[54px] relative w-[70%]">
              <Text
                className="absolute inset-x-[0] mx-auto text-base text-white-A700 top-[0] w-max"
                size="txtCairoBold16"
              >
                Instructor Day
              </Text>
              <Text
                className="absolute bottom-[0] left-[0] text-blue_gray-700 text-right text-sm"
                size="txtCairoRegular14"
              >
                Super Admin
              </Text>
            </div>
            <Img className="h-2" src="images/img_arrow.svg" alt="arrow" />
          </div>
        </div>
        <div className="flex flex-row gap-[19px] items-center justify-center md:ml-[0] ml-[50px] mr-[212px] md:mt-0 my-11 w-[3%] md:w-full">
          <Text className="text-base text-white-A700" size="txtCairoBold16">
            EN
          </Text>
          <Img className="h-2" src="images/img_arrow.svg" alt="arrow_One" />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
