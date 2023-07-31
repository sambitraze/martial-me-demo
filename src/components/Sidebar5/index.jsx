import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const Sidebar5 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="h-[120px] relative w-full">
          <div className="bg-gray-900_01 flex flex-col h-full items-start justify-center m-auto p-[43px] md:px-10 sm:px-5 w-full">
            <div className="bg-blue_gray-700 h-[3px] md:ml-[0] ml-[233px] mt-2 rounded-[1px] w-[11%]"></div>
            <div className="bg-blue_gray-700 h-[3px] md:ml-[0] ml-[233px] mt-[5px] rounded-[1px] w-[11%]"></div>
            <div className="bg-blue_gray-700 h-[3px] md:ml-[0] ml-[233px] my-1.5 rounded-[1px] w-[11%]"></div>
          </div>
          <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-center left-[10%] my-auto w-[59%]">
            <Img
              className="h-[90px] md:h-auto object-cover w-[90px]"
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
              fontFamily: "Cairo",
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
          className="flex flex-col items-center justify-start mt-4 pt-2 w-full"
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
                <Line className="bg-deep_purple-600 h-[50px] rounded-[3px] w-1.5" />
              </>
            }
            suffix={
              <Text className="bg-light_blue-300 flex font-bold font-cairo h-[29px] items-center justify-center my-2.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]">
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
          >
            <Text>Contact</Text>
            <Button className="bg-pink-400 cursor-pointer font-bold font-cairo leading-[normal] min-w-[63px] py-1 rounded-[17px] text-center text-sm text-white-A700">
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
        </Menu>
        <div className="h-[203px] md:h-[328px] ml-12 md:ml-[0] mr-[52px] mt-[125px] relative w-[72%]">
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
          className="md:ml-[0] mt-[46px] mx-12 text-base text-blue_gray-700 w-[73%] sm:w-full"
          size="txtCairoBold16Bluegray700"
        >
          Kleon Clean Admin Dashboard
        </Text>
        <Text
          className="mb-[73px] ml-12 md:ml-[0] mr-[52px] mt-1.5 text-blue_gray-700 text-sm w-[72%] sm:w-full"
          size="txtCairoRegular14"
        >
          Made with ♥ by Peterdraw
        </Text>
      </Sidebar>
    </>
  );
};

Sidebar5.defaultProps = {};

export default Sidebar5;
