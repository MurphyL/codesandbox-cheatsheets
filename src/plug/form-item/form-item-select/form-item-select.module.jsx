import React, { useState, memo, Fragment } from "react";

import classNames from "classnames";

import formItem from "../form-item.module.css";

import styles from "./form-item-select.module.css";

const Select = memo(({ options = [], value: selectedValue, render, onChange, multi = false, placeholder = "Select a item" }) => {
  const [selected, setSelected] = useState(multi ? {} : selectedValue || 0);
  const extraClasses = {
    [styles.value]: selectedValue !== undefined,
    [styles.placeholder]: selectedValue === undefined
  };
  return (
    <div className={classNames(formItem.root, styles.root)}>
      <div className={classNames(styles.input, extraClasses)}>
        <Fragment>{render(selected, -1) || placeholder}</Fragment>
      </div>
      <div className={styles.options}>
        {options.map((value, index) => {
          return (
            typeof render === "function" && (
              <div
                className={classNames(styles.option_item, {
                  [styles.selected]: multi ? selected[index] !== undefined : value === selected
                })}
                key={index}
                data-index={index}
                onClick={() => {
                  if (multi) {
                    console.log("muilt select | no impl");
                  } else {
                    setSelected(value);
                    if (typeof onChange) {
                      onChange(value);
                    }
                  }
                }}
              >
                {render(value, index)}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
});

Select.displayName = "Select";

export default Select;
