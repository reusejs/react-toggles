import React, { Fragment } from "react";
import "../tailwind.css";
import { XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DefaultLink = (props) => {
  let { href, children, ...rest } = props;
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

const Sidebar = function ({
  logo = "",
  sidebarOpen = false,
  onPress,
  navigation = [],
  secondaryNavigation = [],
  router = { asPath: "/" },
  linkStyle,
  activeLinkStyle,
  iconStyle,
  activeIconStyle,
  LinkComponent = DefaultLink,
}) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
          onClose={() => onPress(true)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600"
                    onClick={() => onPress(false)}
                  >
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 px-4 flex items-center">
                <h3 className="h-8 w-auto font-bold text-2xl tracking-wide">
                  {logo}
                </h3>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="h-full flex flex-col">
                  <div className="space-y-1">
                    {navigation &&
                      navigation.map((item, i) => (
                        <LinkComponent
                          key={`nav1${i}`}
                          href={item.href}
                          router={router}
                          aria-current={
                            item.href === router.asPath ? "page" : undefined
                          }
                          className={classNames(
                            item.href === router.asPath
                              ? activeLinkStyle ||
                                  "border-l-4 bg-purple-50 border-purple-600 text-purple-600"
                              : linkStyle ||
                                  "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group py-2 px-3 flex items-center text-base font-medium",
                            "group py-2 px-3 flex items-center text-base font-medium"
                          )}
                        >
                          {item.icon && (
                            <item.icon
                              className={classNames(
                                item.href === router.asPath
                                  ? activeIconStyle || "text-purple-500"
                                  : iconStyle ||
                                      "text-gray-400 group-hover:text-gray-500",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                          )}
                          {item.name}
                        </LinkComponent>
                      ))}
                  </div>
                  <div className="mt-auto pt-10 space-y-1">
                    {secondaryNavigation &&
                      secondaryNavigation.map((item, i) => (
                        <LinkComponent
                          key={`secondnav1${i}`}
                          href={item.href}
                          router={router}
                          className={classNames(
                            item.href === router.asPath
                              ? activeLinkStyle ||
                                  "border-l-4 bg-purple-50 border-purple-600 text-purple-600"
                              : linkStyle ||
                                  "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group py-2 px-3 flex items-center text-base font-medium",
                            "group py-2 px-3 flex items-center text-base font-medium"
                          )}
                        >
                          {item.icon && (
                            <item.icon
                              className={classNames(
                                item.href === router.asPath
                                  ? activeIconStyle || "text-purple-500"
                                  : iconStyle ||
                                      "text-gray-400 group-hover:text-gray-500",
                                "mr-3 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                          )}
                          {item.name}
                        </LinkComponent>
                      ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-56 flex flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <nav className="border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
            <div className="flex-shrink-0 px-4 flex items-center">
              <h3 className="h-8 w-auto font-bold text-2xl tracking-wide">
                {logo}
              </h3>
            </div>
            <div className="flex-grow mt-5 flex flex-col">
              <div className="flex-1 space-y-1">
                {navigation &&
                  navigation.map((item, i) => (
                    <LinkComponent
                      key={`nav2${i}`}
                      href={item.href}
                      router={router}
                      aria-current={
                        item.href === router.asPath ? "page" : undefined
                      }
                      className={classNames(
                        item.href === router.asPath
                          ? activeLinkStyle ||
                              "border-l-4 bg-purple-50 border-purple-600 text-purple-600"
                          : linkStyle ||
                              "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group py-2 px-3 flex items-center text-base font-medium",
                        "group py-2 px-3 flex items-center text-base font-medium"
                      )}
                    >
                      {item.icon && (
                        <item.icon
                          className={classNames(
                            item.href === router.asPath
                              ? activeIconStyle || "text-purple-500"
                              : iconStyle ||
                                  "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                      )}
                      {item.name}
                    </LinkComponent>
                  ))}
              </div>
            </div>
            <div className="flex-shrink-0 block w-full">
              {secondaryNavigation &&
                secondaryNavigation.map((item, i) => (
                  <LinkComponent
                    key={`secondnav2${i}`}
                    href={item.href}
                    router={router}
                    className={classNames(
                      item.href === router.asPath
                        ? activeLinkStyle ||
                            "border-l-4 bg-purple-50 border-purple-600 text-purple-600"
                        : linkStyle ||
                            "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group py-2 px-3 flex items-center text-base font-medium",
                      "group py-2 px-3 flex items-center text-base font-medium"
                    )}
                  >
                    {item.icon && (
                      <item.icon
                        className={classNames(
                          item.href === router.asPath
                            ? activeIconStyle || "text-purple-500"
                            : iconStyle ||
                                "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                    )}
                    {item.name}
                  </LinkComponent>
                ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
