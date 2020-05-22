import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let M_ContentCard = udfComponents.M_ContentCard;

export default {
  title: "Molecules/M_ContentCard",
  component: M_ContentCard
};

const propsHeadingText = {
  heading: "Content card",
  text: "Content card"
};

const propsImageHeadingText = {
  image: {
    url:
      "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41583-019-0149-x/MediaObjects/41583_2019_149_Figa_HTML.jpg",
    proportions: "rect12"
  },
  heading: "Content card",
  text: "Content card"
};

const propsImageHeadingTextButton = {
  image: {
    url:
      "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41583-019-0149-x/MediaObjects/41583_2019_149_Figa_HTML.jpg",
    proportions: "rect12"
  },
  heading: "Content card",
  text: "Content card",
  button: {
    component: "A_Button",
    props: {
      text: "Button text"
    }
  }
};

export const HeadingText = () => <M_ContentCard {...propsHeadingText} />;
export const ImageHeadingText = () => (
  <M_ContentCard {...propsImageHeadingText} />
);
export const ImageHeadingTextButton = () => (
  <M_ContentCard {...propsImageHeadingTextButton} />
);
