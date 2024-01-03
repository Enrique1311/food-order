import React from "react";

const SectionHeader = ({ subHeader, mainHeader }) => {
	return (
		<div className="text-center">
			<h3 className="text-gray_color uppercase font-semibold leading-3">
				{subHeader}
			</h3>
			<h2 className="text-red_color font-bold text-4xl italic">{mainHeader}</h2>
		</div>
	);
};

export default SectionHeader;
