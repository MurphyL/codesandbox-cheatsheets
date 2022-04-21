import React, { memo, useState, useMemo, Fragment } from "react";

import { selectorFamily, useRecoilValue } from "recoil";

import { Helmet } from "react-helmet-async";

import { Masonry } from "masonic";

import axios from "axios";

import StatusView from "../../plug/status/status.module";

import MarkdownViewer from "../../plug/markdown/markdown.module";

import styles from "./cheatsheet.module.css";

const doAjax = selectorFamily({
  key: "ajax-request",
  get: (url) => async () => {
    try {
      const { status, data } = await axios.get(url);
      // console.log(status, data, headers);
      const contentStatus = status === 200;
      return [contentStatus, contentStatus ? data : "资源（" + url + "）请求出错"];
    } catch (e) {
      return [false, e.message];
    }
  }
});

const MasonryCard = memo(({ data: { group, name, url } }) => {
  const [status, payload] = useRecoilValue(doAjax(url));
  return (
    <div className={styles.masonry_item} data-group={group}>
      {status ? (
        <Fragment>
          {name && <h3>{name}</h3>}
          <MarkdownViewer data={payload} />
        </Fragment>
      ) : (
        <StatusView code={500} message={"数据加载错误：" + payload} />
      )}
    </div>
  );
});

MasonryCard.displayName = "MasonryCard";

const CheatSheet = ({ unique, title, icon, docs, prepends, appends }) => {
  const [excludes] = useState(null);
  const { categorys, items } = useMemo(() => {
    const categorys = [];
    const items = [];
    // 前置模块
    if (prepends && Array.isArray(prepends)) {
      for (let { unique, title, docs } of prepends) {
        if (unique && title) {
          categorys.push([unique, title]);
        }
        if (Array.isArray(excludes) && excludes.includes(unique)) {
          continue;
        }
        Object.entries(docs || []).forEach(([name, url]) => {
          items.push({ group: unique, name, url });
        });
      }
    }
    // 文档模块
    if (docs) {
      if (unique && title) {
        categorys.push([unique, title]);
      }
      if (!Array.isArray(excludes) || !excludes.includes(unique)) {
        Object.entries(docs).forEach(([name, url]) => {
          items.push({ group: unique, name, url });
        });
      }
    }
    // 后置模块
    if (appends && Array.isArray(appends)) {
      for (let item of appends) {
        if (!item) {
          continue;
        }
        const { unique, title, docs } = item;
        if (unique && title) {
          categorys.push([unique, title]);
        }
        if (Array.isArray(excludes) && excludes.includes(unique)) {
          continue;
        }
        Object.entries(docs || []).forEach(([name, url]) => {
          items.push({ group: unique, name, url });
        });
      }
    }
    return { categorys, items };
  }, [title, unique, excludes, docs, prepends, appends]);
  return (
    <div className={`${styles.root} fadeIn`}>
      <Helmet>
        <title>
          {title || "未命名模块"} - {process.env.REACT_APP_TITLE}
        </title>
        {icon && <link rel="shortcut icon" href={icon} />}
      </Helmet>
      {Array.isArray(categorys) && categorys.length > 0 && (
        <div className={styles.bar}>
          <div className={styles.filter}>
            {categorys.map(([key, name], index) => (
              <span className={styles.filter_item} key={index} data-group={key}>
                <span>{name}</span>
              </span>
            ))}
          </div>
          <div className={styles.search}>
            <label htmlFor="box">
              <input id="box" type="search" placeholder="搜索" />
            </label>
          </div>
        </div>
      )}
      <div className={styles.masonry}>
        <Masonry columnCount={3} rowGutter={20} columnGutter={10} items={items} render={MasonryCard} />
      </div>
    </div>
  );
};

export default memo(CheatSheet);
