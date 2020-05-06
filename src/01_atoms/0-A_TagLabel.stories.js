import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_TagLabel = udfComponents.A_TagLabel;

export default {
  title: "Atoms/A_TagLabel",
  component: A_TagLabel
};

export const Initial = () => <A_TagLabel tag="A_Tag" />;
export const Editable = () => <A_TagLabel tag="A_Tag" editable={true} />;
