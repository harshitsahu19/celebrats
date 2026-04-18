import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/home";

const Approutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</Router>
	);
};

export default Approutes;
