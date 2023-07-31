import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";

const SignInSignupModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[29%]"
      overlayClassName="bg-deep_purple-600 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-900_02 flex flex-col items-center justify-start p-[49px] md:px-5 rounded-[14px] w-full">
          <div className="flex flex-col items-start justify-start mb-2.5 w-full">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                size="txtCairoBold38"
              >
                Welcome back!
              </Text>
              <Text className="text-base text-white-A700" size="txtOpenSans16">
                Please login using your account
              </Text>
            </div>
            <div className="flex flex-col gap-[13px] items-start justify-start mt-[38px] w-full">
              <Text
                className="text-base text-gray-400_01 tracking-[1.00px]"
                size="txtOpenSansBold16"
              >
                USERNAME
              </Text>
              <Input
                name="group276"
                placeholder="franklinjunior01"
                className="font-cairo font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-white-A700 text-xl w-full"
                wrapClassName="bg-gray-900_02 border border-blue_gray-700 border-solid pb-[9px] pl-[23px] pr-[35px] pt-3 rounded-[14px] w-full"
              ></Input>
            </div>
            <div className="flex flex-col font-opensans gap-[13px] items-start justify-start mt-[30px] w-full">
              <Text
                className="text-base text-gray-400_01 tracking-[1.00px]"
                size="txtOpenSansBold16"
              >
                PASSWORD
              </Text>
              <Input
                name="group275"
                placeholder=""
                className="p-0 sm:pl-5 w-full"
                wrapClassName="bg-gray-900_02 border-2 border-deep_purple-600 border-solid flex pl-[26px] pr-[19px] py-[18px] rounded-[14px] w-full"
                prefix={
                  <Img
                    className="mr-[35px] my-1.5"
                    src="images/img_dots.svg"
                    alt="dots"
                  />
                }
                suffix={
                  <Img
                    className="h-6 ml-[35px] my-auto"
                    src="images/img_openeye_1.svg"
                    alt="open-eye 1"
                  />
                }
              ></Input>
            </div>
            <div className="font-cairo md:h-[100px] h-[60px] mt-10 relative w-full">
              <div className="bg-deep_purple-600 h-[60px] m-auto rounded-[12px] shadow-bs2 w-[74%]"></div>
              <Button className="absolute bg-deep_purple-600 cursor-pointer font-bold h-full inset-[0] justify-center leading-[normal] m-auto min-w-[452px] sm:min-w-full py-[13px] rounded-[12px] shadow-bs3 text-center text-lg text-white-A700">
                LOGIN
              </Button>
            </div>
            <div className="flex flex-row font-opensans items-start justify-between mt-[30px] w-full">
              <a href="javascript:" className="text-base text-white-A700">
                <Text size="txtOpenSans16">Forgot your password?</Text>
              </a>
              <Text
                className="text-base text-deep_purple-600 text-right underline"
                size="txtOpenSansBold16Deeppurple600"
              >
                Reset Here
              </Text>
            </div>
            <Button className="bg-pink-400 cursor-pointer font-bold leading-[normal] min-w-[452px] sm:min-w-full mt-10 py-[13px] rounded-[12px] text-center text-lg text-white-A700">
              CREATE AN ACCOUNT
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SignInSignupModal;
