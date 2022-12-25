import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layouts";
import Calendar from "./calendar";
import { Dashboard } from "./dashboard";
import Login from "./login";
import Project from "./project";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/Project" element={<Project />} />
      </Route>
    </Routes>
  );
};

export default Router;
