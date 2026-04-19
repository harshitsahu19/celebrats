import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import Service from "../pages/services/service";
import AllServices from "../pages/services/allServices";

const Approutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/service" element={<AllServices />} />
				<Route path="/service/:slug" element={<Service />} />
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</Router>
	);
};

export default Approutes;
