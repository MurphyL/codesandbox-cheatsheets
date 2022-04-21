import React, { memo } from "react";

import classNames from "classnames";

import formItem from "../form-item.module.css";

import styles from "./form-item-input.module.css";

const Input = memo(({ style: customStyle }) => {
  return (
    <div className={classNames(formItem.root, styles.root)} style={customStyle}>
      <input />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
