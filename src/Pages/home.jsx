import React from "react";
import Portal from "../Components/Homepage/portal.jsx";
import Gallery from "../Components/Homepage/gallery.jsx";
import Modal from "../Components/Homepage/modal.jsx";
import Pattern from "../Components/Homepage/patterns.jsx";
import Filler from "../Components/Homepage/filler.jsx";
const home = () => {
	return (
		<>
		<Portal/>
		<Gallery/>
		<Modal/>
		<Pattern/>
		<Filler/>
		</>
	);
};

export default home;
