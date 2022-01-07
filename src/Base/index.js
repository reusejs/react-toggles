import React, { useEffect } from "react";
import "../tailwind.css";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Base = ({
  label = null,
  description = null,
  defaultValue = false,
  onChange = () => {},
  ...props
}) => {
  const [enabled, setEnabled] = useState(defaultValue);

  useEffect(() => {
    onChange(enabled);
  }, [enabled]);

  useEffect(() => {
    setEnabled(defaultValue);
  }, [defaultValue]);

  return (
    <Switch.Group
      as="div"
      className={classNames(
        "flex items-center",
        props.reverse ? " flex-row-reverse" : ""
      )}
    >
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled
            ? props.enabledClasses || "bg-indigo-600"
            : props.disabledClasses || "bg-gray-200",
          props.focusRingClasses || "focus:ring-indigo-500",
          props.focusClasses ||
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
          props.sizeClasses || "h-6 w-11",
          props.borderClasses || "border-2 border-transparent",
          "relative inline-flex flex-shrink-0 rounded-full cursor-pointer transition-colors ease-in-out duration-200"
        )}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            props.circleSizeClasses || "h-5 w-5",
            props.circleColorClasses || "bg-white",
            "pointer-events-none inline-block rounded-full shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
      <span className="flex-grow flex flex-col">
        {label && (
          <Switch.Label
            as="span"
            className={classNames(props.labelClasses || "ml-3")}
            passive={props.passive}
          >
            {label}
          </Switch.Label>
        )}
        {description && (
          <Switch.Description
            as="span"
            className={classNames(
              props.descriptionClasses || "text-sm text-gray-500"
            )}
          >
            {description}
          </Switch.Description>
        )}
      </span>
    </Switch.Group>
  );
};

export default Base;
