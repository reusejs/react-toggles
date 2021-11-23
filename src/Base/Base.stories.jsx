import React from "react";
import Base from "./index";

export default {
  title: "Toggles/Base",
  component: Base,
};

const Template = (args) => <Base {...args} />;

export const Default = Template.bind({});

Default.args = {

};

export const WithLabel = Template.bind({});

WithLabel.args = {
  label: () => {
    return <>
      <span className="text-sm font-medium text-gray-900">
        Annual billing{" "}
      </span>
      <span className="text-sm text-gray-500">(Save 10%)</span>
    </>
  }
};


export const Blue = Template.bind({});

Blue.args = {
  enabledClasses: 'bg-blue-600'
};


export const WithLabelAndDescription = Template.bind({});

WithLabelAndDescription.args = {
  label: 'Available to hire',
  description: 'Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.',
  labelClasses: 'text-sm font-medium text-gray-900',
  reverse: true,
  passive: true,
};