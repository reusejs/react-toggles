import React from "react";
import Sidebar from "./index";
import {
  BriefcaseIcon,
  CogIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

export default {
  title: "Navigations/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo: "Teurons",
  sidebarOpen: true,
  onPress: () => {
    alert("I am clicked");
  },
  navigation: [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Security", href: "/security", icon: HomeIcon },
    { name: "Password", href: "/password", icon: BriefcaseIcon },
    { name: "Profile", href: "/profile", icon: CogIcon },
  ],
  secondaryNavigation: [
    { name: "Help", href: "/help", icon: QuestionMarkCircleIcon },
    { name: "Logout", href: "/logout", icon: CogIcon },
  ],
  router: { asPath: "/" },
  // LinkComponent: MyLink,
  // linkStyle: "text-purple-600",
  // activeLinkStyle: "bg-red-50 red-purple-600 text-red-600",
  // iconStyle: "",
  // activeIconStyle: "",
};
