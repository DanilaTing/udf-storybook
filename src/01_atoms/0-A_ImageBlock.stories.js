import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_ImageBlock = udfComponents.A_ImageBlock;

export default {
  title: "Atoms/A_ImageBlock",
  component: A_ImageBlock
};

export const Square = () => (
  <A_ImageBlock
    url="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41583-019-0149-x/MediaObjects/41583_2019_149_Figa_HTML.jpg"
    proportions="square"
  />
);

export const Rect12 = () => (
  <A_ImageBlock
    url="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41583-019-0149-x/MediaObjects/41583_2019_149_Figa_HTML.jpg"
    proportions="rect12"
  />
);

export const Rect32 = () => (
  <A_ImageBlock
    url="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41583-019-0149-x/MediaObjects/41583_2019_149_Figa_HTML.jpg"
    proportions="rect32"
  />
);

const sizesPx = {
  width: "300px",
  height: "400px"
};

export const sizes = () => (
  <A_ImageBlock
    sizes={sizesPx}
    url="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41583-019-0149-x/MediaObjects/41583_2019_149_Figa_HTML.jpg"
  />
);
