import React from 'react';

import { Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";

import styles from "./markdown.module.css";

const renderOptions = {
  skipHtml: true,
  components: {
    a: ({ children, href }) => {
      if (/^https?:/.test(href)) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <span>{children}</span>
          </a>
        );
      } else {
        return (
          <Link to={href}>
            <span>{children}</span>
          </Link>
        );
      }
    },
    h1: ({ children, level }) => <h4 level={level}>{children}</h4>,
    h2: ({ children, level }) => <h5 level={level}>{children}</h5>,
    h3: ({ children, level }) => <h6 level={level}>{children}</h6>,
    h4: ({ children, level }) => <h6 level={level}>{children}</h6>,
    h5: ({ children, level }) => <h6 level={level}>{children}</h6>,
    h6: ({ children, level }) => <h6 level={level}>{children}</h6>
  }
};

export default function MarkdownViewer({ data }) {
  return (
    <div className={styles.viewer}>
      <ReactMarkdown {...renderOptions}>{data}</ReactMarkdown>
    </div>
  );
}
