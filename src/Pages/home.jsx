import React from "react";
import Portal from "../Components/Homepage/portal.jsx";
import Gallery from "../Components/Homepage/gallery.jsx";
import Modal from "../Components/Homepage/modal.jsx";

const home = () => {
	return (
		<>
		<Portal/>
		<Gallery/>
		<Modal/>
		</>
	);
};

export default home;
