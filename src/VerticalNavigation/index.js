import React from "react";
import "../tailwind.css";

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

const VerticalNavigation = function ({
  navigation = [],
  router = { asPath: "/" },
  linkStyle,
  activeLinkStyle,
  iconStyle,
  activeIconStyle,
  LinkComponent = DefaultLink,
}) {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="w-56 flex flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        {/* web vertical navigation */}
        <nav className="pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
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
                        ? activeLinkStyle || "bg-purple-50 text-purple-600"
                        : linkStyle ||
                            "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group py-2 px-3 flex items-center text-base font-medium",
                      "group py-2 px-3 flex rounded-md items-center text-base font-medium"
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
        </nav>
      </div>
    </div>
  );
};

export default VerticalNavigation;
