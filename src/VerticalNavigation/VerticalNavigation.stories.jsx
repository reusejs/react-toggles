import React from "react";
import VerticalNavigation from "./index";
import { BriefcaseIcon, CogIcon, HomeIcon } from "@heroicons/react/outline";

export default {
  title: "Navigations/VerticalNavigation",
  component: VerticalNavigation,
};

const Template = (args) => <VerticalNavigation {...args} />;
export const Default = Template.bind({});

Default.args = {
  navigation: [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Security", href: "/security", icon: HomeIcon },
    { name: "Password", href: "/password", icon: BriefcaseIcon },
    { name: "Profile", href: "/profile", icon: CogIcon },
  ],
  router: { asPath: "/" },
  // LinkComponent: MyLink,
  // linkStyle: "text-purple-600",
  // activeLinkStyle: "bg-red-50 red-purple-600 text-red-600",
  // iconStyle: "",
  // activeIconStyle: "",
};
