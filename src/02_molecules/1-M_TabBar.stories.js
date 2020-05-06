import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let M_TabBar = udfComponents.M_TabBar;

export default {
  title: "Molecules/M_TabBar",
  component: M_TabBar
};

const tabs = [
  {
    name: "Tab1"
  },
  {
    name: "Tab2"
  },
  {
    name: "Tab3"
  }
];
export const Initial = () => <M_TabBar tabs={tabs} activeTab="Tab1" />;
