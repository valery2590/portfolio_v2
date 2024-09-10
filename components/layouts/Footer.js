import { Switch } from "@headlessui/react";
import React from "react";

const Footer = ({enabled, setEnabled}) => {
    
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-switch-off" : "bg-switch-on"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};

export default Footer;
