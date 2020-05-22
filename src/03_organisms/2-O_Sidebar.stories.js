import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let O_Sidebar = udfComponents.O_Sidebar;

export default {
  title: "Organisms/O_Sidebar",
  component: O_Sidebar
};

const props = {
  header: {
    text: "Sidebar header"
  },
  itemsGroups: [
    {
      id: 1,
      items: [
        {
          id: 1,
          level: "level1",
          selected: false,
          type: "item",
          text: "Sidebar item"
        },
        {
          id: 2,
          level: "level1",
          open: true,
          type: "group",
          text: "Sidebar item",
          items: [
            {
              id: 1,
              level: "level2",
              type: "item",
              text: "Sidebar item",
              selected: true
            },
            {
              id: 2,
              level: "level2",
              type: "item",
              text: "Sidebar item",
              selected: false
            }
          ]
        }
      ]
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          level: "level1",
          selected: false,
          type: "item",
          text: "Sidebar item"
        }
      ]
    }
  ]
};

export const Generic = () => <O_Sidebar {...props} />;
