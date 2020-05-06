import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let O_Menubar = udfComponents.O_Menubar;

export default {
  title: "Organisms/O_Menubar",
  component: O_Menubar
};

const leftSideItems = [
  {
    type: "logo",
    logoUrl:
      "https://cdn-images-1.medium.com/fit/c/64/64/1*m2kgpFWBwJZ9vRxXkZTHxA.png",
    url: "/home"
  }
];

const rightSideItems = [
  {
    type: "button",
    text: "About",
    url: "/about"
  },
  {
    type: "button",
    text: "New",
    action: "openDropdown",
    dropdownItems: [
      {
        text: "Item 1",
        url: "/item1"
      },
      {
        text: "Item 2",
        url: "/item1"
      },
      {
        text: "Item 3",
        url: "/item1"
      }
    ]
  },
  {
    type: "avatar",
    userName: "Danila Timofeev",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/200px-Cat03.jpg",
    url: ""
  }
];

export const Generic = () => (
  <O_Menubar leftSideItems={leftSideItems} rightSideItems={rightSideItems} />
);
