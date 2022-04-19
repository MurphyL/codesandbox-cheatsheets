import { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";

import Input from "../../plug/form-item/form-item-input/form-item-input.module";
import Select from "../../plug/form-item/form-item-select/form-item-select.module";

import styles from "./package-finder.module.css";

const repositories = [
  {
    find: () => "https://mvnrepository.com/",
    name: "Maven"
  },
  {
    find: () => "https://www.npmjs.com/",
    name: "Node.js"
  }
];

export default function PackageFinder() {
  const [current, setCurrent] = useState(repositories[0]);
  return (
    <Fragment>
      <Helmet>
        <title>Package Finder - {process.env.REACT_APP_TITLE}</title>
      </Helmet>
      <div className={`${styles.root} fadeIn`}>
        <div className={styles.bar}>
          <Select
            multi={false}
            value={current}
            options={repositories}
            onChange={(value) => {
              setCurrent(value);
            }}
            render={(option) => (
              <Fragment>
                <span>{option.name}</span>
              </Fragment>
            )}
          />
          <Input style={{ width: "320px" }} />
        </div>
      </div>
    </Fragment>
  );
}
