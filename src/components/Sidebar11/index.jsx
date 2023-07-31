import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar11 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-[120px] sm:h-auto object-cover md:w-full"
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
              fontFamily: "Cairo",
              [`&:hover, &.ps-active`]: {
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
                className="h-7 mt-0.5 w-7"
                src="images/img_mail.svg"
                alt="mail"
              />
            }
            label={<Text>Email</Text>}
            suffix={
              <Text className="bg-light_blue-300 flex font-bold font-cairo h-[29px] items-center justify-center my-0.5 rounded-[14px] text-center text-sm text-white-A700 w-[29px]">
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
        <div className="h-[203px] md:h-[262px] md:ml-[0] mt-[59px] mx-[50px] relative w-[72%]">
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
          className="mb-[41px] md:ml-[0] mt-1.5 mx-[50px] text-blue_gray-700 text-sm w-[72%] sm:w-full"
          size="txtCairoRegular14"
        >
          Made with ♥ by Peterdraw
        </Text>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
