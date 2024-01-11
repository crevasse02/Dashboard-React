import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Attendance from "../views/Panels/Attendance";
import Dashboard from "../views/dashboard";
import Setting from "../views/Panels/Setting";
import Help from "../views/Panels/Help";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const LinkRoutes = () => {
  return (
    <React.Fragment>
      <Router>
      <div>
        <Dashboard />
        <div>
          <Routes>
            <Route path="/home" element={<Attendance />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<Attendance />} />
          </Routes>
        </div>
      </div>
    </Router>
    </React.Fragment>
  );
};

export default LinkRoutes;
