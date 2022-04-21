import React, { Fragment } from 'react';

import axios from 'axios';

import { selector, useRecoilValue } from "recoil";

import styles from './bookmark.module.css';

const bookmarkQuery = selector({
    key: 'bookmark-query',
    get: () => axios.get('/api/collection/links')
        .then(({ status, data }) => {
            const contentStatus = status === 200;
            return [contentStatus, contentStatus ? data : "书签数据请求出错"];
        }).catch(e => {
            return [false, e.message];
        })
});

export default function Bookmark() {
    const [bookmarkStatus, bookmarks] = useRecoilValue(bookmarkQuery);
    console.log(bookmarkStatus, bookmarks);
    return bookmarkStatus && bookmarks ? (
        <div className={styles.root}>
            {bookmarks.login && (
                <Fragment>
                    <div>
                        <input />
                    </div>
                    <div>
                        <span>管理</span>
                        <span>新增</span>
                    </div>
                </Fragment>
            )}
            {(bookmarks.data || []).map((bookmark, index) => (
                <div key={index}>
                    <a href={bookmark.href} target="_blank">
                        <span>{bookmark.label || '未命名'}</span>
                    </a>
                </div>
            ))}
        </div>
    ) : (
        <div>{ bookmarks }</div>
    );
}