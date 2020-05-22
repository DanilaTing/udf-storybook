import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_FileUpload = udfComponents.A_FileUpload;

export default {
  title: "Atoms/A_FileUpload",
  component: A_FileUpload
};

const propsInitial = {
  placeholder: "Upload file"
};

const propsUploaded = {
  placeholder: "Upload file",
  file: {
    name: "2020-02-29_3h34m482020-02-29_3h34m48.wav.asd",
    url: ""
  }
};

export const Initial = () => <A_FileUpload {...propsInitial} />;
export const Uploaded = () => <A_FileUpload {...propsUploaded} />;
