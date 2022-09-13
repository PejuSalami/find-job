import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddJob from "./pages/addJob";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="addJob" element={<AddJob />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

//ReactDOM.render(
//<React.StrictMode>
// <App />
//</React.StrictMode>,
//document.getElementById("root")
//);
//root.render(
//<BrowserRouter>
//  <App />
//  </BrowserRouter>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
