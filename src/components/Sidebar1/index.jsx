import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Img } from "components";

const Sidebar1 = (props) => {
  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_dashboard1.svg"
          alt="dashboardOne"
        />
      ),
    },
    { label: <Img className="h-7 w-7" src="images/img_mail.svg" alt="mail" /> },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_comment1.svg"
          alt="commentOne"
        />
      ),
    },
    { label: <Img className="h-7 w-7" src="images/img_grid.svg" alt="grid" /> },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_contact1.svg"
          alt="contactOne"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_calendarsilhouette.svg"
          alt="calendarsilhoue"
        />
      ),
    },
    { label: <Img className="h-7 w-7" src="images/img_user.svg" alt="user" /> },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_invoice1.svg"
          alt="invoiceOne"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-7 w-7"
          src="images/img_setting1.svg"
          alt="settingOne"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-7 text-blue_gray-700 w-7"
          src="images/img_setting1_deep_purple_600.svg"
          alt="settingOne_One"
        />
      ),
    },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-[100px] md:h-auto mt-1 mx-auto object-cover w-[100px]"
          src="images/img_logo2transparent.png"
          alt="logo2transparen"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              paddingTop: "22px",
              flexDirection: "column",
              backgroundColor: "#15132b",
              paddingLeft: "22px",
              paddingRight: "22px",
              [`&:hover, &.ps-active`]: {
                color: "#6418c3",
                backgroundColor: "#15132bff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mt-9 pt-[11px] w-full"
        >
          <div className="flex flex-col gap-[39px] items-center justify-start pb-[11px] w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
          <Img
            className="h-[50px] mt-[39px]"
            src="images/img_settings_gray_900_01.svg"
            alt="settings"
          />
          <div className="flex flex-col gap-[-50px] items-center justify-start mt-[39px] pb-[11px] w-full">
            {sideBarMenu1?.map((menu, i) => (
              <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
        </Menu>
        <div className="h-[74px] mb-[77px] overflow-hidden relative w-full">
          <div className="w-full h-full absolute bg-undefined"></div>
          <div
            className="h-full absolute bg-deep_purple_600  rounded-[3px]"
            style={{ width: "4%" }}
          ></div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
