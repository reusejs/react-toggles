import React from "react";
import "../tailwind.css";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Topbar = function ({
  logo = "",
  navigation = [],
  userActionComponent = "",
  LinkComponent = (props) => {
    let { href, children, ...rest } = props;
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  },
  ...props
}) {
  return (
    <Disclosure
      as="nav"
      className={props.mainWrapperClasses || "bg-white dark:bg-gray-800 shadow"}
    >
      {({ open }) => (
        <>
          <div
            className={props.webWrapperClasses || "w-full px-2 sm:px-6 lg:px-8"}
          >
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-gray-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center h-full sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div
                    className={
                      "h-8 w-auto font-bold text-2xl tracking-wide dark:text-white" ||
                      props.logoStyles
                    }
                  >
                    {/* logo can be text or img or svg */}
                    {logo}
                  </div>
                </div>
                <div className="hidden h-full sm:block sm:ml-6">
                  <div className="flex h-full items-center space-x-4">
                    {navigation.map((item) => (
                      <LinkComponent
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-b-2 border-solid border-blue-400 dark:border-gray-100  dark:text-white"
                            : "text-gray-500 dark:text-gray-200 hover:text-black dark:hover:text-white",
                          "px-3 py-2 text-sm font-medium h-full flex items-center"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </LinkComponent>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {userActionComponent}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, i) => (
                <LinkComponent
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-50 dark:bg-gray-900 dark:text-white"
                      : "text-gray-500 hover:bg-gray-50 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </LinkComponent>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Topbar;
