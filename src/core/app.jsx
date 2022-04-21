import React, { Suspense } from "react";

import { RecoilRoot } from "recoil";

import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";


import { Loading } from "../plug/status/status.module";

// import Layout from "../plug/site-layout/site-layout.module";

import Authorizer from "../view/authorizer/authorizer.module";

import Bookmark from "../view/bookmark/bookmark.module";
import CheatSheet from "../view/cheatsheet/cheatsheet.module";

import PackageFinder from "../view/package-finder/package-finder.module";

import cheatsheets from "../json/cheatsheets.json";

const convert = (cheatsheets = [], includes) => {
  if (Array.isArray(includes) && includes.length > 0) {
    return includes.map((item) => {
      if (typeof item === "string") {
        return cheatsheets.find(({ unique }) => item === unique);
      } else {
        const [title, url] = item;
        return { docs: { [title]: url } };
      }
    });
  } else {
    return null;
  }
};

export default function App() {
  return (
    <HelmetProvider>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route
                  index={true}
                  element={
                    <ul>
                      {cheatsheets.map(({ unique, title }, index) => (
                        <li key={index}>
                          <Link to={`/cheatsheets/${unique}`}>{title || unique}</Link>
                        </li>
                      ))}
                    </ul>
                  }
                />
                <Route path="/login" element={<Authorizer />} />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/package/finder" element={<PackageFinder />} />
                {cheatsheets.map(({ unique, prepends, appends, ...extra }, index) => {
                  const options = {
                    unique,
                    ...extra,
                    prepends: convert(cheatsheets, prepends),
                    appends: convert(cheatsheets, appends)
                  };
                  return <Route key={index} path={`/cheatsheets/${unique}`} element={<CheatSheet {...options} />} />;
                })}
              </Route>
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </RecoilRoot>
    </HelmetProvider>
  );
}
