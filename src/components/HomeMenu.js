import React from "react";
import MenuItem from "./MenuItem";
import SectionHeader from "./SectionHeader";

const HomeMenu = () => {
	return (
		<section className="section-container">
			<div className="flex justify-between items-center">
				<img
					className="w-1/3 md:w-1/5"
					src="/onions.png"
					alt="onions"
				/>{" "}
				<SectionHeader
					subHeader={"Check out"}
					mainHeader={"Menu"}
				/>
				<img
					className="w-1/3 md:w-1/5"
					src="/tomatoes.png"
					alt="tomatoes"
				/>
			</div>

			<div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
			</div>
		</section>
	);
};

export default HomeMenu;
