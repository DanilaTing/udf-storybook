import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_Avatar = udfComponents.A_Avatar;

export default {
  title: "Atoms/A_Avatar",
  component: A_Avatar
};

export const Tiny = () => <A_Avatar userName="Danila" tiny={true} />;
export const TinyImg = () => (
  <A_Avatar
    userName="Danila"
    tiny={true}
    avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/200px-Cat03.jpg"
  />
);
export const Small = () => <A_Avatar userName="Danila" small={true} />;
export const Medium = () => <A_Avatar userName="Danila" medium={true} />;
export const Large = () => (
  <A_Avatar
    userName="Danila"
    large={true}
    avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/200px-Cat03.jpg"
  />
);
