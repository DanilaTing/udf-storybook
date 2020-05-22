import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let M_SearchField = udfComponents.M_SearchField;

export default {
  title: "Molecules/M_SearchField",
  component: M_SearchField
};

const props = {
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
  ]
};

export const Initial = () => <M_SearchField {...props} />;
