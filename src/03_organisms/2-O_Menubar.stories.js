import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let O_Menubar = udfComponents.O_Menubar;

export default {
  title: "Organisms/O_Menubar",
  component: O_Menubar
};

const props = {
  leftSideItems: [
    {
      component: "A_Logo",
      props: {
        logoUrl:
          "https://cdn-images-1.medium.com/fit/c/64/64/1*m2kgpFWBwJZ9vRxXkZTHxA.png",
        url: "/home"
      }
    },
    {
      component: "M_SearchField",
      props: {
        placeholder: "Search",
        options: [
          {
            name: "Option one",
            value: 1,
            callback: ""
          },
          {
            name: "Option two",
            value: 2,
            callback: ""
          },
          {
            name: "Option three",
            value: 3,
            callback: ""
          }
        ],
        text: "Button Text",
        buttonType: "text"
      }
    }
  ],
  rightSideItems: [
    {
      component: "A_TextButton",
      props: {
        text: "About",
        url: "/about"
      }
    },
    {
      component: "M_DropdownButton",
      props: {
        text: "Button Text",
        buttonType: "text",
        options: [
          {
            name: "Option one",
            value: 1,
            callback: ""
          },
          {
            name: "Option two",
            value: 2,
            callback: ""
          },
          {
            name: "Option three",
            value: 3,
            callback: ""
          }
        ]
      }
    },
    {
      component: "A_Avatar",
      props: {
        userName: "Danila Timofeev",
        url: "",
        small: true
      }
    }
  ]
};

export const Generic = () => <O_Menubar {...props} />;
