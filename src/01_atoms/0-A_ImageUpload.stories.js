import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_ImageUpload = udfComponents.A_ImageUpload;

export default {
  title: "Atoms/A_ImageUpload",
  component: A_ImageUpload
};

const uploadedProps = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/200px-Cat03.jpg"
};
export const Initial = () => <A_ImageUpload />;
export const Uploaded = () => <A_ImageUpload {...uploadedProps} />;
