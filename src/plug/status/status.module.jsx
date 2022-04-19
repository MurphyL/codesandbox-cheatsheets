import { useMemo } from "react";

import styles from "./status.module.css";

const STATUS = {
  2: ["OK", "成功"],
  4: ["NOT FOUND", "指定的资源不存在"],
  5: ["ERROR", "发生未知错误"]
};

export default function StatusView({ code = 500, message: customMessage }) {
  const [text, message] = useMemo(() => {
    const [statusText, defaultMessage] = STATUS[Math.round(code / 100)] || STATUS[4];
    return [statusText, customMessage || defaultMessage];
  }, [code, customMessage]);
  return (
    <div className={styles.root}>
      <div>
        {text} - {message}
      </div>
    </div>
  );
}

export function Loading({ message = "Loading..." }) {
  return (
    <div className={`${styles.root} fadeOut`}>
      <div>{message}</div>
    </div>
  );
}
